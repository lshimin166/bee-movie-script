import { getStaticBeeMovieScript, POPULAR_QUOTES } from "@/lib/bee-movie-script"
import { Header } from "@/components/header"
import HeroSectionClient from "@/components/hero-section-client"
import { WhatIsBeeMovieScript } from "@/components/what-is-bee-movie-script"
import BeeMovieScriptTools from "@/components/bee-movie-script-tools"
import { KeyFeatures } from "@/components/key-features"
import { HowToUse } from "@/components/how-to-use"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function BeeMovieScriptPage() {
  // 从外部文件读取蜜蜂电影剧本内容
  const scriptContent = getStaticBeeMovieScript()
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSectionClient 
        scriptContent={scriptContent}
        popularQuotes={POPULAR_QUOTES}
      />

      <WhatIsBeeMovieScript />

      <BeeMovieScriptTools 
        scriptContent={scriptContent} 
        popularQuotes={POPULAR_QUOTES} 
      />

      <KeyFeatures />
      <HowToUse />
      <FAQSection />
      <Footer />

      <Toaster />
    </div>
  )
}
