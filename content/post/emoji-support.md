+++
author = "Hugo Authors"
title = "Emoji Support"
date = "2019-03-05"
description = "Guide to emoji usage in Hugo"
tags = [
    "emoji",
]
emoji = "<span class='nowrap'> :orc: <code>:orc:</code></span><span class='nowrap'> :v_paw_fk1: <code>:v_paw_fk1:</code></span><span class='nowrap'> :cannabis_leaf: <code>:cannabis_leaf:</code></span>"
+++

Emoji can be enabled in a Hugo project in a number of ways. 
<!--more-->
The [`emojify`](https://gohugo.io/functions/emojify/) function can be called directly in templates or [Inline Shortcodes](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes). 

To enable emoji globally, set `enableEmoji` to `true` in your site’s [configuration](https://gohugo.io/getting-started/configuration/) and then you can type emoji shorthand codes directly in content files; e.g.


<p><span class="nowrap"><span class="emojify">🙈</span> <code>:see_no_evil:</code></span>  <span class="nowrap"><span class="emojify">🙉</span> <code>:hear_no_evil:</code></span>  <span class="nowrap"><span class="emojify">🙊</span> <code>:speak_no_evil:</code></span></p>
<br>

The [Emoji cheat sheet](http://www.emoji-cheat-sheet.com/) is a useful reference for emoji shorthand codes.

***

**N.B.** The above steps enable Unicode Standard emoji characters and sequences in Hugo, however the rendering of these glyphs depends on the browser and the platform. To style the emoji you can either use a third party emoji font or a font stack; e.g.

{{< highlight html >}}
.emoji {
font-family: Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,Segoe UI Symbol,Android Emoji,EmojiSymbols;
}
{{< /highlight >}}

***


If you feel restricted by Unicode Standard emoji and want to use custom emoji the [`replaceRE`](https://gohugo.io/functions/replacere/#readout) function makes it easy to perform Static Image Replacement in Hugo.

In this example we will be using emoji from the [Mutant Standard](https://mutant.tech/) set.

- Do not use `enableEmoji` in your Hugo project's configuration

- Store the icons of the custom emoji set under `/static/` 

- Use the shorthand codes provided by the custom emoji set in your content files e.g. `:orc:`

- In your templates execute the Image Replacement like so:

{{< highlight html >}}
{{ replaceRE "(\\:([a-zA-Z0-9_]*)\\:)" `<img class="emoji" src="/${2}.svg" alt="${1}" title="${1}">` .Content | markdownify | safeHTML }}
{{< /highlight >}}


{{< css.inline >}}
<p>{{ replaceRE "(\\ :([a-zA-Z0-9_]*)\\: )" `<img class="emoji" src="/${2}.svg" alt="${1}" title="${1}">` .Page.Params.emoji | safeHTML }}</p>
<style>
	.emoji {
	display: inline-block;
	margin-left: 3px;
	margin-right: 3px;
	height: 5.5rem;
	width: 5.5rem;
	vertical-align: middle;
}
.emojify {
	font-family: Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,Segoe UI Symbol,Android Emoji,EmojiSymbols;
	font-size: 5rem;
	vertical-align: middle;
}
@media screen and (max-width:650px) {
    .nowrap {
	display: block;
	margin: 25px 0;
}
}
</style>
{{< /css.inline >}}


**N.B.** The above RegEx captures all alphanumerics and underscores within two colon `:` characters (amend it according to your custom emoji set's specification).