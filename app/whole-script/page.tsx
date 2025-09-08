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
  title: 'Complete Bee Movie Script - Full Text & Download | Bee Movie Script',
  description: 'Read and download the complete Bee Movie script. Full text with 2,568 lines, 15,789 words. Perfect for memes, copypasta, and entertainment.',
  keywords: 'bee movie script, complete script, full text, download, meme, copypasta, DreamWorks, animation script',
  openGraph: {
    title: 'Complete Bee Movie Script - Full Text & Download',
    description: 'Read and download the complete Bee Movie script. Full text with 2,568 lines, 15,789 words.',
    type: 'article',
    url: 'https://yoursite.com/whole-script',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Bee Movie Script - Full Text & Download',
    description: 'Read and download the complete Bee Movie script. Perfect for memes and entertainment.',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://yoursite.com/whole-script',
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
            "headline": "Complete Bee Movie Script - Full Text",
            "description": "The complete script of Bee Movie (2007) by DreamWorks Animation",
            "author": {
              "@type": "Organization",
              "name": "DreamWorks Animation"
            },
            "datePublished": "2007-11-02",
            "wordCount": estimatedWords,
            "articleBody": scriptContent.substring(0, 500) + "...",
            "about": {
              "@type": "Movie",
              "name": "Bee Movie",
              "dateCreated": "2007",
              "director": {
                "@type": "Person",
                "name": "Steve Hickner"
              }
            }
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
                🐝 Bee Movie - Complete Script
              </h1>
              <p className="text-xl text-yellow-100 max-w-2xl mx-auto mb-6">
                The entire script from the 2007 DreamWorks Animation film. Perfect for reading, sharing, or creating memes.
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
              <CardTitle className="text-xl">Full Script Content</CardTitle>
              <CardDescription>
                Complete, unabridged script text. Use the buttons above to copy or download.
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
        </div>
      </div>
    </>
  )
}
