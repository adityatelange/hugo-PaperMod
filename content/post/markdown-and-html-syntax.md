+++
author = "Hugo Authors"
title = "Markdown & HTML Syntax Guide"
date = "2019-03-11"
description = "Sample article showcasing basic Markdown syntax and formatting for HTML elements."
tags = [
    "markdown",
    "css",
    "html",
    "themes",
]
categories = [
    "themes",
    "syntax",
]
series = ["Themes Guide"]
aliases = ["migrate-from-jekyl"]
+++

This article offers a sample of basic Markdown and HTML syntax that can be used in Hugo content files, also it shows whether basic HTML elements are decorated with CSS in a Hugo theme.
<!--more-->
***

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1
## H2
### H3
#### H4
##### H5
###### H6

***

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

---

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

<h5>Blockquote without attribution</h5>

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use *Markdown syntax* within a blockquote.

<h5>Blockquote with attribution</h5>

<blockquote>
  <p>Don't communicate by sharing memory, share memory by communicating.</p>
  <footer>— <cite>Rob Pike</cite></footer>
</blockquote>

###### The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

***

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

<h5>Markdown Input</h5>

```
   Name | Age
--------|------
    Bob | 27
  Alice | 23
```
<h5>HTML Output</h5>

   Name | Age
--------|------
    Bob | 27
  Alice | 23

<br>


<h4>Sample Inline Markdown within tables</h4>

<h5>Markdown Input</h5>

```
| Inline     | Markdown  | In                | Table      |
| ---------- | --------- | ----------------- | ---------- |
| *italics*  | **bold**  | ~~strikethrough~~ | `code`     |
```


<h5>HTML Output</h5>

| Inline&nbsp;&nbsp;&nbsp;     | Markdown&nbsp;&nbsp;&nbsp;  | In&nbsp;&nbsp;&nbsp;                | Table      |
| ---------- | --------- | ----------------- | ---------- |
| *italics*  | **bold**  | ~~strikethrough~~&nbsp;&nbsp;&nbsp; | `code`     |

<br>

---

## Code Blocks

<h5>Code block with backticks </h5>

```
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```
<br>
<h5>Code block indented with four spaces</h5>

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

<br>
<h5>Code block with Hugo's internal highlight shortcode</h5>
{{< highlight html >}}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

---

## List Types

### Ordered List

1. First item
2. Second item
3. Third item

<br>
### Unordered List

<h5>Markdown Input</h5>

```
* List item
* Another item
* And another item
```

<h5>HTML Output</h5>

<ul>
<li>List item</li>
<li>Another item</li>
<li>And another item</li>
</ul>

<br>
### Nested list

<h5>Markdown Input</h5>

```
* Item
1. First Sub-item
2. Second Sub-item
```

<h5>HTML Output</h5>

<ul>
  <li>Item</li>
    <ol>
      <li>First Sub-item</li>
       <li>Second Sub-item</li>
    </ol>
  </li>
</ul>

<br>
### Definition List

<h5>HTML Input</h5>

```
<dl>
  <dt>Aque venitatiusda cum</dt>
  <dd>Voluptionse latur sitiae dolessi...</dd>
  <dt>Dantinc itiur</dt>
  <dd>Axim reperum ese eaquam, coriatiorita...</dd>
</dl>
```

<h5>HTML Output</h5>

<dl>
  <dt>Aque venitatiusda cum</dt>
  <dd>Voluptionse latur sitiae dolessi...</dd>
  <dt>Dantinc itiur</dt>
  <dd>Axim reperum ese eaquam, coriatiorita...</dd>
</dl>

<br>

---

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.