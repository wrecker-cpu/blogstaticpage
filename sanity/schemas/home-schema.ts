const LandingPage = {
  name: "landingpage",
  title: "LandingPage",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "headingdescription",
      title: "HeadingDescription",
      type: "string",
    },
    {
      name: "quote",
      title: "Quote",
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
      name: "svgs",
      title: "SVGs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
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
        },
      ],
    },
  ],
};

export default LandingPage;
