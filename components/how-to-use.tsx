import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HowToUse() {
  const steps = [
    {
      number: 1,
      title: "Configure Display Options",
      description:
        'Toggle the "Hide character names" option if you want only dialogue from the Bee Movie script. This is useful for different meme formats and sharing preferences.',
    },
    {
      number: 2,
      title: "Choose Your Format",
      description:
        "Select from three options: Full Bee Movie Script for complete text, No Spaces version for compressed sharing, or Auto Segments for platform-specific character limits.",
    },
    {
      number: 3,
      title: "Copy and Share",
      description:
        "Click any copy button to instantly copy the Bee Movie script content to your clipboard. Then paste it anywhere - Discord, social media, forums, or messaging apps.",
    },
  ]

  return (
    <section id="how-to-use" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How to Use the Bee Movie Script Tool</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step) => (
            <Card key={step.number}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </span>
                  <h3>{step.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
