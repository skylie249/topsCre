import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * Navigation Component
 * Design: Minimalist header with premium glassmorphism accents
 * Features: Responsive mobile menu, Venus Gecko style language switcher, contact button
 */
export default function Navigation({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  const navItems = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.signature"), href: "#signature" },
  ];

  const languages = [
    {
      code: "ko",
      label: "KR",
      flagUrl: "https://flagcdn.com/w20/kr.png",
      name: "한국어",
    },
    {
      code: "en",
      label: "EN",
      flagUrl: "https://flagcdn.com/w20/us.png",
      name: "English",
    },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-background"
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
          {navItems.map(item => (
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
          {/* Language Selector (Venus Gecko Style) */}
          <div className="hidden sm:block">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 rounded-full border-foreground/10 glass bg-transparent hover:bg-foreground/5 hover:border-venus-gold/50 hover:text-venus-gold transition-all duration-300 h-9 px-4 group"
                >
                  <img
                    src={currentLang.flagUrl}
                    alt={currentLang.label}
                    className="w-4 h-auto object-cover rounded-sm opacity-90"
                  />
                  <span className="text-[10px] tracking-widest font-bold font-jakarta text-foreground/80 group-hover:text-venus-gold">
                    {currentLang.label}
                  </span>
                  <ChevronDown
                    size={14}
                    className="text-foreground/30 transition-transform duration-300 group-data-[state=open]:rotate-180"
                  />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-36 rounded-2xl glass-dark border-foreground/5 z-[100] p-2 bg-background/60 backdrop-blur-xl"
              >
                {languages.map(lang => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center gap-3 px-2 py-2 cursor-pointer transition-all duration-300 rounded-xl outline-none ${
                      language === lang.code
                        ? "dropdown-gold-active"
                        : "text-foreground/60 hover:bg-foreground/10 hover:text-foreground"
                    }`}
                  >
                    <img
                      src={lang.flagUrl}
                      alt={lang.label}
                      className="w-5 h-auto object-cover rounded-sm"
                    />
                    <div className="flex flex-col">
                      <span className="text-[10px] tracking-wider font-bold font-jakarta leading-tight">
                        {lang.label}
                      </span>
                      <span className="text-[8px] text-foreground/30 uppercase font-jakarta leading-tight">
                        {lang.name}
                      </span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Contact Button */}
          <Button
            className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
            size="sm"
            onClick={() =>
              window.open(
                "https://open.kakao.com/o/szrb6myh",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            {t("nav.contact")}
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
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
              onClick={() => {
                window.open(
                  "https://open.kakao.com/o/szrb6myh",
                  "_blank",
                  "noopener,noreferrer"
                );
                setMobileMenuOpen(false);
              }}
            >
              {t("nav.contact")}
            </Button>

            {/* Mobile Language Selector (Refined) */}
            <div className="pt-4 border-t border-secondary space-y-2">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all ${
                    language === lang.code
                      ? "dropdown-gold-active"
                      : "text-foreground/70 hover:text-foreground hover:bg-secondary/20"
                  }`}
                >
                  <img
                    src={lang.flagUrl}
                    alt={lang.label}
                    className="w-5 h-auto object-cover rounded-sm"
                  />
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold font-jakarta tracking-wide">
                      {lang.label}
                    </span>
                    <span className="text-[10px] text-foreground/40 font-jakarta uppercase">
                      {lang.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
