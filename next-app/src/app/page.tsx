import { Cursor }       from '@/components/Cursor';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Header }       from '@/components/Header';
import { Hero }         from '@/components/Hero';
import { TechStrip }    from '@/components/TechStrip';
import { About }        from '@/components/About';
import { Experience }   from '@/components/Experience';
import { Projects }     from '@/components/Projects';
import { Stack }        from '@/components/Stack';
import { Contact }      from '@/components/Contact';
import { Footer }       from '@/components/Footer';

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="absolute left-4 top-2 -translate-y-16 border border-rule bg-paper px-3 py-2 font-mono text-xs text-ink focus:translate-y-0"
      >
        Skip to content
      </a>
      <Cursor />
      <ScrollReveal />
      <Header />
      <main id="main">
        <Hero />
        <TechStrip />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
