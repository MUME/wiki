import urllib.request
import re
import json

help_sitemap_url = "https://mume.org/help/sitemap.xml"
rules_sitemap_url = "https://mume.org/rules/sitemap.xml"

req = urllib.request.Request(help_sitemap_url, headers={'User-Agent': 'Mozilla/5.0'})
help_xml = urllib.request.urlopen(req).read().decode('utf-8')
help_urls = re.findall(r'<loc>(https://mume\.org/help/[^<]+)</loc>', help_xml)

req_r = urllib.request.Request(rules_sitemap_url, headers={'User-Agent': 'Mozilla/5.0'})
rules_xml = urllib.request.urlopen(req_r).read().decode('utf-8')
rules_urls = re.findall(r'<loc>(https://mume\.org/rules/[^<]+)</loc>', rules_xml)

valid_help_map = {}
for u in help_urls:
    slug = u.replace('https://mume.org/help/', '').strip('/')
    valid_help_map[slug] = u

valid_rules_map = {}
for u in rules_urls:
    slug = u.replace('https://mume.org/rules/', '').strip('/')
    valid_rules_map[slug] = u

sitemap_data = {
    'help': valid_help_map,
    'rules': valid_rules_map
}

with open('scripts/official_sitemap.json', 'w') as f:
    json.dump(sitemap_data, f, indent=2)

print(f"Indexed {len(valid_help_map)} official help URLs and {len(valid_rules_map)} official rules URLs.")
