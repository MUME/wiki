import os
import re
import json
from collections import deque

docs_dir = 'docs'

all_files = set()
for root, dirs, files in os.walk(docs_dir):
    for f in files:
        if f.endswith('.md'):
            rel_path = os.path.relpath(os.path.join(root, f), docs_dir)
            all_files.add(rel_path)

graph = {f: set() for f in all_files}

link_regex = re.compile(r'\[.*?\]\((.*?)\)')
tag_regex = re.compile(r'tags:\s*\n((?:\s*-\s*.*\n)+)')

for rel_src in all_files:
    file_path = os.path.join(docs_dir, rel_src)
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    links = link_regex.findall(content)
    yaml_links = re.findall(r'link:\s*([^\s\n]+)', content)

    all_raw_links = links + yaml_links

    for l in all_raw_links:
        l = l.strip('\"\'')
        if l.startswith('http://') or l.startswith('https://') or l.startswith('#') or l.startswith('mailto:'):
            continue
        l = l.split('#')[0].split('?')[0]
        if not l:
            continue

        if l.startswith('/'):
            target = l.lstrip('/')
        else:
            target = os.path.normpath(os.path.join(os.path.dirname(rel_src), l))

        cand = target if target.endswith('.md') else target + '.md'
        if cand in all_files:
            graph[rel_src].add(cand)

depth = {'index.md': 0}
queue = deque(['index.md'])
while queue:
    curr = queue.popleft()
    for nxt in graph[curr]:
        if nxt not in depth:
            depth[nxt] = depth[curr] + 1
            queue.append(nxt)

# Load official sitemap
with open('scripts/official_sitemap.json') as f:
    official = json.load(f)

help_slugs = official['help']
rules_slugs = official['rules']

tracker = {}

for rel_src in sorted(all_files):
    file_path = os.path.join(docs_dir, rel_src)
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    tags = []
    tag_match = tag_regex.search(content)
    if tag_match:
        tag_lines = tag_match.group(1).strip().split('\n')
        for t in tag_lines:
            t_clean = t.strip().lstrip('-').strip()
            if t_clean:
                tags.append(t_clean)

    page_name = os.path.basename(rel_src).replace('.md', '').lower()

    # Check if page has an EXACT match in official help or rules sitemap
    official_help_url = help_slugs.get(page_name)
    official_rule_url = rules_slugs.get(page_name)

    page_depth = depth.get(rel_src, -1)

    tracker[rel_src] = {
        'depth': page_depth,
        'tags': tags,
        'official_help_url': official_help_url,
        'official_rule_url': official_rule_url,
        'status': 'PENDING'
    }

output_path = os.path.join('docs', 'audit_tracker.json')
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(tracker, f, indent=2)

print(f"Generated {output_path} for {len(tracker)} pages.")
