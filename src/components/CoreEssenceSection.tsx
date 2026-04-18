import { useTranslation } from 'react-i18next';

/**
 * Core Essence Section Component
 * Design: Three-column layout with cards showcasing core values
 * Features: Numbered items, hover effects, minimalist card design
 */
export default function CoreEssenceSection() {
  const { t } = useTranslation();
  const coreValues = t('coreEssence.values', { returnObjects: true }) as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          {t('coreEssence.title')}
        </h2>
        <p className="text-base md:text-lg text-foreground/70 mb-16 md:mb-24 max-w-3xl">
          {t('coreEssence.description')}
        </p>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {coreValues.map((value) => (
            <div
              key={value.number}
              className="group p-8 md:p-10 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-display font-bold text-accent/30 group-hover:text-accent/50 transition-colors">
                  {value.number}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-base text-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
