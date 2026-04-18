import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  scrolled: boolean;
}

/**
 * Navigation Component
 * Design: Minimalist header with cream background, forest green text
 * Features: Responsive mobile menu, language selector, contact button
 */
export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SIGNATURE', href: '#signature' },
    { label: 'VISIT', href: '#visit' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-sm'
          : 'bg-background'
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-lg md:text-xl font-display font-bold text-foreground">
            TOPS CRE
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <button className="hidden sm:flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            <span>KR</span>
          </button>

          {/* Contact Button */}
          <Button
            className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
            size="sm"
          >
            Contact
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-secondary/20 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
