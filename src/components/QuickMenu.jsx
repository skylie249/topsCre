import { useTranslation } from "react-i18next";
import { Instagram, MessageCircle, ListChecks, Plus } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Quick Menu Component
 * Floating action buttons (FAB) for quick access to social and external links
 */
export default function QuickMenu() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  // Show QuickMenu after scrolling down a bit and check footer overlap
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        // Trigger style inversion when the footer reaches inside the viewport where QuickMenu lives
        if (footerTop < window.innerHeight - 20) {
          setIsOverFooter(true);
        } else {
          setIsOverFooter(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Check initial position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const btnBg = isOverFooter ? "bg-background text-foreground border-background" : "bg-foreground text-background border-foreground";
  const defaultBtnClass = isOverFooter 
    ? "bg-background text-foreground border-background hover:bg-foreground hover:text-background hover:border-foreground" 
    : "bg-foreground text-background border-foreground hover:bg-background hover:text-foreground hover:border-foreground";

  return (
    <div
      className={`fixed right-4 bottom-4 md:right-8 md:bottom-8 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"}`}
    >
      <div className={`flex flex-col gap-3 items-end transition-all duration-300 origin-bottom ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none mb-[-20px]"}`}>
        <a
        href="https://www.feedle.me/profile/4e273a00-7444-402d-8a99-15a11907bce2"
        target="_blank"
        rel="noreferrer noopener"
        className={`group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl hover:scale-105 transition-all duration-300 border-2 ${defaultBtnClass}`}
        aria-label={t("footer.availableList")}
      >
        <ListChecks size={24} />
        <span className={`absolute right-full mr-4 px-4 py-2 text-sm font-bold rounded-l-xl rounded-b-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap hidden md:block pointer-events-none ${isOverFooter ? "bg-background text-foreground border border-foreground/20" : "bg-foreground text-background border border-background/20"}`}>
          {t("footer.availableList")}
        </span>
      </a>

      <a
        href="https://open.kakao.com/o/szrb6myh"
        target="_blank"
        rel="noreferrer noopener"
        className={`group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:bg-[#FEE500] hover:text-[#191919] hover:border-[#FEE500] ${btnBg}`}
        aria-label={t("footer.kakaoTalk")}
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-4 px-4 py-2 bg-[#FEE500] text-[#191919] text-sm font-bold rounded-l-xl rounded-b-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap hidden md:block pointer-events-none shadow-lg">
          {t("footer.kakaoTalk")}
        </span>
      </a>

      <a
        href="https://www.instagram.com/tops_cre/"
        target="_blank"
        rel="noreferrer noopener"
        className={`group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:bg-background hover:text-[#E1306C] hover:border-[#E1306C] ${btnBg}`}
        aria-label={t("footer.instagram")}
      >
        <Instagram size={24} />
        <span className="absolute right-full mr-4 px-4 py-2 bg-[#E1306C] text-white text-sm font-bold rounded-l-xl rounded-b-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap hidden md:block pointer-events-none shadow-lg">
          {t("footer.instagram")}
        </span>
      </a>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl hover:scale-105 border-2 transition-all duration-300 ${btnBg}`}
        aria-label="Toggle Quick Menu"
      >
        <Plus size={28} className={`transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`} />
      </button>
    </div>
  );
}
