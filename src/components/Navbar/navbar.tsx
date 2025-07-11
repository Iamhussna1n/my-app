'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="w-full px-6 py-4 bg-white dark:bg-gray-900 shadow flex justify-between items-center fixed top-0 z-50">
      <Link href="/home" className="text-2xl font-bold text-gray-900 dark:text-white">
        Hassnain.dev
      </Link>

      <div className="flex items-center gap-6">
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
    </nav>
  );
}
