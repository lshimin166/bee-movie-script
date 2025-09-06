import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Zap, Users, Clock, Shuffle, Shield } from "lucide-react"

export function KeyFeatures() {
  const features = [
    {
      icon: Download,
      title: "Complete Bee Movie Script",
      description:
        "Access the entire Bee Movie script in one place. Perfect for copy and paste operations, meme creation, and sharing the full Bee script movie content.",
    },
    {
      icon: Zap,
      title: "No Spaces Compression",
      description:
        "Get the Bee Movie script with all spaces removed for platforms with character limits or to bypass spam filters while sharing the bee script.",
    },
    {
      icon: Users,
      title: "Auto-Segmentation",
      description:
        "Automatically split the entire Bee Movie script into segments for Discord, Twitter, and other platforms with character limits.",
    },
    {
      icon: Clock,
      title: "Instant Copy & Paste",
      description:
        "One-click copying of the Bee Movie script, popular quotes, or any segment. Fast and efficient for meme sharing and script distribution.",
    },
    {
      icon: Shuffle,
      title: "Random Quote Generator",
      description:
        "Generate random quotes from the Bee Movie script for memes, social media posts, and quick sharing of iconic bee movie lines.",
    },
    {
      icon: Shield,
      title: "Character Name Toggle",
      description:
        "Option to hide character names and show only dialogue from the Bee Movie script, perfect for different sharing formats and preferences.",
    },
  ]

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features of Our Bee Movie Script Tool</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
