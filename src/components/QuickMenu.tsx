import { useTranslation } from 'react-i18next';
import { Instagram, MessageCircle, Link2, ListChecks } from 'lucide-react';
import { useState, useEffect } from 'react';

/**
 * Quick Menu Component
 * Floating action buttons (FAB) for quick access to social and external links
 */
export default function QuickMenu() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  // Show QuickMenu after scrolling down a bit
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);

    // Check initial position
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed right-4 bottom-4 md:right-8 md:bottom-8 z-50 flex flex-col gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'
        }`}
    >
      <a
        href="https://www.feedle.me/profile/4e273a00-7444-402d-8a99-15a11907bce2"
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-foreground text-background rounded-full shadow-xl hover:bg-background hover:text-foreground border-2 border-foreground hover:border-foreground hover:scale-105 transition-all duration-300"
        aria-label={t('footer.availableList')}
      >
        <ListChecks size={24} />
        <span className="absolute right-full mr-4 px-4 py-2 bg-foreground text-background text-sm font-bold rounded-l-xl rounded-b-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap hidden md:block pointer-events-none">
          {t('footer.availableList')}
        </span>
      </a>

      <a
        href="https://open.kakao.com/o/szrb6myh"
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-foreground text-background rounded-full shadow-xl hover:bg-[#FEE500] hover:text-[#191919] hover:border-[#FEE500] border-2 border-foreground hover:scale-105 transition-all duration-300"
        aria-label={t('footer.kakaoTalk')}
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-4 px-4 py-2 bg-[#FEE500] text-[#191919] text-sm font-bold rounded-l-xl rounded-b-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap hidden md:block pointer-events-none shadow-lg">
          {t('footer.kakaoTalk')}
        </span>
      </a>

      <a
        href="https://www.instagram.com/tops_cre/"
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-foreground text-background rounded-full shadow-xl hover:bg-background hover:text-[#E1306C] border-2 border-foreground hover:border-[#E1306C] hover:scale-105 transition-all duration-300"
        aria-label={t('footer.instagram')}
      >
        <Instagram size={24} />
        <span className="absolute right-full mr-4 px-4 py-2 bg-[#E1306C] text-white text-sm font-bold rounded-l-xl rounded-b-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap hidden md:block pointer-events-none shadow-lg">
          {t('footer.instagram')}
        </span>
      </a>
    </div>
  );
}
