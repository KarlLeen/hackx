#!/usr/bin/env python3
"""
应用Figma导出映射，自动更新代码中的图片路径
"""
import os
import json
import re

def apply_mapping():
    """应用映射文件中的更改"""
    
    if not os.path.exists('figma_export_mapping.json'):
        print("❌ figma_export_mapping.json 不存在")
        print("💡 请先运行: python3 figma_export_helper.py")
        return
    
    with open('figma_export_mapping.json', 'r', encoding='utf-8') as f:
        mapping = json.load(f)
    
    # 按文件分组
    files_to_update = {}
    updates_count = 0
    
    for key, value in mapping.items():
        if not value.get('exported_path'):
            continue  # 跳过未填写的映射
        
        filepath = value['file']
        if filepath not in files_to_update:
            files_to_update[filepath] = []
        
        files_to_update[filepath].append({
            'line': value['line'],
            'old_code': value['current_code'],
            'new_path': value['exported_path']
        })
        updates_count += 1
    
    if not updates_count:
        print("⚠️  没有找到需要更新的映射")
        print("💡 请在 figma_export_mapping.json 中填写 'exported_path' 字段")
        return
    
    print(f"📝 准备更新 {updates_count} 个图片路径...")
    
    # 更新文件
    updated_files = []
    for filepath, updates in files_to_update.items():
        if not os.path.exists(filepath):
            print(f"⚠️  文件不存在: {filepath}")
            continue
        
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            
            modified = False
            for update in updates:
                line_num = update['line'] - 1
                if 0 <= line_num < len(lines):
                    old_line = lines[line_num]
                    
                    # 替换路径
                    # 查找 Vector.svg 或 Rectangle 227.png 等
                    if '/Vector.svg' in old_line:
                        new_line = old_line.replace('/Vector.svg', update['new_path'])
                    elif '/Rectangle 227.png' in old_line:
                        new_line = old_line.replace('/Rectangle 227.png', update['new_path'])
                    elif 'Vector.svg' in old_line:
                        new_line = re.sub(r'["\']/Vector\.svg["\']', f'"{update["new_path"]}"', old_line)
                    elif 'Rectangle 227.png' in old_line:
                        new_line = re.sub(r'["\']/Rectangle 227\.png["\']', f'"{update["new_path"]}"', old_line)
                    else:
                        # 尝试更通用的替换
                        new_line = old_line.replace(update['old_code'].split('=')[-1].strip().strip('";'), f'"{update["new_path"]}"')
                    
                    if new_line != old_line:
                        lines[line_num] = new_line
                        modified = True
                        print(f"  ✅ {filepath}:{update['line']} - 更新为 {update['new_path']}")
            
            if modified:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.writelines(lines)
                updated_files.append(filepath)
        except Exception as e:
            print(f"❌ 更新 {filepath} 时出错: {e}")
    
    print(f"\n✅ 已更新 {len(updated_files)} 个文件")
    
    if updated_files:
        print("\n📄 更新的文件:")
        for f in updated_files:
            print(f"  - {f}")
        
        print("\n💡 下一步:")
        print("1. 检查更新的文件是否正确")
        print("2. 确保导出的图片文件存在于 public 目录")
        print("3. 运行本地开发服务器测试")
        print("4. 提交并推送到GitHub")

if __name__ == '__main__':
    apply_mapping()

