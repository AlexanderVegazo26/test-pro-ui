# Sanity.io Guide

## Overview
Sanity.io is a headless CMS that provides a real-time editing environment and a customizable content platform.

## Key Concepts

### Content Lake
- Central repository for all your content
- Real-time data store with versioning
- Accessible via APIs

### GROQ Query Language
- Graph-Relational Object Queries
- Powerful query language for filtering and projecting data
- Similar to GraphQL but more flexible for content

### Schemas
- Define the structure of your content
- Types: document, object, array, string, number, boolean, etc.
- Fields can have validation rules and custom input components

### Sanity Studio
- Customizable content editing environment
- Built with React
- Extensible with plugins and custom input components

## Integration with Next.js

### Client Setup
```typescript
// lib/sanity.ts
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
```

### Data Fetching
```typescript
// In Next.js pages
import { client } from '../lib/sanity';

export async function getStaticProps() {
  const query = `*[_type == "post"]{
    title,
    slug,
    mainImage,
    publishedAt,
    "categories": categories[]->title
  }`;
  
  const posts = await client.fetch(query);
  
  return {
    props: { posts },
    revalidate: 60, // ISR - revalidate every 60 seconds
  };
}
```

### Image Handling
```typescript
import Image from 'next/image';
import { urlFor } from '../lib/sanity';

function PostImage({ image, title }) {
  return (
    <Image
      src={urlFor(image).width(800).url()}
      alt={title}
      width={800}
      height={500}
      layout="responsive"
    />
  );
}
```

## Common Schema Types

### Document Types
```js
// Example post schema
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ]
}
```

## Best Practices
1. Use references for related content
2. Implement proper validation rules
3. Use custom input components for better editing experience
4. Structure your schemas logically
5. Use GROQ projections to limit returned data
6. Implement proper error handling for API calls
7. Use image transformations for optimized delivery

## Troubleshooting
- Check your project ID and dataset name
- Verify API version is current
- Ensure proper CORS settings in Sanity dashboard
- Check for proper error handling in fetch calls
- Verify image URLs are properly constructed 