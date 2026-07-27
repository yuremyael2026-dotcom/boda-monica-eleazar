import React from 'react';

interface FloralDividerProps {
  className?: string;
  variant?: 'simple' | 'ornate' | 'branch' | 'ring';
}

export const FloralDivider: React.FC<FloralDividerProps> = ({ className = '', variant = 'ornate' }) => {
  if (variant === 'branch') {
    return (
      <div className={`flex items-center justify-center my-6 text-[#B08D57] ${className}`}>
        <svg className="w-48 h-10 opacity-80" viewBox="0 0 200 40" fill="none" stroke="currentColor">
          <path d="M10 20 C 50 10, 80 30, 100 20 C 120 10, 150 30, 190 20" strokeWidth="1.2" strokeLinecap="round" />
          {/* Leaf details left */}
          <path d="M30 17 C 25 10, 35 10, 35 18" fill="#B08D57" opacity="0.6" />
          <path d="M50 22 C 55 28, 45 30, 48 20" fill="#C87D55" opacity="0.6" />
          <path d="M70 16 C 68 8, 78 8, 75 17" fill="#DFCA92" opacity="0.8" />
          {/* Center blossom */}
          <circle cx="100" cy="20" r="3" fill="#B08D57" />
          <circle cx="95" cy="18" r="1.8" fill="#C87D55" opacity="0.8" />
          <circle cx="105" cy="18" r="1.8" fill="#C87D55" opacity="0.8" />
          <circle cx="100" cy="14" r="1.8" fill="#DFCA92" opacity="0.8" />
          {/* Leaf details right */}
          <path d="M130 16 C 132 8, 122 8, 125 17" fill="#DFCA92" opacity="0.8" />
          <path d="M150 22 C 145 28, 155 30, 152 20" fill="#C87D55" opacity="0.6" />
          <path d="M170 17 C 175 10, 165 10, 165 18" fill="#B08D57" opacity="0.6" />
        </svg>
      </div>
    );
  }

  if (variant === 'simple') {
    return (
      <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#B08D57]/60" />
        <div className="w-2 h-2 rotate-45 border border-[#B08D57] bg-[#FDFBF7]" />
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#B08D57]/60" />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center my-8 ${className}`}>
      <div className="flex items-center gap-4 max-w-xs sm:max-w-md w-full">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B08D57]/50 to-[#C87D55]/60" />
        <div className="flex items-center gap-1.5 text-[#B08D57]">
          <svg className="w-5 h-5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2C12 2 13 8 18 10C13 12 12 18 12 18C12 18 11 12 6 10C11 8 12 2 12 2Z" fill="#B08D57" opacity="0.3" />
            <path d="M12 6C12 6 12.6 9.6 15.6 10.8C12.6 12 12 15.6 12 15.6C12 15.6 11.4 12 8.4 10.8C11.4 9.6 12 6 12 6Z" fill="#C87D55" opacity="0.6" />
          </svg>
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#B08D57]/50 to-[#C87D55]/60" />
      </div>
    </div>
  );
};
