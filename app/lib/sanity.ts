import imageUrlBuilder  from "@sanity/image-url";
import { createClient } from "next-sanity";


export const client = createClient({
    projectId: "cnnagols",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: false
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source);
}