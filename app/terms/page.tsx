import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const siteUrl = process.env.NEXT_PUBLIC_WEB_URL || "https://beemoviescript.org"

export const metadata: Metadata = {
  title: "Terms of Service - Bee Movie Script Tool",
  description: "Terms of Service for Bee Movie Script copy paste tool. Learn about the terms and conditions for using our service.",
  openGraph: {
    title: "Terms of Service - Bee Movie Script Tool",
    description: "Terms of Service for Bee Movie Script copy paste tool. Learn about the terms and conditions for using our service.",
    type: "website",
    url: `${siteUrl}/terms/`,
  },
  robots: "index, follow",
  alternates: {
    canonical: `${siteUrl}/terms/`,
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>By accessing and using this Bee Movie Script tool website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Description of Service</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Our website provides:</p>
                <ul>
                  <li>Complete Bee Movie script text for copying and pasting</li>
                  <li>Various formatting options (normal, no spaces, auto-segmented)</li>
                  <li>Popular quotes and memes from the Bee Movie</li>
                  <li>Tools for social media posting and content creation</li>
                </ul>
                <p>The service is provided free of charge and is intended for entertainment, educational, and fair use purposes.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p><strong>3.1 Bee Movie Content:</strong> The Bee Movie script and related content are the intellectual property of DreamWorks Animation LLC and Jerry Seinfeld. We provide this content under fair use for educational and entertainment purposes.</p>
                
                <p><strong>3.2 Website Content:</strong> The design, layout, and functionality of this website are owned by us and protected by intellectual property laws.</p>
                
                <p><strong>3.3 User Responsibilities:</strong> Users are responsible for ensuring their use of the script content complies with applicable copyright laws and fair use principles.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Permitted Use</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>You may use our service for:</p>
                <ul>
                  <li>Personal, non-commercial entertainment</li>
                  <li>Educational purposes and research</li>
                  <li>Social media posts and memes (respecting platform rules)</li>
                  <li>Fair use applications as defined by copyright law</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Prohibited Use</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>You may not use our service for:</p>
                <ul>
                  <li>Commercial purposes without proper licensing</li>
                  <li>Infringing on intellectual property rights</li>
                  <li>Spamming or automated bulk copying</li>
                  <li>Any illegal or harmful activities</li>
                  <li>Circumventing website security measures</li>
                  <li>Creating competing services that copy our functionality</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Disclaimer of Warranties</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>This service is provided "as is" without any warranties, expressed or implied. We do not guarantee:</p>
                <ul>
                  <li>Continuous availability of the service</li>
                  <li>Error-free operation</li>
                  <li>Accuracy of all script content</li>
                  <li>Compatibility with all devices and browsers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your use of the service.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Copyright and DMCA</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We respect intellectual property rights. If you believe that any content on our site violates your copyright, please contact us with:</p>
                <ul>
                  <li>A description of the copyrighted work claimed to have been infringed</li>
                  <li>The location of the allegedly infringing material</li>
                  <li>Your contact information</li>
                  <li>A statement of good faith belief that the use is not authorized</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Modifications to Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of the service after changes constitutes acceptance of the new terms.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Termination</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We may terminate or suspend your access to the service immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>These Terms shall be interpreted and governed by the laws of the jurisdiction where our service is operated, without regard to conflict of law principles.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>13. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>If you have any questions about these Terms of Service, please contact us through our website or social media channels.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
