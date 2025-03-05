# Folder Structure Improvement Plan

## Current Structure Analysis

The current project structure has some good foundations but could benefit from better organization, especially as the project grows and integrates with Sanity CMS.

### Strengths:
- Using the App Router pattern
- Proper route organization for main pages
- Separation of concerns with lib directory for utilities
- SVG assets organized in public folder

### Areas for Improvement:
- No dedicated components directory for shared UI elements
- Page components contain all UI logic and markup
- No clear organization for Sanity integration
- Duplicate configuration files (tailwind.config.js and tailwind.config.ts)
- No hooks directory for shared React hooks
- No types directory for TypeScript definitions

## Proposed Structure

```
test-pro-ui/
├── app/                      # App Router
│   ├── (marketing)/          # Route group for marketing pages
│   │   ├── page.tsx          # Home page
│   │   ├── services/         # Services page
│   │   ├── case-studies/     # Case studies page
│   │   └── contact/          # Contact page
│   ├── api/                  # API routes
│   │   └── sanity/           # Sanity API endpoints
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/               # Shared components
│   ├── ui/                   # Basic UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── [...]
│   ├── layout/               # Layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── [...]
│   ├── services/             # Service-related components
│   ├── case-studies/         # Case study components
│   └── home/                 # Home page specific components
├── lib/                      # Utility functions
│   ├── sanity/               # Sanity integration
│   │   ├── client.ts         # Sanity client
│   │   ├── queries.ts        # GROQ queries
│   │   └── schemas/          # Sanity schemas
│   └── utils/                # General utilities
├── hooks/                    # Custom React hooks
├── types/                    # TypeScript type definitions
├── public/                   # Static assets
│   ├── images/               # Image files
│   ├── icons/                # Icon SVGs
│   └── svg/                  # Illustration SVGs
└── config/                   # Configuration files
    └── [...]
```

## Implementation Steps

1. **Create Component Structure**:
   - Extract reusable components from page files
   - Organize by feature and type

2. **Reorganize Assets**:
   - Move SVGs to appropriate subdirectories in public
   - Organize by purpose (icons, illustrations)

3. **Enhance Sanity Integration**:
   - Create dedicated structure in lib/sanity
   - Organize queries and schemas

4. **Clean Up Configuration**:
   - Resolve duplicate config files
   - Create .env.example for documentation

5. **Add Type Definitions**:
   - Create types directory
   - Define shared interfaces and types

6. **Extract Hooks**:
   - Create custom hooks for data fetching
   - Move complex state logic to hooks

7. **Refactor Page Components**:
   - Make page components leaner
   - Use composition with shared components

## Benefits

- **Improved Maintainability**: Clear separation of concerns
- **Better Scalability**: Structure supports growth
- **Enhanced Collaboration**: Team members can work in parallel
- **Easier Sanity Integration**: Dedicated structure for CMS
- **Reduced Duplication**: Shared components and utilities
- **Better Developer Experience**: Intuitive organization

This plan provides a roadmap for incrementally improving the folder structure while maintaining the application's functionality. 