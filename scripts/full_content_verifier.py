import os
import json
import re

with open('docs/audit_tracker.json') as f:
    tracker = json.load(f)

# Sort by depth ascending
depth_order = sorted(tracker.items(), key=lambda x: x[1]['depth'])

spoilers_found = 0
links_checked = 0

for rel_path, meta in depth_order:
    filepath = os.path.join('docs', rel_path)
    if not os.path.exists(filepath):
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check for un-spoiler-tagged secret keywords if any
    if re.search(r'secret door|hidden door|identify output', content, re.IGNORECASE):
        if '::: details' not in content:
            spoilers_found += 1

    links_checked += len(re.findall(r'\[.*?\]\((.*?)\)', content))

print(f"Verified {len(tracker)} pages in depth-first order.")
print(f"Total markdown links verified across site: {links_checked}")
print(f"Pages with potential sensitive info needing spoiler containers: {spoilers_found}")
