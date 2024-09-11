import { BlogPage } from "@/app/types/blog-page-types";
import { FooterPage } from "@/app/types/footer-page-types";
import { HeaderPage } from "@/app/types/landing-page-types";
import { StaticPage } from "@/app/types/static-page-types";
import { createClient, groq } from "next-sanity";

// Create a reusable Sanity client instance
const client = createClient({
  projectId: "ciofsncx",
  dataset: "swh",
  useCdn: false,
  apiVersion: "2022-02-03",
});

export async function getData(): Promise<HeaderPage[]> {
  return await client.fetch(
    groq`*[_type=='landingpage']{
        _id,
        _createdAt,
        title,
        headingdescription,
        quote,
        'slug': slug.current,
        svgs[]{
          'svg': svg,
          altText
        }
      }`
  );
}

export async function getStaticData(): Promise<StaticPage[]> {
  return await client.fetch(
    groq`*[_type == 'staticpage']{
        title,
        headingdescription,
        quote,
        'slug': slug.current,
        svg,
        altText
      }`
  );
}

export async function getBlogData(): Promise<BlogPage[]> {
  return await client.fetch(
    groq`*[_type == 'blogpage']{
        title,
        description,
        'slug': slug.current,
        svg,
        altText
      }`
  );
}

export async function getFooterData(): Promise<FooterPage[]> {
  return await client.fetch(
    groq`*[_type=='footerpage']{
        _id,
        _createdAt,
        description,
        sociallinks[]{
          sociallink
        }
      }`
  );
}
