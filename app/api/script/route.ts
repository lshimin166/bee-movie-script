import { getStaticBeeMovieScript, POPULAR_QUOTES } from '@/lib/bee-movie-script'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const scriptContent = getStaticBeeMovieScript()
    
    return NextResponse.json({
      success: true,
      data: {
        scriptContent,
        popularQuotes: POPULAR_QUOTES
      }
    })
  } catch (error) {
    console.error('Failed to load script:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to load script content' 
      },
      { status: 500 }
    )
  }
}
