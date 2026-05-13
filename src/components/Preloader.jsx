import { useState, useEffect } from 'react';

function Preloader({ onComplete }) {
  const [status, setStatus] = useState("In Queue");
  const [testCase, setTestCase] = useState(1);

  useEffect(() => {
    // 1. Initial Delay for "In Queue"
    const queueTimeout = setTimeout(() => {
      setStatus("Running on test");
    }, 1000);

    return () => clearTimeout(queueTimeout);
  }, []);

  useEffect(() => {
    if (status === "Running on test") {
      if (testCase < 100) {
        // 2. Fast count through tests
        const timer = setTimeout(() => {
          setTestCase(prev => prev + 1);
        }, 10); // Adjust speed here
        return () => clearTimeout(timer);
      } else {
        // 3. Hit 100, then show Accepted
        setStatus("Accepted");
        setTimeout(() => {
          onComplete(); // Tells the main App to show the website
        }, 1000);
      }
    }
  }, [status, testCase, onComplete]);

  return (
    <div className="fixed inset-0 bg-dark-bg flex flex-col items-center justify-center z-50">
      <div className="font-mono text-2xl">
        <span className={status === "Accepted" ? "text-brand-green" : "text-zinc-400"}>
          {status === "Running on test" ? `${status} ${testCase}` : status}
        </span>
      </div>
      
      {/* Small progress bar for aesthetic */}
      <div className="w-64 h-1 bg-zinc-800 mt-4 rounded-full overflow-hidden">
        <div 
          className="h-full bg-brand-green transition-all duration-75"
          style={{ width: `${testCase}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Preloader;