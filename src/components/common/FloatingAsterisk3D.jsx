'use client';

export default function FloatingAsterisk3D({ size = 48, color = '#FFFFFF', className = '', speed = 'normal' }) {
  return (
    <div
      className={`perspective-1000 preserve-3d inline-block pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className={`w-full h-full preserve-3d ${
          speed === 'fast' ? 'animate-spin-3d-fast' : 'animate-spin-3d'
        }`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Desgro Style 8-point geometric star/asterisk */}
          <path
            d="M50 0L58 35L93 25L68 50L93 75L58 65L50 100L42 65L7 75L32 50L7 25L42 35L50 0Z"
            fill={color}
          />
          <circle cx="50" cy="50" r="8" fill="#000000" />
        </svg>
      </div>
    </div>
  );
}
