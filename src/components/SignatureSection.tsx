import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

/**
 * Signature Section Component
 * Design: Carousel of gecko cards with male/female filter
 * Features: Embla carousel-like functionality, filter buttons, navigation
 */
export default function SignatureSection() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<'all' | 'male' | 'female'>('all');

  const geckoData = [
    {
      id: 1,
      name: 'DRIPPY WHITE SPOT',
      breeder: 'Duecoo',
      gender: 'male',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663567263507/7kBMT4bwFHFXdzKagqZs6h/gecko-card-bg-1-nL8BkJFszDCZvfYfmfsD8x.webp',
    },
    {
      id: 2,
      name: 'CAPPUCINO',
      breeder: 'Radu',
      gender: 'female',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663567263507/7kBMT4bwFHFXdzKagqZs6h/gecko-card-bg-2-KhdJrRvxoEG9tSywLHyXzS.webp',
    },
    {
      id: 3,
      name: 'LILLY WHITE',
      breeder: 'Tina',
      gender: 'female',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663567263507/7kBMT4bwFHFXdzKagqZs6h/gecko-card-bg-1-nL8BkJFszDCZvfYfmfsD8x.webp',
    },
    {
      id: 4,
      name: 'TRI EXTREME HARLIQUIN',
      breeder: 'Kona',
      gender: 'male',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663567263507/7kBMT4bwFHFXdzKagqZs6h/gecko-card-bg-2-KhdJrRvxoEG9tSywLHyXzS.webp',
    },
    {
      id: 5,
      name: 'SPT',
      breeder: 'Polly',
      gender: 'female',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663567263507/7kBMT4bwFHFXdzKagqZs6h/gecko-card-bg-1-nL8BkJFszDCZvfYfmfsD8x.webp',
    },
  ];

  const filteredGeckos =
    filter === 'all' ? geckoData : geckoData.filter((g) => g.gender === filter);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredGeckos.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === filteredGeckos.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="signature" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t('signature.title')}
          </h2>
          <p className="text-base md:text-lg text-foreground/70">
            {t('signature.description')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-12">
          <Button
            onClick={() => {
              setFilter('male');
              setCurrentIndex(0);
            }}
            variant={filter === 'male' ? 'default' : 'outline'}
            className={filter === 'male' ? 'bg-accent text-accent-foreground' : ''}
          >
            {t('signature.viewMale')}
          </Button>
          <Button
            onClick={() => {
              setFilter('female');
              setCurrentIndex(0);
            }}
            variant={filter === 'female' ? 'default' : 'outline'}
            className={filter === 'female' ? 'bg-accent text-accent-foreground' : ''}
          >
            {t('signature.viewFemale')}
          </Button>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <div className="flex">
                {filteredGeckos.map((gecko) => (
                  <div key={gecko.id} className="w-full flex-shrink-0">
                    <div className="aspect-video md:aspect-square bg-card rounded-2xl overflow-hidden border border-border">
                      <img
                        src={gecko.image}
                        alt={gecko.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-6 space-y-2">
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground">
                        {gecko.name}
                      </h3>
                      <p className="text-base text-foreground/70">{gecko.breeder}</p>
                      <Button
                        variant="outline"
                        className="mt-4 border-accent text-accent hover:bg-accent/10"
                      >
                        {t('signature.viewMore')}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:translate-x-0 p-2 text-foreground hover:bg-secondary/20 rounded-lg transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-0 p-2 text-foreground hover:bg-secondary/20 rounded-lg transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2 mt-8 justify-center">
            {filteredGeckos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-accent w-8' : 'bg-border'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
