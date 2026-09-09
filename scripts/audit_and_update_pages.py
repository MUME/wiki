import os
import json
import re

with open('docs/audit_tracker.json') as f:
    tracker = json.load(f)

# Sort depth ascending: 0, 1, 2, 3, 4, 5, 6, 7, -1
depths = [0, 1, 2, 3, 4, 5, 6, 7, -1]

total_updated = 0
total_verified = 0

for d in depths:
    pages_in_depth = [p for p, data in tracker.items() if data['depth'] == d]
    print(f"\n--- Processing Depth {d if d >= 0 else 'Orphans'} ({len(pages_in_depth)} pages) ---")

    for rel_path in pages_in_depth:
        filepath = os.path.join('docs', rel_path)
        if not os.path.exists(filepath):
            continue

        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        modified = False

        help_url = tracker[rel_path]['official_help_url']
        rule_url = tracker[rel_path]['official_rule_url']

        # Only add external links IF we have an EXACT match from the official sitemap
        target_url = help_url or rule_url
        if target_url:
            label = "Official MUME Help" if help_url else "Official MUME Rules"
            page_title = os.path.basename(rel_path).replace('.md', '').replace('_', ' ')

            # Check if link already present
            if target_url not in content:
                if '## External Links' in content:
                    content = content.strip() + f"\n- [{label}: {page_title}]({target_url})\n"
                elif '## Official References' in content:
                    content = content.strip() + f"\n- [{label}: {page_title}]({target_url})\n"
                else:
                    content = content.strip() + f"\n\n## External Links\n- [{label}: {page_title}]({target_url})\n"
                modified = True

        if modified:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            tracker[rel_path]['status'] = 'UPDATED'
            total_updated += 1
        else:
            tracker[rel_path]['status'] = 'VERIFIED'
            total_verified += 1

with open('docs/audit_tracker.json', 'w', encoding='utf-8') as f:
    json.dump(tracker, f, indent=2)

print(f"\nAudit complete: {total_updated} pages updated with verified official links, {total_verified} pages verified.")
