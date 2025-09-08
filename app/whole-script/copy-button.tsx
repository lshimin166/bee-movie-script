'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Copy, Check } from 'lucide-react'
import { toast } from 'sonner'

interface CopyButtonProps {
  content: string
}

export function CopyButton({ content }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setIsCopied(true)
      toast.success('Script copied to clipboard!', {
        description: `${content.length.toLocaleString()} characters copied successfully`
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
      variant="default" 
      size="lg" 
      onClick={handleCopy}
      disabled={isCopied}
      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition-all duration-200"
    >
      {isCopied ? (
        <>
          <Check className="h-5 w-5 mr-2" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-5 w-5 mr-2" />
          Copy All
        </>
      )}
    </Button>
  )
}
