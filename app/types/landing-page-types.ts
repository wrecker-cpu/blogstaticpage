// landingPageTypes.ts

// Define the type for the SVG object
export interface SvgObject {
  svg: string; // URL of the SVG image
  altText: string; // Alternative text for the SVG
}

// Define the type for the LandingPage document
export interface HeaderPage {
  title: string; // Title of the landing page
  headingdescription: string; // Description for the heading
  quote: string; // Quote to be displayed
  slug: {
    current: string; // Current slug
  };
  svgs: SvgObject[]; // Array of SVG objects
}
