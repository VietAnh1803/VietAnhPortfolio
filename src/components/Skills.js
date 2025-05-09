import React from 'react';

const skillIcons = [
  'fas fa-language',
  'fas fa-code',
  'fas fa-cubes',
  'fas fa-database',
  'fas fa-tools',
  'fas fa-code-branch',
];

const skillTitles = [
  'Languages',
  'Programming Languages',
  'Libraries & Frameworks',
  'Databases',
  'Developer Tools',
  'Source Control',
];

const skillContents = [
  'English (IELTS score of 5.5 overall).',
  'Python (Intermediate), C/C++, R.',
  'ReactJS, TailwindCSS, Node.js.',
  'MongoDB, Neo4j (Basic), PostgreSQL, SQL Server.',
  'VS Code, Anaconda, Figma (UI/UX Design), Postman.',
  'Git.',
];

const Skills = () => {
  return (
    <section className="mt-20 max-w-5xl mx-auto fade-in-up">
      <div className="flex items-center gap-3 mb-12">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 text-3xl shadow-md">
          <i className="fas fa-lightbulb"></i>
        </span>
        <h2 className="text-4xl font-extrabold text-indigo-900 tracking-tight relative select-text">
          Skills
          <span className="block w-16 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full mt-2"></span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-indigo-900">
        {skillTitles.map((title, idx) => (
          <div
            key={title}
            className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow ring-1 ring-indigo-200 animate-fade-in-up flex gap-4 items-start"
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 text-2xl shadow-md mt-1">
              <i className={skillIcons[idx]}></i>
            </span>
            <div>
              <h3 className="text-2xl font-semibold mb-2 select-text">{title}</h3>
              <p className="text-lg tracking-wide select-text font-medium">{skillContents[idx]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
