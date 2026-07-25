import { ScrollReveal }      from '@/components/ScrollReveal';
import { Header }            from '@/components/Header';
import { Hero }              from '@/components/Hero';
import { Metrics }           from '@/components/Metrics';
import { About }             from '@/components/About';
import { Expertise }         from '@/components/Expertise';
import { Projects }          from '@/components/Projects';
import { Journey }           from '@/components/Journey';
import { Experience }        from '@/components/Experience';
// <ThoughtLeadership /> is built and styled but unmounted until there are real
// articles to list — see components/ThoughtLeadership.tsx and the `articles`
// array in data/resume.ts. Re-add the import and the tag below to restore it.
import { Testimonials }      from '@/components/Testimonials';
import { Contact }           from '@/components/Contact';
import { Footer }            from '@/components/Footer';

export default function Page() {
  return (
    <>
      <a href="#main" className="skip-link text-[15px] font-medium">
        Skip to content
      </a>
      <ScrollReveal />
      <Header />
      <main id="main">
        <Hero />
        <Metrics />
        <About />
        <Expertise />
        <Projects />
        <Journey />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
