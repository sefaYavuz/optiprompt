import { Hero } from "@/components/marketing/hero"
import { Features } from "@/components/marketing/features"
import { Testimonials } from "@/components/marketing/testimonials"
import { Pricing } from "@/components/marketing/pricing"

export const metadata = {
  title: 'OptiPrompt - Save on Every AI Prompt',
  description: 'Smart caching and analytics for OpenAI, Claude, DeepSeek and more',
}

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
    </>
  )
}