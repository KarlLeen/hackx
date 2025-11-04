#!/usr/bin/env python3
"""
从Figma导出图片并更新代码的工具
这个脚本会：
1. 分析代码中所有需要的图片
2. 生成一个清单，列出需要从Figma导出的图片
3. 提供自动更新代码的功能
"""
import os
import re
import json
import glob
from collections import defaultdict

def find_all_image_references():
    """找出所有代码中引用的图片"""
    image_refs = defaultdict(list)
    tsx_files = glob.glob('src/**/*.tsx', recursive=True)
    
    for filepath in tsx_files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                lines = content.split('\n')
            
            # 查找所有图片引用
            for i, line in enumerate(lines, 1):
                # 查找 localhost URL
                localhost_matches = re.finditer(
                    r'http://localhost:3845/assets/([^"]+)',
                    line
                )
                for match in localhost_matches:
                    filename = match.group(1)
                    image_refs[filename].append({
                        'file': filepath,
                        'line': i,
                        'url': match.group(0),
                        'type': 'localhost'
                    })
                
                # 查找 public 目录引用
                public_matches = re.finditer(
                    r'["\'](/[^"\']+\.(svg|png|jpg|jpeg))["\']',
                    line
                )
                for match in public_matches:
                    filepath_pub = match.group(1)
                    image_refs[filepath_pub].append({
                        'file': filepath,
                        'line': i,
                        'url': filepath_pub,
                        'type': 'public'
                    })
        except Exception as e:
            print(f"Error processing {filepath}: {e}")
    
    return image_refs

def generate_export_manifest(image_refs):
    """生成导出清单"""
    manifest = {
        'from_figma': [],
        'from_public': [],
        'missing': []
    }
    
    # 检查 public 目录中的文件
    public_files = set()
    if os.path.exists('public'):
        for root, dirs, files in os.walk('public'):
            for file in files:
                rel_path = os.path.relpath(os.path.join(root, file), 'public')
                public_files.add(f'/{rel_path}')
    
    for img_ref, locations in image_refs.items():
        if img_ref.startswith('http://localhost:3845'):
            # 需要从Figma导出
            manifest['from_figma'].append({
                'original_url': img_ref,
                'filename': img_ref.split('/')[-1],
                'used_in': locations,
                'suggested_path': f'/figma-exported/{img_ref.split("/")[-1]}'
            })
        elif img_ref.startswith('/'):
            # 检查文件是否存在
            if img_ref in public_files:
                manifest['from_public'].append({
                    'path': img_ref,
                    'exists': True,
                    'used_in': locations
                })
            else:
                manifest['missing'].append({
                    'path': img_ref,
                    'exists': False,
                    'used_in': locations
                })
    
    return manifest

def main():
    print("🔍 分析代码中的图片引用...")
    image_refs = find_all_image_references()
    
    print(f"✅ 找到 {len(image_refs)} 个不同的图片引用")
    
    print("\n📋 生成导出清单...")
    manifest = generate_export_manifest(image_refs)
    
    # 保存清单
    with open('figma_export_manifest.json', 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
    
    print(f"📄 导出清单已保存到: figma_export_manifest.json")
    
    # 生成摘要
    print("\n📊 摘要:")
    print(f"  - 需要从Figma导出: {len(manifest['from_figma'])} 个图片")
    print(f"  - 已在public目录: {len(manifest['from_public'])} 个图片")
    print(f"  - 缺失的文件: {len(manifest['missing'])} 个")
    
    # 生成简单的导出指南
    print("\n📝 生成导出指南...")
    guide = generate_export_guide(manifest)
    with open('FIGMA_EXPORT_GUIDE.md', 'w', encoding='utf-8') as f:
        f.write(guide)
    
    print("✅ 导出指南已保存到: FIGMA_EXPORT_GUIDE.md")
    print("\n💡 下一步:")
    print("1. 打开 FIGMA_EXPORT_GUIDE.md 查看详细的导出步骤")
    print("2. 从Figma导出图片到 public/figma-exported/ 目录")
    print("3. 运行 python3 update_image_paths.py 自动更新代码")

def generate_export_guide(manifest):
    """生成导出指南"""
    guide = """# 从Figma导出图片指南

## 步骤1: 在Figma中选择并导出图片

### 方法1: 批量导出（推荐）

1. **在Figma中打开设计文件**
2. **选择所有需要导出的图片/图标**
3. **右键点击 → Export → 选择格式（SVG或PNG）**
4. **导出到项目的 `public/figma-exported/` 目录**

### 方法2: 单个导出

对于每个图片：
1. 在Figma中选择图片元素
2. 右侧面板找到 "Export" 部分
3. 点击 "+" 添加导出设置
4. 选择格式（SVG推荐用于图标，PNG用于照片）
5. 点击 "Export [文件名]"
6. 保存到 `public/figma-exported/` 目录

## 步骤2: 确保文件命名正确

导出的文件应该使用原始文件名（从代码中提取的），例如：
- `19fc70a1cb6b0d099d8efd941de16deb30bf796f.svg`
- `ddae953f8c9baa74b833804a68087bd52fb2aa90.svg`

## 步骤3: 需要导出的图片列表

"""
    
    if manifest['from_figma']:
        guide += f"\n### 需要从Figma导出 ({len(manifest['from_figma'])} 个):\n\n"
        for i, item in enumerate(manifest['from_figma'][:50], 1):  # 只显示前50个
            filename = item['filename']
            guide += f"{i}. `{filename}`\n"
            guide += f"   - 使用位置: {len(item['used_in'])} 处\n"
            guide += f"   - 建议保存为: `public/figma-exported/{filename}`\n\n"
    
    guide += """
## 步骤4: 更新代码路径

导出完成后，运行以下命令自动更新代码：

```bash
python3 update_image_paths.py
```

这个脚本会：
1. 扫描 `public/figma-exported/` 目录
2. 将代码中的 localhost URL 替换为正确的 public 路径
3. 确保所有路径都使用正确的文件名（大小写敏感）

## 注意事项

1. **文件名大小写**: Vercel服务器是大小写敏感的，确保文件名完全匹配
2. **文件格式**: 图标使用SVG，照片使用PNG
3. **文件路径**: 所有图片应该在 `public` 目录下，可以通过 `/filename.svg` 访问

## 快速检查

导出后，检查文件是否存在：

```bash
ls -la public/figma-exported/
```

确保文件数量匹配预期。
"""
    
    return guide

if __name__ == '__main__':
    main()

