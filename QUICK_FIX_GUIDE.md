# 快速修复图片URL指南

## 当前问题
- 173 处使用了 `/Vector.svg`（占位符，需要替换）
- 27 处使用了 `/Rectangle 227.png`（可能不正确）

## 快速修复方法

### 方法1：使用 VS Code 批量查找替换

1. **打开 VS Code**
2. **按 `Cmd+Shift+F` (Mac) 或 `Ctrl+Shift+F` (Windows)** 打开全局搜索
3. **搜索并替换**：

#### 替换错误的图标：
- 搜索：`"/Vector.svg"`
- 替换为：根据上下文选择合适的图标
  - 搜索图标 → `/search.svg`
  - 箭头图标 → `/arrow-left.svg`
  - 勾选图标 → `/check.svg`
  - 框架图标 → `/Frame-1.svg` 到 `/Frame-7.svg`
  - 其他 → 查看 `public` 目录中的文件

#### 替换错误的图片：
- 搜索：`"/Rectangle 227.png"`
- 替换为：根据实际需要的图片
  - 查看 `public` 目录中的 PNG 文件
  - 使用正确的图片文件名

### 方法2：使用命令行批量替换

```bash
# 替换所有 Vector.svg 为 search.svg（如果确定是搜索图标）
find src -name "*.tsx" -type f -exec sed -i '' 's|"/Vector.svg"|"/search.svg"|g' {} \;

# 替换所有 Vector.svg 为 Frame-1.svg（如果确定是框架图标）
find src -name "*.tsx" -type f -exec sed -i '' 's|"/Vector.svg"|"/Frame-1.svg"|g' {} \;
```

**注意：** 使用前请先备份，并确保替换是正确的。

### 方法3：逐个文件修复（最安全）

1. **查看报告文件**：
   ```bash
   # 查看哪些文件需要修复
   grep -l "Vector.svg" src/**/*.tsx | head -10
   ```

2. **打开文件逐个修复**：
   - 打开文件
   - 查找 `Vector.svg` 或 `Rectangle 227.png`
   - 根据上下文判断应该使用什么图标/图片
   - 替换为正确的文件路径

## 推荐的替换策略

### 根据上下文判断：

1. **搜索相关** → `/search.svg`
2. **箭头相关** → `/arrow-left.svg`
3. **勾选相关** → `/check.svg`
4. **通知相关** → `/Frame-2.svg`
5. **分割线/装饰** → `/Vector.svg` 或 `/Frame-*.svg`
6. **用户头像** → `/Ellipse 2.svg` 或其他 Ellipse 文件
7. **心形图标** → `/heart.svg`, `/heart-1.svg`, `/heart-2.svg`
8. **帮助图标** → `/help-circle.svg`
9. **地图标记** → `/map-pin.svg`

### 查看可用的文件：

```bash
# 查看所有可用的 SVG 图标
ls -1 public/*.svg

# 查看所有可用的 PNG 图片
ls -1 public/*.png
```

## 检查修复结果

修复后检查：

```bash
# 检查是否还有 Vector.svg
grep -r "Vector.svg" src --include="*.tsx" | wc -l

# 应该显示 0 或接近 0
```

## 示例修复

### 示例1：修复 Header 组件
```typescript
// 修复前：
const imgSearch = "/Vector.svg";

// 修复后：
const imgSearch = "/search.svg";
```

### 示例2：修复 Hero 组件
```typescript
// 修复前：
const imgHeroImage = "/Rectangle 227.png";

// 修复后（如果这个图片是正确的，保持；如果不对，替换）：
const imgHeroImage = "/your-actual-hero-image.png";
```

## 需要帮助？

如果不知道某个图片应该用什么，可以：
1. 查看 Figma 设计稿
2. 查看 `public` 目录中的文件
3. 查看 `image_urls_report.json` 找到对应的文件和行号

