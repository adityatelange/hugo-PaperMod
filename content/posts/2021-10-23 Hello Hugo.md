---
title: "Hello Hugo, Meet SmugMug"
date: "2021-10-23"
description: "This blog is built with Hugo and served using a collaboration between Github and Cloudflare Pages."
tags: ["Blogging"]
categories: ["Nerdy"]
ShowToc: true
TocOpen: true
---

All I want is a way to share my photos easily (upload from my computer directly to an online gallery), post some thoughts online, and not pay a fortune to do so. I’ve tried Wordpress and Ghost multiple times over the years, but neither has been a good all in one solution to me.  Now, I’m using Hugo for blogging,  and SmugMug for my photo galleries.
<!--more-->

### Wordpress Isn’t Fun To Use

Wordpress is a terribly bloated system. In fact just making a post, adding a photo gallery, updating plugins, and dealing with hosting requirements is such an arduous process that more often than not, I decide not to post at all. 

Furthermore, Wordpress requires a powerful backend. I’ve tried numerous inexpensive hosting options, and while they work, if you throw too many photos into a post or upload too many photos to the media library at once, your site can crash.

Then there’s all the plugins with their money grabbing annual fee structures. Add to that the fact that certain plugins can break your site, or updates can cause compatibility issues with the rest of your site.

Not too mention that so many of the themes are poorly coded, cost too much for what they do, look awful, and  require their own batch of plugins.

It also makes countless thumbnails that eat up your limited server space. 

Backing up, restoring, and transferring to a new server is a complicated process and can result in loss of data.

### Ghost Is A Mess And The Devs Don’t Care About Improving Anything

Out of the box, Ghost is designed to be a subscription based blogging system designed to charge your readers a fee. Disabling subscriptions isn’t easy and requires editing the default theme and adding in custom CSS via code injection.

Ghost lacks many obvious features like the ability to search, comment, have a gallery with more than nine images, a lightbox for images, a way to delete images from the backend (they literally stay there forever unless you manually delete them from the server), and by default it resizes and recompresses your images leaving many orphaned files clogging up your storage. Backing up and restoring your Ghost blog to another server is a hair raising process.

Ghost Pro is a for profit business that operates as a non-profit. Go ahead and look into it, it’s scammy.

The founder John O’Nolan has personally banned me from Ghost Pro and their forums because I’ve asked questions about the aforementioned basic shortcomings like increasing the number of images in galleries, what features their CDN (Cloudflare) actually does vs a free Cloudflare account, and how to incorporate a lightbox into the default theme.

Don’t believe me? Go ahead and join the official Ghost forum and ask those questions. You’ll see that your posts will disappear and no answer will ever come. It’s taboo to even discuss these issues on their forums.

There’s a lot to like about Ghost though. It’s relatively lightweight, there are some nice free themes that are customizable, it’s built-in SEO  features surpass those of Wordpress, and posting/editing content is relatively painless. However, the cons outweighs the pros for me.

### SmugMug Is The Best Turnkey Solution For Sharing Your Photography On The Web

Once you have SmugMug customized the way you like it (using their WYSIWYG tools), you might want to tweak a few more settings with CSS. Fortunately, SmugMug's email support is top notch, they respond in a timely manner, and often tell you exactly which bits of code you need to enter on your site and where to put them.

After your site is all set up, you can easily upload from PhotoMechanic, Lightroom, or other third party uploaded. You can even have it copy photos from your Google or Amazon Prime accounts.

Storage is unlimited, the galleries look decent, and their lightbox works well enough (Photoswipe would be better though).

They also make it very easy to share multiple sizes of your images elsewhere on the web (like in this blog):

{{< figure align=center src="https://photos.smugmug.com/2021/2021-08-10-Yellowstone/i-5cGsHv2/3/5cf4a081/Ti/2021-08-09%20Yosemite%20National%20Park%2010-11-03-Ti.jpg" title= "Tiny" >}}

{{< figure align=center src="https://photos.smugmug.com/2021/2021-08-10-Yellowstone/i-5cGsHv2/3/5cf4a081/Th/2021-08-09%20Yosemite%20National%20Park%2010-11-03-Th.jpg" title= "Thumbnail" >}}

{{< figure align=center src="https://photos.smugmug.com/2021/2021-08-10-Yellowstone/i-5cGsHv2/3/5cf4a081/S/2021-08-09%20Yosemite%20National%20Park%2010-11-03-S.jpg" title= "Small" >}}

{{< figure align=center src="https://photos.smugmug.com/2021/2021-08-10-Yellowstone/i-5cGsHv2/3/5cf4a081/X4/2021-08-09%20Yosemite%20National%20Park%2010-11-03-X4.jpg" title="This last one is 2048 pixels wide, zoom in to see the full quality." >}}

The bottom line on SmugMug - good luck trying to build a site with the same functionality in Wordpress. Also, good luck finding as many features as SmugMug with another company. I've looked! Over the years, I've used SmugMug off and on, Zenfolio, 500px, Canon Irista, Google Picassa, Google Photos (still use for its search functionality), Amazon Photos as a backup for Google Photos (it's free), and even tried a few other options. In the end, I keep coming back to SmugMug. 

### Hugo Is An Easy Way To Get Your Thoughts Online

There's a bit of a learning curve to setting up a Hugo site, but it's not too hard to figure out. The [Quick Start](https://gohugo.io/getting-started/quick-start/) guide on the Hugo website is essential, but it’s not everything you need. My best advice is to find a theme with good documentation to help you as well. This site is using the Hugo PaperMod theme (at the time of this writing), and while the documentation isn’t perfect, it is quite helpful.

The cool thing about Hugo sites is that they perform very well without the need for a powerful or complicated back end. All you need is a place to serve static html files - like how the web was twenty plus years ago. This website is being served for free using collaboration between Github and Cloudflare Pages.

There are plenty of free themes available and new ones are being  created by a multitude of developers all the time. They are quite simplistic though and are limited in their functionality. There are no image gallery features built in to Hugo. Nor are there any lightboxes for images. There's no integrated commenting system or search functionality either. However, many themes have a search system built in. Comments can be handled with other services like Disqus. What it makes up for in lack of features though, it makes up in performance.

You can use your favorite Markdown editor and export it directly to your content folder. I'm using iA Writer. This particular article I was able to write on my iPhone and MacBook.

Backing up your Hugo site is as simple as copying your site folder to wherever you wish. There's no database, server, or backend to worry about!

### Conclusion - Having Two Sites Makes The Most Sense

For hosting and sharing your photos - SmugMug is probably the best choice.

For jotting ideas and blog posts down, there are a lot of options. If you're nerdy and like to tweak things some, then consider trying Hugo. After all, it's free. What have you got to loose?
