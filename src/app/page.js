import HeroSection from "@/views/dashboard/hero-section";
import PageDetail from "./detail/page";
import PageAbout from "./about/page";
import PageGallery from "./gallery/page";
import PageContact from "./contact/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PageAbout />
      <PageDetail />
      <PageGallery/>
      <PageContact/>
    </>
  );
}
