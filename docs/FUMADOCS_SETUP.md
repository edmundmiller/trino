# Fumadocs Setup for Trino Documentation

This document describes the Fumadocs setup for Trino documentation.

## Overview

Fumadocs is a modern documentation framework built on Next.js and React. This setup provides:

- **Fast**: Built on Next.js for optimal performance
- **Interactive**: React components for rich interactive documentation
- **MDX Support**: Write documentation in MDX (Markdown + JSX)
- **Modern UI**: Beautiful, responsive documentation interface
- **Type-safe**: Full TypeScript support

## Directory Structure

```
docs/
├── app/                    # Next.js application
│   ├── docs/              # Documentation routes
│   │   ├── [[...slug]]/   # Dynamic documentation pages
│   │   └── layout.tsx     # Documentation layout
│   ├── layout.tsx         # Root layout
│   ├── layout.config.tsx  # Navigation configuration
│   ├── page.tsx          # Home page
│   └── global.css        # Global styles
├── content/              # Documentation content
│   └── docs/            # MDX documentation files
│       ├── index.mdx    # Welcome page
│       ├── quick-start.mdx
│       ├── overview.mdx
│       └── meta.json    # Navigation metadata
├── guides/              # Additional guides
│   └── quick-start.mdx  # Fumadocs framework guide
├── lib/                 # Utilities
│   └── source.ts       # Content source configuration
├── node_modules/       # Dependencies
├── next.config.mjs     # Next.js configuration
├── package.json        # Project dependencies
├── postcss.config.mjs  # PostCSS configuration
├── source.config.ts    # Fumadocs MDX configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm (or pnpm, yarn, bun)

### Installation

From the `docs` directory:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The documentation will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

Build the documentation:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Writing Documentation

### Creating a New Page

1. Create a new `.mdx` file in `content/docs/`:

```mdx
---
title: Your Page Title
description: A brief description of the page
---

# Your Page Title

Content goes here...
```

2. Update `content/docs/meta.json` to add the page to navigation:

```json
{
  "title": "Documentation",
  "pages": ["index", "quick-start", "your-new-page"]
}
```

### MDX Features

MDX allows you to use React components in your Markdown:

```mdx
---
title: Example
---

# My Documentation

Regular markdown content...

<CustomComponent prop="value" />

More markdown...
```

### Organizing Content

- **Folders**: Create subdirectories in `content/docs/` for organization
- **meta.json**: Control navigation order and structure
- **Frontmatter**: Add metadata to each page (title, description, etc.)

## Migrating from Sphinx

This Fumadocs setup replaces the previous Sphinx-based documentation system:

### Previous Sphinx Documentation
- **Format**: ReStructuredText (.rst)
- **Build**: Used Python/Sphinx
- **Output**: `docs/target/html/`

### New Fumadocs Documentation
- **Location**: `docs/`
- **Format**: MDX (.mdx)
- **Build**: Uses Node.js/Next.js
- **Output**: `.next/` directory

### Migration Notes

If you have existing RST documentation to migrate, you can:
1. Convert RST files to Markdown/MDX format
2. Update internal links and references
3. Add frontmatter metadata to each file
4. Test the converted content locally

## Configuration

### Navigation

Edit `app/layout.config.tsx` to customize the navigation bar:

```tsx
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Trino Documentation',
  },
  links: [
    {
      text: 'Trino Website',
      url: 'https://trino.io',
    },
  ],
};
```

### Sidebar

The sidebar is automatically generated from `content/docs/meta.json` and the file structure.

### Theme

Fumadocs includes built-in dark mode support. Customize colors in `tailwind.config.js`.

## Deployment

### Static Export

Fumadocs supports static export for hosting on any static file server:

1. Add to `next.config.mjs`:

```js
const config = {
  output: 'export',
  reactStrictMode: true,
};
```

2. Build:

```bash
npm run build
```

The static files will be in the `out/` directory.

### Vercel

Deploy to Vercel with zero configuration:

```bash
npm install -g vercel
vercel
```

### Other Platforms

The built Next.js application can be deployed to:
- Netlify
- AWS Amplify
- Google Cloud
- Azure Static Web Apps
- Any Node.js hosting provider

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Clear cache: `rm -rf .next node_modules`
2. Reinstall: `npm install`
3. Rebuild: `npm run build`

### Port Already in Use

If port 3000 is in use, specify a different port:

```bash
npm run dev -- -p 3001
```

### MDX Parse Errors

Ensure your MDX files have valid frontmatter and proper formatting:

```mdx
---
title: Required
description: Optional but recommended
---

# Content starts here
```

## Resources

- [Fumadocs Documentation](https://fumadocs.vercel.app/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Support

For issues specific to:
- **Fumadocs**: [GitHub Issues](https://github.com/fuma-nama/fumadocs/issues)
- **Trino Documentation**: [Trino GitHub](https://github.com/trinodb/trino)
