import React from "react";

const Education = () => {
  return (
    <section className="mt-20 max-w-5xl mx-auto fade-in-up">
      <h2 className="text-4xl font-extrabold border-l-8 border-indigo-500 pl-6 mb-10 text-indigo-900 drop-shadow-lg select-text">
        Education
      </h2>
      <div className="bg-gradient-to-r from-indigo-100 via-indigo-50 to-indigo-100 rounded-3xl shadow-lg p-10 ring-1 ring-indigo-300 hover:shadow-2xl transition-shadow card-hover">
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
