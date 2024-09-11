export interface BlogPage {
  title: string;
  description: string;
  slug: {
    current: string;
  };
  svg: string;
  altText: string;
}
