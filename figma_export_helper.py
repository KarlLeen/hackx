#!/usr/bin/env python3
"""
Figma导出助手 - 简化从Figma导出图片并更新代码的流程
"""
import os
import json
import glob
import re
from pathlib import Path

def create_export_mapping():
    """创建导出映射表，让用户可以手动指定Figma元素对应的文件名"""
    
    # 读取清单
    if os.path.exists('figma_export_list.json'):
        with open('figma_export_list.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
    else:
        print("❌ figma_export_list.json 不存在，请先运行 simple_figma_export.py")
        return
    
    # 创建映射模板
    mapping = {}
    
    # 按类型和文件分组
    by_file = {}
    for item in data.get('images_needed', [])[:50]:  # 限制前50个
        filepath = item['file']
        if filepath not in by_file:
            by_file[filepath] = []
        by_file[filepath].append(item)
    
    # 生成映射
    for filepath, items in by_file.items():
        for item in items:
            key = f"{filepath}:{item['line']}"
            mapping[key] = {
                'file': filepath,
                'line': item['line'],
                'current_code': item['code'],
                'context': item.get('context', ''),
                'suggested_name': item.get('suggested_name'),
                'figma_element': '',  # 用户填写：在Figma中的元素名称或描述
                'exported_path': '',  # 用户填写：导出后的文件路径（相对于public）
            }
    
    # 保存映射文件
    with open('figma_export_mapping.json', 'w', encoding='utf-8') as f:
        json.dump(mapping, f, indent=2, ensure_ascii=False)
    
    print(f"✅ 创建了映射文件: figma_export_mapping.json")
    print(f"📝 包含 {len(mapping)} 个图片映射")
    print("\n💡 使用方法:")
    print("1. 打开 figma_export_mapping.json")
    print("2. 为每个图片填写:")
    print("   - 'figma_element': 在Figma中的元素描述（帮助找到元素）")
    print("   - 'exported_path': 从Figma导出后的文件路径")
    print("3. 运行 python3 apply_figma_mapping.py 自动更新代码")

def main():
    create_export_mapping()

if __name__ == '__main__':
    main()

