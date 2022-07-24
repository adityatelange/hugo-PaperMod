## WonderMod (PaperMod)

<p align="center">
  <img src="https://raw.githubusercontent.com/wonderfall/hugo-WonderMod/master/.github/assets/web-capture.jpeg" title="WonderMod" alt="WonderMod image">
</p>

### What is this?
WonderMod is a fork of an original theme for [Hugo](https://gohugo.io/) called [PaperMod](https://github.com/adityatelange/hugo-PaperMod) (made by adityatelange). Since PaperMod isn't interested in a few changes such as removing inline JavaScript, which I personally require to harden my websites, I decided to maintain my own fork (I didn't want to keep overwriting a bunch of files as a fork workflow is much cleaner). Don't expect a ton of changes, and unless you know me, you probably don't want to use WonderMod.

### Main changes
Current "main" changes are as follows:
- Remove inline JavaScript ([2528906](https://github.com/Wonderfall/hugo-WonderMod/commit/2528906a38a1ca8a50b3e3a74ffcf9a01a0483a7))
- Improved YouTube shortcode ([4dc3bee](https://github.com/Wonderfall/hugo-WonderMod/commit/4dc3bee5477b6d22ce830faa13375f4c2e6a216b))
- Built-in Chroma instead of client-side syntax highlighting with HLJS ([841141](https://github.com/Wonderfall/hugo-WonderMod/commit/8411411a671785d098ffff9323b064acc0c16cb4))
- Responsive Table of Contents with side display support ([2303605](https://github.com/Wonderfall/hugo-WonderMod/commit/230360552b44a8e45496da76ae539a63ad0a3f5a))
- Bunch of CSS and other changes (see [commit history](https://github.com/Wonderfall/hugo-WonderMod/commits/master))

### Credits
Additional credits:
- [PaperModX](https://github.com/reorx/hugo-PaperModX/) by reorx

### Configure
Most of the installation process and settings are shared with the original PaperMod, so check out [their documentation](https://github.com/adityatelange/hugo-PaperMod/wiki/Installation). One noticeable difference though is that in order to enable syntax highlighting, you have to add this to your `config.yml` :

```
markup:
    highlight:
        style: dracula
        noClasses: false
        guessSyntax: true
```

See [Hugo documentation](https://gohugo.io/getting-started/configuration-markup#highlight) for more options.