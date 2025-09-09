'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FileText, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

interface DownloadPdfButtonProps {
  content: string
}

export function DownloadPdfButton({ content }: DownloadPdfButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownloadPdf = async () => {
    try {
      setIsGenerating(true)
      
      // 动态导入 jsPDF 以减少初始包大小
      const { default: jsPDF } = await import('jspdf')
      
      // 创建新的PDF文档
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      })

      // 设置字体和大小
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')

      // 页面设置
      const pageWidth = doc.internal.pageSize.getWidth()
      const pageHeight = doc.internal.pageSize.getHeight()
      const margin = 20
      const lineHeight = 4
      const maxLineWidth = pageWidth - (margin * 2)
      
      // 添加标题
      doc.setFontSize(16)
      doc.setFont('helvetica', 'bold')
      doc.text('🐝 Bee Movie - Complete Script', margin, margin)
      
      doc.setFontSize(12)
      doc.setFont('helvetica', 'normal')
      doc.text('© 2007 DreamWorks Animation SKG, Inc.', margin, margin + 8)
      
      // 添加分隔线
      doc.line(margin, margin + 12, pageWidth - margin, margin + 12)

      // 重置字体为正文
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')

      // 处理文本内容
      const lines = content.split('\n')
      let currentY = margin + 20
      
      for (const line of lines) {
        if (line.trim() === '') {
          currentY += lineHeight / 2 // 空行占用较少空间
          continue
        }

        // 如果文本太长，进行换行处理
        const wrappedLines = doc.splitTextToSize(line, maxLineWidth)
        
        for (const wrappedLine of wrappedLines) {
          // 检查是否需要新页面
          if (currentY > pageHeight - margin) {
            doc.addPage()
            currentY = margin
          }
          
          doc.text(wrappedLine, margin, currentY)
          currentY += lineHeight
        }
      }

      // 添加页脚
      const totalPages = doc.internal.getNumberOfPages()
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i)
        doc.setFontSize(8)
        doc.setTextColor(128, 128, 128)
        doc.text(
          `Page ${i} of ${totalPages} - Bee Movie Script`,
          pageWidth / 2,
          pageHeight - 10,
          { align: 'center' }
        )
      }

      // 下载PDF
      doc.save('bee-movie-complete-script.pdf')
      
      toast.success('PDF downloaded successfully!', {
        description: `bee-movie-complete-script.pdf (${totalPages} pages)`
      })
    } catch (err) {
      console.error('Failed to generate PDF:', err)
      toast.error('PDF generation failed', {
        description: 'Please try again or check your browser settings'
      })
    } finally {
      setTimeout(() => setIsGenerating(false), 1000)
    }
  }

  return (
    <Button 
      variant="outline" 
      size="lg" 
      onClick={handleDownloadPdf}
      disabled={isGenerating}
      className="border-red-400 text-red-700 hover:bg-red-50 hover:text-red-800 font-semibold transition-all duration-200"
    >
      {isGenerating ? (
        <>
          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
          Generating PDF...
        </>
      ) : (
        <>
          <FileText className="h-5 w-5 mr-2" />
          Download PDF
        </>
      )}
    </Button>
  )
}
