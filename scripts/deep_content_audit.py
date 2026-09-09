import json
import urllib.request
import re
import html

with open('docs/audit_tracker.json') as f:
    tracker = json.load(f)

# Select pages with official help or rule URLs to perform deep content check
matched = {p: d for p, d in tracker.items() if d['official_help_url'] or d['official_rule_url']}

print(f"Total pages with official source URLs to audit: {len(matched)}")

# Sample low-depth pages for deep content audit
low_depth_matched = sorted(matched.items(), key=lambda x: x[1]['depth'])

for p, d in low_depth_matched[:15]:
    url = d['official_help_url'] or d['official_rule_url']
    print(f"\n[Depth {d['depth']}] Auditing {p} against {url}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html_text = urllib.request.urlopen(req).read().decode('utf-8')

        # Simple text extraction from HTML
        clean_text = re.sub(r'<script.*?>.*?</script>', '', html_text, flags=re.DOTALL)
        clean_text = re.sub(r'<style.*?>.*?</style>', '', clean_text, flags=re.DOTALL)
        clean_text = re.sub(r'<[^>]+>', ' ', clean_text)
        clean_text = html.unescape(clean_text)
        lines = [line.strip() for line in clean_text.splitlines() if line.strip()]
        official_text = "\n".join(lines)

        with open('docs/' + p, 'r', encoding='utf-8') as f:
            local_text = f.read()

        print(f"  Official length: {len(official_text)} chars | Local length: {len(local_text)} chars")
    except Exception as e:
        print(f"  Error fetching {url}: {e}")
