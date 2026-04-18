import { useTranslation } from 'react-i18next';
import { Instagram, MessageCircle, Link2 } from 'lucide-react';

/**
 * Footer Component
 * Design: Minimalist footer with brand info and social links
 * Features: Copyright, social links, partner links
 */
export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-display font-bold">{t('footer.brand')}</h3>
            <p className="text-sm text-background/80 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif font-semibold uppercase tracking-wider">
              {t('footer.contact')}
            </h4>
            <div className="text-sm text-background/80 space-y-2">
              <p>Kakao: TOPS CRE</p>
              <p>Instagram: @tops_cre</p>
            </div>
          </div>

          {/* Partners Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif font-semibold uppercase tracking-wider">
              {t('footer.partners')}
            </h4>
            <div className="text-sm text-background/80 space-y-2">
              <p>VENUS GECKO</p>
              <p>도도시</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <p className="text-xs text-background/70">
            {t('footer.copyright', { year: currentYear })}
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-background/70 hover:text-background transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-background/70 hover:text-background transition-colors"
              aria-label="Kakao Talk"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="#"
              className="text-background/70 hover:text-background transition-colors"
              aria-label="Naver Band"
            >
              <Link2 size={20} />
            </a>
          </div>

          {/* Partner Links */}
          <div className="flex gap-4 text-xs text-background/70">
            <a href="#" className="hover:text-background transition-colors">
              VENUS GECKO
            </a>
            <span>|</span>
            <a href="#" className="hover:text-background transition-colors">
              도도시
            </a>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-8 border-t border-background/20 flex flex-col md:flex-row gap-4 text-xs text-background/70">
          <a href="#" className="hover:text-background transition-colors">
            {t('footer.availableList')}
          </a>
          <span>|</span>
          <a href="#" className="hover:text-background transition-colors">
            {t('footer.kakaoTalk')}
          </a>
          <span>|</span>
          <a href="#" className="hover:text-background transition-colors">
            {t('footer.instagram')}
          </a>
          <span>|</span>
          <a href="#" className="hover:text-background transition-colors">
            {t('footer.naverBand')}
          </a>
        </div>
      </div>
    </footer>
  );
}
