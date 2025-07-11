'use client';

import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Profile Image */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-10">
        <Image
          src="/husnain-portrait.png"
          alt="Hassnain Saleem Portrait"
          fill
          className="object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold mb-2">Hassnain Saleem</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
          Full Stack Web Developer
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-4 text-gray-700 dark:text-gray-300 text-2xl">
          <a href="https://github.com/Iamhussna1n" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-black dark:hover:text-white transition" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-600 transition" />
          </a>
          <a href="https://www.instagram.com/iam_hussnain_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
        </div>
        <div className="mt-8 max-w-2xl text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            I&apos;m a <strong>Software Engineering student</strong> at <strong>FAST NUCES Lahore</strong>,
            passionate about building scalable web applications. I&apos;m a proud <strong>Gold Medalist </strong>
            and <strong>Dean&apos;s List</strong> candidate.
          </p>
          <p className="mt-4">
            Besides academics, I&apos;m a <strong>national-level chess player</strong> and have won multiple
            university-level competitions. I&apos;m also deeply involved in <strong>competitive programming</strong>,
            having won the <strong>FAST Speed Programming Competition</strong> and solved over <strong>290 LeetCode problems</strong>.
          </p>
        </div>

      </div>
    </main>
  );
}
