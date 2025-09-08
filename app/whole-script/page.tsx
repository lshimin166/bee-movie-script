import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { BookOpen, Users, MessageCircle, Star } from 'lucide-react'

export default function ScriptInfoPage() {
  const scriptStats = {
    totalLines: 2568,
    estimatedWords: 24000,
    estimatedCharacters: 130000,
    mainCharacters: [
      "Barry Benson",
      "Vanessa Bloome", 
      "Adam Flayman",
      "Martin Benson (Dad)",
      "Janet Benson (Mom)",
      "Ken",
      "Layton T. Montgomery"
    ],
    keyScenes: [
      "Barry's Graduation",
      "First Flight Outside the Hive",
      "Meeting Vanessa",
      "The Court Trial",
      "Pollination Crisis Resolution"
    ]
  }

  const famousQuotes = [
    "According to all known laws of aviation, there is no way that a bee should be able to fly.",
    "Ya like jazz?",
    "The bee, of course, flies anyway because bees don't care what humans think is impossible.",
    "I love the smell of flowers.",
    "We're the only ones who make honey, pollinate flowers and dress like this."
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🐝 Bee Movie Script Information
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            探索2007年经典动画电影《蜜蜂总动员》的剧本信息、角色分析和经典语录
          </p>
        </div>

        {/* Script Statistics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-yellow-600" />
              剧本统计信息
            </CardTitle>
            <CardDescription>
              基于完整剧本文件的数据分析
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-800">
                  {scriptStats.totalLines.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">总行数</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-800">
                  ~{(scriptStats.estimatedWords / 1000).toFixed(0)}K
                </div>
                <div className="text-sm text-gray-600">估计单词数</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-2xl font-bold text-amber-800">
                  ~{(scriptStats.estimatedCharacters / 1000).toFixed(0)}K
                </div>
                <div className="text-sm text-gray-600">估计字符数</div>
              </div>
              <div className="text-center p-4 bg-yellow-100 rounded-lg">
                <div className="text-2xl font-bold text-yellow-900">
                  {scriptStats.mainCharacters.length}
                </div>
                <div className="text-sm text-gray-600">主要角色</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Characters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              主要角色
            </CardTitle>
            <CardDescription>
              电影中的核心角色介绍
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {scriptStats.mainCharacters.map((character, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="text-sm py-2 px-3 bg-blue-100 text-blue-800"
                >
                  {character}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Scenes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-green-600" />
              关键场景
            </CardTitle>
            <CardDescription>
              电影的重要情节节点
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {scriptStats.keyScenes.map((scene, index) => (
                <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                  <div className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                  </div>
                  <span>{scene}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Famous Quotes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-purple-600" />
              经典语录
            </CardTitle>
            <CardDescription>
              电影中最著名的台词片段（合理使用原则）
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {famousQuotes.map((quote, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-4">
                  <blockquote className="italic text-gray-700">
                    "{quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Copyright Notice */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">版权声明</h3>
          <p className="text-sm text-gray-600 mb-2">
            《蜜蜂总动员》(Bee Movie) ©2007 DreamWorks Animation SKG, Inc. 保留所有权利。
          </p>
          <p className="text-sm text-gray-600">
            本页面仅用于教育和信息目的，展示的内容片段遵循合理使用原则。
            完整的剧本内容受版权保护，未经许可不得完整复制或展示。
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
          >
            返回首页
          </a>
        </div>
      </div>
    </div>
  )
}
