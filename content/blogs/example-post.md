---
title: "Welcome to Your Static Markdown Blog"
slug: "example-post"
excerpt: "This is an example blog post demonstrating all the features of your new static markdown blog. Learn how to write posts, use markdown syntax, and deploy your blog."
description: "Complete guide to writing your first blog post with markdown, including syntax examples, frontmatter configuration, and best practices."
date: "2024-01-15"
author:
  name: "Blog Author"
  picture: "/assets/team/johnDoe.jpg"
coverImage: "/assets/blog/welcome.jpg"
category: blog
featured: main
tags:
  - Getting Started
  - Markdown
  - Tutorial
readingTime: "5 min"
---

# Welcome to Your Blog!

This is an example post showing you how to write content in Markdown. Below are examples of all the formatting options available.

## Headings

You can create headings from H1 to H6 using `#` symbols:

```markdown
# H1 Heading

## H2 Heading

### H3 Heading
```

## Text Formatting

You can make text **bold** using `**bold**` or _italic_ using `*italic*`. You can also use `inline code` with backticks.

## Lists

### Unordered Lists

- First item
- Second item
  - Nested item
  - Another nested item
- Third item

### Ordered Lists

1. First step
2. Second step
3. Third step

## Code Blocks

Here's a Python code example:

```python
def hello_world():
    """Print hello world"""
    print("Hello, World!")

# Call the function
hello_world()
```

And here's JavaScript:

```javascript
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

greet("World");
```

## Blockquotes

> This is a blockquote. It can span multiple lines and is great for highlighting important information or quotes from other sources.
>
> You can continue the blockquote on multiple paragraphs.

## Links and Images

You can create [links to other pages](https://example.com) easily.

Images work similarly:

```markdown
![Alt text](/assets/blog/image.jpg)
```

## Tables

| Feature           | Supported | Notes           |
| ----------------- | --------- | --------------- |
| Markdown          | ✅        | Full support    |
| Code highlighting | ✅        | Via Pygments    |
| Tables            | ✅        | GitHub-flavored |
| Images            | ✅        | Responsive      |

## Getting Started

To create your own posts:

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter at the top (see this file as an example)
3. Write your content in Markdown
4. Run `make build` to generate HTML
5. Run `make serve` to preview locally

## Deployment

When you're ready to deploy:

```bash
# Build all posts
make build-force

# Deploy to your hosting platform
# (See docs/DEPLOYMENT.md for detailed guides)
```

## Need Help?

Check out the documentation in the `docs/` folder:

- **SETUP.md** - Installation and configuration
- **WRITING.md** - Complete markdown guide
- **CUSTOMIZATION.md** - Theming and styling
- **DEPLOYMENT.md** - Deploy to various platforms

Happy blogging! 🚀
