import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "Email Validator",
    path: "/email-validator",
    desc: "Form validation with Regex and helpful UI hints.",
    img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RW1haWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Digital Clock",
    path: "/clock",
    desc: "Live digital clock with 12/24hr mode.",
    img: "https://images.unsplash.com/photo-1634466331664-e5669ec710df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvY2slMjBkaWdpdGFsfGVufDB8fDB8fHww",
  },
  {
    name: "Gambling Game",
    path: "/gambling",
    desc: "Slot machine jackpot — fun and addictive.",
    img: "https://media.istockphoto.com/id/1457707578/photo/slot-machines-casino-games-conceptual-3d-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=RWWxW1t2Ob9eANQ8nXj-v_wK7VGwPAJzgOQGQGbXlWs=",
  },
  {
    name: "QR Generator",
    path: "/qr-generator",
    desc: "Generate QR codes instantly with customization.",
    img: "https://images.unsplash.com/photo-1682072155213-856c2ab9d629?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Password Generator",
    path: "/password-generator",
    desc: "Strong password creator with policies.",
    img: "https://images.unsplash.com/photo-1655036387197-566206c80980?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzc3dvcmQlMjBnZW5lcmF0b3J8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Focus Timer",
    path: "/focus-timer",
    desc: "Pomodoro style countdown with streaks.",
    img: "https://images.unsplash.com/photo-1714667256947-8d2b9c406ffd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGZvY3VzJTIwdGltZXJ8ZW58MHx8MHx8fDA%3D",
  },
];

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Frontend Developer",
    feedback:
      "JS Projects Hub helped me build practical projects fast. Clean UI and great structure.",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sophia Lee",
    role: "Student",
    feedback:
      "Perfect for learning — short apps with clear goals and real code.",
    img: "https://i.pravatar.cc/150?img=45",
  },
  {
    name: "Daniel Smith",
    role: "Tech Enthusiast",
    feedback: "Loved the portfolio‑ready projects. Easy to fork and adapt.",
    img: "https://i.pravatar.cc/150?img=33",
  },
];

export default function Home() {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const handleChange = (e) =>
    setFeedback((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setSubmitted(true);
    setFeedback({ name: "", email: "", message: "" });
  };

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 antialiased">
      <header className="sticky top-0 z-50 bg-[rgb(245,245,246)] backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg shadow-md flex items-center justify-center text-white font-bold">
              JS
            </div>
            <div>
              <div className="text-lg font-extrabold">JS Projects Hub</div>
              <div className="text-xs text-gray-500">
                Mini apps & experiments
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#projects" className="hover:text-gray-900">
              Projects
            </a>
            <a href="#testimonials" className="hover:text-gray-900">
              Testimonials
            </a>
            <a href="#feedback" className="hover:text-gray-900">
              Feedback
            </a>
            <Link
              to="/about"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500"
            >
              About
            </Link>
          </nav>

          <button
            onClick={toggleMobileNav}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            aria-label="Toggle navigation"
          >
            {mobileNavOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {mobileNavOpen && (
          <nav className="md:hidden bg-[rgb(245,245,246)] border-t border-gray-200 shadow-sm">
            <div className="px-6 py-4 flex flex-col gap-2 text-gray-700">
              <a
                href="#projects"
                className="hover:text-gray-900"
                onClick={() => setMobileNavOpen(false)}
              >
                Projects
              </a>
              <a
                href="#testimonials"
                className="hover:text-gray-900"
                onClick={() => setMobileNavOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#feedback"
                className="hover:text-gray-900"
                onClick={() => setMobileNavOpen(false)}
              >
                Feedback
              </a>
              <Link
                to="/about"
                className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500"
                onClick={() => setMobileNavOpen(false)}
              >
                About
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Build small projects.{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Learn fast
            </span>
            .
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            A curated collection of bite‑sized JavaScript apps — perfect for
            practice, portfolios, and interviews. Click any project to explore
            the code and live demo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-500 transition"
            >
              Explore Projects
            </a>
            <a
              href="#feedback"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Send Feedback
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-gray-500">
            <div>
              <div className="text-xl font-bold">{projects.length}</div>
              <div>Projects</div>
            </div>
            <div>
              <div className="text-xl font-bold">{testimonials.length}</div>
              <div>Testimonials</div>
            </div>
            <div>
              <div className="text-xl font-bold">1</div>
              <div>Hub</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fEphdmFzY3JpcHR8ZW58MHx8MHx8fDA%3D"
              alt="Hero preview"
              className="w-full h-[420px] object-cover"
            />
          </div>

          <div className="absolute -bottom-8 left-6 right-6 flex gap-4 md:gap-6">
            {projects.slice(0, 3).map((p) => (
              <motion.div
                key={p.name}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[rgb(245,245,246)] border border-gray-200 rounded-xl shadow p-3 w-1/3"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-24 object-cover rounded-md mb-3"
                />
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="text-xs text-gray-500">{p.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-28">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="text-sm text-gray-500">
            Curated list — click to open demo
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.article
              key={project.name}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group bg-[rgb(245,245,246)] border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-base text-gray-600 mt-3">{project.desc}</p>

                <div className="mt-5 flex items-center justify-between">
                  <Link
                    to={project.path}
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    Open
                  </Link>
                  <div className="text-xs text-gray-400">Demo • Code</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-28 ">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-14">
            What People Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map(({ name, role, feedback, img }) => (
              <motion.div
                key={name}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-20 h-20 rounded-full object-cover mb-5 border-4 border-indigo-100 shadow-md"
                />
                <p className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-3">
                  “{feedback}”
                </p>
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                <p className="text-sm text-indigo-600 font-medium">{role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section id="feedback" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">
            Share Feedback
          </h2>
          <p className="text-center text-gray-600 mb-12">
            I’d love to hear your thoughts — suggestions or features you’d like
            to see next.
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-3xl p-8 text-center transition-opacity duration-500">
              ✅ Thanks — your feedback has been received.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[rgb(245,245,246)] border border-gray-200 rounded-3xl p-10 shadow-lg space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={feedback.name}
                    onChange={handleChange}
                    required
                    className="px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-shadow duration-200 bg-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={feedback.email}
                    onChange={handleChange}
                    required
                    className="px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-shadow duration-200 bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={feedback.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-shadow duration-200 bg-white resize-none"
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-300 transition-all duration-200"
                >
                  Send Feedback
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <footer className="bg-[rgb(245,245,246)] border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} JS Projects Hub — Built with ❤️ and code.
        </div>
      </footer>
    </div>
  );
}
