import { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  const handlePreloaderComplete = () => {
    setFading(true); 
    setTimeout(() => {
      setLoading(false); 
    }, 500);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-zinc-100">
      {loading && (
        <Preloader 
          isFading={fading} 
          onComplete={handlePreloaderComplete} 
        />
      )}
      
      <div 
        className={`transition-opacity duration-700 ease-in-out ${
          loading && !fading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <main className="max-w-7xl mx-auto pb-20">
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;