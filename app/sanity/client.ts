 import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: "16bkuxdj", // Update with your Sanity project ID
  dataset: "production",
  apiVersion: "2024-12-31",
  useCdn: true, // Set to true for production if you don't need live updates
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export default client;
