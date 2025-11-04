# 从Figma导出图片指南

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
