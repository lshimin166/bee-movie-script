import HeroSectionClient from "@/components/hero-section-client"
import { WhatIsBeeMovieScript } from "@/components/what-is-bee-movie-script"
import BeeMovieScriptTools from "@/components/bee-movie-script-tools"
import { KeyFeatures } from "@/components/key-features"
import { HowToUse } from "@/components/how-to-use"
import { FAQSection } from "@/components/faq-section"
import { Toaster } from "@/components/ui/toaster"

export default function BeeMovieScriptPage() {
  return (
    <div className="min-h-screen bg-background">


      <HeroSectionClient />

      <BeeMovieScriptTools />

      <WhatIsBeeMovieScript />



      <KeyFeatures />
      <HowToUse />
      <FAQSection />


      <Toaster />
    </div>
  )
}
