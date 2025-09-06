"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"
import { Copy, Shuffle, Zap, Share2, Eye, EyeOff } from "lucide-react"

interface BeeMovieScriptToolsProps {
  scriptContent: string
  popularQuotes: string[]
}

export default function BeeMovieScriptTools({ scriptContent, popularQuotes }: BeeMovieScriptToolsProps) {
  const [selectedFormat, setSelectedFormat] = useState<"normal" | "nospaces" | "segments">("normal")
  const [platformLimit, setPlatformLimit] = useState(2000)
  const [hideCharacters, setHideCharacters] = useState(false)
  const { toast } = useToast()

  const platforms = [
    { name: "Discord", limit: 2000, color: "bg-indigo-500 hover:bg-indigo-600" },
    { name: "Twitter", limit: 280, color: "bg-blue-500 hover:bg-blue-600" },
    { name: "Reddit", limit: 10000, color: "bg-orange-500 hover:bg-orange-600" },
    { name: "YouTube", limit: 5000, color: "bg-red-500 hover:bg-red-600" },
    { name: "Messenger", limit: 20000, color: "bg-blue-600 hover:bg-blue-700" },
    { name: "WhatsApp", limit: 4096, color: "bg-green-500 hover:bg-green-600" },
  ]

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

  const removeCharacterNames = (text: string) => {
    return text
      .split("\n")
      .map((line) => {
        // Remove character names (text before colon and tab)
        if (line.includes(":") || line.includes("\t")) {
          const colonIndex = line.indexOf(":")
          const tabIndex = line.indexOf("\t")

          if (colonIndex > 0 && (tabIndex === -1 || colonIndex < tabIndex)) {
            return line.substring(colonIndex + 1).trim()
          } else if (tabIndex > 0) {
            return line.substring(tabIndex + 1).trim()
          }
        }
        return line
      })
      .filter((line) => line.length > 0)
      .join(" ")
  }

  const processText = (text: string) => {
    return hideCharacters ? removeCharacterNames(text) : text
  }

  const removeSpaces = (text: string) => text.replace(/\s+/g, "")

  const segmentText = (text: string, limit: number) => {
    const segments = []
    let currentSegment = ""
    const words = text.split(" ")

    for (const word of words) {
      if ((currentSegment + " " + word).length > limit && currentSegment) {
        segments.push(currentSegment.trim())
        currentSegment = word
      } else {
        currentSegment += (currentSegment ? " " : "") + word
      }
    }

    if (currentSegment) {
      segments.push(currentSegment.trim())
    }

    return segments
  }

  const getRandomSegment = () => {
    const randomIndex = Math.floor(Math.random() * popularQuotes.length)
    return processText(popularQuotes[randomIndex])
  }

  const getOpeningSection = () => {
    const opening = scriptContent.substring(0, 2000) + "..."
    return processText(opening)
  }


  return (
    <main className="container mx-auto px-4 py-8">
      {/* 显示选项 */}
      <Card className="mb-8">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            {hideCharacters ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            Display Options
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Switch id="hide-characters" checked={hideCharacters} onCheckedChange={setHideCharacters} />
            <label htmlFor="hide-characters" className="text-sm font-medium">
              Hide character names (dialogue only)
            </label>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            When enabled, only dialogue and narration will be shown, character names will be removed from the Bee
            Movie script
          </p>
        </CardContent>
      </Card>

      {/* 快捷操作 */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5" />
              Quick Copy Bee Script
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => copyToClipboard(getOpeningSection())} className="w-full">
              <Copy className="mr-2 h-4 w-4" />
              Copy Opening
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shuffle className="h-5 w-5" />
              Random Bee Movie Meme
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => copyToClipboard(getRandomSegment())} variant="secondary" className="w-full">
              <Shuffle className="mr-2 h-4 w-4" />
              Random Quote
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Share2 className="h-5 w-5" />
              No Spaces Script
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => copyToClipboard(removeSpaces(getOpeningSection()))}
              variant="outline"
              className="w-full"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy Compressed
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* 主要内容 - 标签页 */}
      <Tabs value={selectedFormat} onValueChange={(value) => setSelectedFormat(value as any)} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-muted p-2 rounded-xl h-14 border border-border/50">
          <TabsTrigger
            value="normal"
            className="data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-border/20 hover:bg-background/60 transition-all duration-200 font-medium rounded-lg mx-1 text-sm py-2 text-muted-foreground"
          >
            Full Bee Movie Script
          </TabsTrigger>
          <TabsTrigger
            value="nospaces"
            className="data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-border/20 hover:bg-background/60 transition-all duration-200 font-medium rounded-lg mx-1 text-sm py-2 text-muted-foreground"
          >
            No Spaces Version
          </TabsTrigger>
          <TabsTrigger
            value="segments"
            className="data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-border/20 hover:bg-background/60 transition-all duration-200 font-medium rounded-lg mx-1 text-sm py-2 text-muted-foreground"
          >
            Auto Segments
          </TabsTrigger>
        </TabsList>

        <TabsContent value="normal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Complete Bee Movie Script Copy and Paste</CardTitle>
              <CardDescription>
                The entire Bee Movie script ready for copying and sharing. This is the full script of the Bee Movie
                {hideCharacters && " (dialogue only)"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg bg-muted p-4 font-mono text-sm max-h-96 overflow-y-auto">
                  {processText(scriptContent)}
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => copyToClipboard(processText(scriptContent))}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Full Bee Movie Script
                  </Button>
                  <Badge variant="secondary">
                    {processText(scriptContent).length.toLocaleString()} characters
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nospaces" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bee Movie Script No Spaces Version</CardTitle>
              <CardDescription>
                Compressed Bee Movie script version for platforms with character limits or spam detection
                {hideCharacters && " (dialogue only)"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg bg-muted p-4 font-mono text-sm break-all max-h-96 overflow-y-auto">
                  {removeSpaces(processText(scriptContent))}
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => copyToClipboard(removeSpaces(processText(scriptContent)))}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy No Spaces Bee Script
                  </Button>
                  <Badge variant="secondary">
                    {removeSpaces(processText(scriptContent)).length.toLocaleString()} chars
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="segments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Auto-Segmented Bee Movie Script for Platforms</CardTitle>
              <CardDescription>
                Automatically split the entire Bee Movie script for Discord (2000 chars), Twitter, etc.
                {hideCharacters && " (dialogue only)"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-3">
                  <label className="text-sm font-medium">Platform limit:</label>
                  <div className="flex flex-wrap gap-2">
                    {platforms.map((platform) => (
                      <Button
                        key={platform.name}
                        variant={platformLimit === platform.limit ? "default" : "outline"}
                        size="sm"
                        onClick={() => setPlatformLimit(platform.limit)}
                        className={`${
                          platformLimit === platform.limit
                            ? `${platform.color} text-white border-0`
                            : "hover:bg-muted"
                        } transition-colors`}
                      >
                        {platform.name} ({platform.limit})
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="max-h-96 overflow-y-auto space-y-6">
                  {segmentText(processText(scriptContent), platformLimit).map((segment, index) => (
                    <div key={index}>
                      {index > 0 && (
                        <div className="flex items-center my-6">
                          <div className="flex-1 h-px bg-border"></div>
                          <div className="px-3 text-xs text-muted-foreground bg-background">Segment {index + 1}</div>
                          <div className="flex-1 h-px bg-border"></div>
                        </div>
                      )}

                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge>Segment {index + 1}</Badge>
                          <Badge variant="secondary">{segment.length} chars</Badge>
                        </div>
                        <div className="rounded-lg bg-muted p-4 font-mono text-sm">{segment}</div>
                        <Button size="sm" onClick={() => copyToClipboard(segment)}>
                          <Copy className="mr-2 h-3 w-3" />
                          Copy Segment {index + 1}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* 热门语录 */}
      <Card className="mt-8" id="quotes">
        <CardHeader>
          <CardTitle>Popular Bee Movie Meme Quotes</CardTitle>
          <CardDescription>
            Quick access to the most popular Bee Movie script quotes for memes and copy paste
            {hideCharacters && " (dialogue only)"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-1 lg:grid-cols-2">
            {popularQuotes.map((quote, index) => {
              const processedQuote = processText(quote)
              return (
                <div key={index} className="flex items-center justify-between rounded-lg border border-border p-3">
                  <span className="text-sm font-mono flex-1 mr-3">{processedQuote}</span>
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(processedQuote)}>
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* 使用统计 */}
      <Card className="mt-16" id="stats">
        <CardHeader>
          <CardTitle>Bee Movie Script Statistics</CardTitle>
          <CardDescription>Complete analysis of the entire Bee Movie script content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {processText(scriptContent).length.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Characters</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {processText(scriptContent).split(" ").length.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Words</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {removeSpaces(processText(scriptContent)).length.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">No Spaces Length</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
