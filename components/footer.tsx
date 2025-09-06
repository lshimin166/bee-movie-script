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
              <span className="font-bold text-lg">Bee Movie Script</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Bee Movie Script is the ultimate platform for generating Bee Movie script content, memes, and sharing the
              legendary internet phenomenon instantly.
            </p>
            <div className="flex gap-3">
              <a href="https://beemoviescript.org/" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/lshimin166/bee-movie-script" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:hi@beemoviescript.org" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right side - Navigation columns */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-semibold mb-4">Quick Links</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#bee-movie-script-tools" className="hover:text-foreground">
                    Copy and Paste
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-foreground">
                  Features
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-foreground">
                    Faq
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-semibold mb-4">Community</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://github.com/lshimin166/bee-movie-script" className="hover:text-foreground" target="_blank">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://beemovie.fandom.com/wiki/Bee_Movie/Transcript" className="hover:text-foreground" target="_blank">
                    Bee Movie Wiki
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Bee Movie Script. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
