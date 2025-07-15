// components/LottieNoInstall.tsx
'use client';

import { useEffect } from 'react';

export default function LottieNoInstall() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js';
    script.onload = () => {
      const container = document.getElementById('lottie-container');
      if (container && (window as any).lottie) {
        (window as any).lottie.loadAnimation({
          container,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: '/images/animations/Success.json', 
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div id="lottie-container" style={{ width: 200, height: 200 }} />
    </div>
  );
}
