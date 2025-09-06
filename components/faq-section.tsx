import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FAQSection() {

  const faqs = [
    {
      question: "What is the Bee Movie script and why is it popular for memes?",
      answer:
        "The Bee Movie script is the complete dialogue and narration from the 2007 animated film 'Bee Movie' starring Jerry Seinfeld. It became a popular internet meme due to its absurd premise and memorable quotes like 'According to all known laws of aviation, there is no way a bee should be able to fly.' The entire Bee Movie script is often shared as copypasta for humor.",
    },
    {
      question: "How long is the entire Bee Movie script?",
      answer:
        "The complete Bee Movie script contains over 13,000 words and approximately 75,000 characters including spaces. When compressed with no spaces, it's about 60,000 characters. Our tool shows exact character counts for each format.",
    },
    {
      question: "Can I copy the full Bee Movie script for Discord?",
      answer:
        "Yes! Our auto-segmentation feature automatically splits the entire Bee Movie script into Discord-compatible chunks of 2000 characters or less. You can copy each segment individually to share the complete bee script movie on Discord.",
    },
    {
      question: "What's the difference between the normal and no spaces version?",
      answer:
        "The normal version preserves all formatting and spaces from the original Bee Movie script. The no spaces version removes all whitespace, making it more compact and sometimes useful for bypassing character limits or spam filters on certain platforms.",
    },
    {
      question: "Is this the complete and accurate Bee Movie script?",
      answer:
        "Yes, this is the full and accurate Bee Movie script including all dialogue, character names, and stage directions from the original 2007 film. It includes every line from Barry B. Benson and all other characters throughout the entire movie.",
    },
    {
      question: "Can I use this Bee Movie script for commercial purposes?",
      answer:
        "The Bee Movie script is copyrighted material owned by DreamWorks Animation. This tool is provided for educational, meme, and fair use purposes only. For commercial use, you would need proper licensing from the copyright holders.",
    },
  ]

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader className="pb-1">
                <CardTitle className="text-lg">
                  <h3>{faq.question}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
