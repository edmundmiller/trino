# Trino Documentation - Fumadocs

This is a modern documentation site for Trino built with [Fumadocs](https://fumadocs.vercel.app/).

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, pnpm, or yarn

### Installation

Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation.

### Building

Build the documentation for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
.
├── app/                  # Next.js app directory
│   ├── docs/            # Documentation pages
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── content/             # MDX documentation content
│   └── docs/           # Documentation files
├── guides/             # Additional guides (including Fumadocs quick start)
├── lib/                # Utility functions
│   └── source.ts       # Content source configuration
└── source.config.ts    # Fumadocs MDX configuration
```

## Writing Documentation

Documentation files are written in MDX format and stored in the `content/docs` directory.

### Creating a New Page

1. Create a new `.mdx` file in `content/docs/`
2. Add frontmatter with title and description
3. Write your content using Markdown/MDX

Example:

```mdx
---
title: My Page
description: A brief description
---

# My Page

Content goes here...
```

### Organizing Pages

Update `content/docs/meta.json` to control the sidebar navigation order.

## Learn More

- [Fumadocs Documentation](https://fumadocs.vercel.app/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Trino Website](https://trino.io)

## Contributing

We welcome contributions to the documentation! Please follow the same process as code contributions.

For more detailed information about the Fumadocs setup, see [FUMADOCS_SETUP.md](FUMADOCS_SETUP.md).
