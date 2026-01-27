# How to Write and Publish a Blog Post

This guide explains the process of creating a new blog post, testing it locally, and submitting it for publication.

## 1. Create the Content

### Create the Markdown File

Add a new `.md` file in the `content/blogs/` directory. The filename should be descriptive (e.g., `my-new-feature.md`).

### Add Frontmatter

Every post **must** start with YAML frontmatter between `---` markers:

```yaml
---
title: "Your Post Title"
slug: "url-friendly-slug"
excerpt: "A compelling 2-3 sentence summary"
description: "SEO meta description (150-160 characters)"
date: "2024-01-15"
author:
  name: "Jane Doe"
  picture: "/assets/team/jane-doe.jpg"
coverImage: "/assets/blog/my-post-cover.jpg"
ogImage:
  url: "/assets/blog/my-post-og.jpg"
category: blog
featured: main
tags:
  - Web Development
  - Python
---
```

### Write the Post

Below the closing `---`, write in standard Markdown.

## Frontmatter Reference

### Required Fields

| Field            | Format               | Description              | Example                      |
| ---------------- | -------------------- | ------------------------ | ---------------------------- |
| `title`          | String               | Post title (50-60 chars) | `"How to Build a Blog"`      |
| `slug`           | lowercase-hyphenated | URL identifier           | `"how-to-build-blog"`        |
| `excerpt`        | 2-3 sentences        | Listing page summary     | `"Learn how to..."`          |
| `description`    | 150-160 chars        | SEO meta description     | `"A comprehensive guide..."` |
| `date`           | YYYY-MM-DD           | Publication date         | `"2024-01-15"`               |
| `author.name`    | String               | Author's full name       | `"John Smith"`               |
| `author.picture` | Path                 | Avatar image path        | `"/assets/team/john.jpg"`    |

### Optional Fields

| Field          | Options                            | Default          | Description           |
| -------------- | ---------------------------------- | ---------------- | --------------------- |
| `category`     | blog, announcement, news, tutorial | `blog`           | Post category         |
| `featured`     | `main` or omit                     | -                | Featured badge        |
| `tags`         | List of strings                    | `[]`             | Post tags             |
| `readingTime`  | `"5 min"`                          | Auto-calculated  | Reading time estimate |
| `coverImage`   | Path                               | None             | Header image          |
| `ogImage.url`  | Path                               | Cover or default | Social media image    |
| `canonicalUrl` | Full URL                           | Auto-generated   | Canonical URL         |

## 2. Add Images (Optional)

If your post includes images:

1. Create a directory named after your post's slug in `img/blogs/`. For example: `img/blogs/my-new-feature/`.
2. Place your images there.
3. Reference them in your Markdown: `![Description](/img/blogs/my-new-feature/screenshot.png)`.

## 3. Test Locally

After writing your post, you should build the site and preview the generated HTML.

1. **Build the blog:**

   ```bash
   make build
   ```

This generates the static site into the output folder (e.g. blog/).

2. **Open with a Live Server**
   Use a live server to preview the generated files.
   - Option A - VS Code Live Server (recommended)
     - Install the Live Server extension in VS Code
     - Open the project folder in VS Code
     - Navigate to the generated output directory (e.g. blog/)
     - Right-click index.html → “Open with Live Server”
   - Option B - Any static file server  
     You can also use other tools, for example:
   ```bash
   python3 -m http.server 8000
   ```
3. **Verify Your Post**  
   Open the local URL shown by the Live Server and check:
   - Your post appears on the blog listing page
   - The post page renders correctly
   - Images load
   - Links work

If something looks off, fix your Markdown or frontmatter and run make build again.

## 4. Publish via Pull Request

1. **Create a new branch:**
   ```bash
   git checkout -b blog/my-new-feature
   ```
2. **Commit your changes:**
   ```bash
   git add content/blogs/my-new-feature.md img/blogs/my-new-feature/
   git commit -m "Add blog post: My New Feature"
   ```
3. **Push and open a PR:**
   Push your branch to GitHub and open a Pull Request against the `main` branch.
4. **CI Build:**
   Once your PR is merged into `main`, the GitHub Action will automatically trigger a build to update the live site.
