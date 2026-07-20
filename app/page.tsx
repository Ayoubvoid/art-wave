import { AboutSection } from "@/components/home/about-section";
import { FaqSection } from "@/components/home/faq-section";
import { FeaturedArtworks } from "@/components/home/featured-artworks";
import { FeaturedCollections } from "@/components/home/featured-collections";
import { Hero } from "@/components/home/hero";
import { Newsletter } from "@/components/home/newsletter";
import { Testimonials } from "@/components/home/testimonials";
import { WhyChoose } from "@/components/home/why-choose";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <FeaturedArtworks />
      <AboutSection />
      <WhyChoose />
      <Testimonials />
      <FaqSection />
      <Newsletter />
    </>
  );
}
