import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.signature'), href: '#signature' },
    { label: t('nav.visit'), href: '#visit' },
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
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
          <div className="relative">
            <button
              className="hidden sm:flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors p-2 rounded-lg hover:bg-secondary/20"
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            >
              <Globe size={18} />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Language Dropdown */}
            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-card border border-border rounded-lg shadow-lg z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLanguageMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === lang.code
                        ? 'bg-accent/20 text-accent font-semibold'
                        : 'text-foreground/70 hover:text-foreground hover:bg-secondary/20'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact Button */}
          <Button
            className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
            size="sm"
          >
            {t('nav.contact')}
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
              {t('nav.contact')}
            </Button>

            {/* Mobile Language Selector */}
            <div className="pt-4 border-t border-border space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors ${
                    language === lang.code
                      ? 'bg-accent/20 text-accent font-semibold'
                      : 'text-foreground/70 hover:text-foreground hover:bg-secondary/20'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
