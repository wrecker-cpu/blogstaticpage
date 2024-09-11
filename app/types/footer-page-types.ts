// landingPageTypes.ts

// Define the type for the SVG object
export interface LinkObject {
  sociallink: string; // URL of the SVG image // Alternative text for the SVG
}

// Define the type for the LandingPage document
export interface FooterPage {
  description: string; // Description for the heading
  sociallinks: LinkObject[]; // Array of SVG objects
}
