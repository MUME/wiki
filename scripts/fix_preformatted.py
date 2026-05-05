#!/usr/bin/env python3
"""
Fix incorrectly rendered preformatted text across the MUME VitePress wiki.

Content classes handled:
  Class 1: Spell/skill learning tables with embedded links → markdown tables
  Class 2/3: ASCII maps and game output blocks → triple backtick code blocks
  Class 4a: Herb.md structured fields → two-column markdown tables
  Class 4b: EquipmentLoadList.md source lists → nested markdown lists
  Class 5: Archive_In_Game_Maps.md garbled maps → un-escape + code blocks
"""

import re
import sys
from pathlib import Path

PAGES_DIR = Path(__file__).parent.parent / "docs" / "pages"

# Herb field labels
HERB_FIELDS = {"Description", "When crushed", "Loads", "Location", "Used in", "NOTE"}


def is_backtick_line(line: str) -> bool:
    """True if line is wrapped in single backticks: `...`"""
    stripped = line.rstrip("\n")
    return stripped.startswith("`") and stripped.endswith("`") and len(stripped) >= 2


def is_class1_line(line: str) -> bool:
    """True if line matches Class 1 pattern: [`Link text`](./File.md)`  number`"""
    return bool(re.match(r'^\[`[^`]+`\]\(\./', line))


def is_class1_header(line: str) -> bool:
    """True if line is the Sessions/Difficulty header: `   Sessions `"""
    stripped = line.rstrip("\n")
    if stripped.startswith("`") and stripped.endswith("`"):
        inner = stripped[1:-1].strip()
        return bool(re.match(r'^(Sessions|Difficulty|session|difficulty)$', inner, re.IGNORECASE))
    return False


def extract_class1_header(line: str) -> str:
    """Extract header text from backtick line."""
    stripped = line.rstrip("\n")
    return stripped[1:-1].strip()


def parse_class1_row(line: str):
    """Parse a Class 1 row into (link_markdown, number) or None."""
    # Pattern: [`Link text`](./File.md)`  number`
    m = re.match(r'^(\[`[^`]+`\]\([^)]+\))`\s*(\d+)`', line.rstrip("\n"))
    if m:
        link_raw = m.group(1)
        number = m.group(2)
        # Convert [`Link text`](./File.md) → [Link text](./File.md)
        link_clean = re.sub(r'\[`([^`]+)`\]', r'[\1]', link_raw)
        return link_clean, number
    return None


def convert_class1_block(lines: list) -> list:
    """Convert Class 1 block (header + rows) to markdown table."""
    # Find header
    header_text = "Sessions"
    result_lines = []
    data_rows = []

    for line in lines:
        if is_class1_header(line):
            header_text = extract_class1_header(line)
        else:
            parsed = parse_class1_row(line)
            if parsed:
                data_rows.append(parsed)
            elif is_class1_line(line):
                # Fallback: try to extract link and number differently
                # e.g. [`Guild`](./Guild.md)` 12`
                m = re.match(r'^(\[`[^`]+`\]\([^)]+\))`\s*(\S+)`', line.rstrip("\n"))
                if m:
                    link_raw = m.group(1)
                    number = m.group(2)
                    link_clean = re.sub(r'\[`([^`]+)`\]', r'[\1]', link_raw)
                    data_rows.append((link_clean, number))

    if not data_rows:
        return lines

    result_lines.append(f"| Guild | {header_text} |\n")
    result_lines.append(f"|-------|{'--------'}|\n")
    for link, number in data_rows:
        result_lines.append(f"| {link} | {number} |\n")

    return result_lines


def extract_backtick_content(line: str) -> str:
    """Strip surrounding backticks from a line."""
    stripped = line.rstrip("\n")
    if stripped.startswith("`") and stripped.endswith("`") and len(stripped) >= 2:
        return stripped[1:-1]
    return stripped


def strip_bold_markers(text: str) -> str:
    """Remove **bold** markers from text."""
    return re.sub(r'\*\*`?([^`*]*)`?\*\*', r'\1', text)


def convert_class23_block(lines: list) -> list:
    """Convert Class 2/3 block to triple backtick code block."""
    result = ["```\n"]
    for line in lines:
        content = extract_backtick_content(line)
        content = strip_bold_markers(content)
        result.append(content + "\n")
    result.append("```\n")
    return result


def is_herb_field_line(line: str) -> bool:
    """True if line matches Herb.md structured field pattern."""
    stripped = line.rstrip("\n")
    if not (stripped.startswith("`") and stripped.endswith("`")):
        return False
    inner = stripped[1:-1]
    for field in HERB_FIELDS:
        if inner.startswith(f" {field}:") or inner.startswith(f"{field}:"):
            return True
    return False


def parse_herb_field(line: str):
    """Parse herb field line into (field_name, value) or None."""
    stripped = line.rstrip("\n")
    inner = stripped[1:-1].strip()
    for field in HERB_FIELDS:
        if inner.startswith(f"{field}:"):
            value = inner[len(field) + 1:].strip()
            return field, value
    return None


def convert_class4a_block(lines: list) -> list:
    """Convert Herb.md field block to two-column markdown table."""
    rows = []
    for line in lines:
        parsed = parse_herb_field(line)
        if parsed:
            field, value = parsed
            # Escape pipe characters in values
            value = value.replace("|", "\\|")
            rows.append((field, value))
        else:
            # Plain backtick line — treat as continuation or skip
            content = extract_backtick_content(line).strip()
            if content and rows:
                # Append to last row's value
                field, prev_value = rows[-1]
                rows[-1] = (field, prev_value + " " + content)

    if not rows:
        return lines

    result = ["| Field | Value |\n", "|-------|-------|\n"]
    for field, value in rows:
        result.append(f"| {field} | {value} |\n")
    return result


def strip_double_backtick_names(text: str) -> str:
    """Strip ``Name`` wiki remnants to plain Name."""
    return re.sub(r'``([^`]+)``', r'\1', text)


def parse_class4b_line(line: str):
    """Parse EquipmentLoadList source line into plain text or (link, text)."""
    stripped = line.rstrip("\n")
    # Remove outer backticks
    if stripped.startswith("`") and stripped.endswith("`"):
        inner = stripped[1:-1]
    else:
        inner = stripped

    # Remove leading ` *`
    inner = re.sub(r'^\s*\*', '', inner).strip()

    # Check for embedded link: `[`Name`](/pages/...)
    # Pattern: [`Name`](/pages/...)
    link_match = re.match(r'^\[`([^`]+)`\]\(([^)]+)\)', inner)
    if link_match:
        link_text = link_match.group(1)
        link_href = link_match.group(2)
        return f"[{link_text}]({link_href})"

    # Strip ``Name`` remnants
    inner = strip_double_backtick_names(inner)
    # Strip trailing whitespace
    inner = inner.rstrip()
    return inner


def convert_class4b_block(lines: list) -> list:
    """Convert EquipmentLoadList source block to nested markdown list."""
    result = []
    for line in lines:
        item = parse_class4b_line(line)
        if item:
            result.append(f"  - {item}\n")
    return result


def is_class4b_line(line: str) -> bool:
    """True if this looks like an EquipmentLoadList source line."""
    stripped = line.rstrip("\n")
    if not (stripped.startswith("`") and stripped.endswith("`")):
        return False
    inner = stripped[1:-1]
    return inner.lstrip().startswith("*")


def contains_link(line: str) -> bool:
    """True if line contains a markdown link."""
    return bool(re.search(r'\[.+?\]\(.+?\)', line))


def process_file(filepath: Path) -> tuple[int, str]:
    """Process a single markdown file. Returns (changes_count, description)."""
    content = filepath.read_text(encoding="utf-8")
    lines = content.splitlines(keepends=True)

    filename = filepath.name
    is_herb = filename == "Herb.md"
    is_equip = filename == "EquipmentLoadList.md"
    is_maps = filename == "Archive_In_Game_Maps.md"

    new_lines = []
    i = 0
    changes = 0

    while i < len(lines):
        line = lines[i]

        # Check if this starts a block of backtick lines
        # Class 1 check: header line or link line
        if is_class1_header(line):
            # Collect class 1 block: header + consecutive class1/backtick link rows
            block = [line]
            j = i + 1
            while j < len(lines) and (is_class1_line(lines[j]) or is_class1_header(lines[j])):
                block.append(lines[j])
                j += 1
            if len(block) >= 2:
                converted = convert_class1_block(block)
                new_lines.extend(converted)
                changes += 1
                i = j
                continue

        if is_class1_line(line):
            # Collect consecutive class1 lines (header may have been missed)
            block = [line]
            j = i + 1
            while j < len(lines) and (is_class1_line(lines[j]) or is_class1_header(lines[j])):
                block.append(lines[j])
                j += 1
            converted = convert_class1_block(block)
            new_lines.extend(converted)
            changes += 1
            i = j
            continue

        # Class 4b: EquipmentLoadList source lines
        if is_equip and is_class4b_line(line):
            block = [line]
            j = i + 1
            while j < len(lines) and is_class4b_line(lines[j]):
                block.append(lines[j])
                j += 1
            converted = convert_class4b_block(block)
            new_lines.extend(converted)
            changes += 1
            i = j
            continue

        # Check for generic backtick lines (Class 2/3 or Class 4a)
        if is_backtick_line(line) and not contains_link(line):
            block = [line]
            j = i + 1
            while j < len(lines) and is_backtick_line(lines[j]) and not contains_link(lines[j]):
                block.append(lines[j])
                j += 1

            # Need at least 2 consecutive lines to convert (single lines stay as inline code)
            if len(block) >= 2:
                if is_herb and all(is_herb_field_line(l) or not l.strip() for l in block):
                    # Class 4a
                    converted = convert_class4a_block(block)
                else:
                    # Class 2/3
                    converted = convert_class23_block(block)
                new_lines.extend(converted)
                changes += 1
                i = j
                continue

        new_lines.append(line)
        i += 1

    if changes > 0:
        filepath.write_text("".join(new_lines), encoding="utf-8")

    return changes, filename


def process_class5(filepath: Path) -> int:
    """Handle Archive_In_Game_Maps.md: un-escape markdown and wrap garbled sections in code blocks."""
    content = filepath.read_text(encoding="utf-8")
    lines = content.splitlines(keepends=True)

    new_lines = []
    i = 0
    changes = 0

    # Pattern: paragraph lines that contain lots of \| \* \~ \# escapes (garbled maps)
    ESCAPE_PATTERN = re.compile(r'\\[|*~#<>_]')

    def is_garbled_map_line(line: str) -> bool:
        """Heuristic: line has 3+ markdown escape sequences."""
        return len(ESCAPE_PATTERN.findall(line)) >= 3

    def unescape_line(line: str) -> str:
        return (line
                .replace(r'\|', '|')
                .replace(r'\*', '*')
                .replace(r'\~', '~')
                .replace(r'\#', '#')
                .replace(r'\<', '<')
                .replace(r'\>', '>')
                .replace(r'\_', '_')
                .replace(r'\[', '[')
                .replace(r'\]', ']'))

    while i < len(lines):
        line = lines[i]
        if is_garbled_map_line(line):
            block = [line]
            j = i + 1
            while j < len(lines) and (is_garbled_map_line(lines[j]) or lines[j].strip() == ""):
                block.append(lines[j])
                j += 1
            # Strip trailing blank lines from block
            while block and block[-1].strip() == "":
                block.pop()

            new_lines.append("```\n")
            for bl in block:
                new_lines.append(unescape_line(bl))
            new_lines.append("```\n")
            changes += 1
            i = j
            continue
        new_lines.append(line)
        i += 1

    if changes > 0:
        filepath.write_text("".join(new_lines), encoding="utf-8")

    return changes


def main():
    md_files = sorted(PAGES_DIR.glob("*.md"))
    total_files = 0
    total_changes = 0

    for filepath in md_files:
        if filepath.name == "Archive_In_Game_Maps.md":
            # Handle Class 5 garbled maps first
            c5 = process_class5(filepath)
            if c5:
                print(f"  [Class 5] {filepath.name}: {c5} garbled block(s) fixed")
                total_files += 1
                total_changes += c5

        changes, name = process_file(filepath)
        if changes:
            print(f"  [converted] {name}: {changes} block(s)")
            total_files += 1
            total_changes += changes

    print(f"\nDone: {total_files} files modified, {total_changes} blocks converted.")


if __name__ == "__main__":
    main()
