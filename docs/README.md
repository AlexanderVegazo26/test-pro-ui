# TestPro UI Documentation

This directory contains comprehensive guides and documentation for the TestPro UI project.

## Available Guides

- [Next.js Guide](./nextjs-guide.md) - Framework concepts and best practices
- [TypeScript Guide](./typescript-guide.md) - Type system and integration with React
- [React Guide](./react-guide.md) - Component patterns and hooks
- [Tailwind CSS Guide](./tailwind-guide.md) - Utility classes and styling
- [Sanity.io Guide](./sanity-guide.md) - Headless CMS integration

## Project Structure

The TestPro UI project follows a standard Next.js structure:

```
test-pro-ui/
├── app/             # App Router pages and layouts
├── pages/           # Pages Router routes
├── public/          # Static assets
├── lib/             # Utility functions and shared code
├── components/      # Reusable React components (to be created)
├── styles/          # CSS and styling files (using Tailwind)
└── docs/            # Documentation (you are here)
```

## Getting Started

1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Common Issues and Solutions

### Styling Issues
- Check Tailwind configuration in `tailwind.config.js`
- Verify CSS imports in global styles
- Inspect element to debug class application

### Data Fetching
- Verify Sanity connection in `.env.local`
- Check for proper error handling in API calls
- Use mock data for development when needed

### Image Handling
- Ensure proper configuration in `next.config.js`
- Use appropriate image formats and optimization
- Implement proper fallbacks for missing images 