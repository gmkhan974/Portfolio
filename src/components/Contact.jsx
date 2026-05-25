import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Contact() {
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

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:ghulammuhammadkhan2003@gmail.com',
      icon: FiMail,
      label: 'Send an email',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/gmkhan974',
      icon: FiGithub,
      label: 'Visit GitHub',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ghulam-muhammad-khan-7bb37a375',
      icon: FiLinkedin,
      label: 'Visit LinkedIn',
    },
  ];

  return (
    <section
      id="contact"
      className="section bg-gradient-to-b from-slate-800 to-slate-900 border-t border-slate-800"
    >
      <motion.div
        className="container-x"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted">
            Open to AI engineering roles, collaboration, and freelance AI projects.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8 flex-wrap"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            const isEmail = social.href.startsWith('mailto:');

            const handleClick = (e) => {
              if (isEmail) {
                e.preventDefault();
                window.location.href = social.href;
              }
            };

            return (
              <a
                key={social.name}
                href={social.href}
                onClick={handleClick}
                {...(isEmail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-slate-800 transition-all group cursor-pointer"
                title={social.label}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-slate-700 group-hover:border-sky-600 group-hover:text-sky-400 group-hover:shadow-lg group-hover:shadow-sky-600/20 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-muted group-hover:text-white transition-colors">
                  {social.name}
                </span>
              </a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
