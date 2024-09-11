const BlogPage = {
  name: "blogpage",
  title: "BlogPage",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, ""),
      },
    },
    {
      name: "svg",
      title: "SVG",
      type: "url",
    },
    {
      name: "altText",
      title: "Alt Text",
      type: "string",
      description: "Alternative text for accessibility.",
    },
  ],
};

export default BlogPage;
