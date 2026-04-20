import { useTranslation } from "react-i18next";

/**
 * About Section Component
 * Design: Centered, readable layout for brand story
 */
export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative pt-20 pb-10 md:pt-32 md:pb-16 bg-background"
    >
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
            {t("about.title")}
          </h2>
          <p className="text-base md:text-xl font-sans text-foreground/80 leading-loose break-keep whitespace-pre-wrap">
            {t("about.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
