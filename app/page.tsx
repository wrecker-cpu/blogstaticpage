import Blogpage from "@/components/Blogpage";
import CircularProgressBar from "@/components/CircularProgressBar";
import ImagePage from "@/components/ImagePage";
import LandingPage from "@/components/LandingPage";
import ResourcePage from "@/components/ResourcePage";

import Staticpage from "@/components/Staticpage";

export default function Home() {
  return (
    <CircularProgressBar>
      <LandingPage />
      <Staticpage />
      <ResourcePage />
      <Blogpage />
      <ImagePage />
    </CircularProgressBar>
  );
}
