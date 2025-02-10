import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EZHomesteading",
    short_name: "EZH",
    description: ``,
    start_url: "/",
    display: "standalone",
    background_color: "#CED9BB",
    theme_color: "#000000",
    icons: [
      {
        src: "logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "logo384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "logo512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
