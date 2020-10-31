---
title: "Papermod - Variables"
summary: List of Front Matter variables used by PaperMod
date: 2020-09-24T11:33:33+05:30
showToc: true
TocOpen: true
tags: ["PaperMod"]
author: "Aditya Telange"
draft: true
---

**Below are variables used with this theme...**

---

### Site Variables

| name                   | type         | example                  | Description                                             |
| ---------------------- | ------------ | ------------------------ | ------------------------------------------------------- |
| env                    | string       | 'production'             | To set env to production                                |
| title                  | string       | 'My Blog'                | To set title                                            |
| description            | string       | 'This is a blog of mine' | To set site description                                 |
| author                 | ["Me","You"] | list                     | To show multiple Authors                                |
| images                 | string       | 'myimage.png'            | Link or path of image for opengraph, twitter-cards      |
| ShowReadingTime        | boolean      | true \| false            | To show read time in post meta                          |
| ShowShareButtons       | boolean      | true \| false            | To show/hide share buttons under post                   |
| defaultTheme           | string       | light \| dark \| auto    | To set default theme                                    |
| disableThemeToggle     | boolean      | true \| false            | To disable theme toggle icon shown besides label        |
| disableSpecial1stPost  | boolean      | true \| false            | To disable no-card special appearance of 1st post       |
|                        |              |                          |                                                         |
| label.text             | string       | 'Home'                   | To display different label text other than title        |
| label.icon             | string       | '/apple-touch-icon.png'  | To display a logo image in label                        |
| label.iconHeight       | integer      | 35                       | To set size of label logo image                         |
| assets.favicon         | string       | 'icon.ico'               | To set favicon, can be path or external link            |
| cover.linkFullImages   | boolean      | true \| false            | To open full size cover images on click on cover        |
| cover.responsiveImages | boolean      | true \| false            | To enable/disable generation of responsive cover images |

---

### Page Variables

| Name           | Type         | Example               | Description                                                                         |
| -------------- | ------------ | --------------------- | ----------------------------------------------------------------------------------- |
| showtoc        | boolean      | true \| false         | To show/hide Table of Contents                                                      |
| tocopen        | boolean      | true \| false         | To keep open ToC by default on page load                                            |
| hidemeta       | boolean      | true \| false         | To Hide meta elements : date, read-time, author and available-translations for page |
| cover.image    | string       | 'featured.jpg'        | To add a cover image                                                                |
| cover.caption  | string       | 'caption for image'   | To add caption to cover image                                                       |
| cover.alt      | string       | 'this is cover image' | Alternate text to show if image doesn't load/show up                                |
| cover.relative | boolean      | true \| false         | To use relative path for cover image, used in hugo Page-bundles                     |
| comments       | boolean      | true \| false         | To show/hide comments                                                               |
| disableShare   | boolean      | true \| false         | To hide/show share icons under a page                                               |
| author         | ["Me","You"] | list                  | To show multiple Authors                                                            |
|                |              |                       |                                                                                     |
| weight         | integer      | 5                     | To set page order or to pin a post to Top of list                                   |
