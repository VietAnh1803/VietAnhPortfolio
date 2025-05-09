import React from 'react';

const Objective = () => {
  return (
    <section className="mt-16 max-w-5xl mx-auto fade-in-up">
      <div className="flex items-center gap-3 mb-8">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 text-3xl shadow-md">
          <i className="fas fa-bullseye"></i>
        </span>
        <h2 className="text-4xl font-extrabold text-indigo-900 tracking-tight relative select-text">
          Objective
          <span className="block w-16 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full mt-2"></span>
        </h2>
      </div>
      <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 rounded-3xl p-10 shadow-xl ring-1 ring-indigo-200 animate-fade-in-up">
        <p className="text-xl leading-relaxed text-indigo-800 tracking-wide font-medium">
          As a third-year Information Systems student, I am passionate about harnessing data to
          deliver meaningful insights that drive business performance and informed decisions. I have
          hands-on experience with
          <span className="font-semibold text-indigo-700">
            {' '}
            Python, R, SQL (Microsoft, PostgreSQL), MongoDB
          </span>
          , and a solid foundation in data analysis and data engineering principles. I am seeking a
          <span className="font-semibold text-indigo-700"> data-focused internship</span> where I
          can contribute to impactful projects, deepen my technical expertise, and grow in a
          collaborative and innovative environment.
        </p>
      </div>
    </section>
  );
};

export default Objective;
