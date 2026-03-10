import { HeroSection } from "@/components/home/hero-section"
import { ValueProps } from "@/components/home/value-props"
import { ServicePillars } from "@/components/home/service-pillars"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ValueProps />
      <ServicePillars />
      <CTASection />
    </div>
  )
}
