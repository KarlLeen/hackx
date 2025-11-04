# 图片URL修复指南

## 问题
代码中有大量使用 `http://localhost:3845` 的图片URL，这些在Vercel部署后无法访问。我已经用占位符替换了它们，但大部分图片可能不正确。

## 解决方案

### 方法1：使用报告文件手动修复（推荐）

1. **查看报告**：
   ```bash
   # 查看所有图片URL的报告
   cat image_urls_report.json
   ```

2. **搜索特定的URL**：
   ```bash
   # 搜索某个文件中的图片URL
   grep -n "Vector.svg\|Rectangle.*\.png" src/app/page.tsx
   ```

3. **手动编辑文件**：
   - 打开需要修复的文件
   - 找到错误的图片路径（如 `/Vector.svg` 或 `/Rectangle 227.png`）
   - 替换为正确的 `public` 目录中的文件路径

### 方法2：使用映射文件批量修复

1. **编辑映射文件**：
   ```bash
   # 打开映射文件
   open image_urls_mapping.json
   ```
   
   在文件中，你可以看到每个图片URL的当前值和建议值。修改 `suggested` 字段为正确的文件路径。

2. **应用映射**：
   ```bash
   python3 apply_image_mapping.py
   ```

### 方法3：使用搜索工具查找和替换

```bash
# 查找所有使用 Vector.svg 的地方
grep -r "Vector.svg" src --include="*.tsx"

# 查找所有使用 Rectangle 227.png 的地方
grep -r "Rectangle 227" src --include="*.tsx"
```

## 可用的公共文件

在 `public` 目录中，你可以使用以下文件：

### SVG 图标：
- `Frame-1.svg` 到 `Frame-7.svg` - 框架图标
- `Vector.svg` - 向量图标
- `arrow-left.svg` - 左箭头
- `check.svg` - 勾选图标
- `heart.svg`, `heart-1.svg`, `heart-2.svg` - 心形图标
- `help-circle.svg` - 帮助图标
- `map-pin.svg` - 地图标记
- `search.svg` - 搜索图标
- `share-2.svg` - 分享图标
- `x.svg` - X图标
- `Ellipse 2.svg`, `Ellipse 6.svg` 等 - 椭圆图标

### PNG 图片：
- `Rectangle 227.png` 到 `Rectangle 227-6.png` - 矩形图片
- `Rectangle 228.png` - 矩形图片
- `Rectangle 28.png` 到 `Rectangle 28-2.png` - 矩形图片
- `Group 2085663287 1.png` - 群组图片

## 快速修复示例

### 修复 Hero 图片：
```typescript
// 错误的：
const imgHeroImage = "/Rectangle 227.png";

// 正确的（根据实际需要）：
const imgHeroImage = "/Rectangle 227.png"; // 如果这个是正确的
// 或者
const imgHeroImage = "/your-hero-image.png"; // 如果public目录中有正确的图片
```

### 修复图标：
```typescript
// 错误的：
const imgSearch = "/Vector.svg";

// 正确的：
const imgSearch = "/search.svg"; // 使用public目录中的search.svg
```

## 检查修复结果

修复后，运行以下命令检查是否还有错误的图片路径：

```bash
# 检查是否还有 localhost URL
grep -r "localhost:3845" src --include="*.tsx"

# 检查是否使用了占位符
grep -r "Vector.svg\|Rectangle 227.png" src --include="*.tsx" | head -20
```

## 提交修复

修复完成后：

```bash
git add -A
git commit -m "Fix image URLs with correct public directory files"
git push
```

