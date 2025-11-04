# 从Figma导出图片的简单指南

## 🎯 目标

将代码中错误的占位符图片（`/Vector.svg` 和 `/Rectangle 227.png`）替换为从Figma导出的正确图片。

## 📋 快速步骤

### 步骤1: 查看需要导出的图片清单

```bash
# 查看清单
cat FIGMA_EXPORT_LIST.md
```

或者查看JSON格式的详细清单：
```bash
cat figma_export_list.json | less
```

### 步骤2: 从Figma导出图片

#### 方法A: 批量导出（推荐）

1. **在Figma中打开设计文件**
2. **选择所有图标元素**（按住Shift多选）
3. **右键 → Export Selection**
4. **选择格式**：
   - 图标 → SVG
   - 图片 → PNG
5. **保存到**: `public/figma-exported/` 目录

#### 方法B: 使用Figma插件

1. 安装 "Batch Export" 或类似插件
2. 选择要导出的元素
3. 使用插件批量导出
4. 保存到 `public/figma-exported/` 目录

#### 方法C: 手动逐个导出

对于每个需要的图片：
1. 在Figma中选择元素
2. 右侧面板 → Export
3. 选择格式（SVG/PNG）
4. 点击 "Export [filename]"
5. 保存到 `public/figma-exported/` 目录

### 步骤3: 使用有意义的文件名

**推荐的文件命名**：

图标文件（SVG）：
- `icon-search.svg`
- `icon-arrow-left.svg`
- `icon-notification.svg`
- `icon-close.svg`
- `icon-divider.svg`

图片文件（PNG）：
- `hero-banner.png`
- `hackathon-1.png`
- `hackathon-2.png`
- `user-avatar.png`

### 步骤4: 更新代码路径

#### 选项A: 使用自动工具（推荐）

1. **填写映射文件**：
   ```bash
   # 打开映射文件
   code figma_export_mapping.json
   ```
   
   为每个图片填写：
   - `figma_element`: 在Figma中的元素描述
   - `exported_path`: 导出后的文件路径（如 `/figma-exported/icon-search.svg`）

2. **应用映射**：
   ```bash
   python3 apply_figma_mapping.py
   ```

#### 选项B: 手动替换

1. **在VS Code中搜索替换**：
   - 搜索：`"/Vector.svg"`
   - 替换为：`"/figma-exported/icon-[name].svg"`

2. **逐个文件检查并替换**

## 🔍 检查清单

导出完成后：

- [ ] 所有图片已导出到 `public/figma-exported/` 目录
- [ ] 文件名使用有意义的名称
- [ ] 运行 `python3 apply_figma_mapping.py` 更新代码
- [ ] 检查代码中是否还有 `/Vector.svg` 或 `/Rectangle 227.png`
- [ ] 本地测试确保图片显示正常
- [ ] 提交代码到GitHub
- [ ] 重新部署到Vercel并测试

## 📊 当前状态

运行以下命令查看当前状态：

```bash
# 查看还有多少错误的图片路径
grep -r "Vector.svg\|Rectangle 227.png" src --include="*.tsx" | wc -l

# 查看已导出的文件
ls -la public/figma-exported/
```

## 💡 提示

1. **图标优先**: 先导出所有图标（SVG），这些最常用
2. **按页面导出**: 可以按页面（home, hackathon等）分别导出
3. **测试**: 每导出一些图片后，更新代码并测试
4. **备份**: 导出前可以先提交当前代码作为备份

## 🆘 需要帮助？

- 查看 `FIGMA_EXPORT_LIST.md` 了解详细清单
- 查看 `figma_export_manifest.json` 了解所有图片引用
- 运行 `./find_wrong_images.sh` 查找错误的图片路径

