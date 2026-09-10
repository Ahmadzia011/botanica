import { Testimonial } from "./testimonial";
import { TestImage } from "./testImage";
import { ProductInfo } from "./productInfo";
import { CallToAction } from "./callToAction";
import { FaqSection } from "./faq";
import { HeroSection } from "./heroSection";
import { Reveal } from "@/src/components/Reveal";

export default function Homepage() {
  return (
    <div className="text-[#1E2B24] bg-white antialiased selection:bg-[#2B4C3F] selection:text-white">
      <HeroSection />
      <Reveal><TestImage /></Reveal>
      <Reveal><ProductInfo /></Reveal>
      <Reveal><Testimonial /></Reveal>
      <Reveal><CallToAction /></Reveal>
      <Reveal><FaqSection /></Reveal>
    </div>
  );
}
