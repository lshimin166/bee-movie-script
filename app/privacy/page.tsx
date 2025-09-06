import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const siteUrl = process.env.NEXT_PUBLIC_WEB_URL || "https://beemoviescript.org"

export const metadata: Metadata = {
  title: "Privacy Policy - Bee Movie Script Tool",
  description: "Privacy Policy for Bee Movie Script copy paste tool. Learn how we collect, use, and protect your information.",
  openGraph: {
    title: "Privacy Policy - Bee Movie Script Tool",
    description: "Privacy Policy for Bee Movie Script copy paste tool. Learn how we collect, use, and protect your information.",
    type: "website",
    url: `${siteUrl}/privacy/`,
  },
  robots: "index, follow",
  alternates: {
    canonical: `${siteUrl}/privacy/`,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h3>1.1 Information You Provide</h3>
                <p>Our Bee Movie Script tool operates entirely in your browser and does not require you to create an account or provide personal information. We do not collect, store, or process any personal data you may enter.</p>
                
                <h3>1.2 Automatically Collected Information</h3>
                <p>We may collect certain technical information automatically, including:</p>
                <ul>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>IP address (anonymized)</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We use the automatically collected information to:</p>
                <ul>
                  <li>Improve our website performance and user experience</li>
                  <li>Analyze website usage patterns</li>
                  <li>Prevent fraud and abuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Our website may use cookies and similar tracking technologies to enhance your experience:</p>
                <ul>
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
                <p>You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We implement appropriate technical and organizational security measures to protect any information we collect. Since our Bee Movie Script tool operates client-side, your text and clipboard operations remain private to your device.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Our website may integrate with third-party services such as:</p>
                <ul>
                  <li>Analytics providers (e.g., Google Analytics)</li>
                  <li>Content delivery networks</li>
                  <li>Social media platforms</li>
                </ul>
                <p>These services have their own privacy policies and data practices.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                <ul>
                  <li>Right to access your personal data</li>
                  <li>Right to rectify inaccurate data</li>
                  <li>Right to erase your personal data</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has provided us with personal information, we will delete such information immediately.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>If you have any questions about this Privacy Policy, please contact us through our website or social media channels.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
