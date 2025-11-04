#!/usr/bin/env python3
"""
自动更新代码中的图片路径
这个脚本会：
1. 扫描 public/figma-exported/ 目录中的文件
2. 将代码中的 localhost URL 替换为 public 路径
3. 确保路径大小写正确
"""
import os
import re
import glob
from pathlib import Path

def get_exported_files():
    """获取所有已导出的文件"""
    exported_dir = Path('public/figma-exported')
    if not exported_dir.exists():
        print(f"⚠️  {exported_dir} 目录不存在，请先从Figma导出图片")
        return {}
    
    files = {}
    for file_path in exported_dir.rglob('*'):
        if file_path.is_file():
            # 获取相对于public目录的路径
            rel_path = file_path.relative_to('public')
            files[file_path.name] = f'/{rel_path}'
    
    return files

def find_localhost_urls_in_code():
    """查找代码中所有的 localhost URL"""
    localhost_urls = {}
    tsx_files = glob.glob('src/**/*.tsx', recursive=True)
    
    for filepath in tsx_files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 查找所有 localhost URL
            pattern = r'http://localhost:3845/assets/([^"\']+)'
            matches = re.finditer(pattern, content)
            
            for match in matches:
                full_url = match.group(0)
                filename = match.group(1)
                
                if filename not in localhost_urls:
                    localhost_urls[filename] = {
                        'url': full_url,
                        'files': []
                    }
                
                localhost_urls[filename]['files'].append(filepath)
        except Exception as e:
            print(f"Error processing {filepath}: {e}")
    
    return localhost_urls

def update_file(filepath, replacements):
    """更新文件中的URL"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        updated = False
        
        for old_url, new_path in replacements.items():
            if old_url in content:
                # 替换所有出现的URL
                content = content.replace(old_url, new_path)
                updated = True
        
        if updated:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"❌ Error updating {filepath}: {e}")
        return False

def main():
    print("🔍 扫描已导出的图片文件...")
    exported_files = get_exported_files()
    
    if not exported_files:
        print("\n❌ 没有找到导出的文件")
        print("💡 请先:")
        print("   1. 从Figma导出图片到 public/figma-exported/ 目录")
        print("   2. 确保文件名与原始文件名匹配")
        return
    
    print(f"✅ 找到 {len(exported_files)} 个导出的文件")
    
    print("\n🔍 查找代码中的 localhost URL...")
    localhost_urls = find_localhost_urls_in_code()
    
    if not localhost_urls:
        print("✅ 没有找到需要更新的 localhost URL")
        return
    
    print(f"✅ 找到 {len(localhost_urls)} 个 localhost URL")
    
    # 创建替换映射
    replacements = {}
    matched_count = 0
    
    for filename, url_info in localhost_urls.items():
        # 尝试匹配导出的文件
        if filename in exported_files:
            replacements[url_info['url']] = exported_files[filename]
            matched_count += 1
            print(f"  ✅ {filename} → {exported_files[filename]}")
        else:
            print(f"  ⚠️  {filename} - 未找到对应的导出文件")
    
    if not replacements:
        print("\n❌ 没有找到匹配的文件")
        print("💡 请确保:")
        print("   1. 文件已从Figma导出到 public/figma-exported/ 目录")
        print("   2. 文件名与代码中的文件名完全匹配（包括大小写）")
        return
    
    print(f"\n📝 准备更新 {len(replacements)} 个URL...")
    
    # 更新所有文件
    updated_files = set()
    for filename, url_info in localhost_urls.items():
        if url_info['url'] in replacements:
            for filepath in url_info['files']:
                if update_file(filepath, {url_info['url']: replacements[url_info['url']]}):
                    updated_files.add(filepath)
    
    print(f"\n✅ 已更新 {len(updated_files)} 个文件")
    
    if updated_files:
        print("\n📄 更新的文件:")
        for filepath in sorted(updated_files):
            print(f"  - {filepath}")
    
    # 检查是否还有未更新的 localhost URL
    remaining = find_localhost_urls_in_code()
    if remaining:
        print(f"\n⚠️  还有 {len(remaining)} 个 localhost URL 未更新")
        print("   这些可能是:")
        print("   1. 还没有从Figma导出的图片")
        print("   2. 文件名不匹配的图片")
        print("   3. 需要使用其他方法的图片")

if __name__ == '__main__':
    main()

