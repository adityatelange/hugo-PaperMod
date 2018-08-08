# hugoBasicExample

This is an example site for [Hugo](https://gohugo.io/).

It is intended to be a demo site for the various [Hugo themes](https://themes.gohugo.io/).

# Using

1. [Install Hugo](https://gohugo.io/overview/installing/)
2. Clone this repository
```bash
git clone https://github.com/gohugoio/hugoBasicExample.git
cd hugoBasicExample
```
3. Clone the repository you want to test. If you want to test all hugo themes, you can clone [the full list](https://github.com/gohugoio/hugoThemes)
```bash
git clone --recursive https://URL/OF/YOUR/THEME themes/YOURTHEME
```
or
```bash
git clone --recursive https://github.com/gohugoio/hugoThemes.git themes
```
4. Run Hugo and select the theme of your choosing
```bash
hugo server -t YOURTHEME
```
