import { useTranslation } from 'react-i18next';

/**
 * About Section Component
 * Design: Asymmetric layout with text on left, organic divider
 * Features: Eye-catching tagline, descriptive content
 */
export default function AboutSection() {
  const { t } = useTranslation();
  const dividerUrl =
    'https://d2xsxph8kpxj0f.cloudfront.net/310519663567263507/7kBMT4bwFHFXdzKagqZs6h/section-divider-organic-Yt2gADnxNHenR7hsGNTSZ6.webp';

  return (
    <section id="about" className="relative py-20 md:py-32 bg-background">
      <div className="container">
        {/* Eye-contact Section */}
        <div className="mb-20 md:mb-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6">
                  {t('about.title')}
                </h2>
                <p className="text-lg md:text-xl font-serif text-secondary leading-relaxed">
                  {t('about.description')}
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                  {t('about.essence')}
                </p>
              </div>
            </div>

            {/* Right Column - Decorative */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-80 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🦎</div>
                  <p className="text-foreground/60 font-serif">{t('about.connection')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Essence Intro */}
        <div className="space-y-6 mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            {t('about.whatMakesDifferent')}
          </h3>
          <p className="text-base md:text-lg text-foreground/70 max-w-3xl">
            {t('about.differenceDescription')}
          </p>
        </div>
      </div>

      {/* Organic Divider */}
      <div className="mt-24 md:mt-32 -mx-4 md:-mx-0">
        <img
          src={dividerUrl}
          alt="divider"
          className="w-full h-auto opacity-50"
          style={{ marginBottom: '-2px' }}
        />
      </div>
    </section>
  );
}
