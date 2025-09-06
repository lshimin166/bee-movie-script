import { Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Left side - Logo and description */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐝</span>
              <span className="font-bold text-lg">BeeScript</span>
            </div>
            <p className="text-muted-foreground text-sm">
              BeeScript is the ultimate platform for generating Bee Movie script content, memes, and sharing the
              legendary internet phenomenon instantly.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right side - Navigation columns */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#script" className="hover:text-foreground">
                    Script Generator
                  </a>
                </li>
                <li>
                  <a href="#quotes" className="hover:text-foreground">
                    Quote Library
                  </a>
                </li>
                <li>
                  <a href="#segments" className="hover:text-foreground">
                    Auto Segments
                  </a>
                </li>
                <li>
                  <a href="#compress" className="hover:text-foreground">
                    No Spaces Tool
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-to-use" className="hover:text-foreground">
                    How to Use
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-foreground">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#stats" className="hover:text-foreground">
                    Script Stats
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Reddit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 BeeScript. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
