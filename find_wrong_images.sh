#!/bin/bash
# 查找所有错误的图片路径

echo "=== 查找所有使用 Vector.svg 的地方（应该替换为正确的图标）==="
grep -rn "Vector\.svg" src --include="*.tsx" | head -30

echo -e "\n=== 查找所有使用 Rectangle 227.png 的地方（应该替换为正确的图片）==="
grep -rn "Rectangle 227\.png" src --include="*.tsx" | head -30

echo -e "\n=== 所有可用的图片文件 ==="
echo "SVG 图标："
ls -1 public/*.svg 2>/dev/null | sed 's|public/|  /|'

echo -e "\nPNG 图片："
ls -1 public/*.png 2>/dev/null | sed 's|public/|  /|' | head -20

