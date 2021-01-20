---
title: "Variables | Front Matter"
summary: List of Front Matter variables used by PaperMod
date: 2021-01-20
showToc: true
TocOpen: true
tags: ["PaperMod"]
author: "Aditya Telange"
draft: true
weight: 5
---

**Below are variables used with this theme...**

---

### Site Variables under `Params`

| name                                 | type          | example                  | Description                                                                         |
| ------------------------------------ | ------------- | ------------------------ | ----------------------------------------------------------------------------------- |
| env                                  | string        | 'production'             | To set env to production                                                            |
| title                                | string        | 'My Blog'                | To set title                                                                        |
| description                          | string        | 'This is a blog of mine' | To set site description                                                             |
| author                               | string \|list | 'Me' \| ['Me','You']     | To show multiple Authors                                                            |
| images                               | string        | 'myimage.png'            | Link or path of image for opengraph, twitter-cards                                  |
| ShowReadingTime                      | boolean       | true \| false            | To show read time in post meta                                                      |
| ShowShareButtons                     | boolean       | true \| false            | To show/hide share buttons under post                                               |
| defaultTheme                         | string        | light \| dark \| auto    | To set default theme                                                                |
| disableThemeToggle                   | boolean       | true \| false            | To disable theme toggle icon shown besides label                                    |
| disableSpecial1stPost                | boolean       | true \| false            | To disable no-card special appearance of 1st post                                   |
| hidemeta                             | boolean       | true \| false            | To Hide meta elements : date, read-time, author and available-translations for page |
| showtoc                              | boolean       | true \| false            | To show/hide Table of Contents                                                      |
| tocopen                              | boolean       | true \| false            | To keep open ToC by default on page load                                            |
| comments                             | boolean       | true \| false            | To show/hide comments                                                               |
| fuseOpts                             |               |                          |                                                                                     |
| socialIcons                          |               |                          |                                                                                     |
| analytics.google.SiteVerificationTag | string        | "XYZabc"                 |                                                                                     |
|                                      |               |                          |                                                                                     |
| label.text                           | string        | 'Home'                   | To display different label text other than title                                    |
| label.icon                           | string        | '/apple-touch-icon.png'  | To display a logo image in label                                                    |
| label.iconHeight                     | integer       | 35                       | To set size of label logo image                                                     |
| assets.favicon                       | string        | 'icon.ico'               | To set favicon, can be path or external link                                        |
| assets.disableHLJS                   |               |                          |                                                                                     |
| assets.disableFingerprinting         |               |                          |                                                                                     |
| cover.linkFullImages                 | boolean       | true \| false            | To open full size cover images on click on cover                                    |
| cover.responsiveImages               | boolean       | true \| false            | To enable/disable generation of responsive cover images                             |
| cover.hidden                         |               |                          |                                                                                     |
| cover.hiddenInList                   |               |                          |                                                                                     |
| cover.hiddenInSingle                 |               |                          |                                                                                     |
| profileMode.enabled                  |               |                          |                                                                                     |
| profileMode.title                    |               |                          |                                                                                     |
| profileMode.imageUrl                 |               |                          |                                                                                     |
| profileMode.imageWidth               |               |                          |                                                                                     |
| profileMode.imageHeight              |               |                          |                                                                                     |
| profileMode.imageTitle               |               |                          |                                                                                     |
| profileMode.buttons                  |               |                          |                                                                                     |

---

### Page Variables

| Name           | Type          | Example               | Description                                                                         |
| -------------- | ------------- | --------------------- | ----------------------------------------------------------------------------------- |
| showtoc        | boolean       | true \| false         | To show/hide Table of Contents                                                      |
| tocopen        | boolean       | true \| false         | To keep open ToC by default on page load                                            |
| hidemeta       | boolean       | true \| false         | To Hide meta elements : date, read-time, author and available-translations for page |
| comments       | boolean       | true \| false         | To show/hide comments                                                               |
| description    | string        | 'description text'    | Show Post Description under Title                                                   |
| disableShare   | boolean       | true \| false         | To hide/show share icons under a page                                               |
| disableHLJS    |               |                       |                                                                                     |
| author         | string \|list | 'Me' \| ['Me','You']  | To show multiple Authors                                                            |
| cover.image    | string        | 'featured.jpg'        | To add a cover image                                                                |
| cover.caption  | string        | 'caption for image'   | To add caption to cover image                                                       |
| cover.alt      | string        | 'this is cover image' | Alternate text to show if image doesn't load/show up                                |
| cover.relative | boolean       | true \| false         | To use relative path for cover image, used in hugo Page-bundles                     |
| cover.hidden   |               |                       |                                                                                     |
|                |               |                       |                                                                                     |
| weight         | integer       | 5                     | To set page order or to pin a post to Top of list                                   |
