import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'tonlrryd', 
  dataset: 'production',
  apiVersion: '2024-03-31',
  useCdn: true, // Set to false if you want fresh data every second
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}