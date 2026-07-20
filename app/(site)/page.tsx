import { AboutSection } from "@/components/home/about-section";
import { FaqSection } from "@/components/home/faq-section";
import { FeaturedArtworks } from "@/components/home/featured-artworks";
import { FeaturedCollections } from "@/components/home/featured-collections";
import { Hero } from "@/components/home/hero";
import { Newsletter } from "@/components/home/newsletter";
import { Testimonials } from "@/components/home/testimonials";
import { WhyChoose } from "@/components/home/why-choose";
import { getFeaturedPaintings } from "@/lib/paintings/service";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const featuredPaintings = await getFeaturedPaintings(8);

  return (
    <>
      <Hero />
      <FeaturedCollections />
      <FeaturedArtworks paintings={featuredPaintings} />
      <AboutSection />
      <WhyChoose />
      <Testimonials />
      <FaqSection />
      <Newsletter />
    </>
  );
}
