WonderMod is a fork of an original theme for [Hugo](https://gohugo.io/) called [PaperMod](https://github.com/adityatelange/hugo-PaperMod) (made by adityatelange). Since PaperMod isn't interested in a few changes such as removing inline JavaScript, which I personally require to harden my websites, I decided to maintain my own fork (I didn't want to keep overwriting a bunch of files as a fork workflow is much cleaner). Don't expect a ton of changes, and unless you know me, you probably don't want to use WonderMod.

Current "main" changes are as follows:
- Remove inline JavaScript ([2528906](https://github.com/Wonderfall/hugo-WonderMod/commit/2528906a38a1ca8a50b3e3a74ffcf9a01a0483a7))
- Improved YouTube shortcode ([4dc3bee](https://github.com/Wonderfall/hugo-WonderMod/commit/4dc3bee5477b6d22ce830faa13375f4c2e6a216b))
- Built-in Chroma instead of client-side syntax highlighting with HLJS (see [documentation](https://gohugo.io/content-management/syntax-highlighting/))
- Bunch of CSS and other changes (see [commit history](https://github.com/Wonderfall/hugo-WonderMod/commits/master))

Additional credits:
- [PaperModX](https://github.com/reorx/hugo-PaperModX/) by reorx

To enable syntax highlighting, put this in your `config.yml` :

```
markup:
    highlight:
        style: dracula
        noClasses: false
```

https://gohugo.io/getting-started/configuration-markup#highlight