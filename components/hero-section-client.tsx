"use client"

import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { HeroSection } from "@/components/hero-section"

interface ScriptData {
  scriptContent: string
  popularQuotes: string[]
}

export default function HeroSectionClient() {
  const { toast } = useToast()
  const [scriptData, setScriptData] = useState<ScriptData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // 页面加载时自动获取剧本数据
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/api/script')
        if (!response.ok) {
          throw new Error('Failed to load script data')
        }
        
        const result = await response.json()
        if (result.success) {
          setScriptData(result.data)
        } else {
          throw new Error(result.error || 'Unknown error')
        }
      } catch (err) {
        // 静默处理，因为主要数据会在工具组件中处理
        console.error('Hero section failed to load script data:', err)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

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

  const handleCopyScript = async () => {
    if (!scriptData) {
      toast({
        title: "Data not ready",
        description: "Script data is still loading. Please try again in a moment.",
        variant: "destructive",
      })
      return
    }

    const opening = scriptData.scriptContent.substring(0, 2000) + "..."
    await copyToClipboard(opening)
  }

  const handleRandomQuote = async () => {
    if (!scriptData) {
      toast({
        title: "Data not ready", 
        description: "Script data is still loading. Please try again in a moment.",
        variant: "destructive",
      })
      return
    }

    const randomIndex = Math.floor(Math.random() * scriptData.popularQuotes.length)
    const randomQuote = scriptData.popularQuotes[randomIndex]
    await copyToClipboard(randomQuote)
  }

  return (
    <HeroSection
      onCopyScript={handleCopyScript}
      onRandomQuote={handleRandomQuote}
    />
  )
}
