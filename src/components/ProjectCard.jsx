import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const isComingSoon = project.github === 'YOUR_GITHUB_LINK_HERE';

  return (
    <motion.div
      variants={itemVariants}
      className="card-hover group relative"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="tag-accent text-xs">Featured</span>
        </div>
      )}

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-sky-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, index) => (
            <span key={index} className="tag text-xs">
              {tech}
            </span>
          ))}
        </div>

        {/* Status & Links */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-700">
          <span className="inline-block bg-emerald-600 bg-opacity-20 text-emerald-400 border border-emerald-600 border-opacity-30 px-3 py-1 rounded-full text-xs font-medium">
            {project.status}
          </span>

          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target={isComingSoon ? undefined : '_blank'}
                rel={isComingSoon ? undefined : 'noopener noreferrer'}
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                  isComingSoon
                    ? 'bg-slate-700 text-slate-400 cursor-not-allowed opacity-50'
                    : 'bg-sky-600 text-white hover:bg-sky-700'
                }`}
                title={isComingSoon ? 'GitHub link coming soon' : 'View on GitHub'}
                onClick={(e) => isComingSoon && e.preventDefault()}
              >
                <FiGithub className="w-4 h-4" />
                <span className="hidden sm:inline">Code</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-all"
              >
                <FiExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
