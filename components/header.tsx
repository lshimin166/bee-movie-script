"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">🐝</span>
            <span className="font-bold text-xl">Bee Movie Script</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/#bee-movie-script-tools"
              className="text-sm hover:text-foreground transition-colors"
            >
              Copy and Paste
            </a>
            <a
              className="text-sm hover:text-foreground transition-colors"
              href="/whole-script"
            >
              Whole Script
            </a>
            <a
              href="/#features"
              className="text-sm hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="/#faq"
              className="text-sm hover:text-foreground transition-colors"
            >
              FAQ
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://github.com/lshimin166/bee-movie-script"
              className="text-sm hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col gap-4 mt-4">
              <a
                href="#bee-movie-script-tools"
                className="text-base hover:text-foreground transition-colors py-2"
                onClick={closeMenu}
              >
                Copy and Paste
              </a>
              <a
                href="#features"
                className="text-base hover:text-foreground transition-colors py-2"
                onClick={closeMenu}
              >
                Features
              </a>
              <a
                href="#faq"
                className="text-base hover:text-foreground transition-colors py-2"
                onClick={closeMenu}
              >
                FAQ
              </a>
              <a
                href="https://github.com/lshimin166/bee-movie-script"
                className="text-base hover:text-foreground transition-colors py-2"
                onClick={closeMenu}
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
