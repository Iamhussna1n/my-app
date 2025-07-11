'use client';

import Image from 'next/image';

const achievements = [
  {
    title: 'Gold Medalist - FAST NUCES',
    year: '2025',
    description: 'Awarded for outstanding academic performance throughout the Software Engineering degree.',
    image: '/achievements/gold-medal.png',
    type: 'Academic',
  },
  {
    title: 'Dean’s List Candidate',
    year: '2023–2025',
    description: 'Consistently maintained top CGPA and academic excellence at FAST NUCES Lahore.',
    image: '/achievements/deans-list.png',
    type: 'Academic',
  },
  {
    title: 'FAST Speed Programming Competition - Winner',
    year: '2024',
    description: 'Secured 1st position in the university’s most competitive programming contest.',
    image: '/achievements/programming-comp.jpeg',
    type: 'Competitive Programming',
  },
  {
    title: 'National Level Chess Player',
    year: '2022–2025',
    description: 'Represented in multiple national chess tournaments; also won university-level chess events.',
    image: '/achievements/national-chess.jpeg',
    type: 'Extracurricular',
  },
  {
    title: '290+ LeetCode Problems Solved',
    year: 'Ongoing',
    description: 'Consistent problem-solving practice in data structures and algorithms.',
    image: '/achievements/leetcode.png',
    type: 'Competitive Programming',
  },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen px-6 py-16 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-4">My Achievements</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
        Here&apos;s a glimpse into my academic excellence, competitive achievements, and extracurricular victories that reflect my skills, discipline, and dedication.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {achievements.map((a, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={a.image}
                alt={a.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold">{a.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{a.year} • {a.type}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
