---
author: ["Aditya Telange"]
title: "Code Syntax Guide"
date: "2019-03-10"
description: "Sample article showcasing basic code syntax and formatting for HTML elements."
summary: "Sample article showcasing basic code syntax and formatting for HTML elements."
tags: ["markdown", "syntax", "code", "gist"]
categories: ["themes", "syntax"]
series: ["Themes Guide"]
ShowToc: true
TocOpen: true
---

### Inline Code

`This is Inline Code`

### Only `pre`

<pre>
This is pre text
</pre>

### Code block with backticks

```{hl_lines=[2,8]}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
    <meta
      name="description"
      content="Sample article showcasing basic Markdown syntax and formatting for HTML elements."
    />
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

### Code block with backticks and language specified

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
    <meta
      name="description"
      content="Sample article showcasing basic Markdown syntax and formatting for HTML elements."
    />
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

### Code block with backticks and language specified with line numbers

```html {linenos=true}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
    <meta
      name="description"
      content="Sample article showcasing basic Markdown syntax and formatting for HTML elements."
    />
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

### Code block with line numbers and <mark>highlighted</mark> lines

- PaperMod supports `linenos=true` or `linenos=table`

```html {linenos=true,hl_lines=[2,8]}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
    <meta
      name="description"
      content="Sample article showcasing basic Markdown syntax and formatting for HTML elements."
    />
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

- <del>With `linenos=inline` line <mark>**might not** get highlighted</mark> properly.<del>
- This issue is fixed with [045c084](https://github.com/adityatelange/hugo-PaperMod/commit/045c08496d61b1b3f9c79e69e7d3d243a526d8f3)

```html {linenos=inline,hl_lines=[2,8]}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
    <meta
      name="description"
      content="Sample article showcasing basic Markdown syntax and formatting for HTML elements."
    />
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

### Code block indented with four spaces

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

### Code block with Hugo's internal highlight shortcode

{{< highlight html >}}

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

### Github Gist

{{< gist adityatelange 376cd56ee2c94aaa2e8b93200f2ba8b5 >}}
