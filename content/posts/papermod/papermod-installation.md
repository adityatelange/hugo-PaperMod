---
title: "Papermod - Installation"
date: 2020-09-15T11:30:03+05:30
series: ["PaperMod"]
weight: 1
hidemeta: true
aliases: ['/papermod-installation']
tags: ['PaperMod']
author: "Aditya Telange"
---

Follow [this](https://gohugo.io/getting-started/quick-start/) guide to setup hugo and create a new site.
Make sure you install latest version of `hugo`(>=0.57.1).

After you have created a new site, at [Step 3](https://gohugo.io/getting-started/quick-start/#step-3-add-a-theme) follow the steps:

Inside the folder of your Hugo site, run:

> ```console
> git clone https://github.com/adityatelange/hugo-PaperMod themes/hugo-PaperMod --depth=1
> ```
> > Updating theme :
> > ```console
> > cd themes/hugo-PaperMod
> > git pull
> > ```
> >

**or** you can use as [submodule](https://www.atlassian.com/git/tutorials/git-submodule) with
>
> ```console
> git submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/hugo-PaperMod
> ```
> > Updating theme with submodule :
> > ```console
> > git submodule update --remote --merge
> > ```
> >
Then change in `config.toml`:
>
```yml
theme: "hugo-PaperMod"
```

Example Site Structure is present here: [exampleSite](https://github.com/adityatelange/hugo-PaperMod/tree/exampleSite/)

---

###  [Papermod - Features](../papermod-features)
###  [Papermod - How to Guide](../papermod-how-to-guide)
###  [Papermod - Icons](../papermod-icons)