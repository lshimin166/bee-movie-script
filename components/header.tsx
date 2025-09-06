export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">🐝</span>
            <span className="font-bold text-xl">Bee Movie Script</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a href="#bee-movie-script-tools" className="text-sm hover:text-foreground transition-colors">
              Copy and Paste
            </a>
            <a href="#features" className="text-sm hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#faq" className="text-sm hover:text-foreground transition-colors">
              faq
            </a>
            <a href="https://github.com/lshimin166/bee-movie-script" className="text-sm hover:text-foreground transition-colors">
              GitHub
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
