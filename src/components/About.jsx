import { motion } from 'framer-motion';

export default function About() {
  const certifications = [
    'IBM AI Essentials — Coursera',
    'IBM Data Science & Machine Learning — Coursera',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section
      id="about"
      className="section bg-slate-900 border-t border-slate-800"
    >
      <motion.div
        className="container-x"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="mb-12 text-center">
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg text-muted leading-relaxed">
              I'm Ghulam Muhammad Khan, a Computer Science graduate focused on AI engineering. 
              I design and build production-ready intelligent systems — from fine-tuned language 
              models and agentic pipelines to deployed FastAPI inference endpoints. My work spans 
              the full AI stack: training models, building RAG pipelines, orchestrating autonomous 
              agents, and shipping clean APIs.
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="tag-accent flex items-center justify-center text-center"
                >
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
