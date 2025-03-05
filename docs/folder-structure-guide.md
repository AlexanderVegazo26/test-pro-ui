# Next.js Folder Structure Best Practices

This guide outlines recommended folder structure patterns for Next.js applications, with a focus on maintainability, scalability, and organization.

## Core Structure

```
project-root/
├── app/                  # App Router (Next.js 13+)
│   ├── (auth)/           # Route groups (parentheses for organization only)
│   ├── api/              # API routes
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   ├── ui/               # Basic UI components
│   ├── forms/            # Form-related components
│   ├── layout/           # Layout components
│   └── [feature]/        # Feature-specific components
├── lib/                  # Utility functions, client libraries
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
├── styles/               # Global styles, theme definitions
├── public/               # Static assets
│   ├── images/           # Image files
│   ├── icons/            # Icon files
│   └── fonts/            # Font files (if not using Next.js font optimization)
├── config/               # App configuration
└── middleware.ts         # Next.js middleware
```

## App Router Organization (Next.js 13+)

The App Router uses a file-system based router where folders define routes.

```
app/
├── layout.tsx            # Root layout (required)
├── page.tsx              # Home page (/)
├── globals.css           # Global styles
├── (auth)/               # Auth route group (organizational)
│   ├── login/            # /login route
│   │   └── page.tsx
│   └── register/         # /register route
│       └── page.tsx
├── dashboard/            # /dashboard route
│   ├── layout.tsx        # Dashboard layout
│   ├── page.tsx          # Dashboard index
│   ├── settings/         # /dashboard/settings route
│   │   └── page.tsx
│   └── [id]/             # Dynamic route /dashboard/:id
│       └── page.tsx
└── api/                  # API routes
    └── [...]
```

### Special Files in App Router

- `layout.tsx` - Shared UI for a segment and its children
- `page.tsx` - UI for a route
- `loading.tsx` - Loading UI for a segment
- `error.tsx` - Error UI for a segment
- `not-found.tsx` - Not found UI
- `route.ts` - API endpoint

## Components Organization

```
components/
├── ui/                   # Basic UI components
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── [...]
├── forms/                # Form components
│   ├── login-form.tsx
│   ├── contact-form.tsx
│   └── [...]
├── layout/               # Layout components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── sidebar.tsx
│   └── [...]
└── [feature]/            # Feature-specific components
    └── [...]
```

## Data Fetching and State Management

```
lib/
├── api/                  # API client functions
│   ├── auth.ts
│   └── [...]
├── utils/                # Utility functions
│   ├── formatting.ts
│   └── [...]
└── [third-party]/        # Third-party service integrations
    ├── sanity.ts
    └── [...]
```

## Best Practices

1. **Route Groups**: Use parentheses for folder names `(folderName)` to organize routes without affecting the URL path.

2. **Co-location**: Keep related files close together. Components used only in one route can be placed in that route's folder.

3. **Shared Components**: Components used across multiple routes should be in the top-level `components` directory.

4. **Module Boundaries**: Create clear module boundaries with index files that export only what should be public.

5. **Feature-Based Organization**: For larger applications, consider organizing by feature rather than technical role.

6. **Consistent Naming**: Use consistent naming conventions:
   - PascalCase for components: `Button.tsx`
   - kebab-case for multi-word filenames: `contact-form.tsx`
   - camelCase for utility functions: `formatDate.ts`

7. **Type Organization**: Keep types close to where they're used. For shared types, use a `types` directory.

8. **Environment Variables**: Use `.env.local` for local development and `.env.example` to document required variables.

9. **Testing**: Place tests next to the files they test with `.test.ts` or `.spec.ts` extensions, or in a `__tests__` folder.

## Sanity CMS Integration

For projects using Sanity:

```
lib/
├── sanity/
│   ├── client.ts         # Sanity client configuration
│   ├── queries.ts        # GROQ queries
│   └── schemas/          # Sanity schema definitions
│       └── [...]
```

## Scaling Considerations

For larger applications, consider:

1. **Monorepo Structure**: Use tools like Turborepo for managing multiple packages.

2. **Feature-Based Organization**: Group by feature rather than technical role.

3. **Micro-Frontends**: Split the application into independently deployable features.

4. **Code Splitting**: Use dynamic imports to reduce initial load time.

This guide provides a foundation for organizing your Next.js project. Adapt it to your specific needs while maintaining consistency and clarity. 