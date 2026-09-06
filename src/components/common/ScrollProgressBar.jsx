'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentProgress = window.scrollY / totalHeight;
            setScrollProgress(Math.min(Math.max(currentProgress, 0), 1));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#8B5CF6] via-white to-[#8B5CF6] shadow-[0_0_14px_rgba(139,92,246,0.85)]"
        style={{
          transform: `scaleX(${scrollProgress})`,
          transformOrigin: 'left center',
          willChange: 'transform'
        }}
      />
    </div>
  );
}
