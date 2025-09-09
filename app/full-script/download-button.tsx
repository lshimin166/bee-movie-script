'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download, FileDown } from 'lucide-react'
import { toast } from 'sonner'

interface DownloadButtonProps {
  content: string
}

export function DownloadButton({ content }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    try {
      setIsDownloading(true)
      
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'bee-movie-complete-script.txt'
      a.setAttribute('download', 'bee-movie-complete-script.txt')
      
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      
      toast.success('Script downloaded successfully!', {
        description: `bee-movie-complete-script.txt (${Math.round(content.length / 1024)} KB)`
      })
    } catch (err) {
      console.error('Failed to download:', err)
      toast.error('Download failed', {
        description: 'Please try again or check your browser settings'
      })
    } finally {
      setTimeout(() => setIsDownloading(false), 1000)
    }
  }

  return (
    <Button 
      variant="outline" 
      size="lg" 
      onClick={handleDownload}
      disabled={isDownloading}
      className="border-yellow-400 text-yellow-700 hover:bg-yellow-50 hover:text-yellow-800 font-semibold transition-all duration-200"
    >
      {isDownloading ? (
        <>
          <FileDown className="h-5 w-5 mr-2 animate-pulse" />
          Downloading...
        </>
      ) : (
        <>
          <Download className="h-5 w-5 mr-2" />
          Download TXT
        </>
      )}
    </Button>
  )
}
