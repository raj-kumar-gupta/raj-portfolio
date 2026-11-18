import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SITE } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-3 md:px-6 pt-3">
      <div
        className={`glass relative max-w-7xl mx-auto rounded-2xl px-4 md:px-8 transition-all duration-300 ${
          scrolled ? 'py-2.5 !bg-[#111113]/80' : 'py-3.5'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <a href="#hero" className="shrink-0 whitespace-nowrap text-white text-xl md:text-2xl font-black tracking-tight uppercase group flex items-center">
            <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">{SITE.name.charAt(0)}</span>
            <span className="group-hover:text-red-500 transition-colors duration-300">{SITE.name.slice(1)}.</span>
          </a>
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="relative whitespace-nowrap text-xs font-bold text-gray-400 uppercase tracking-[0.1em] transition-colors duration-300 hover:text-white group">
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
              </a>
            ))}
          </div>
          <a href="#contact" className="glass-red hidden sm:inline-block px-4 py-2 rounded-full text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            Let’s Talk
          </a>
          <button
            type="button"
            className="glass-chip grid h-10 w-10 place-items-center rounded-full text-white md:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full mt-2 grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-[#111113]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-xs font-bold uppercase tracking-wider text-gray-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="glass-red col-span-2 rounded-xl px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-white"
            >
              Let’s Talk
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
