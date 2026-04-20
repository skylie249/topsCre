import { useTranslation } from "react-i18next";

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
            <h3 className="text-lg md:text-xl font-display font-bold">
              {t("footer.brand")}
            </h3>
            <p className="text-sm text-background/80 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif font-semibold uppercase tracking-wider">
              {t("footer.contact")}
            </h4>
            <div className="text-sm text-background/80 space-y-2">
              <a
                href="https://open.kakao.com/o/szrb6myh"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-background transition-colors"
                aria-label="Kakao Talk"
              >
                Kakao: TOPS CRE
              </a>
              <a
                href="https://www.instagram.com/tops_cre/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-background transition-colors"
                aria-label="Instagram"
              >
                Instagram: @tops_cre
              </a>
            </div>
          </div>

          {/* Partners Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif font-semibold uppercase tracking-wider">
              {t("footer.partners")}
            </h4>
            <div className="text-sm text-background/80 space-y-2">
              <p>
                <a
                  href="https://venus-gecko.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  VENUS GECKO
                </a>
              </p>
              <p>
                <a
                  href="https://www.dodosi.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  도도시
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <p className="text-xs text-background/70">
            {t("footer.copyright", { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}
