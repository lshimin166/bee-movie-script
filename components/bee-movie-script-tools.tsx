"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"
import { Copy, Shuffle, Zap, Share2, Eye, EyeOff, Loader2 } from "lucide-react"

interface ScriptData {
  scriptContent: string
  popularQuotes: string[]
}

export default function BeeMovieScriptTools() {
  const [selectedFormat, setSelectedFormat] = useState<"normal" | "nospaces" | "segments">("normal")
  const [platformLimit, setPlatformLimit] = useState(2000)
  const [hideCharacters, setHideCharacters] = useState(false)
  const [hideBlankLines, setHideBlankLines] = useState(false)
  const [scriptData, setScriptData] = useState<ScriptData | null>(null)
  const [isLoading, setIsLoading] = useState(true) // 初始为true，页面加载时就开始加载
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  // 页面加载时自动加载剧本数据
  useEffect(() => {
    const initializeData = async () => {
      try {
        await loadScriptData()
      } catch (error) {
        // Error already handled in loadScriptData
      }
    }
    
    initializeData()
  }, [])

  const platforms = [
    { name: "Discord", limit: 2000, color: "bg-indigo-500 hover:bg-indigo-600" },
    { name: "Twitter", limit: 280, color: "bg-blue-500 hover:bg-blue-600" },
    { name: "Reddit", limit: 10000, color: "bg-orange-500 hover:bg-orange-600" },
    { name: "YouTube", limit: 10000, color: "bg-red-500 hover:bg-red-600" },
    { name: "Instagram", limit: 2200, color: "bg-pink-500 hover:bg-pink-600" },
    { name: "WhatsApp", limit: 65536, color: "bg-green-500 hover:bg-green-600" },
  ]

  // 自动加载剧本数据
  const loadScriptData = async (): Promise<ScriptData> => {
    if (scriptData) return scriptData // 已经加载过了，直接返回缓存

    if (!isLoading) setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/script')
      if (!response.ok) {
        throw new Error('Failed to load script data')
      }
      
      const result = await response.json()
      if (result.success) {
        setScriptData(result.data)
        return result.data
      } else {
        throw new Error(result.error || 'Unknown error')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load script'
      setError(errorMessage)
      toast({
        title: "Loading failed",
        description: "Failed to load Bee Movie script. Please try again.",
        variant: "destructive",
      })
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        title: "Copied! 🐝",
        description: "Bee Movie script copied to clipboard successfully!",
        variant: "default",
        className: "bg-white border-green-200 shadow-lg",
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
      .join("\n") // 保持换行符，不要用空格连接
  }

  const removeBlankLines = (text: string) => {
    return text.split('\n').filter(line => line.trim().length > 0).join('\n')
  }

  const processText = (text: string) => {
    let result = text
    if (hideCharacters) {
      result = removeCharacterNames(result)
    }
    if (hideBlankLines) {
      result = removeBlankLines(result)
    }
    return result
  }

  const removeSpaces = (text: string) => text.replace(/\s+/g, "")

  const segmentText = (text: string, limit: number) => {
    const segments = []
    let currentSegment = ""
    // 使用正则分割，保持空白字符（包括换行符）
    const words = text.split(/(\s+)/)

    for (const word of words) {
      if ((currentSegment + word).length > limit && currentSegment.trim()) {
        segments.push(currentSegment)
        currentSegment = word
      } else {
        currentSegment += word
      }
    }

    if (currentSegment.trim()) {
      segments.push(currentSegment)
    }

    return segments
  }

  // 需要剧本数据的操作（数据应该已经加载了）
  const handleCopyAction = async (action: (data: ScriptData) => string) => {
    if (!scriptData) {
      toast({
        title: "Data not ready",
        description: "Script data is still loading. Please try again.",
        variant: "destructive",
      })
      return
    }
    
    try {
      const text = action(scriptData)
      await copyToClipboard(text)
    } catch (error) {
      // Error already handled in copyToClipboard
    }
  }

  const getRandomSegment = (data: ScriptData) => {
    const randomIndex = Math.floor(Math.random() * data.popularQuotes.length)
    return processText(data.popularQuotes[randomIndex])
  }

  const getOpeningSection = (data: ScriptData) => {
    const opening = data.scriptContent.substring(0, 2000) + "..."
    return processText(opening)
  }

  // 渲染内容区域（显示加载状态或实际内容）
  const renderContentArea = (renderContent: (data: ScriptData) => React.ReactNode) => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center py-12">
          <div className="text-center space-y-3">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
            <p className="text-sm text-muted-foreground">Loading Bee Movie script...</p>
          </div>
        </div>
      )
    }

    if (error && !scriptData) {
      return (
        <div className="flex items-center justify-center py-12">
          <div className="text-center space-y-4">
            <p className="text-sm text-destructive">{error}</p>
            <Button 
              variant="outline" 
              onClick={() => loadScriptData()}
              disabled={isLoading}
            >
              Try Again
            </Button>
          </div>
        </div>
      )
    }

    if (scriptData) {
      return renderContent(scriptData)
    }

    return null
  }

  return (
    <section id="bee-movie-script-tools" className="container mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
        Bee Movie Script Copy and Paste Tool
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          Choose from multiple formats: normal script, no-spaces compressed version, auto-segmented for platform limits, 
          and toggle display options like character names and blank lines.
        </p>
      </div>

      {/* 显示选项 */}
      <Card className="mb-8">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            {hideCharacters ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            Display Options
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="hide-characters" checked={hideCharacters} onCheckedChange={setHideCharacters} />
              <label htmlFor="hide-characters" className="text-sm font-medium">
                Hide character names (dialogue only)
              </label>
            </div>
            <p className="text-xs text-muted-foreground">
              When enabled, only dialogue and narration will be shown, character names will be removed from the Bee
              Movie script
            </p>
            
            <div className="flex items-center space-x-2">
              <Switch id="hide-blank-lines" checked={hideBlankLines} onCheckedChange={setHideBlankLines} />
              <label htmlFor="hide-blank-lines" className="text-sm font-medium">
                Hide blank lines (compact view)
              </label>
            </div>
            <p className="text-xs text-muted-foreground">
              When enabled, all empty lines will be removed to create a more compact text format
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 快捷操作 */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <Card className="quick-action-card">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base md:text-lg">
              <Zap className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              <h3 className="block md:hidden">Quick Copy</h3>
              <h3 className="hidden md:block">Quick Copy Bee Movie Script</h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <Button 
              onClick={() => handleCopyAction(getOpeningSection)} 
              className="w-full h-10"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Copy className="mr-2 h-4 w-4" />
              )}
              Copy Opening
            </Button>
          </CardContent>
        </Card>

        <Card className="quick-action-card">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base md:text-lg">
              <Shuffle className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              <h3 className="block md:hidden">Random Meme</h3>
              <h3 className="hidden md:block">Random Bee Movie Meme</h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <Button 
              onClick={() => handleCopyAction(getRandomSegment)} 
              variant="secondary" 
              className="w-full h-10"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Shuffle className="mr-2 h-4 w-4" />
              )}
              Random Quote
            </Button>
          </CardContent>
        </Card>

        <Card className="quick-action-card">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base md:text-lg">
              <Share2 className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              <h3>No Spaces Script</h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <Button
              onClick={() => handleCopyAction((data) => removeSpaces(getOpeningSection(data)))}
              variant="outline"
              className="w-full h-10"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Copy className="mr-2 h-4 w-4" />
              )}
              Copy Compressed
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* 主要内容 - 标签页 */}
      <Tabs value={selectedFormat} onValueChange={(value) => setSelectedFormat(value as any)} className="space-y-6">
        <TabsList className="mobile-tabs-vertical w-full bg-muted p-2 rounded-xl border border-border/50">
          <TabsTrigger
            value="normal"
            className="w-full data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-md hover:bg-background/60 transition-all duration-200 font-medium rounded-lg py-3 px-4 text-sm text-muted-foreground text-center h-auto min-h-[44px] flex items-center justify-center"
          >
            <span className="block">Full Script</span>
          </TabsTrigger>
          <TabsTrigger
            value="nospaces"
            className="w-full data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-md hover:bg-background/60 transition-all duration-200 font-medium rounded-lg py-3 px-4 text-sm text-muted-foreground text-center h-auto min-h-[44px] flex items-center justify-center"
          >
            <span className="block">No Spaces</span>
          </TabsTrigger>
          <TabsTrigger
            value="segments"
            className="w-full data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-md hover:bg-background/60 transition-all duration-200 font-medium rounded-lg py-3 px-4 text-sm text-muted-foreground text-center h-auto min-h-[44px] flex items-center justify-center"
          >
            <span className="block">Auto Segments</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="normal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Whole Bee Movie Script Copy and Paste</CardTitle>
              <CardDescription>
                The complete official Bee Movie script transcript sourced from the authoritative{" "}
                <a 
                  href="https://beemovie.fandom.com/wiki/Bee_Movie/Transcript" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className="text-primary-foreground hover:underline"
                >
                  Bee Movie Wiki
                </a>
                . This is the full, accurate script of the entire Bee Movie ready for copying and sharing
                {hideCharacters && " (dialogue only)"}{hideBlankLines && " (compact view)"}.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg bg-muted p-4 font-mono text-sm max-h-96 overflow-y-auto whitespace-pre-wrap overflow-x-auto">
                  {renderContentArea((data) => processText(data.scriptContent))}
                </div>
                {scriptData && (
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => copyToClipboard(processText(scriptData.scriptContent))}
                      disabled={isLoading}
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Full Bee Movie Script
                    </Button>
                    <Badge variant="secondary">
                      {processText(scriptData.scriptContent).length.toLocaleString()} characters
                    </Badge>
                  </div>
                )}
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
                {hideCharacters && " (dialogue only)"}{hideBlankLines && " (compact view)"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg bg-muted p-4 font-mono text-sm break-all max-h-96 overflow-y-auto overflow-x-auto">
                  {renderContentArea((data) => removeSpaces(processText(data.scriptContent)))}
                </div>
                {scriptData && (
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => copyToClipboard(removeSpaces(processText(scriptData.scriptContent)))}
                      disabled={isLoading}
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy No Spaces Bee Script
                    </Button>
                    <Badge variant="secondary">
                      {removeSpaces(processText(scriptData.scriptContent)).length.toLocaleString()} chars
                    </Badge>
                  </div>
                )}
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
                {hideCharacters && " (dialogue only)"}{hideBlankLines && " (compact view)"}
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
                  {renderContentArea((data) => 
                    segmentText(processText(data.scriptContent), platformLimit).map((segment, index) => (
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
                          <div className="rounded-lg bg-muted p-4 font-mono text-sm whitespace-pre-wrap overflow-x-auto break-words">{segment}</div>
                          <Button size="sm" onClick={() => copyToClipboard(segment)}>
                            <Copy className="mr-2 h-3 w-3" />
                            Copy Segment {index + 1}
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* 热门语录 */}
      <Card className="mt-8" id="quotes">
        <CardHeader>
          <CardTitle><h3>Popular Bee Movie Meme Quotes</h3></CardTitle>
          <CardDescription>
            Quick access to the most popular Bee Movie script quotes for memes and copy paste
            {hideCharacters && " (dialogue only)"}{hideBlankLines && " (compact view)"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-1 lg:grid-cols-2">
            {renderContentArea((data) => 
              data.popularQuotes.map((quote, index) => {
                const processedQuote = processText(quote)
                return (
                  <div key={index} className="flex items-start justify-between rounded-lg border border-border p-3">
                    <span className="text-sm font-mono flex-1 mr-3 whitespace-pre-wrap break-words overflow-hidden">{processedQuote}</span>
                    <Button size="sm" variant="outline" onClick={() => copyToClipboard(processedQuote)}>
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                )
              })
            )}
          </div>
        </CardContent>
      </Card>

      {/* 使用统计 */}
      <Card className="mt-16" id="stats">
        <CardHeader>
          <CardTitle><h3>Bee Movie Script Statistics</h3></CardTitle>
          <CardDescription>Complete analysis of the entire Bee Movie script content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {renderContentArea((data) => (
              <>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {processText(data.scriptContent).length.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Characters</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {processText(data.scriptContent).split(/\s+/).filter(word => word.length > 0).length.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Words</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {removeSpaces(processText(data.scriptContent)).length.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">No Spaces Length</div>
                </div>
              </>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}