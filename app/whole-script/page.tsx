import { promises as fs } from 'fs'
import path from 'path'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { CopyButton } from './copy-button'
import { DownloadButton } from './download-button'

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
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="text-center">
            <CardContent className="py-12">
              <h1 className="text-2xl font-bold text-red-600 mb-4">Script Not Found</h1>
              <p className="text-gray-600">Unable to load the Bee Movie script file.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const lines = scriptContent.split('\n')
  const totalLines = lines.length
  const estimatedWords = scriptContent.split(/\s+/).length
  const estimatedChars = scriptContent.length

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                🐝 Bee Movie - Complete Script
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <Badge variant="secondary">{totalLines.toLocaleString()} lines</Badge>
                <Badge variant="secondary">{estimatedWords.toLocaleString()} words</Badge>
                <Badge variant="secondary">{estimatedChars.toLocaleString()} characters</Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <CopyButton content={scriptContent} />
              <DownloadButton content={scriptContent} />
              <Button variant="outline" size="sm" asChild>
                <a href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Script Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Complete Script</CardTitle>
            <CardDescription>
              The entire Bee Movie script as sourced from the data file
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 rounded-lg p-6">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed text-gray-800 font-mono">
                {scriptContent}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Copyright Notice */}
        <Card className="mt-8 bg-amber-50 border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-800">Copyright Notice</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-amber-700 mb-3">
              <strong>Bee Movie</strong> ©2007 DreamWorks Animation SKG, Inc. All rights reserved.
            </p>
            <p className="text-sm text-amber-600">
              This script is displayed for educational and informational purposes. 
              The content is copyrighted material owned by DreamWorks Animation. 
              Please respect copyright laws and use this content responsibly.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
