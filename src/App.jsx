import { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen bg-dark-bg animate-in fade-in duration-1000">
          <Navbar />
          <main className="max-w-7xl mx-auto">
            <Hero />
          </main>
        </div>
      )}
    </>
  );
}

export default App;