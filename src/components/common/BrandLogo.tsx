import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'white';
  showSubtitle?: boolean;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  asLink?: boolean;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  showSubtitle = true,
  showText = true,
  size = 'md',
  className = '',
  asLink = true,
  onClick
}) => {
  const [imgError, setImgError] = useState(false);

  // Sizing definitions for logo image container (maintains strict 1:1 aspect ratio)
  const imageSizes = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11',
    lg: 'w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14'
  };

  const pixelDimensions = {
    sm: 36,
    md: 44,
    lg: 56
  };

  const titleSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-sm sm:text-base lg:text-base xl:text-lg',
    lg: 'text-lg sm:text-xl md:text-2xl'
  };

  const subtitleSizes = {
    sm: 'text-[9px] sm:text-[10px]',
    md: 'text-[9px] sm:text-[10px] xl:text-[11px]',
    lg: 'text-[11px] sm:text-xs'
  };

  const isLight = variant === 'light' || variant === 'white';

  const content = (
    <div className={`flex items-center gap-2.5 sm:gap-3 group transition-transform ${className}`}>
      {/* Official KK Associates Brand Logo Image */}
      <div 
        className={`relative ${imageSizes[size]} aspect-square flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 shadow-sm border ${
          isLight 
            ? 'border-[#C7A76C]/40 bg-[#075E54] ring-1 ring-white/10 group-hover:border-[#DFCA98] group-hover:shadow-md' 
            : 'border-[#C7A76C]/30 bg-[#075E54] ring-1 ring-black/5 group-hover:border-[#C7A76C] group-hover:shadow-md'
        }`}
      >
        {!imgError ? (
          <img
            src="/assets/logo.png"
            alt="KK Associates logo"
            width={pixelDimensions[size]}
            height={pixelDimensions[size]}
            loading="eager"
            decoding="async"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          /* Graceful fallback in the unlikely event the image cannot be loaded */
          <div className="w-full h-full flex items-center justify-center bg-[#075E54] text-[#C7A76C] font-display font-black text-lg">
            K
          </div>
        )}
      </div>

      {/* Brand Name & Subtitle Typography */}
      {showText && (
        <div className="flex flex-col flex-shrink-0 text-left">
          <span 
            className={`font-black tracking-tight leading-none font-display ${titleSizes[size]} transition-colors duration-200 ${
              isLight 
                ? 'text-white group-hover:text-[#DFCA98]' 
                : 'text-[#172522] group-hover:text-[#075E54]'
            }`}
          >
            KK ASSOCIATES
          </span>
          {showSubtitle && (
            <span 
              className={`font-semibold tracking-wide mt-0.5 leading-none ${subtitleSizes[size]} transition-colors duration-200 ${
                isLight ? 'text-[#DFCA98]' : 'text-[#075E54]'
              }`}
            >
              (Klinkaaraa Associates)
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link 
        to="/" 
        onClick={onClick}
        aria-label="KK Associates Real Estate Homepage"
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#075E54] rounded-xl"
      >
        {content}
      </Link>
    );
  }

  return content;
};

