---
title: 'Using Hugo page bundles'
description: 'Page bundles are an optional way to organize content within Hugo.'
summary: "Page bundles are an optional way to organize page resources within Hugo. You can opt-in to using page bundles in Hugo Clarity with `usePageBundles` in your site configuration --- or in a page's front matter." # For the post in lists.
date: '2022-03-24'
aliases:
  - hugo-page-bundles
author: 'Hugo Authors'
usePageBundles: true

featureImage: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' # Top image on post.
# featureImageAlt: 'Description of image' # Alternative text for featured image.
# featureImageCap: 'This is the featured image.' # Caption (optional).
# thumbnail: 'thumbnail.jpg' # Image in lists of posts.
# shareImage: 'share.jpg' # For SEO and social media snippets.

categories:
  - syntax
tags:
  - Hugo
series: Themes Guide
# the following overrides the settings from params.toml:
showRelatedInArticle: true
showRelatedInSidebar: true
---

[Page bundles](https://gohugo.io/content-management/page-bundles/) are an optional way to [organize page resources](https://gohugo.io/content-management/page-resources/) within Hugo.

You can opt-in to using page bundles in Hugo Clarity with `usePageBundles` in your site configuration or in a page's front matter. [Read more about `usePageBundles`.](https://github.com/chipzoller/hugo-clarity#organizing-page-resources)

With page bundles, resources for a page or section, like images or attached files, live **in the same directory as the content itself** rather than in your `static` directory.

Hugo Clarity supports the use of [leaf bundles](https://gohugo.io/content-management/page-bundles/#leaf-bundles), which are any directories within the `content` directory that contain an `index.md` file. Hugo's documentation gives this example:

```text
content
├── about
│   ├── index.md
├── posts
│   ├── my-post
│   │   ├── content1.md
│   │   ├── content2.md
│   │   ├── image1.jpg
│   │   ├── image2.png
│   │   └── index.md
│   └── my-other-post
│       └── index.md
│
└── another-section
    ├── ..
    └── not-a-leaf-bundle
        ├── ..
        └── another-leaf-bundle
            └── index.md
```

<blockquote>
In the above example `content` directory, there are four leaf
bundles:

**about**: This leaf bundle is at the root level (directly under
    `content` directory) and has only the `index.md`.

**my-post**: This leaf bundle has the `index.md`, two other content
    Markdown files and two image files. **image1** is a page resource of `my-post`
    and only available in `my-post/index.md` resources. **image2** is a page resource of `my-post`
    and only available in `my-post/index.md` resources.

**my-other-post**: This leaf bundle has only the `index.md`.

**another-leaf-bundle**: This leaf bundle is nested under couple of
    directories. This bundle also has only the `index.md`.

_The hierarchy depth at which a leaf bundle is created does not matter,
as long as it is not inside another **leaf** bundle._
</blockquote>

### Advantages to using page bundles

The image below is part of the bundle of this page, and is located at `content/post/bundle/building.png`. Because it's within this page's bundle, the markup for the image only has to specify the image's filename, `building.png`.

![A building](building.png)

If you ever change the name of the directory in which this Markdown file and the image reside, the reference to the image would not need to be updated.

In addition to more cleanly organizing your content and related assets, when using page bundles, **Hugo Clarity will automatically generate markup for modern image formats**, which are smaller in file size.

For instance, when you reference an image like `building.png`, Hugo Clarity will check to see if the same image (based on filename) exists in [WebP](https://en.wikipedia.org/wiki/WebP), [AVIF](https://en.wikipedia.org/wiki/AVIF) or [JXL](https://en.wikipedia.org/wiki/JPEG_XL) formats. If you inspect the image above, you'll see a `<source>` element for `building.webp`, because that file is also present. Hugo Clarity will only include the markup if these images exist.

Browsers that [support these formats and the `<picture>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture#the_type_attribute) will load them, while browsers that do not will fall-back to the default image. [Read more about this process.](https://github.com/chipzoller/hugo-clarity#support-for-modern-image-formats)

Finally, note that page assets can be further managed and refined [within the page's front matter](https://gohugo.io/content-management/page-resources/#page-resources-metadata) if you wish, and are not limited to images alone.

### Disadvantages to using page bundles

Page resources in a bundle are only available to the page with which they are bundled &#8212; that means you can't include an image with one page and then reference it from another.

Images that are being used in multiple places are more appropriate for your [Hugo `assets` directory](https://gohugo.io/hugo-pipes/introduction/). Unlike files in the Hugo `static` directory, files in the `assets` directory can be run through Hugo Pipes, which [includes image processing](https://gohugo.io/content-management/image-processing/).
