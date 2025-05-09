import React from 'react';

const Education = () => {
  return (
    <section className="mt-20 max-w-5xl mx-auto fade-in-up">
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 text-3xl shadow-md">
          <i className="fas fa-graduation-cap"></i>
        </span>
        <h2 className="text-4xl font-extrabold text-indigo-900 tracking-tight relative select-text">
          Education
          <span className="block w-16 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full mt-2"></span>
        </h2>
      </div>
      <div className="bg-gradient-to-r from-indigo-100 via-white to-indigo-100 rounded-3xl shadow-xl p-10 ring-1 ring-indigo-300 hover:shadow-2xl transition-shadow animate-fade-in-up">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <p className="text-2xl font-bold text-indigo-900 select-text">
              Ho Chi Minh City University of Technology (HCMUT)
            </p>
            <p className="italic text-indigo-700 mt-2 select-text">
              Bachelor in Computer Science, Major in Information Systems
            </p>
          </div>
          <div className="text-indigo-600 font-semibold text-lg whitespace-nowrap select-text">
            Aug 2022 – May 2026 (expected)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
