'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Copy, Check } from 'lucide-react'
import { toast } from 'sonner'

interface CopyNoSpacesButtonProps {
  content: string
}

export function CopyNoSpacesButton({ content }: CopyNoSpacesButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      // 移除所有空格、换行符、制表符等空白字符
      const noSpacesContent = content
        .replace(/\s+/g, '') // 移除所有空白字符（空格、换行、制表符等）
        .replace(/[\r\n]/g, '') // 确保移除所有换行符
        .trim()

      await navigator.clipboard.writeText(noSpacesContent)
      setIsCopied(true)
      
      const originalLength = content.length
      const compressedLength = noSpacesContent.length
      const compressionRatio = Math.round(((originalLength - compressedLength) / originalLength) * 100)
      
      toast.success('No spaces script copied!', {
        description: `${compressedLength.toLocaleString()} characters (${compressionRatio}% smaller)`
      })
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
      toast.error('Failed to copy to clipboard', {
        description: 'Please try again or use manual selection'
      })
    }
  }

  return (
    <Button 
      variant="outline" 
      size="lg" 
      onClick={handleCopy}
      disabled={isCopied}
      className="border-orange-400 text-orange-700 hover:bg-orange-50 hover:text-orange-800 font-semibold transition-all duration-200"
    >
      {isCopied ? (
        <>
          <Check className="h-5 w-5 mr-2" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-5 w-5 mr-2" />
          Copy No Spaces
        </>
      )}
    </Button>
  )
}
