'use client';

import { SiNextdotjs, SiSpringboot, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiCplusplus, SiSharp } from 'react-icons/si';
import { FaWindows } from 'react-icons/fa';

const techStack = [
  {
    name: 'Next.js',
    icon: <SiNextdotjs size={40} />,
    description: `Modern React framework with built-in SSR, routing, and API support. I use it to build fast, SEO-optimized frontend and full-stack applications.`,
  },
  {
    name: 'Spring Boot',
    icon: <SiSpringboot size={40} className="text-green-600" />,
    description: `Robust Java-based backend framework. I use Spring Boot to build secure, scalable REST APIs with database integration and business logic.`,
  },
  {
    name: 'MERN Stack',
    icon: (
      <div className="flex justify-center gap-2">
        <SiMongodb size={25} className="text-green-500" />
        <SiExpress size={25} />
        <SiReact size={25} className="text-blue-500" />
        <SiNodedotjs size={25} className="text-green-600" />
      </div>
    ),
    description: `I’ve built several real-world apps using the full MERN stack. From backend logic and routing to rich UIs and RESTful APIs.`,
  },
  {
    name: 'Desktop Development (C++ / C#)',
    icon: (
      <div className="flex justify-center gap-2">
        <SiCplusplus size={30} className="text-blue-600" />
        <SiSharp size={30} className="text-purple-500" />
        <FaWindows size={30} className="text-blue-400" />
      </div>
    ),
    description: `I develop Windows Forms (WinForms) applications using both C++ and C#. These include academic tools, form-based interfaces, and lightweight utilities.`,
  },
];

export default function TechStackPage() {
  return (
    <div className="min-h-screen px-6 py-16 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-4">Tech Stack & Expertise</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
        Here are the core technologies and tools I work with to build modern, scalable, and maintainable software across web and desktop platforms.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {techStack.map((tech, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-gray-900 dark:text-white">{tech.icon}</div>
              <h2 className="text-2xl font-semibold">{tech.name}</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
