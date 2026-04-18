/**
 * Hero Section Component
 * Design: Full-height hero with gecko image background, centered text overlay
 * Features: Animated text entrance, scroll indicator
 */
export default function HeroSection() {
  const heroImageUrl =
    'https://d2xsxph8kpxj0f.cloudfront.net/310519663567263507/7kBMT4bwFHFXdzKagqZs6h/hero-gecko-natural-eDH2mUGJagrLVJCxK5V7jN.webp';

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${heroImageUrl}')`,
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center justify-center text-center gap-6 px-4">
        <div className="space-y-2 animate-fade-in-up">
          <p className="text-sm md:text-base font-serif text-white/80 uppercase tracking-widest">
            Crested Gecko Specialised Breeder
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
            TOPS CRE
          </h1>
          <p className="text-lg md:text-xl font-serif text-accent uppercase tracking-wide">
            TOPS CRE
          </p>
        </div>

        <p className="text-base md:text-lg text-white/90 font-serif max-w-2xl mt-8">
          Crested Gecko Specialised Breeding & Sale
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
