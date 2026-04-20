import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

/**
 * Signature Section Component
 * Design: Slide Carousel of gecko cards (Responsive: 1 -> 2 -> 4 per view)
 * Features: Card layout, filter buttons, slide navigation
 */
export default function SignatureSection() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(4);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const geckoData = [
    {
      id: 1,
      name: "토리",
      gender: "male",
      image: "./images/tori.jpg",
      instagramUrl: "https://www.instagram.com/p/DUUSCmFE-9F/",
    },
    {
      id: 2,
      name: "예리",
      gender: "female",
      image: "./images/yeri.jpg",
      instagramUrl: "https://www.instagram.com/p/DAgSZVATTHG/",
    },
    {
      id: 3,
      name: "베리",
      gender: "female",
      image: "./images/berry.jpg",
      instagramUrl: "https://www.instagram.com/p/DBOZNypsVmn/",
    },
    {
      id: 4,
      name: "태리",
      gender: "male",
      image: "./images/terry.jpg",
      instagramUrl: "https://www.instagram.com/p/DAnaJ_KTejQ/",
    },
    {
      id: 5,
      name: "래리",
      gender: "male",
      image: "./images/larry.jpg",
      instagramUrl: "https://www.instagram.com/p/C_u0ZybT6YD/",
    },
  ];

  const filteredGeckos =
    filter === "all" ? geckoData : geckoData.filter(g => g.gender === filter);

  const maxIndex = Math.max(0, filteredGeckos.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === maxIndex ? 0 : prev + 1));
  };

  const handleFilterChange = newFilter => {
    setFilter(newFilter);
    setCurrentIndex(0); // Reset index on filter change
  };

  return (
    <section id="signature" className="py-16 md:py-24 bg-background">
      <div className="container overflow-hidden">
        {/* Centered Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            {t("signature.title")}
          </h2>
          <p className="text-base md:text-lg text-foreground/70 font-sans max-w-2xl mx-auto break-keep">
            {t("signature.description")}
          </p>
        </div>

        {/* Centered Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          <Button
            onClick={() => handleFilterChange("all")}
            variant={filter === "all" ? "default" : "outline"}
            className={`min-w-[100px] font-bold ${filter === "all" ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"}`}
          >
            {t("signature.filterAll")}
          </Button>
          <Button
            onClick={() => handleFilterChange("male")}
            variant={filter === "male" ? "default" : "outline"}
            className={`min-w-[100px] font-bold ${filter === "male" ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"}`}
          >
            {t("signature.filterMale")}
          </Button>
          <Button
            onClick={() => handleFilterChange("female")}
            variant={filter === "female" ? "default" : "outline"}
            className={`min-w-[100px] font-bold ${filter === "female" ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"}`}
          >
            {t("signature.filterFemale")}
          </Button>
        </div>

        {/* Carousel Container */}
        <div className="relative px-0 md:px-12 mx-auto w-full group">
          <div className="overflow-hidden p-4 -m-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {filteredGeckos.map(gecko => (
                <div
                  key={gecko.id}
                  className="flex-shrink-0 px-2 lg:px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col mx-auto hover:-translate-y-1">
                    <div className="aspect-square relative flex-shrink-0 border-b border-border bg-[#111111]">
                      {gecko.image ? (
                        <img
                          src={gecko.image}
                          alt={gecko.name}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-white">
                          <div className="w-24 h-24 border-2 border-white/20 rounded-full flex items-center justify-center">
                            <div className="text-center">
                              <span className="block font-display text-2xl font-black tracking-widest leading-none">
                                TOPS
                              </span>
                              <span className="block font-display text-XL font-black tracking-widest leading-none mt-1">
                                CRE
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Gender Badge Over Image */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 text-[10px] font-black rounded-full uppercase tracking-tighter shadow-lg ${
                            gecko.gender === "male"
                              ? "bg-blue-600 text-white"
                              : "bg-pink-600 text-white"
                          }`}
                        >
                          {gecko.gender}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow bg-card transition-colors">
                      <h3 className="text-xl md:text-2xl font-display font-black text-foreground mb-4 tracking-tight">
                        {gecko.name}
                      </h3>

                      <div className="mt-auto">
                        <Button
                          variant="outline"
                          className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-black italic tracking-tighter text-sm uppercase"
                          onClick={() =>
                            window.open(
                              gecko.instagramUrl,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                        >
                          {t("signature.viewDetails")}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Navigation Buttons */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 p-3 bg-foreground text-background hover:bg-primary hover:text-primary-foreground rounded-none transition-all z-10 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] hover:shadow-none translate-x-1 hover:translate-x-2 hidden md:block"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} strokeWidth={3} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 p-3 bg-foreground text-background hover:bg-primary hover:text-primary-foreground rounded-none transition-all z-10 shadow-[-4px_4px_0px_rgba(0,0,0,0.1)] hover:shadow-none -translate-x-1 hover:-translate-x-2 hidden md:block"
                aria-label="Next slide"
              >
                <ChevronRight size={24} strokeWidth={3} />
              </button>
            </>
          )}

          {/* Sharp Slide Indicators */}
          {maxIndex > 0 && (
            <div className="flex gap-1 mt-10 justify-center">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-12"
                      : "bg-border w-4 hover:bg-foreground/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
