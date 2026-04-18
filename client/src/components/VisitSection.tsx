import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle } from 'lucide-react';

/**
 * Visit Section Component
 * Design: Store information with contact options
 * Features: Store details, social links, booking button
 * Note: Store location map is excluded per requirements
 */
export default function VisitSection() {
  const { t } = useTranslation();

  return (
    <section id="visit" className="py-20 md:py-32 bg-secondary/5">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            {t('visit.title')}
          </h2>
          <p className="text-base md:text-lg text-foreground/70 mb-12">
            {t('visit.description')}
          </p>

          {/* Store Information */}
          <div className="bg-card p-8 md:p-12 rounded-2xl border border-border mb-12">
            <div className="space-y-6">
              {/* Contact Methods */}
              <div>
                <h3 className="text-sm font-serif font-semibold text-foreground/60 uppercase tracking-wider mb-4">
                  {t('visit.contact')}
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                  >
                    <MessageCircle size={18} />
                    <span className="text-sm font-medium">{t('visit.kakao')}</span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                  >
                    <Instagram size={18} />
                    <span className="text-sm font-medium">{t('visit.instagram')}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Button */}
          <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 px-8 text-base">
            {t('visit.bookVisit')}
          </Button>
        </div>
      </div>
    </section>
  );
}
