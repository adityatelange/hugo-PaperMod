---
author: Hugo Authors
title: Using Notices
date: 2021-08-20
description: Using Notices functionality within this theme
---

The "Notices" shortcode enables you to call out pieces of information - sidebars, warnings, tips, etc.

To create a notice on a page, you can use the `notice` shortcode.  
You use the `notice` shortcode, with the first parameter being one of `note`, `info`, `tip`, and `warning`.  Then add a title for your 
note in quotes as the second parameter.  The inner body of the note can be whatever markdown you want to create.

The following shortcode syntax within a markdown doc:
```
{{%/* notice note "Note" */%}}
This is a standard "note" style.
{{%/* /notice */%}}
```
will render as:

{{% notice note "Note" %}}
This is a standard "note" style.
{{% /notice %}}

The other three variants follow.

{{% notice info "Info" %}}
Here is the "info" style.
{{% /notice %}}

{{% notice tip "Tip" %}}
Here is a "tip" variant of a notice.
{{% /notice %}}

{{% notice warning "Warning" %}}
Here is the "warning" flavor of a notice.
{{% /notice %}}


Also note that the content of a notice can contain anything you could put on a normal page - as shown below:

{{% notice tip "Complex Notices are Possible!" %}}
This is a notice that has a lot of various kinds of content in it.  

* Here is a bulleted list
* With more than one bullet 
    * And even more than one level

Code blocks are fine here, too....
```csharp
public void SayHello()
{
    Console.WriteLine("Hello, world!");
}
```
{{% /notice %}}


{{% notice tip "Productivity Booster!" %}}
If you're using VS Code for your editing, copy the `.vscode\clarity.code-snippets` file into a `.vscode` root folder on your repo.  This will enable you to type
`note` then `<tab>` then choose with up/down arrows which flavor notice you want, then `<tab>` again to provide a title, then `<tab>` to add your content!

![](../images/Note-Snippet.gif)

To use the snippet, you need to first **enable quickSuggestions for Markdown** (one time only):

1. Go to `Preferences->Settings` then search for `quickSuggestions`
1. Follow the link to Edit in settings.json
1. Toward the bottom of the file, paste in the following JSON:
```
"[markdown]":  {
    "editor.quickSuggestions": true
  }
```
4. Close and save the settings.
{{% /notice %}}
