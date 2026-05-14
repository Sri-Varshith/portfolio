import { useState, useEffect } from "react";

function Contact() {
  const [status, setStatus] = useState("idle");
  const [testCase, setTestCase] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (status === "running") {
      if (testCase < 100) {
        const timer = setTimeout(() => {
          setTestCase((prev) => prev + 2);
        }, 20);

        return () => clearTimeout(timer);
      } else {
        setStatus("accepted");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      }
    }
  }, [status, testCase]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status !== "idle") return;

    setStatus("running");
    setTestCase(1);

    try {
      const response = await fetch(
        "https://formspree.io/f/mqenoyrv",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        alert("Something went wrong.");
        setStatus("idle");
      }
    } catch (error) {
      alert("Network error.");
      setStatus("idle");
    }
  };

  return (
    <section
      className="w-full py-20 px-6 md:px-20 border-t border-zinc-800/50"
      id="contact"
    >
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
          Get In <span className="text-brand-green">Touch</span>
        </h2>

        <p className="text-zinc-400 font-mono text-sm">
          {">"} ./submit_message.sh
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left Section */}
        <div className="space-y-8">

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Let&apos;s Build Something
              <span className="text-brand-green"> Meaningful.</span>
            </h3>

            <p className="text-zinc-400 font-mono text-sm leading-relaxed mt-5">
              Whether it&apos;s open-source, development, competitive programming,
              or just an exciting idea I&apos;m always open to collaborating,
              learning, and connecting with passionate people.
            </p>
          </div>

          {/* Email Card */}
          <div className="border border-zinc-800 bg-zinc-900 rounded p-5 flex items-center gap-4 w-fit">

            <a
              href="mailto:srivarshith101@gmail.com"
              className="p-3 rounded bg-brand-green/10 text-brand-green hover:bg-brand-green/20 transition-colors"
              title="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>

            <div>
              <p className="text-zinc-500 font-mono text-xs mb-1">
                EMAIL
              </p>

              <p className="text-white font-mono text-sm">
                srivarshith101@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-zinc-400 font-mono text-sm">
                const name =
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='"Enter your name"'
                className="bg-dark-bg border border-zinc-700 text-white p-3 rounded font-mono focus:outline-none focus:border-brand-green transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-zinc-400 font-mono text-sm">
                const email =
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='"Enter your email"'
                className="bg-dark-bg border border-zinc-700 text-white p-3 rounded font-mono focus:outline-none focus:border-brand-green transition-colors"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-zinc-400 font-mono text-sm">
                const message =
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder='"Type your message here..."'
                className="bg-dark-bg border border-zinc-700 text-white p-3 rounded font-mono focus:outline-none focus:border-brand-green transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
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
      </div>
    </section>
  );
}

export default Contact;