---
title: "Papermod - Features"
date: 2020-09-16T11:30:03+05:30
showToc: true
hidemeta: true
TocOpen: true
weight: 2
aliases: ['/papermod-features']
tags: ['PaperMod']
author: "Aditya Telange"
---

## Assets (js/css)
The following is enabled by default
- [minification](https://gohugo.io/hugo-pipes/minification/) - makes the assets size smallest as possible.
- [bundling](https://gohugo.io/hugo-pipes/bundling/) - bundles all the styles in one single asset
- [fingerprint/intergity](https://gohugo.io/hugo-pipes/fingerprint/) check.

---

## Default Theme light/dark

```yml
params:
    defaultTheme: light
```

or

```yml
params:
    defaultTheme: dark
```
---

## Archives Layout

Add vars below to page-variables

```yml
layout: "archives"
```
ex: [here](https://raw.githubusercontent.com/adityatelange/hugo-PaperMod/exampleSite/content/archives.md)

![](https://i.ibb.co/cNWc7GZ/paper-mod-archives.png)

---

## Home-Info Mode

Use 1st entry as some Information

add following to config file
```yml
params:
    homeInfoParams:
        Title: Hi there wave
        Content: Can be Info, links, about...

    socialIcons: # optional
        - name: "<platform>"
            url: "<link>"
        - name: "<platform 2>"
            url: "<link2>"
```

ex. [here](https://github.com/adityatelange/hugo-PaperMod/blob/exampleSite/config.toml#L14)

![](https://i.ibb.co/zsq6fLr/papermod-homeinfo.png)

---

## Profile Mode

Shows Index/Home page as Full Page with Social Links and Image

add following to config file

```yml
params:
    profileMode:
        enabled: true
        title: "<Title>" # optional default will be site title
        imageUrl: "<image link>" # optional
        imageTitle: "<title of image as alt>" # optional
        buttons:
            - name: Archive
            url: "/archive"
            - name: Github
            url: "https://github.com/"

    socialIcons: # optional
        - name: "<platform>"
            url: "<link>"
        - name: "<platform 2>"
            url: "<link2>"
```

![](https://i.ibb.co/K0HVPBd/paper-mod-profilemode.png)

---

## [Draft](https://gohugo.io/getting-started/usage/#draft-future-and-expired-content) Page indication

adds `[draft]` mark to indicate draft pages.

---

## Scroll-to-Top Button
    Displays a Scroll-to-Top button in right-bottom corner

---

## Share Buttons on post

Displays Share Buttons at Bottom of each post

to show share buttons add
```yml
params:
    ShowShareButtons: true
```

![](https://i.ibb.co/sPN8bgd/paper-mod-share-butons.png)

---

## Show post reading time

Displays Reading Time (the estimated time, in minutes, it takes to read the content.)

To show reading time add
```yml
Params:
    ShowReadingTime: true
```

---

## Show Table of Contents on blog post

Displays ToC on blog-pages

To show ToC add following to page-variables
```yml
ShowToc: true
```

---

## Comments

to add comments, create a html file

`layouts/partials/comments.html`

and paste code provided by your comments provider

also in config add this
```yml
params:
    comments: true
```

more : read [this](https://gohugo.io/content-management/comments/)

---

### Scroll-Bar themed

---

### Smooth Scroll between in-page links
