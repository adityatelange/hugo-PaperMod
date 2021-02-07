---
title: "Variables | Front Matter"
summary: List of Front Matter variables used by PaperMod
date: 2021-01-20
tags: ["PaperMod"]
author: "Aditya Telange"
draft: true
weight: 5
---

**Below are variables used with this theme...**

---

### Site Variables under `Params`

| name                                   | type          | example                  | Description                                                                         |
| -------------------------------------- | ------------- | ------------------------ | ----------------------------------------------------------------------------------- |
| `env`                                  | string        | 'production'             | To set env to production                                                            |
| `title`                                | string        | 'My Blog'                | To set title                                                                        |
| `description`                          | string        | 'This is a blog of mine' | To set site description                                                             |
| `author`                               | string \|list | 'Me' \| ['Me','You']     | To show multiple Authors                                                            |
| `images`                               | string        | 'myimage.png'            | Link or path of image for opengraph, twitter-cards                                  |
| `ShowReadingTime`                      | boolean       | true \| false            | To show read time in post meta                                                      |
| `ShowShareButtons`                     | boolean       | true \| false            | To show/hide share buttons under post                                               |
| `defaultTheme`                         | string        | light \| dark \| auto    | To set default theme                                                                |
| `disableThemeToggle`                   | boolean       | true \| false            | To disable theme toggle icon shown besides label                                    |
| `disableSpecial1stPost`                | boolean       | true \| false            | To disable no-card special appearance of 1st post                                   |
| `hidemeta`                             | boolean       | true \| false            | To Hide meta elements : date, read-time, author and available-translations for page |
| `showtoc`                              | boolean       | true \| false            | To show/hide Table of Contents                                                      |
| `tocopen`                              | boolean       | true \| false            | To keep open ToC by default on page load                                            |
| `ShowPostNavLinks`                     | boolean       | true \| false            | Show Previous and Next Posts below a Post                                           |
| `ShowBreadCrumbs`                      | boolean       | true \| false            | Show BreadCrumb Navigation above single post/page                                   |
| `comments`                             | boolean       | true \| false            | To show/hide comments                                                               |
| `analytics.google.SiteVerificationTag` | string        | "XYZabc"                 | Site Verification Tag for Google Analytics                                          |
| `analytics.bing.SiteVerificationTag`   | string        | "XYZabc"                 | Site Verification Tag for Bing                                                      |
| `analytics.yandex.SiteVerificationTag` | string        | "XYZabc"                 | Site Verification Tag for Yandex                                                    |
| `fuseOpts`                             | -             | -                        | [Details](#fuseOpts)                                                                |
| `socialIcons`                          | -             | -                        | [Details](#socialIcons)                                                             |
| `label`                                | -             | -                        | [Details](#label)                                                                   |
| `assets`                               | -             | -                        | [Details](#assets)                                                                  |
| `cover`                                | -             | -                        | [Details](#cover)                                                                   |
| `profileMode`                          | -             | -                        | [Details](#profilemode)                                                             |

#### label

| name               | type    | example                 | Description                                      |
| ------------------ | ------- | ----------------------- | ------------------------------------------------ |
| `label.text`       | string  | 'Home'                  | To display different label text other than title |
| `label.icon`       | string  | '/apple-touch-icon.png' | To display a logo image in label                 |
| `label.iconHeight` | integer | 35                      | To set size of label logo image                  |

#### profileMode

| name                      | type    | example                                        | Description                                          |
| ------------------------- | ------- | ---------------------------------------------- | ---------------------------------------------------- |
| `profileMode.enabled`     | boolean | true \| false                                  | For enabling profileMode, needs to be explicitly set |
| `profileMode.title`       | string  | "Title"                                        | Title                                                |
| `profileMode.subtitle`    | string  | "subtitle here"                                | Subtitle                                             |
| `profileMode.imageUrl`    | string  | "image.png" \| "https://example.com/image.jpg" | Image URL or Link                                    |
| `profileMode.imageWidth ` | string  | "150"                                          | Width of image                                       |
| `profileMode.imageHeight` | string  | "150"                                          | Height of image                                      |
| `profileMode.imageTitle`  | string  | "This image is a picture of .."                | Title of image                                       |
| `profileMode.buttons`     | -       | -                                              | [Details](#profileModebuttons)                       |

##### profileMode.buttons

```yml
profileMode:
    buttons:
        - name: Archive
        url: "/archive"
        - name: Github
        url: "https://github.com/"
```

#### assets

| name                           | type    | example       | Description                                  |
| ------------------------------ | ------- | ------------- | -------------------------------------------- |
| `assets.favicon`               | string  | 'icon.ico'    | To set favicon, can be path or external link |
| `assets.disableHLJS`           | boolean | true \| false | To disable Highlight.js loading              |
| `assets.disableFingerprinting` | boolean | true \| false | To disable Sub-Resource integrity for assets |

#### cover

| name                     | type    | example       | Description                                             |
| ------------------------ | ------- | ------------- | ------------------------------------------------------- |
| `cover.linkFullImages`   | boolean | true \| false | To open full size cover images on click on cover        |
| `cover.responsiveImages` | boolean | true \| false | To enable/disable generation of responsive cover images |
| `cover.hidden`           | boolean | true \| false | To hide everywhere but not in structured data           |
| `cover.hiddenInList`     | boolean | true \| false | To hide on list pages and home                          |
| `cover.hiddenInSingle `  | boolean | true \| false | To hide on list pages and home                          |

#### fuseOpts

Refer: https://fusejs.io/api/options.html

```yml
fuseOpts:
    isCaseSensitive: false
    shouldSort: true
    location: 0
    distance: 1000
    threshold: 0.4
    minMatchCharLength: 0
    keys: ["title", "permalink", "summary", "content"] ##  can be less but not more than shown in list
```

#### socialIcons

```yml
socialIcons:
    - name: "<platform>"
        url: "<link>"
    - name: "<platform 2>"
        url: "<link2>"
```

---

### Page Variables

| Name              | Type          | Example               | Description                                                                         |
| ----------------- | ------------- | --------------------- | ----------------------------------------------------------------------------------- |
| `showtoc`         | boolean       | true \| false         | To show/hide Table of Contents                                                      |
| `tocopen`         | boolean       | true \| false         | To keep open ToC by default on page load                                            |
| `hidemeta`        | boolean       | true \| false         | To Hide meta elements : date, read-time, author and available-translations for page |
| `comments`        | boolean       | true \| false         | To show/hide comments                                                               |
| `description`     | string        | 'description text'    | Show Post Description under Title                                                   |
| `disableShare`    | boolean       | true \| false         | To hide/show share icons under a page                                               |
| `disableHLJS`     | boolean       | true \| false         | To disable Highlight.js loading                                                     |
| `searchHidden`    | boolean       | true \| false         | Hide page from search                                                               |
| `ShowBreadCrumbs` | boolean       | true \| false         | Show BreadCrumb Navigation above single post/page                                   |
| `author`          | string \|list | 'Me' \| ['Me','You']  | To show multiple Authors                                                            |
| `cover.image`     | string        | 'featured.jpg'        | To add a cover image                                                                |
| `cover.caption `  | string        | 'caption for image'   | To add caption to cover image                                                       |
| `cover.alt`       | string        | 'this is cover image' | Alternate text to show if image doesn't load/show up                                |
| `cover.relative`  | boolean       | true \| false         | To use relative path for cover image, used in hugo Page-bundles                     |
| `cover.hidden `   | boolean       | true \| false         | To hide on current single page                                                      |
| `weight `         | integer       | 5                     | To set page order or to pin a post to Top of list                                   |
