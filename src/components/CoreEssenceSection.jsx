import { useTranslation } from "react-i18next";

/**
 * Core Essence Section Component
 * Design: Four-column layout with cards showcasing core values
 * Features: Numbered items, hover effects, minimalist card design
 */
export default function CoreEssenceSection() {
  const { t } = useTranslation();
  const coreValues = t("coreEssence.values", { returnObjects: true });

  return (
    <section className="pt-4 pb-10 md:py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t("coreEssence.title")}
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto break-keep">
            {t("coreEssence.description")}
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {coreValues.map(value => (
            <div
              key={value.number}
              className="group p-6 md:p-8 bg-card rounded-xl border border-border hover:border-foreground/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
            >
              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-display font-bold text-foreground/30 group-hover:text-foreground/80 transition-colors">
                  {value.number}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-base text-foreground/70 leading-relaxed font-sans">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
