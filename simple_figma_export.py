#!/usr/bin/env python3
"""
简单的Figma导出工具
这个工具会生成一个清单，列出所有需要从Figma导出的图片
并提供一个简单的映射，让你可以指定导出后的文件名
"""
import json
import os
import glob
import re

def create_simple_export_list():
    """创建简单的导出清单"""
    
    # 查找所有需要图片的代码文件
    tsx_files = glob.glob('src/**/*.tsx', recursive=True)
    
    # 收集所有图片引用
    image_needs = []
    
    for filepath in tsx_files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                lines = content.split('\n')
            
            for i, line in enumerate(lines, 1):
                # 查找错误的占位符
                if '/Vector.svg' in line or '/Rectangle 227.png' in line:
                    # 尝试从上下文推断这是什么图片
                    context = '\n'.join(lines[max(0, i-3):min(len(lines), i+3)])
                    
                    # 推断图片类型
                    img_type = 'unknown'
                    suggested_name = None
                    
                    if 'search' in context.lower() or 'Search' in context:
                        img_type = 'icon'
                        suggested_name = 'icon-search.svg'
                    elif 'arrow' in context.lower() or 'Arrow' in context:
                        img_type = 'icon'
                        suggested_name = 'icon-arrow.svg'
                    elif 'notification' in context.lower() or 'Notification' in context:
                        img_type = 'icon'
                        suggested_name = 'icon-notification.svg'
                    elif 'hero' in context.lower() or 'Hero' in context:
                        img_type = 'image'
                        suggested_name = 'hero-image.png'
                    elif 'hackathon' in context.lower() and 'image' in context.lower():
                        img_type = 'image'
                        suggested_name = 'hackathon-image.png'
                    elif 'line' in context.lower() or 'divider' in context.lower():
                        img_type = 'icon'
                        suggested_name = 'icon-divider.svg'
                    
                    image_needs.append({
                        'file': filepath,
                        'line': i,
                        'code': line.strip(),
                        'type': img_type,
                        'suggested_name': suggested_name,
                        'context': context[max(0, context.find(line)-50):context.find(line)+len(line)+50]
                    })
        except Exception as e:
            print(f"Error: {e}")
    
    return image_needs

def main():
    print("🔍 分析代码，找出需要从Figma导出的图片...")
    
    image_needs = create_simple_export_list()
    
    print(f"✅ 找到 {len(image_needs)} 处需要导出的图片")
    
    # 按类型分组
    by_type = {}
    for item in image_needs:
        img_type = item['type']
        if img_type not in by_type:
            by_type[img_type] = []
        by_type[img_type].append(item)
    
    # 生成清单
    manifest = {
        'summary': {
            'total': len(image_needs),
            'by_type': {k: len(v) for k, v in by_type.items()}
        },
        'images_needed': image_needs[:100]  # 限制前100个
    }
    
    with open('figma_export_list.json', 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
    
    print(f"\n📄 导出清单已保存到: figma_export_list.json")
    
    # 生成简单的Markdown清单
    md_content = "# Figma导出清单\n\n"
    md_content += f"共需要导出 **{len(image_needs)}** 个图片\n\n"
    
    for img_type, items in by_type.items():
        md_content += f"## {img_type.upper()} 类型 ({len(items)} 个)\n\n"
        for item in items[:20]:  # 只显示前20个
            md_content += f"- **{item['suggested_name'] or '未命名'}**\n"
            md_content += f"  - 文件: `{item['file']}` (第 {item['line']} 行)\n"
            md_content += f"  - 代码: `{item['code'][:80]}...`\n\n"
    
    with open('FIGMA_EXPORT_LIST.md', 'w', encoding='utf-8') as f:
        f.write(md_content)
    
    print("📝 清单Markdown已保存到: FIGMA_EXPORT_LIST.md")
    
    print("\n💡 下一步:")
    print("1. 打开 FIGMA_EXPORT_LIST.md 查看需要导出的图片")
    print("2. 在Figma中选择对应的元素并导出")
    print("3. 保存到 public/figma-exported/ 目录")
    print("4. 使用有意义的文件名（参考清单中的建议）")
    print("5. 手动更新代码中的路径，或使用批量替换工具")

if __name__ == '__main__':
    main()

