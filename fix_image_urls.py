#!/usr/bin/env python3
"""
Script to help manually fix image URLs.
This script will:
1. Generate a report of all localhost URLs that were replaced
2. Create a mapping file for manual correction
3. Apply the mapping to fix the URLs
"""
import os
import re
import json
import glob
from collections import defaultdict

def extract_localhost_urls_from_git_history():
    """Extract original localhost URLs from git history"""
    import subprocess
    
    # Get the commit before we started fixing
    result = subprocess.run(
        ['git', 'log', '--oneline', '-n', '5'],
        capture_output=True,
        text=True
    )
    
    # Find the commit before fixes
    commits = result.stdout.strip().split('\n')
    before_fix_commit = None
    for commit in commits:
        if 'localhost' in commit.lower() or 'Replace' in commit:
            before_fix_commit = commit.split()[0]
            break
    
    if not before_fix_commit:
        print("Could not find commit with localhost URLs")
        return {}
    
    # Get file content from that commit
    result = subprocess.run(
        ['git', 'show', f'{before_fix_commit}:src/components/Sidebar.tsx'],
        capture_output=True,
        text=True
    )
    
    urls = {}
    if result.returncode == 0:
        # Extract URLs from the old file
        pattern = r'http://localhost:3845/assets/([^"]+\.(svg|png|jpg))'
        matches = re.findall(pattern, result.stdout)
        for match in matches:
            filename = match[0]
            urls[filename] = f"http://localhost:3845/assets/{filename}"
    
    return urls

def find_all_image_urls_in_code():
    """Find all image URLs in current codebase"""
    image_urls = defaultdict(list)
    
    tsx_files = glob.glob('src/**/*.tsx', recursive=True)
    
    for filepath in tsx_files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find all image URLs (both localhost and public directory)
            patterns = [
                (r'http://localhost:3845/assets/([^"]+)', 'localhost'),
                (r'["\'](/[^"\']+\.(svg|png|jpg|jpeg))["\']', 'public'),
            ]
            
            for pattern, url_type in patterns:
                matches = re.finditer(pattern, content)
                for match in matches:
                    url = match.group(0).strip('"\'')
                    if url_type == 'localhost':
                        filename = match.group(1)
                    else:
                        filename = url
                    
                    image_urls[filepath].append({
                        'type': url_type,
                        'url': url,
                        'filename': filename,
                        'line': content[:match.start()].count('\n') + 1
                    })
        except Exception as e:
            print(f"Error processing {filepath}: {e}")
    
    return image_urls

def generate_mapping_template(image_urls):
    """Generate a mapping template file"""
    mapping = {}
    
    # Group by filename to make it easier
    for filepath, urls in image_urls.items():
        for url_info in urls:
            if url_info['type'] == 'public':
                # This is already a public URL, check if it needs fixing
                current_file = url_info['filename']
                # Try to guess what it should be based on context
                mapping[current_file] = {
                    'current': current_file,
                    'suggested': current_file,  # Keep as is by default
                    'file': filepath,
                    'line': url_info['line']
                }
    
    return mapping

def main():
    print("🔍 Analyzing image URLs in codebase...")
    
    # Find all image URLs
    image_urls = find_all_image_urls_in_code()
    
    # Generate report
    report = []
    for filepath, urls in image_urls.items():
        for url_info in urls:
            report.append({
                'file': filepath,
                'line': url_info['line'],
                'type': url_info['type'],
                'url': url_info['url'],
                'filename': url_info['filename']
            })
    
    # Save report to JSON
    with open('image_urls_report.json', 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Found {len(report)} image URLs")
    print(f"📄 Report saved to: image_urls_report.json")
    
    # Create a mapping template
    mapping = {}
    for item in report:
        if item['type'] == 'public':
            key = f"{item['file']}:{item['line']}"
            mapping[key] = {
                'file': item['file'],
                'line': item['line'],
                'current': item['url'],
                'suggested': item['url'],  # User can modify this
                'description': f"Line {item['line']} in {item['file']}"
            }
    
    with open('image_urls_mapping.json', 'w', encoding='utf-8') as f:
        json.dump(mapping, f, indent=2, ensure_ascii=False)
    
    print(f"📝 Mapping template saved to: image_urls_mapping.json")
    print("\n💡 Next steps:")
    print("1. Open image_urls_report.json to see all image URLs")
    print("2. Edit image_urls_mapping.json to specify correct file paths")
    print("3. Run: python3 apply_image_mapping.py to apply the changes")

if __name__ == '__main__':
    main()

