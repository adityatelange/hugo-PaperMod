<h1 align=center>PaperMod PE | <a href="https://tofuwine.github.io/" rel="nofollow">Demo</a></h1>

<br>

PaperMod PE 是 [Hugo-PaperMod](https://github.com/adityatelange/hugo-PaperMod) 的个性化版本。

## 快速开始

1. 安装 Hugo。参考文档：[Hugo Docs's - Quick Start](https://gohugo.io/getting-started/quick-start/)
   (需要 Hugo 版本 >= v0.125.3)

2. 创建 Hugo Site

```powershell
# 将下面 MySite 替换为你的网站名
hugo new site MySite --format yml
```

更多命令参考：[Hugo Docs's - hugo new site command](https://gohugo.io/commands/hugo_new_site/#synopsis)

3. 启用 Git

```powershell
cd MySite
git init .
git add .
```

4. 安装 PaperMod-PE 主题

```powershell
git submodule add --depth=1 https://github.com/tofuwine/PaperMod-PE.git themes/PaperMod-PE
```

5. 修改 Hugo 配置文件：

```yaml
theme: PaperMod-PE
```

## 变更说明

本项目对 Hugo-PaperMod 进行了功能及样式修改，主要内容如下：

### 样式

单位由 `px` 改用 `rem` / `em`，为简化计算，设置 `html: font-size: 62.5%;`。

转换计算：

- 10px = 1rem
- 16px = 1.6rem


## 待办事项

状态说明:
🟢 完成
🟠 测试
🟣 开发
🔵 待办
⚫ 弃用

### 样式

- 🔵 代码块

### 功能

- 🔵 giscus (评论)
- 🔵 Mermaid
- 🔵 LaTex
- 🟢 赞赏
- 🟢 Fancybox 灯箱

### shortcode

- 🔵 admonition
- 🔵 hl

### 自定义页面

- 🟢 关于
- 🟢 最新文章
- 🟢 友链

## FAQ

### 主题更新

使用如下命令更新主题：

```powershell
git submodule update --init --recursive
```


