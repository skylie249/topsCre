/**
 * Core Essence Section Component
 * Design: Three-column layout with cards showcasing core values
 * Features: Numbered items, hover effects, minimalist card design
 */
export default function CoreEssenceSection() {
  const coreValues = [
    {
      number: '01',
      title: 'Pure Quality',
      description: 'We showcase only top-tier morphs that have undergone strict selection processes.',
    },
    {
      number: '02',
      title: 'Artistic Care',
      description: 'We maintain the best condition in a delicate environment, treating them like family.',
    },
    {
      number: '03',
      title: 'Premium Trust',
      description: 'We promise continuous management and communication even after adoption.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          The Perfect Companion
        </h2>
        <p className="text-base md:text-lg text-foreground/70 mb-16 md:mb-24 max-w-3xl">
          We define geckos not as mere exotic animals, but as your special 'companion family'.
          Experience the wonderful connection the moment your eyes meet.
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
