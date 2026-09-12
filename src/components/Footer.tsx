import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0714] border-t border-white/10 text-gray-400 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (Spans 2 columns on desktop) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg brand-gradient flex items-center justify-center text-white font-bold text-sm">
                DS
              </div>
              <span className="text-xl font-bold brand-gradient-text">
                Dev Stack
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-2 text-sm text-gray-400">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#technologies" className="hover:text-white transition-colors">Technologies</a></li>
              <li><a href="#technologies" className="hover:text-white transition-colors">Your Stack</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-gray-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;