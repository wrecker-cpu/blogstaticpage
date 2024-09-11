import { type SchemaTypeDefinition } from "sanity";
import LandingPage from "./schemas/home-schema";
import StaticPage from "./schemas/static-schema";
import BlogPage from "./schemas/blog-schema";
import FooterPage from "./schemas/footer-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [LandingPage, StaticPage, BlogPage, FooterPage],
};
