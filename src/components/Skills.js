import React from "react";

const Skills = () => {
  return (
    <section className="mt-20 max-w-5xl mx-auto fade-in-up">
      <h2 className="text-4xl font-extrabold border-l-8 border-indigo-500 pl-6 mb-12 text-indigo-900 drop-shadow-lg select-text">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-indigo-900">
        <div className="bg-indigo-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow ring-1 ring-indigo-200 card-hover">
          <h3 className="text-2xl font-semibold mb-4 select-text">Languages</h3>
          <p className="text-lg tracking-wide select-text">
            English (IELTS score of 5.5 overall).
          </p>
        </div>
        <div className="bg-indigo-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow ring-1 ring-indigo-200 card-hover">
          <h3 className="text-2xl font-semibold mb-4 select-text">
            Programming Languages
          </h3>
          <p className="text-lg tracking-wide select-text">
            Python (Intermediate), C/C++, R.
          </p>
        </div>
        <div className="bg-indigo-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow ring-1 ring-indigo-200 card-hover">
          <h3 className="text-2xl font-semibold mb-4 select-text">
            Libraries & Frameworks
          </h3>
          <p className="text-lg tracking-wide select-text">
            ReactJS, TailwindCSS, Node.js.
          </p>
        </div>
        <div className="bg-indigo-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow ring-1 ring-indigo-200 card-hover">
          <h3 className="text-2xl font-semibold mb-4 select-text">Databases</h3>
          <p className="text-lg tracking-wide select-text">
            MongoDB, Neo4j (Basic), PostgreSQL, SQL Server.
          </p>
        </div>
        <div className="bg-indigo-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow ring-1 ring-indigo-200 card-hover">
          <h3 className="text-2xl font-semibold mb-4 select-text">
            Developer Tools
          </h3>
          <p className="text-lg tracking-wide select-text">
            VS Code, Anaconda, Figma (UI/UX Design), Postman.
          </p>
        </div>
        <div className="bg-indigo-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow ring-1 ring-indigo-200 card-hover">
          <h3 className="text-2xl font-semibold mb-4 select-text">
            Source Control
          </h3>
          <p className="text-lg tracking-wide select-text">Git.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
