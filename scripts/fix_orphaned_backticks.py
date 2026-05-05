#!/usr/bin/env python3
"""
Second-pass fix: merge orphaned backtick lines into adjacent code blocks.

After fix_preformatted.py runs, files may have:
  `room description`         <- orphan single-line backtick
  `> `**`command`**          <- orphan prompt line
  ```
  examine output...
  ```

These orphaned lines should be merged into the following code block.

Also converts Spell_list.md from code block to a proper markdown table.
"""

import re
from pathlib import Path

PAGES_DIR = Path(__file__).parent.parent / "docs" / "pages"


def extract_backtick_content(line: str) -> str:
    """Strip surrounding backticks, strip bold markers, return plain text."""
    stripped = line.rstrip("\n").rstrip()
    # Strip outer backticks if present
    if stripped.startswith("`") and stripped.endswith("`") and len(stripped) >= 2:
        stripped = stripped[1:-1]
    # Strip **bold** markers and backticks around them: **`text`** or **text**
    stripped = re.sub(r'\*\*`?([^`*]*)`?\*\*', r'\1', stripped)
    # Strip lone backticks: `text`
    stripped = re.sub(r'`([^`]*)`', r'\1', stripped)
    return stripped


def is_orphan_line(line: str) -> bool:
    """True if line is an orphaned backtick line (not inside a code block)."""
    stripped = line.rstrip("\n").rstrip()
    # Never treat code fence as an orphan
    if re.match(r'^`{3,}', stripped):
        return False
    # Single-line backtick wrap: `...`
    if stripped.startswith("`") and stripped.endswith("`") and len(stripped) >= 2:
        # Not a link-containing line
        if "](." not in stripped and "](/pages" not in stripped:
            return True
    # Prompt lines: `>...` or `> `**`command`**
    if stripped.startswith("`>"):
        return True
    return False


def merge_orphans_into_codeblocks(lines: list) -> tuple[list, int]:
    """Merge orphaned backtick lines that immediately precede code blocks."""
    new_lines = []
    i = 0
    changes = 0
    in_codeblock = False

    while i < len(lines):
        line = lines[i]
        stripped = line.rstrip("\n").rstrip()

        # Track whether we're inside a code block
        if stripped.startswith("```"):
            in_codeblock = not in_codeblock
            new_lines.append(line)
            i += 1
            continue

        if not in_codeblock and is_orphan_line(line):
            # Collect consecutive orphan lines
            orphans = [line]
            j = i + 1
            while j < len(lines):
                next_stripped = lines[j].rstrip("\n").rstrip()
                if is_orphan_line(lines[j]):
                    orphans.append(lines[j])
                    j += 1
                else:
                    break

            # Check if the next non-orphan line is a code block start
            if j < len(lines) and lines[j].rstrip("\n").rstrip() == "```":
                # Merge orphans into the code block
                new_lines.append("```\n")
                for orphan in orphans:
                    content = extract_backtick_content(orphan)
                    new_lines.append(content + "\n")
                # Skip the ``` line, continue with code block body
                j += 1
                changes += 1
                i = j
                continue
            else:
                # No adjacent code block - leave orphans as-is
                new_lines.extend(orphans)
                i = j
                continue

        new_lines.append(line)
        i += 1

    return new_lines, changes


def convert_spell_list_to_table(content: str) -> str:
    """Convert Spell_list.md code block to a proper markdown table."""
    # Extract the main code block content
    match = re.search(r'```\n(.*?)```', content, re.DOTALL)
    if not match:
        return content

    raw = match.group(1)
    lines = raw.splitlines()

    # Parse the spell list
    # Format: "  level  MU_spell  (cost)  Cleric_spell  (cost)"
    # Continuation lines have no level number

    rows = []
    current_level = None
    current_mu = []
    current_cl = []

    for line in lines:
        if not line.strip():
            continue

        # Try to match a line with level number
        m = re.match(r'^\s+(\d+)\s+(.+)', line)
        if m:
            # Save previous level
            if current_level is not None:
                rows.append((current_level, current_mu[:], current_cl[:]))

            current_level = m.group(1)
            rest = m.group(2)
            current_mu = []
            current_cl = []
            _parse_spell_line(rest, current_mu, current_cl)
        else:
            # Continuation line - no level number
            rest = line.strip()
            if rest and current_level is not None:
                _parse_spell_line(rest, current_mu, current_cl)

    if current_level is not None:
        rows.append((current_level, current_mu[:], current_cl[:]))

    if not rows:
        return content

    # Build the table
    table_lines = [
        "| Level | Magic User Spells | Cleric Spells |\n",
        "|-------|-------------------|---------------|\n",
    ]
    for level, mu_spells, cl_spells in rows:
        mu_str = ", ".join(mu_spells) if mu_spells else ""
        cl_str = ", ".join(cl_spells) if cl_spells else ""
        table_lines.append(f"| {level} | {mu_str} | {cl_str} |\n")

    # Check for the special spells code block
    special_match = re.search(r'```\n\s*Special spells:.*?```', content, re.DOTALL)
    special_text = ""
    if special_match:
        # Extract special spells as plain text
        special_raw = special_match.group(0)
        spell_names = re.findall(r'([A-Z][a-z]+(?: [A-Z][a-z]+)*)', special_raw)
        if spell_names:
            special_text = "\n**Special spells:** " + ", ".join(spell_names) + "\n"

    # Replace the code blocks in content
    new_content = content[:match.start()]
    new_content += "".join(table_lines)
    new_content += content[match.end():]

    if special_match:
        # Replace the special spells code block
        new_content = re.sub(r'```\n\s*Special spells:.*?```', special_text.strip(), new_content, flags=re.DOTALL)

    return new_content


def _parse_spell_line(text: str, mu_list: list, cl_list: list):
    """Parse a spell line extracting MU and Cleric spells."""
    # Format: "SpellName  (cost)  SpellName  (cost)"
    # The two columns are roughly split at column 30-35 of the original text
    # Use regex to find spell entries: Name (cost)
    spells = re.findall(r'([A-Za-z][A-Za-z \'-]+?)\s+\((\d+)\)', text)
    if len(spells) >= 2:
        mu_list.append(f"{spells[0][0].strip()} ({spells[0][1]})")
        cl_list.append(f"{spells[1][0].strip()} ({spells[1][1]})")
    elif len(spells) == 1:
        # Need to figure out if it's MU or Cleric based on position
        # Check if there's already content in mu_list that has same count
        # Simple heuristic: if text starts with lots of spaces it might be cleric-only continuation
        leading_spaces = len(text) - len(text.lstrip())
        if leading_spaces > 30 and mu_list:
            # Probably a cleric-only entry on a continuation line
            cl_list.append(f"{spells[0][0].strip()} ({spells[0][1]})")
        else:
            mu_list.append(f"{spells[0][0].strip()} ({spells[0][1]})")
    # Call Familiar has only one column entry


def process_file(filepath: Path) -> int:
    """Process a single file. Returns number of changes made."""
    content = filepath.read_text(encoding="utf-8")

    # Special handling for Spell_list.md
    if filepath.name == "Spell_list.md":
        new_content = convert_spell_list_to_table(content)
        if new_content != content:
            filepath.write_text(new_content, encoding="utf-8")
            return 1
        return 0

    lines = content.splitlines(keepends=True)
    new_lines, changes = merge_orphans_into_codeblocks(lines)

    if changes > 0:
        filepath.write_text("".join(new_lines), encoding="utf-8")

    return changes


def main():
    md_files = sorted(PAGES_DIR.glob("*.md"))
    total_files = 0
    total_changes = 0

    for filepath in md_files:
        changes = process_file(filepath)
        if changes:
            total_files += 1
            total_changes += changes
            print(f"  [fixed] {filepath.name}: {changes} change(s)")

    print(f"\nDone: {total_files} files modified, {total_changes} total changes.")


if __name__ == "__main__":
    main()
