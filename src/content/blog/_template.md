---
title: Your post title
description: One sentence for the blog list and link previews.
date: 2026-11-03
lang: en
tags: [flutter, ble]
draft: true
translation: name-of-the-other-language-file
---

Copy this file to `src/content/blog/my-post-name.md` to start a post. The file name becomes
the address: `/blog/my-post-name/`. Use lowercase letters, numbers and hyphens.
Files that start with `_`, like this one, are ignored.

Required fields: `title`, `description`, `date` (YYYY-MM-DD) and `lang` (`en` or `pt`).

Optional fields, which you can delete:

- `tags`: a short list shown at the end of the post.
- `draft: true`: the post only shows in `npm run dev` and is never published.
- `translation`: the file name, without `.md`, of the same post in the other language.
  Set it in one of the two files. Without it, the post shows on both language lists
  with a small language label.

Don't add a `#` heading, because `title` is already the page heading. Start at `##`.

## A section heading

Normal Markdown works: **bold**, *italics*, [links](https://example.com), lists, quotes and tables.

Code blocks are highlighted when you name the language:

```dart
void main() => print('Hello');
```

Put images in `public/blog-images/` and reference them like this:

![Describe the image here](/blog-images/my-image.png)

Commit the file and push to `main` to publish. A missing or invalid required field stops the
deploy, and the current site stays live. Remember that this is public, so keep client details out.
