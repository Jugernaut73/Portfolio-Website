import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: '2mi4icl1',
    dataset: 'production',
    apiVersion: '2025-05-31',
    useCdn: true,
});

const builder = ImageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source);
}