import { useState } from 'react';
import { FiMenu, FiX, FiGithub } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-900 bg-opacity-80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-sky-500">
              GM Khan
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="nav-link text-sm font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop GitHub Icon */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/gmkhan974"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5 text-slate-300 hover:text-sky-400" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-800 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://github.com/gmkhan974"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm"
            >
              <FiGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
