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
        {/* Eye-contact Section */}
        <div className="mb-20 md:mb-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6">
                  Premium Companions
                </h2>
                <p className="text-lg md:text-xl font-serif text-secondary leading-relaxed">
                  We believe that geckos are more than just exotic pets. They are companions that bring wonder and connection into your life. Each gecko in our collection has been carefully selected and raised to ensure the perfect match for your family.
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                  TOPS CRE represents a commitment to excellence in breeding, care, and the cultivation of meaningful human-gecko relationships. We focus on the wonder of life rather than artificial splendor.
                </p>
              </div>
            </div>

            {/* Right Column - Decorative */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-80 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🦎</div>
                  <p className="text-foreground/60 font-serif">A Connection Beyond Words</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Essence Intro */}
        <div className="space-y-6 mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            What Makes Us Different
          </h3>
          <p className="text-base md:text-lg text-foreground/70 max-w-3xl">
            At TOPS CRE, we understand that choosing a gecko is a significant decision. That's why we've built our reputation on three core principles that guide everything we do.
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
