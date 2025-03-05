# Tailwind CSS Guide

## Overview
Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML.

## Key Concepts

### Utility-First Approach
- Use small, single-purpose utility classes
- Combine multiple classes to create complex designs
- Avoid writing custom CSS when possible

### Responsive Design
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Mobile-first approach: unprefixed classes apply to all screen sizes
- Example: `class="text-sm md:text-base lg:text-lg"`

### Customization
- Configure in `tailwind.config.js`
- Extend default theme with custom colors, fonts, spacing, etc.
- Create custom utilities with `@apply` directive

### Core Utilities

#### Layout
- **Container**: `container`
- **Display**: `block`, `inline`, `flex`, `grid`, `hidden`
- **Position**: `static`, `relative`, `absolute`, `fixed`, `sticky`
- **Z-Index**: `z-0`, `z-10`, `z-20`, etc.

#### Flexbox & Grid
- **Flex Direction**: `flex-row`, `flex-col`
- **Justify Content**: `justify-start`, `justify-center`, `justify-between`
- **Align Items**: `items-start`, `items-center`, `items-end`
- **Grid Template**: `grid-cols-1`, `grid-cols-2`, etc.
- **Gap**: `gap-1`, `gap-2`, etc.

#### Spacing
- **Margin**: `m-1`, `mt-2`, `mr-3`, `mb-4`, `ml-5`, `mx-auto`
- **Padding**: `p-1`, `pt-2`, `pr-3`, `pb-4`, `pl-5`

#### Sizing
- **Width**: `w-full`, `w-1/2`, `w-1/3`, `w-1/4`, `w-auto`
- **Height**: `h-full`, `h-screen`, `h-auto`
- **Max/Min**: `max-w-md`, `min-h-screen`

#### Typography
- **Font Family**: `font-sans`, `font-serif`, `font-mono`
- **Font Size**: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`
- **Font Weight**: `font-normal`, `font-medium`, `font-bold`
- **Text Color**: `text-gray-500`, `text-blue-600`

#### Backgrounds
- **Background Color**: `bg-white`, `bg-gray-100`, `bg-blue-500`
- **Opacity**: `opacity-0`, `opacity-50`, `opacity-100`
- **Gradients**: `bg-gradient-to-r from-blue-500 to-green-500`

#### Borders
- **Border Width**: `border`, `border-2`, `border-t`, `border-r`
- **Border Color**: `border-gray-200`, `border-blue-500`
- **Border Radius**: `rounded`, `rounded-md`, `rounded-full`

#### Effects
- **Shadow**: `shadow`, `shadow-md`, `shadow-lg`
- **Transition**: `transition`, `duration-300`, `ease-in-out`
- **Transform**: `scale-95`, `rotate-45`, `translate-x-2`

## Best Practices
1. Use meaningful class order (layout → typography → visual styles)
2. Extract common patterns into components
3. Use `@apply` for complex, repeated patterns
4. Leverage JIT mode for development
5. Purge unused styles in production
6. Use plugins for additional functionality

## Configuration Example
```js
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

## Troubleshooting
- Check if classes are being purged in production
- Verify proper configuration in `tailwind.config.js`
- Ensure content paths include all files with Tailwind classes
- Use Tailwind CSS IntelliSense extension for VS Code 