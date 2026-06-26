import { Suspense, lazy } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { navLinks } from './data/portfolioData';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import FloatingBackground from './components/FloatingBackground';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Enterprise = lazy(() => import('./components/Enterprise'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

function SectionFallback() {
  return <div className="section-fallback" aria-hidden="true" />;
}

function App() {
  const { theme, toggleTheme } = useTheme();
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useScrollSpy(sectionIds);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <FloatingBackground />
      <Loading />
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />
      <main id="main-content">
        <Hero />
        <About />
        <Suspense fallback={<SectionFallback />}>
          <Skills />
          <Experience />
          <Enterprise />
          <Projects />
          <Achievements />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
