import { defineConfig } from "astro/config";
import AutoImport from 'astro-auto-import';
import tailwind from "@astrojs/tailwind";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import remarkToc from "remark-toc";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import mdx from "@astrojs/mdx";
import { Site } from "./src/consts.ts";
import compressor from "astro-compressor";
import min from "astro-min";
import robotsTxt from "astro-robots-txt";
import sitemap from "astro-sitemap";

import vtbot from "astro-vtbot";

// https://astro.build/config
export default defineConfig({
  site: Site.url,
  integrations: [AutoImport({
    imports: [{
      './src/components/embed/Arte.astro': [['default', 'Video']]
    }]
  }), tailwind(), mdx(), vtbot(), robotsTxt(), sitemap(), min(), compressor()],
  image: {
    domains: ["https://github.com"],
    remotePatterns: [{
      protocol: "https",
      hostname: "**.github.com"
    }]
  },
  markdown: {
    rehypePlugins: [rehypeHeadingIds, rehypeAccessibleEmojis, rehypeKatex],
    remarkPlugins: [remarkMath, remarkToc]
  }
});
