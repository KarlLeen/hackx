#!/usr/bin/env python3
"""
Apply the image URL mapping to fix the files
"""
import json
import os

def apply_mapping():
    """Apply the mapping from image_urls_mapping.json"""
    if not os.path.exists('image_urls_mapping.json'):
        print("❌ image_urls_mapping.json not found!")
        print("   Please run fix_image_urls.py first to generate the mapping file.")
        return
    
    with open('image_urls_mapping.json', 'r', encoding='utf-8') as f:
        mapping = json.load(f)
    
    # Group by file
    files_to_update = {}
    for key, value in mapping.items():
        filepath = value['file']
        if filepath not in files_to_update:
            files_to_update[filepath] = []
        files_to_update[filepath].append({
            'line': value['line'],
            'current': value['current'],
            'suggested': value.get('suggested', value['current'])
        })
    
    # Update files
    updated_count = 0
    for filepath, changes in files_to_update.items():
        if not os.path.exists(filepath):
            print(f"⚠️  File not found: {filepath}")
            continue
        
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            
            modified = False
            for change in changes:
                line_num = change['line'] - 1  # Convert to 0-based index
                if 0 <= line_num < len(lines):
                    old_line = lines[line_num]
                    if change['current'] in old_line and change['current'] != change['suggested']:
                        new_line = old_line.replace(change['current'], change['suggested'])
                        lines[line_num] = new_line
                        modified = True
                        print(f"✅ {filepath}:{change['line']} - Updated")
            
            if modified:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.writelines(lines)
                updated_count += 1
        except Exception as e:
            print(f"❌ Error updating {filepath}: {e}")
    
    print(f"\n✅ Updated {updated_count} files")
    print("💡 Please review the changes and commit if satisfied.")

if __name__ == '__main__':
    apply_mapping()

