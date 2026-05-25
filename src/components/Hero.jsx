import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 md:px-6 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-emerald-500 opacity-0"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Building Intelligent Systems That Think, Decide, and Deliver.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          AI Engineer specializing in LLM applications, agentic AI systems, and end-to-end machine learning pipelines.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={() => scrollToSection('#projects')}
            className="btn btn-primary"
          >
            View My Projects
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/gmkhan974"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <FiGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ghulam-muhammad-khan-7bb37a375"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:ghulammuhammadkhan2003@gmail.com"
            className="social-icon"
            aria-label="Email"
          >
            <FiMail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
