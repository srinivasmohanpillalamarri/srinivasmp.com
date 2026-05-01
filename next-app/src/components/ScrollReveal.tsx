'use client';

import { useEffect } from 'react';

export function ScrollReveal() {
  useEffect(() => {
    document.body.classList.add('js-ready');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      document.body.classList.remove('js-ready');
    };
  }, []);

  return null;
}
