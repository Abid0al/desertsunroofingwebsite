import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Partners from "@/components/sections/Partners";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import JeremiahStory from "@/components/sections/JeremiahStory";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Partners />
      <Services />
      <WhyUs />
      <JeremiahStory />
      <Process />
      <Gallery />
      <Reviews />
      <ServiceAreas />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
