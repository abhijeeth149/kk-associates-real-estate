import React, { useState, useEffect, useCallback, useRef } from 'react';

export interface HeroSlide {
  id: string;
  src: string;
  alt: string;
  title: string;
  objectPosition: string;
  extraOverlay?: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-1',
    src: '/assets/hero/hero-property-1.jpeg',
    alt: 'Luxury high-rise residential towers in Hyderabad at dusk - KK Associates',
    title: 'Luxury High-Rise Communities',
    objectPosition: 'center 35%',
  },
  {
    id: 'hero-2',
    src: '/assets/hero/hero-property-2.jpg',
    alt: 'Premium gated community township with central swimming pool - KK Associates',
    title: 'Gated Townships & Club Living',
    objectPosition: 'center center',
  },
  {
    id: 'hero-3',
    src: '/assets/hero/hero-property-3.webp',
    alt: 'New launch high-rise construction and verified developments in Hyderabad',
    title: 'New Launches & Verified Developments',
    objectPosition: 'center 40%',
  },
  {
    id: 'hero-4',
    src: '/assets/hero/prestige-city-plan.jpeg',
    alt: 'The Prestige City Master Location & Regional Connectivity Plan - Rajendra Nagar Hyderabad',
    title: 'The Prestige City Master Connectivity Plan',
    objectPosition: 'center center',
    extraOverlay: 'bg-[#0F1919]/25',
  },
];

const SLIDE_DURATION = 5000; // 5 seconds per image

export const HeroBackgroundSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [erroredImages, setErroredImages] = useState<Record<string, boolean>>({});
  const timerRef = useRef<number | null>(null);

  // Check user prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  // Preload all slides once on mount to prevent flickering or blank screens
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  // Slide navigation with timer reset
  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    resetTimer();
    if (prefersReducedMotion) return;

    timerRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
  }, [prefersReducedMotion, resetTimer]);

  useEffect(() => {
    startTimer();
    return () => resetTimer();
  }, [startTimer, resetTimer]);

  const handleImageError = (id: string) => {
    setErroredImages((prev) => ({ ...prev, [id]: true }));
  };

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    startTimer();
  };

  return (
    <div 
      className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none"
      aria-label="Homepage background property slideshow"
    >
      {/* 1. Slides Stack */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        const isErrored = erroredImages[slide.id];
        const imageSrc = isErrored 
          ? '/assets/projects/godrej-epoque-neopolis/images/render_page_1.jpg'
          : slide.src;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity ease-in-out ${
              prefersReducedMotion ? 'duration-0' : 'duration-[1300ms]'
            } ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={!isActive}
          >
            <img
              src={imageSrc}
              alt={slide.alt}
              className="w-full h-full object-cover scale-[1.02] transform transition-transform duration-[6000ms] ease-out will-change-transform"
              style={{
                objectPosition: slide.objectPosition,
              }}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              onError={() => handleImageError(slide.id)}
            />

            {/* Slide-specific overlay (e.g. extra dimming for bright maps) */}
            {slide.extraOverlay && (
              <div className={`absolute inset-0 ${slide.extraOverlay}`} />
            )}
          </div>
        );
      })}

      {/* 2. Lighter Subtle Gradient Overlay - Maximum Brightness & Architectural Visibility */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(15, 25, 25, 0.28) 0%, rgba(15, 25, 25, 0.20) 45%, rgba(15, 25, 25, 0.38) 100%)',
        }}
      />

      {/* 3. Subtle interactive indicator dots positioned unobtrusively */}
      <div 
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 shadow-xl"
        role="tablist"
        aria-label="Homepage background image slideshow controls"
      >
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={slide.id}
              id={`hero-slide-indicator-${index}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Show background image ${index + 1} of ${HERO_SLIDES.length}: ${slide.title}`}
              onClick={() => goToSlide(index)}
              className="group relative p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DFCA98] rounded-full transition-all"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-500 ${
                  isActive 
                    ? 'w-7 bg-[#DFCA98] shadow-[0_0_8px_rgba(223,202,152,0.6)]' 
                    : 'w-2 bg-white/40 group-hover:bg-white/80'
                }`}
              />
              <span className="sr-only">{slide.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
