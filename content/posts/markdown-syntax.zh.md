
---
author: "Hugo Authors"
title: "Markdown Syntax Guide中文版"
date: "2021-07-17"
description: "markdown语法的中文版"
tags: ["markdown", "css", "html", "themes"]
categories: ["themes", "syntax"]
series: ["Themes Guide"]
aliases: ["migrate-from-jekyl"]
ShowToc: true
TocOpen: true
---


>**Markdown**是一种轻量级标记语言，创始人为约翰·格鲁伯。它允许人们使用易读易写的纯文本格式编写文档，
然后转换成有效的XHTML文档。这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。
Markdown文件类型结尾是.md或.markdown形式.

优点: **简单 统一(写一次任何地方显示一致) 支持网站平台多**(Github Gitlab Wordpresse 知乎 简书等)



## 1. 标题

```
# 标题1
## 标题2
### 标题3
#### 标题4
##### 标题5
###### 标题6
```

# 标题1
## 标题2
### 标题3
#### 标题4
##### 标题5
###### 标题6

## 2. 图片与链接.

```
[知乎](https://zhihu.com)

![图片](https://images.unsplash.com/photo-1545065942-3a37886535d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2250&q=80)

#目录路径,访问的当前网站根目录下的图片.
![papermod](/hugo-PaperMod/papermod-cover.png)
![papermod](../../papermod-cover.png)
```

[知乎](https://zhihu.com)

![图片](https://images.unsplash.com/photo-1545065942-3a37886535d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2250&q=80)

![papermod](/hugo-PaperMod/papermod-cover.png)
![papermod](../../papermod-cover.png)

## 3. 段落

```
段落一
没有空行, 仍然是段落一

空一行就是段落二
```

段落一
没有空行, 仍然是段落一

空一行就是段落二

## 4 列表. 有序列表与无序列表.


### 4.1 有序列表

```
1. 有序列表一
2. 有序列表一
3. 有序列表一
```

1. 有序列表一
2. 有序列表一
3. 有序列表一


### 4.2 无序列表. \-与\*同义.

```
* 无序列表一
* 无序列表二
    * 无序列表一一
    * 无序列表一二
        * 无序列表一一一
- 无序列表一
- 无序列表二
    - 无序列表一一
    - 无序列表一二
        - 无序列表一一一
```
* 无序列表一
* 无序列表二
    * 无序列表一一
    * 无序列表一二
        * 无序列表一一一
- 无序列表一
- 无序列表二
    - 无序列表一一
    - 无序列表一二
        - 无序列表一一一

## 5. 代码块\`\`\` \`\`\`

```
"```"
6个`包围就是代码区域
"```"
```


```
public static void main(){
    System.out.println("Hello");
}
```

## 6. Markdown同样支持所有HTML标签

例如a img标签
```
<a href="https://github.com" target="_blank" >Github.com</a>
<img src="https://images.unsplash.com/photo-1545065942-3a37886535d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2250&q=80">
```
<a href="https://github.com" target="_blank">Github.com</a>

<img src="https://images.unsplash.com/photo-1545065942-3a37886535d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2250&q=80">

## 7. 表格

```
| 标题一 | 标题二 | 标题三 |
| ---   | ---   | ---   |
| 内容一 | 内容二 | 内容三 |
```

| 标题一 | 标题二 | 标题三 |
| ---    | ---    | ---    |
| 内容一 | 内容二 | 内容三 |

## 8. 引用.

```
>引用内容 线上服务
```

>引用内容 线上服务


## 9. 强调\*\*\*\*

```
普通 **强调**
```
普通 **强调**


## 10. 任务\* \-

```
- [ ] 任务一
- [x] 完成任务二
  - [x] 完成任务三
- [ ] 待完成任务四
```

- [ ] 任务一
- [x] 完成任务二
  - [x] 完成任务三
- [ ] 待完成任务四

## 11.分隔线 ---

```
分隔线

---

```
分隔线

---


## 12.字符转义\\
```
\*
\\
\-
```
\*

\\

\-

## 13. 删除线~~~~

```
~~删除线~~
```
~~删除线~~

## 14. 数学公式, 其它内容.

```
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
