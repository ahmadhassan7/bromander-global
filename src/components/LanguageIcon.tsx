import Flag from 'react-world-flags';
import Image from 'next/image';

interface LanguageIconProps {
  language: 'en' | 'sv';
  className?: string;
}

export default function LanguageIcon({ language, className = '' }: LanguageIconProps) {
  if (language === 'en') {
    return (
      <div className={`rounded-sm overflow-hidden border border-gray-600 ${className}`}>
        <Image 
          src="/english-flag.jpg" 
          alt="English Language" 
          width={20} 
          height={16} 
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  if (language === 'sv') {
    return (
      <div className={`rounded-sm overflow-hidden border border-gray-600 ${className}`}>
        <Flag 
          code="SE" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
    );
  }

  return null;
}