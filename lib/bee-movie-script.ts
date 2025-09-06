import fs from 'fs'
import path from 'path'

// 读取蜜蜂电影剧本内容
export function getBeeMovieScript(): string {
  const filePath = path.join(process.cwd(), 'data', 'bee_movie_script.txt')
  return fs.readFileSync(filePath, 'utf8')
}

// 热门语录（从剧本中提取的经典台词）
export const POPULAR_QUOTES = [
  "According to all known laws of aviation, there is no way a bee should be able to fly.",
  "Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow!",
  "Barry! Breakfast is ready!",
  "Ya like jazz?",
  "It's got giant wings, huge engines.",
  "You like jazz?",
  "The bee, of course, flies anyway because bees don't care what humans think is impossible.",
  "We're bees. We're the most perfectly functioning society on Earth.",
  "I can't believe I'm doing this. I've got to. Oh, I can't do it. Come on! No. Yes. No. Do it. I can't.",
  "Why would I marry a watermelon?",
  "That's a bad job for a guy with a stinger.",
  "Thinking bee. Thinking bee. Thinking bee.",
  "Black and yellow! Hello!",
  "You're flying outside the hive. You're talking to human beings that attack our homes with power washers and M-80s.",
  "This is stealing. A lot of stealing!",
]

// 在构建时获取剧本内容（用于静态生成）
export function getStaticBeeMovieScript(): string {
  try {
    return getBeeMovieScript()
  } catch (error) {
    console.error('无法读取蜜蜂电影剧本文件:', error)
    // 提供一个后备的开头内容
    return `Narrator: According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.

Cut to Barry's room, where he's picking out what to wear.

Barry: Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Yeah, let's shake it up a little.

[剧本文件读取失败，请检查 data/bee_movie_script.txt 文件是否存在]`
  }
}
