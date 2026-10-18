import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, getGeneralWhatsAppMessage } from '../../utils/whatsapp';

interface WhatsAppButtonProps {
  message?: string;
  customMessage?: string;
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  iconOnly?: boolean;
  onClick?: () => void;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  customMessage,
  label = 'Chat on WhatsApp',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  iconOnly = false,
  onClick
}) => {
  const finalMessage = customMessage || message || getGeneralWhatsAppMessage();
  const href = buildWhatsAppUrl(finalMessage);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 transform active:scale-95 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';

  const sizeStyles = {
    sm: iconOnly ? 'p-2' : 'px-3.5 py-2 text-xs gap-1.5',
    md: iconOnly ? 'p-2.5' : 'px-4 py-2.5 text-sm gap-2',
    lg: iconOnly ? 'p-3.5' : 'px-6 py-3.5 text-base gap-2.5 shadow-md hover:shadow-lg'
  };

  const variantStyles = {
    primary: 'bg-[#075E54] hover:bg-[#043E37] text-white focus:ring-[#075E54]',
    secondary: 'bg-[#0D8B78] hover:bg-[#097262] text-white focus:ring-[#0D8B78]',
    outline: 'bg-transparent border-2 border-[#075E54] text-[#075E54] hover:bg-[#075E54] hover:text-white focus:ring-[#075E54]',
    gold: 'bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] focus:ring-[#C7A76C]',
    glass: 'bg-white/90 hover:bg-white text-[#075E54] backdrop-blur-md border border-white/40 focus:ring-white'
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={label}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      <MessageCircle className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-5 h-5' : 'w-4.5 h-4.5'} flex-shrink-0 text-current`} />
      {!iconOnly && <span>{label}</span>}
    </a>
  );
};
