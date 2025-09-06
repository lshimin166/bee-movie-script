"use client"

import { useToast } from "@/hooks/use-toast"
import { HeroSection } from "@/components/hero-section"

interface HeroSectionClientProps {
  scriptContent: string
  popularQuotes: string[]
}

export default function HeroSectionClient({ scriptContent, popularQuotes }: HeroSectionClientProps) {
  const { toast } = useToast()

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        title: "Copied! 🐝",
        description: "Bee Movie script copied to clipboard successfully!",
      })
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Failed to copy to clipboard. Please try again.",
        variant: "destructive",
      })
    }
  }

  const getRandomSegment = () => {
    const randomIndex = Math.floor(Math.random() * popularQuotes.length)
    return popularQuotes[randomIndex]
  }

  const getOpeningSection = () => {
    return scriptContent.substring(0, 2000) + "..."
  }

  return (
    <HeroSection
      onCopyScript={() => copyToClipboard(getOpeningSection())}
      onRandomQuote={() => copyToClipboard(getRandomSegment())}
    />
  )
}
