import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Create Sanity client
export const client = createClient({
  projectId: 'szbpkq9o', // Replace with your Sanity projectId from test-pro-sanity/sanity.json
  dataset: 'production',
  apiVersion: '2023-05-03', // Use a recent API version
  useCdn: true, // Enable CDN for faster responses
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}