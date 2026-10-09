import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'white';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  asLink?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  showSubtitle = true,
  size = 'md',
  className = '',
  asLink = true
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg md:text-xl',
    lg: 'text-2xl md:text-3xl'
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-xs'
  };

  const isLight = variant === 'light' || variant === 'white';

  const content = (
    <div className={`flex items-center gap-2.5 sm:gap-3 group transition-transform ${className}`}>
      {/* Brand Icon SVG: Double Architectural Chevron / Modern Roof Motif */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 flex items-center justify-center rounded-xl transition-all duration-300 ${isLight ? 'bg-white/10 group-hover:bg-white/20' : 'bg-emerald-soft group-hover:shadow-md'}`}>
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full p-1.5"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M20 66 L50 24 L80 66 L66 66 L50 42 L34 66 Z" 
            fill={isLight ? '#FFFFFF' : '#075E54'} 
          />
          <path 
            d="M36 78 L50 58 L64 78 L50 71 Z" 
            fill="#C7A76C" 
          />
          <circle cx="50" cy="18" r="4.5" fill="#C7A76C" />
        </svg>
      </div>

      {/* Brand Name & Subtitle */}
      <div className="flex flex-col">
        <span className={`font-extrabold tracking-tight leading-none font-display ${titleSizes[size]} ${isLight ? 'text-white' : 'text-[#172522]'}`}>
          KK ASSOCIATES
        </span>
        {showSubtitle && (
          <span className={`font-medium tracking-wide mt-0.5 leading-none ${subtitleSizes[size]} ${isLight ? 'text-emerald-100/80' : 'text-[#075E54]'}`}>
            (Klinkaaraa Associates)
          </span>
        )}
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link to="/" aria-label="KK Associates Real Estate Homepage">
        {content}
      </Link>
    );
  }

  return content;
};
