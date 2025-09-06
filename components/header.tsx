export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐝</span>
            <span className="font-bold text-xl">Bee Movie Script</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#script" className="text-sm hover:text-foreground transition-colors">
              Bee Movie Script
            </a>
            <a href="#quotes" className="text-sm hover:text-foreground transition-colors">
              Bee Movie Quotes
            </a>
            <a href="#features" className="text-sm hover:text-foreground transition-colors">
              Script Features
            </a>
            <a href="#how-to-use" className="text-sm hover:text-foreground transition-colors">
              How to Use
            </a>
            <a href="#" className="text-sm hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="#" className="text-sm hover:text-foreground transition-colors">
              Discord
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
