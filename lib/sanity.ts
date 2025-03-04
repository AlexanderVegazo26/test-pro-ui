import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Create Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id', // Use environment variable or fallback
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03', // Use a recent API version
  useCdn: true, // Enable CDN for faster responses
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Mock data for development when Sanity is not connected
export const mockCaseStudies = [
  {
    title: "E-commerce Platform Optimization",
    description: "Improved test coverage and reduced bugs by 75% for a major online retailer",
    category: "e-commerce",
    link: "/case-studies/ecommerce"
  },
  {
    title: "Banking App Security Testing",
    description: "Comprehensive security testing for a fintech startup's mobile banking application",
    category: "fintech",
    link: "/case-studies/banking"
  },
  {
    title: "Healthcare System Integration",
    description: "End-to-end testing for a complex healthcare records management system",
    category: "healthcare",
    link: "/case-studies/healthcare"
  }
];