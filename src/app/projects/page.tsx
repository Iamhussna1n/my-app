'use client';

import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio built with Next.js, Tailwind CSS, and dark mode support.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    image: '/projects/portfolio.png',
    github: 'https://github.com/Iamhussna1n/portfolio',
    demo: '',
  },
  {
    title: 'Hotel Booking System',
    description: 'A full-stack hotel booking app using MERN Stack.',
    tech: ['MongoDB', 'SQL Server', 'React', 'Express'],
    image: '/projects/hotel-booking.png',
    github: 'https://github.com/Iamhussna1n/Hotel-Management-System',
    demo: '',
  },
  {
    title: 'CoursePedia',
    description: 'A full stack app using Spring Boot(Java) and React.',
    tech: ['Postgress', 'SpringBoot', 'React'],
    image: '/projects/coursepedia.png',
    github: 'https://github.com/Yasir-Zafar/Coursepedia',
    demo: '',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-6 py-16 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
        These are some of the real-world applications and systems I’ve built using my preferred tech stacks.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                  <FaGithub className="mr-1" /> View Code
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:underline">
                    <FaExternalLinkAlt className="mr-1" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
