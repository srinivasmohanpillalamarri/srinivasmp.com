'use client';

import { useEffect, useRef } from 'react';

type Props = {
  strings: string[];
  className?: string;
};

export function TypedText({ strings, className = '' }: Props) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;
    let destroyed = false;

    import('typed.js').then(({ default: Typed }) => {
      if (destroyed || !el.current) return;
      const typed = new Typed(el.current, {
        strings,
        loop: true,
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 2000,
        startDelay: 500,
        showCursor: true,
        cursorChar: '|',
      });
      return () => typed.destroy();
    });

    return () => { destroyed = true; };
  }, [strings]);

  return <span ref={el} className={className} />;
}
