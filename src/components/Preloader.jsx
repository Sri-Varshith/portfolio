import { useState, useEffect } from 'react';

function Preloader({ onComplete, isFading }) {
  const [status, setStatus] = useState("In Queue");
  const [testCase, setTestCase] = useState(1);

  useEffect(() => {
    const queueTimeout = setTimeout(() => {
      setStatus("Running on test");
    }, 800);

    return () => clearTimeout(queueTimeout);
  }, []);

  useEffect(() => {
    if (status === "Running on test") {
      if (testCase < 100) {
        const timer = setTimeout(() => {
          setTestCase(prev => prev + 1);
        }, 5); 
        return () => clearTimeout(timer);
      } else {
        setStatus("Accepted");
        setTimeout(() => {
          onComplete(); 
        }, 1000);
      }
    }
  }, [status, testCase, onComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-dark-bg flex flex-col items-center justify-center z-50 transition-opacity duration-500 ease-out ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="font-mono text-2xl">
        <span 
          className={
            status === "Accepted" 
              ? "text-brand-green animate-pop inline-block font-bold text-4xl" 
              : "text-zinc-400 inline-block"
          }
        >
          {status === "Running on test" ? `${status} ${testCase}` : status}
        </span>
      </div>
      
      {status !== "Accepted" && (
        <div className="w-64 h-1 bg-zinc-800 mt-4 rounded-full overflow-hidden">
          <div 
            className="h-full bg-brand-green transition-all duration-75"
            style={{ width: `${testCase}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default Preloader;