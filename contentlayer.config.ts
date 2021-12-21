import {
  defineDocumentType,
  makeSource,
  ComputedFields
} from "contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm, { Root } from "remark-gfm";
import remarkTOC from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

const computedFields: ComputedFields = {
  readingTime: {
    type: "number",
    resolve: (doc) => readingTime(doc.body.raw).minutes
  },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
  }
};

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/*.mdx",
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    logo: { type: "string" },
    publishedAt: { type: "string", required: true }
  },
  computedFields
}));

const contentLayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm, remarkTOC],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          test: [`h2`, `h3`, `h4`, `h5`, `h6`],
          properties: {
            className: ["anchor"]
          }
        }
      ]
    ]
  }
});

export default contentLayerConfig;
