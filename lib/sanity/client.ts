import { createClient } from 'next-sanity';

// Use default values if environment variables are not set
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

export const sanityFetch = async <T>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: Record<string, any>;
  tags?: string[];
}): Promise<T> => {
  // Check if we have a valid projectId before making the request
  if (!projectId || projectId === 'your-project-id') {
    console.warn('Sanity project ID is not configured. Using mock data instead.');
    return {} as T; // Return empty object as mock data
  }
  
  return client.fetch(query, params, {
    next: {
      tags,
    },
  });
};
