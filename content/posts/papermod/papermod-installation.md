---
title: "Installation | Update"
summary: Read Install and Update instructions here
date: 2021-01-20
series: ["PaperMod"]
weight: 1
aliases: ["/papermod-installation"]
tags: ["PaperMod"]
author: "Aditya Telange"
---

## Intro

-   **We'll be using `yml/yaml` format for all examples down below, I recommend using `yml` over `toml` as it is easier to read.**
-   You can find any [YML to TOML](https://www.google.com/search?q=yml+to+toml) converters if necessary.

---

## Guide

Follow [Quick Start](https://gohugo.io/getting-started/quick-start/) guide to setup hugo and create a new site.

> Note: Use -f to select yml format
>
> `hugo new site <name of site> -f yml`

Make sure you install latest version of **`hugo(>=0.83.0)`**.

After you have created a new site, at [Step 3](https://gohugo.io/getting-started/quick-start/#step-3-add-a-theme) follow the steps:

### Method 1

Inside the folder of your Hugo site, run:

```bash
git clone https://github.com/adityatelange/hugo-PaperMod themes/PaperMod --depth=1
```

**Note**: You may use ` --branch v5.0` to end of above command if you want to stick to specific release.

> Updating theme :
>
> ```bash
> cd themes/PaperMod
> git pull
> ```

### Method 2

you can use as [submodule](https://www.atlassian.com/git/tutorials/git-submodule) with

```bash
git submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod --depth=1
git submodule update --init --recursive # needed when you reclone your repo (submodules may not get cloned automatically)
```

**Note**: You may use ` --branch v5.0` to end of above command if you want to stick to specific release.

> Updating theme :
>
> ```bash
> git submodule update --remote --merge
> ```

### Method 3

Or you can Download as Zip from Github Page and extract in your themes directory

Direct Links:

-   [Master Branch (Latest)](https://github.com/adityatelange/hugo-PaperMod/archive/master.zip)
-   [v5.0](https://github.com/adityatelange/hugo-PaperMod/archive/v5.0.zip)
-   [v4.0](https://github.com/adityatelange/hugo-PaperMod/archive/v4.0.zip)
-   [v3.0](https://github.com/adityatelange/hugo-PaperMod/archive/v3.0.zip)
-   [v2.0](https://github.com/adityatelange/hugo-PaperMod/archive/v2.0.zip)
-   [v1.0](https://github.com/adityatelange/hugo-PaperMod/archive/v1.0.zip)

### Finally ...

Add in `config.yml`:

```yml
theme: "PaperMod"
```

---

## Quick Links

-   ### [Papermod - Features](../papermod-features)

-   ### [Papermod - FAQs](../papermod-how-to)

-   ### [Papermod - Variables](../papermod-variables)

-   ### [Papermod - Icons](../papermod-icons)

-   ### [ChangeLog](https://github.com/adityatelange/hugo-PaperMod/releases)

---

## Sample `config.yml`

> **Example Site Structure is present here**: [exampleSite](https://github.com/adityatelange/hugo-PaperMod/tree/exampleSite/)

**Use appropriately**

```yml
baseURL: "https://examplesite.com/"
title: ExampleSite
paginate: 5
theme: PaperMod

enableRobotsTXT: true
buildDrafts: false
buildFuture: false
buildExpired: false

googleAnalytics: UA-123-45

minify:
    disableXML: true
    minifyOutput: true

params:
    env: production # to enable google analytics, opengraph, twitter-cards and schema.
    title: ExampleSite
    description: "ExampleSite description"
    keywords: [Blog, Portfolio, PaperMod]
    author: Me
    # author: ["Me", "You"] # multiple authors
    images: ["<link or path of image for opengraph, twitter-cards>"]
    DateFormat: "January 2, 2006"
    defaultTheme: auto # dark, light
    disableThemeToggle: false

    ShowReadingTime: true
    ShowShareButtons: true
    ShowPostNavLinks: true
    ShowBreadCrumbs: true
    ShowCodeCopyButtons: false
    disableSpecial1stPost: false
    disableScrollToTop: false
    comments: false
    hidemeta: false
    hideSummary: false
    showtoc: false
    tocopen: false

    assets:
        # disableHLJS: true # to disable highlight.js
        # disableFingerprinting: true
        favicon: "<link / abs url>"
        favicon16x16: "<link / abs url>"
        favicon32x32: "<link / abs url>"
        apple_touch_icon: "<link / abs url>"
        safari_pinned_tab: "<link / abs url>"

    label:
        text: "Home"
        icon: /apple-touch-icon.png
        iconHeight: 35

    # profile-mode
    profileMode:
        enabled: false # needs to be explicitly set
        title: ExampleSite
        subtitle: "This is subtitle"
        imageUrl: "<img location>"
        imageWidth: 120
        imageHeight: 120
        imageTitle: my image
        buttons:
            - name: Posts
              url: posts
            - name: Tags
              url: tags

    # home-info mode
    homeInfoParams:
        Title: "Hi there \U0001F44B"
        Content: Welcome to my blog

    socialIcons:
        - name: twitter
          url: "https://twitter.com/"
        - name: stackoverflow
          url: "https://stackoverflow.com"
        - name: github
          url: "https://github.com/"

    analytics:
        google:
            SiteVerificationTag: "XYZabc"
        bing:
            SiteVerificationTag: "XYZabc"
        yandex:
            SiteVerificationTag: "XYZabc"

    cover:
        hidden: true # hide everywhere but not in structured data
        hiddenInList: true # hide on list pages and home
        hiddenInSingle: true # hide on single page

    editPost:
        URL: "https://github.com/<path_to_repo>/content"
        Text: "Suggest Changes" # edit text
        appendFilePath: true # to append file path to Edit link

    # for search
    # https://fusejs.io/api/options.html
    fuseOpts:
        isCaseSensitive: false
        shouldSort: true
        location: 0
        distance: 1000
        threshold: 0.4
        minMatchCharLength: 0
        keys: ["title", "permalink", "summary", "content"]
menu:
    main:
        - identifier: categories
          name: categories
          url: /categories/
          weight: 10
        - identifier: tags
          name: tags
          url: /tags/
          weight: 20
        - identifier: example
          name: example.org
          url: https://example.org
          weight: 30
# Read: https://github.com/adityatelange/hugo-PaperMod/wiki/FAQs#using-hugos-syntax-highlighter-chroma
# pygmentsUseClasses: true
# markup:
#     highlight:
#         # anchorLineNos: true
#         codeFences: true
#         guessSyntax: true
#         lineNos: true
#         style: monokai
```

---

## Sample `Page.md`

```yml
---
title: "My 1st post"
date: 2020-09-15T11:30:03+00:00
# weight: 1
# aliases: ["/first"]
tags: ["first"]
author: "Me"
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "Desc Text."
canonicalURL: "https://canonical.url/to/page"
disableHLJS: true # to disable highlightjs
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
cover:
    image: "<image path/url>" # image path/url
    alt: "<alt text>" # alt text
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: true # only hide on current single page
editPost:
    URL: "https://github.com/<path_to_repo>/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---
```

You can use it by creating `archetypes/post.md`

```shell
hugo new --kind post <name>
```

---
