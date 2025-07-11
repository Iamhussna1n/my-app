'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="w-full px-6 py-4 bg-white dark:bg-gray-900 shadow flex justify-between items-center fixed top-0 z-50">
      <Link href="/home" className="text-2xl font-bold text-gray-900 dark:text-white z-50">
        Hassnain.dev
      </Link>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden ml-auto z-50 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:underline">
          Projects
        </Link>
        <Link href="/achievements" className="text-gray-700 dark:text-gray-300 hover:underline">
          Achievements        
        </Link>
        <Link href="/tech-stack" className="text-gray-700 dark:text-gray-300 hover:underline">
          Tech Stack        
        </Link>
        <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:underline">
          Contact
        </Link>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Mobile nav overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white dark:bg-gray-900 shadow-lg z-50 flex flex-col gap-8 pt-24 px-8 transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <Link href="/projects" className="text-gray-700 dark:text-gray-300 text-lg font-medium hover:underline" onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
        <Link href="/achievements" className="text-gray-700 dark:text-gray-300 text-lg font-medium hover:underline" onClick={() => setMenuOpen(false)}>
          Achievements        
        </Link>
        <Link href="/tech-stack" className="text-gray-700 dark:text-gray-300 text-lg font-medium hover:underline" onClick={() => setMenuOpen(false)}>
          Tech Stack        
        </Link>
        <Link href="/contact" className="text-gray-700 dark:text-gray-300 text-lg font-medium hover:underline" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
        <button
          onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark'); setMenuOpen(false); }}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition self-start"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}
