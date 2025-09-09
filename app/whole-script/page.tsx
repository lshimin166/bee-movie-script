import { promises as fs } from 'fs'
import path from 'path'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Film, Download, Copy, Home, Clock, FileText } from 'lucide-react'
import { CopyButton } from './copy-button'
import { DownloadButton } from './download-button'
import { CopyNoSpacesButton } from './copy-no-spaces-button'
import { DownloadPdfButton } from './download-pdf-button'

// SEO Metadata
export const metadata: Metadata = {
  title: 'Bee Movie Full Script - Full Text & Download PDF',
  description: 'Read and download the whole Bee Movie script. Full text with 2,568 lines, 15,789 words. Perfect for memes, copypasta, and entertainment.',
  keywords: 'bee movie script, complete script, full text, download, meme, copypasta, DreamWorks',
  openGraph: {
    title: 'Bee Movie Full Script - Full Text & Download PDF',
    description: 'Read and download the complete Bee Movie script. Full text with 2,568 lines, 15,789 words.',
    type: 'article',
    url: 'https://beemoviescript.org/whole-script',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bee Movie Full Script - Full Text & Download',
    description: 'Read and download the complete Bee Movie script. Perfect for memes and entertainment.',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://beemoviescript.org/whole-script',
  }
}

async function getScriptContent() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'bee_movie_script.txt')
    const content = await fs.readFile(filePath, 'utf8')
    return content
  } catch (error) {
    console.error('Error reading script file:', error)
    return null
  }
}

export default async function FullScriptPage() {
  const scriptContent = await getScriptContent()
  
  if (!scriptContent) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Card className="text-center border-red-200 bg-red-50">
            <CardContent className="py-12">
              <FileText className="h-16 w-16 text-red-400 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-red-600 mb-4">Script Not Found</h1>
              <p className="text-red-500 mb-6">Unable to load the Bee Movie script file.</p>
              <Button asChild variant="outline" className="border-red-300 text-red-600 hover:bg-red-100">
                <a href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Return to Home
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const lines = scriptContent.split('\n').filter(line => line.trim() !== '')
  const totalLines = lines.length
  const estimatedWords = scriptContent.split(/\s+/).filter(word => word.trim() !== '').length
  const estimatedChars = scriptContent.length
  const readingTime = Math.ceil(estimatedWords / 200) // 200 words per minute average

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Bee Movie Full Script - Full Text & Download PDF | Bee Movie Script",
            "description": "Read and download the whole Bee Movie script. Full text with 2,568 lines, 15,789 words. Perfect for memes, copypasta, and entertainment.",
            "author": {
              "@type": "Organization",
              "name": "https://beemoviescript.org/#author"
            },
            "datePublished": "2025-09-09",
          })
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-50 to-amber-50">
        {/* Breadcrumb Navigation */}
        {/* <div className="bg-white/80 backdrop-blur-sm border-b border-yellow-200">
          <div className="container mx-auto px-4 py-3 max-w-7xl">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <a href="/" className="flex items-center text-yellow-700 hover:text-yellow-900 transition-colors">
                    <Home className="h-4 w-4 mr-1" />
                    Home
                  </a>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-yellow-400" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold text-gray-900">Complete Script</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div> */}

        {/* Hero Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-xl">
          <div className="container mx-auto px-4 py-12 max-w-7xl">
            <div className="text-center mb-8">
              {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
                <Film className="h-10 w-10 text-white" />
              </div> */}
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                🐝 Bee Movie Full Script - Full Text & Download PDF
              </h1>
              <p className="text-xl text-yellow-100 max-w-2xl mx-auto mb-6">
              Read and download the whole Bee Movie script. Full text with 2,568 lines, 15,789 words. Perfect for memes, copypasta, and entertainment.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <FileText className="h-4 w-4" />
                  <span>{totalLines.toLocaleString()} lines</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <FileText className="h-4 w-4" />
                  <span>{estimatedWords.toLocaleString()} words</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <Clock className="h-4 w-4" />
                  <span>{readingTime} min read</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <CopyButton content={scriptContent} />
              <CopyNoSpacesButton content={scriptContent} />
              <DownloadButton content={scriptContent} />
              <DownloadPdfButton content={scriptContent} />
              {/* <Button variant="outline" size="lg" asChild className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <a href="/">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Home
                </a>
              </Button> */}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Script Preview Card */}
          {/* <Card className="mb-8 shadow-lg border-yellow-200">
            <CardHeader className="text-center bg-gradient-to-r from-yellow-100 to-orange-100">
              <CardTitle className="text-2xl text-gray-900 flex items-center justify-center gap-2">
                <FileText className="h-6 w-6 text-yellow-600" />
                Complete Script Text
              </CardTitle>
              <CardDescription className="text-lg">
                The entire Bee Movie script as sourced from the original data file
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-gray-50 border-t border-gray-200 p-8 max-h-96 overflow-y-auto">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed text-gray-800 font-mono">
                  {scriptContent.split('\n').slice(0, 50).join('\n')}
                  {scriptContent.split('\n').length > 50 && '\n\n... (scroll down to see the complete script) ...'}
                </pre>
              </div>
            </CardContent>
          </Card> */}

          {/* Full Script Card */}
          <Card className="mb-8 shadow-lg border-yellow-200">
            <CardHeader>
              <CardTitle className="text-xl"><h2>Full Script Content</h2></CardTitle>
              <CardDescription>
                Complete, unabridged script text. Use the buttons above to copy or download.
              </CardDescription>
              <CardDescription>
                The complete official Bee Movie script transcript sourced from
                the authoritative{" "}
                <a
                  href="https://beemovie.fandom.com/wiki/Bee_Movie/Transcript"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary-foreground hover:underline"
                >
                  Bee Movie Wiki
                </a>
                . This is the full, accurate script of the entire Bee Movie
                ready for copying and sharing

              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed text-gray-800 font-mono max-h-screen overflow-y-auto">
                  {scriptContent}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Copyright and Info */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Copyright Notice */}
            <Card className="bg-amber-50 border-amber-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-amber-800 flex items-center gap-2">
                  <Film className="h-5 w-5" />
                  Copyright Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-amber-700 mb-3 font-semibold">
                  <strong>Bee Movie</strong> ©2007 DreamWorks Animation SKG, Inc. All rights reserved.
                </p>
                <p className="text-sm text-amber-600">
                  This script is displayed for educational and informational purposes. 
                  The content is copyrighted material owned by DreamWorks Animation. 
                  Please respect copyright laws and use this content responsibly.
                </p>
              </CardContent>
            </Card>

            {/* Movie Information */}
            <Card className="bg-blue-50 border-blue-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Movie Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-blue-600 font-medium">Release Year:</dt>
                    <dd className="text-blue-800">2007</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-blue-600 font-medium">Studio:</dt>
                    <dd className="text-blue-800">DreamWorks Animation</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-blue-600 font-medium">Script Length:</dt>
                    <dd className="text-blue-800">{estimatedChars.toLocaleString()} characters</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-blue-600 font-medium">Estimated Reading:</dt>
                    <dd className="text-blue-800">{readingTime} minutes</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card className="mt-12 shadow-lg border-yellow-200">
            <CardHeader className="text-center bg-gradient-to-r from-yellow-100 to-orange-100">
              <CardTitle className="text-2xl text-gray-900 flex items-center justify-center gap-2">
                <FileText className="h-6 w-6 text-yellow-600" />
                <h2>Frequently Asked Questions</h2>
              </CardTitle>
              <CardDescription className="text-lg">
                Common questions about the Bee Movie full script download and usage
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How do I download the full Bee Movie script as PDF?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Click the "Download PDF" button above to generate and download the complete Bee Movie script as a formatted PDF file. 
                    The PDF includes all {totalLines.toLocaleString()} lines and {estimatedWords.toLocaleString()} words from the original script.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Is this the complete and accurate Bee Movie script?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes, this is the full, unabridged Bee Movie script sourced from the authoritative{" "}
                    <a
                      href="https://beemovie.fandom.com/wiki/Bee_Movie/Transcript"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-yellow-700 hover:underline font-medium"
                    >
                      Bee Movie Wiki
                    </a>
                    . It includes every line of dialogue, character names, and stage directions from the entire 2007 DreamWorks Animation film.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Can I copy the entire Bee Movie script text?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Absolutely! Use the "Copy Full Script" button to copy the complete script text to your clipboard, 
                    or "Copy No Spaces" for a compressed version. The full script contains approximately {estimatedChars.toLocaleString()} characters.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What's the difference between the copy options?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    "Copy Full Script" preserves all original formatting and line breaks. "Copy No Spaces" removes all whitespace, 
                    creating a compressed version that's useful for platforms with strict character limits or to bypass certain filters.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How long does it take to read the full Bee Movie script?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Based on an average reading speed of 200 words per minute, the complete Bee Movie script takes approximately {readingTime} minutes to read. 
                    The script contains {estimatedWords.toLocaleString()} words across {totalLines.toLocaleString()} lines.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Can I use this Bee Movie script for memes and social media?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes, the script is commonly used for memes, copypasta, and entertainment purposes under fair use. 
                    However, please remember that the Bee Movie script is copyrighted by DreamWorks Animation, 
                    so commercial usage would require proper licensing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What file formats are available for download?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    You can download the Bee Movie script in multiple formats: as a plain text file (.txt) using the "Download TXT" button, 
                    or as a formatted PDF document using the "Download PDF" button. Both contain the complete script content.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
