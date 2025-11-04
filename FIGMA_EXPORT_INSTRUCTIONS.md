# 从Figma导出图片并更新代码的完整指南

## 概述

由于代码中大量图片使用了错误的占位符（`/Vector.svg` 和 `/Rectangle 227.png`），我们需要从Figma重新导出正确的图片。

## 快速方法：使用Figma插件批量导出

### 方法1: 使用Figma的批量导出功能

1. **在Figma中打开设计文件**
2. **选择所有需要导出的图片/图标**
   - 可以按 `Cmd/Ctrl + A` 全选，然后取消选择不需要的元素
3. **批量导出**:
   - 方法A: 使用Figma的批量导出
     - 选择多个元素 → 右侧面板 → Export → 选择格式
     - 点击 "Export" 批量导出
   - 方法B: 使用Figma插件（如 "Batch Export"）
     - 安装批量导出插件
     - 选择元素 → 使用插件批量导出

4. **保存到项目目录**:
   ```
   public/figma-exported/
   ```

### 方法2: 使用Figma Dev Mode（如果有）

1. 在Figma中切换到Dev Mode
2. 选择元素 → 查看Assets面板
3. 导出需要的图片

## 手动导出步骤

对于每个页面，按以下步骤：

### 1. 主页图片 (page.tsx)

需要导出：
- Hero图片（大横幅图片）
- 6个Hackathon卡片图片
- 分割线图标

**步骤**：
1. 在Figma中选择Hero区域的大图
2. 导出为PNG → 保存为 `public/hero-image.png`
3. 选择每个Hackathon卡片的图片
4. 导出为PNG → 保存为 `public/hackathon-1.png`, `hackathon-2.png` 等

### 2. 图标文件

需要导出所有图标：
- 搜索图标 → `search.svg`
- 箭头图标 → `arrow-left.svg`, `arrow-right.svg` 等
- 通知图标 → `notification.svg`
- 各种Frame图标 → `Frame-1.svg` 到 `Frame-7.svg`
- 分割线 → `divider.svg` 或 `line.svg`

**步骤**：
1. 在Figma中选择图标元素
2. 导出为SVG格式（推荐用于图标）
3. 使用有意义的文件名保存

## 自动化工具

我已经创建了以下工具来帮助你：

### 1. 分析工具

```bash
# 分析代码中需要的所有图片
python3 export_figma_images.py
```

这会生成：
- `figma_export_manifest.json` - 详细的图片清单
- `FIGMA_EXPORT_GUIDE.md` - 导出指南

### 2. 自动更新工具

从Figma导出图片后，运行：

```bash
# 自动更新代码中的图片路径
python3 update_image_paths.py
```

这个脚本会：
1. 扫描 `public/figma-exported/` 目录
2. 自动匹配文件名
3. 更新代码中的路径

## 推荐的导出策略

### 策略1: 按页面导出（推荐）

为每个页面创建一个文件夹：

```
public/figma-exported/
  ├── home/           # 主页图片
  ├── hackathon/      # Hackathon相关图片
  ├── dashboard/      # Dashboard图片
  ├── courses/        # 课程图片
  └── icons/          # 图标文件
```

### 策略2: 按类型导出

```
public/figma-exported/
  ├── images/         # 所有PNG图片
  └── icons/          # 所有SVG图标
```

## 文件命名建议

为了便于管理，建议使用有意义的文件名：

**图标文件**:
- `icon-search.svg` (而不是 `6494ad074a7e6d78fae9be1553192e8b9c5eabbf.svg`)
- `icon-arrow-left.svg`
- `icon-notification.svg`

**图片文件**:
- `hero-banner.png`
- `hackathon-chainspark.png`
- `hackathon-web3-innovate.png`

**然后更新代码使用这些文件名**

## 更新代码示例

导出后，例如：

```typescript
// 之前（占位符）:
const imgSearch = "/Vector.svg";

// 导出后:
const imgSearch = "/figma-exported/icons/icon-search.svg";
```

## 检查清单

导出完成后，检查：

- [ ] 所有图标已导出为SVG
- [ ] 所有图片已导出为PNG
- [ ] 文件保存在 `public/figma-exported/` 目录
- [ ] 文件名使用有意义的名称（可选）
- [ ] 运行 `python3 update_image_paths.py` 更新代码
- [ ] 检查代码中是否还有错误的路径
- [ ] 在本地测试确保图片显示正常
- [ ] 推送到GitHub并重新部署到Vercel

## 需要帮助？

如果遇到问题：
1. 查看 `figma_export_manifest.json` 了解需要哪些图片
2. 查看 `image_urls_report.json` 查看所有图片引用
3. 运行 `./find_wrong_images.sh` 查找错误的图片路径

