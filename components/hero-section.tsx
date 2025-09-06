"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Shuffle, Twitter, Facebook, Share2, MessageCircle } from "lucide-react"

interface HeroSectionProps {
  onCopyScript: () => void
  onRandomQuote: () => void
}

export function HeroSection({ onCopyScript, onRandomQuote }: HeroSectionProps) {
  const handleSocialShare = (platform: string) => {
    const url = window.location.href
    const text = "Check out this amazing Bee Movie Script copy and paste tool! 🐝"

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      reddit: `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
      discord: `https://discord.com/channels/@me`,
    }

    if (platform === "copy") {
      navigator.clipboard.writeText(`${text} ${url}`)
      return
    }

    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank", "width=600,height=400")
  }

  return (
    <section className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-6">
            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-200">
              🐝 Internet Meme Central
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                Bee Movie Script
                <span className="text-yellow-600 dark:text-yellow-400 block"> Copy and Paste</span>
              </h1>

              <p className="text-lg text-muted-foreground text-pretty max-w-lg">
                Access the complete Bee Movie script for copy and paste! Get the entire Bee Movie script, no spaces
                version, auto segments, and popular quotes from the legendary Bee Movie script meme.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={onCopyScript} className="bg-yellow-600 hover:bg-yellow-700 text-white">
                <Copy className="mr-2 h-5 w-5" />
                Copy Bee Movie Script
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onRandomQuote}
                className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-950/20 bg-transparent"
              >
                <Shuffle className="mr-2 h-5 w-5" />
                Random Bee Quote
              </Button>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground font-medium">Share the buzz:</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleSocialShare("twitter")}
                  className="bg-white/50 hover:bg-blue-50 border-blue-200 text-blue-600"
                >
                  <Twitter className="h-4 w-4 mr-1" />
                  Twitter
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleSocialShare("facebook")}
                  className="bg-white/50 hover:bg-blue-50 border-blue-200 text-blue-600"
                >
                  <Facebook className="h-4 w-4 mr-1" />
                  Facebook
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleSocialShare("reddit")}
                  className="bg-white/50 hover:bg-orange-50 border-orange-200 text-orange-600"
                >
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Reddit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleSocialShare("copy")}
                  className="bg-white/50 hover:bg-gray-50 border-gray-200 text-gray-600"
                >
                  <Share2 className="h-4 w-4 mr-1" />
                  Copy Link
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-full">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jDIYZGh54ZtqscUZyGnUW1authQyMZ.png"
                alt="Bee Movie character with glasses at computer - Bee Movie Script generator"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
