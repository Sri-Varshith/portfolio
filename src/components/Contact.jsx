import { useState, useEffect } from 'react';

function Contact() {
  const [status, setStatus] = useState("idle"); 
  const [testCase, setTestCase] = useState(1);

  useEffect(() => {
    if (status === "running") {
      if (testCase < 100) {
        const timer = setTimeout(() => {
          setTestCase(prev => prev + 2);
        }, 20);
        return () => clearTimeout(timer);
      } else {
        setStatus("accepted");
        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      }
    }
  }, [status, testCase]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === "idle") {
      setStatus("running");
      setTestCase(1);
    }
  };

  return (
    <section className="w-full py-20 px-6 md:px-20 border-t border-zinc-800/50" id="contact">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
          Get In <span className="text-brand-green">Touch</span>
        </h2>
        <p className="text-zinc-400 font-mono text-sm">
          {">"} ./submit_message.sh
        </p>
      </div>

      <div className="max-w-2xl bg-zinc-900 border border-zinc-800 p-8 rounded">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-zinc-400 font-mono text-sm">const name =</label>
            <input 
              type="text" 
              required
              placeholder='"Enter your name"'
              className="bg-dark-bg border border-zinc-700 text-white p-3 rounded font-mono focus:outline-none focus:border-brand-green transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-zinc-400 font-mono text-sm">const email =</label>
            <input 
              type="email" 
              required
              placeholder='"Enter your email"'
              className="bg-dark-bg border border-zinc-700 text-white p-3 rounded font-mono focus:outline-none focus:border-brand-green transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-zinc-400 font-mono text-sm">const message =</label>
            <textarea 
              required
              rows="5"
              placeholder='"Type your message here..."'
              className="bg-dark-bg border border-zinc-700 text-white p-3 rounded font-mono focus:outline-none focus:border-brand-green transition-colors resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status !== "idle"}
            className={`mt-4 py-4 rounded font-bold font-mono transition-all duration-300 border ${
              status === "idle" 
                ? "bg-zinc-800 text-white border-zinc-700 hover:border-brand-green hover:text-brand-green" 
                : status === "running"
                ? "bg-dark-bg text-zinc-400 border-zinc-700 cursor-not-allowed"
                : "bg-brand-green/10 text-brand-green border-brand-green shadow-[0_0_15px_rgba(29,185,84,0.3)]"
            }`}
          >
            {status === "idle" && "Submit"}
            {status === "running" && `Running on test ${testCase}...`}
            {status === "accepted" && "Verdict: Accepted"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;