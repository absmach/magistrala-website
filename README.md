# Magistrala Website

This repository contains the source code for the [Magistrala](https://magistrala.absmach.eu) website and blog. It's a static site generated using a custom Go-based builder.

## Project Structure

- `content/blogs/`: Markdown files for blog posts.
- `img/blogs/`: Images used in blog posts.
- `scripts/`: The Go-based static site generator.
- `scripts/templates/`: HTML templates for the blog listing and individual posts.
- `blog/`: Generated static files (do not edit manually).
- `index.html`: The main landing page.

## Prerequisites

- **Go**: Required to run the blog builder.
- **Make**: Used for task automation.

## Getting Started

### 1. Build the Site

To generate the blog's static files from the markdown content:

```bash
make build
```

## Documentation

- [How to Write a Blog Post](WRITING.md)
