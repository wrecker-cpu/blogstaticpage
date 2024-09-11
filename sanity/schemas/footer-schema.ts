const FooterPage = {
  name: "footerpage",
  title: "FooterPage",
  type: "document",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "string",
    },

    {
      name: "sociallinks",
      title: "SocialLinks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "sociallink",
              title: "SocialLink",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

export default FooterPage;
