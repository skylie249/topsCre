/**
 * About Section Component
 * Design: Asymmetric layout with text on left, organic divider
 * Features: Eye-catching tagline, descriptive content
 */
export default function AboutSection() {
  const dividerUrl =
    'https://d2xsxph8kpxj0f.cloudfront.net/310519663567263507/7kBMT4bwFHFXdzKagqZs6h/section-divider-organic-Yt2gADnxNHenR7hsGNTSZ6.webp';

  return (
    <section id="about" className="relative py-20 md:py-32 bg-background">
      <div className="container">
        {/* Tagline */}
        <div className="mb-16 md:mb-24 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Eye-contact addicts.
          </h2>
          <p className="text-xl md:text-2xl font-serif text-secondary">
            When Eyes Meet
            <br />
            The Addiction Begins
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Venus Gecko: Your Precious Companion. We focus on the wonder of life rather than
              artificial splendor.
            </p>

            <div className="pt-6 border-t border-border">
              <h3 className="text-lg md:text-xl font-serif font-semibold text-foreground mb-4">
                CORE ESSENCE
              </h3>
              <h4 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                Precious Companion,
                <br />
                Beyond Value
              </h4>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                Venus Gecko is more than just a breeder; we propose a proper companion lifestyle.
                Meet the premium geckos that will be with you for a lifetime.
              </p>
            </div>
          </div>

          {/* Right Column - Decorative */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full h-80 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-2xl" />
          </div>
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
