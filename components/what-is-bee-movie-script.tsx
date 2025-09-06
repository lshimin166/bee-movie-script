import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Film, Users, Zap, Globe } from "lucide-react"

export function WhatIsBeeMovieScript() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">About the Bee Movie Script</Badge>
          <h2 className="text-3xl font-bold mb-4 text-balance">What is the Bee Movie Script?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            The Bee Movie script is the complete dialogue and narration from DreamWorks' 2007 animated film "Bee Movie"
            starring Jerry Seinfeld. This entire Bee Movie script has become a legendary internet meme and cultural
            phenomenon.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <Card className="text-center">
            <CardHeader className="pb-3">
              <Film className="h-8 w-8 mx-auto mb-2 text-primary" />
              <CardTitle className="text-lg">Original Movie</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The Bee Movie script comes from the 2007 DreamWorks animated comedy film featuring Barry B. Benson's
                adventures.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-3">
              <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
              <CardTitle className="text-lg">Internet Meme</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The entire Bee Movie script became a viral meme, with people sharing the full Bee Movie script across
                social platforms.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-3">
              <Zap className="h-8 w-8 mx-auto mb-2 text-primary" />
              <CardTitle className="text-lg">Copy & Paste</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our Bee Movie script copy and paste tool makes it easy to share the whole Bee Movie script anywhere
                online.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-3">
              <Globe className="h-8 w-8 mx-auto mb-2 text-primary" />
              <CardTitle className="text-lg">Cultural Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The script of the Bee Movie has influenced countless memes, remixes, and became part of internet culture
                history.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-background rounded-lg p-8 border">
          <h3 className="text-xl font-semibold mb-4">Why Use Our Bee Movie Script Tool?</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">Complete Bee Movie Script Access</h4>
              <p className="text-sm text-muted-foreground">
                Get the entire Bee Movie script in multiple formats - normal text, no spaces version for character
                limits, and auto-segmented for different platforms like Discord and Twitter.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Popular Bee Movie Quotes</h4>
              <p className="text-sm text-muted-foreground">
                Quick access to the most famous lines from the Bee Movie script, including "According to all known laws
                of aviation" and "Ya like jazz?" for instant meme creation.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Flexible Script Options</h4>
              <p className="text-sm text-muted-foreground">
                Choose between the full Bee Movie script with character names or dialogue-only versions. Perfect for
                different use cases and platform requirements.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Easy Sharing</h4>
              <p className="text-sm text-muted-foreground">
                One-click copy functionality makes sharing the Bee Movie script effortless. Whether you need the entire
                script or just a segment, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
