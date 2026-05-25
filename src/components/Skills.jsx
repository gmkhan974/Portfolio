import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
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
      id="skills"
      className="section bg-gradient-to-b from-slate-800 to-slate-900 border-t border-slate-800"
    >
      <motion.div
        className="container-x"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="mb-12 text-center">
          Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card"
            >
              <h3 className="text-lg font-semibold mb-4 text-sky-400">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span key={idx} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
