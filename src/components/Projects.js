import React from 'react';

const projectIcons = ['fas fa-store', 'fas fa-seedling'];

const Projects = () => {
  return (
    <section className="mt-24 max-w-5xl mx-auto fade-in-up">
      <div className="flex items-center gap-3 mb-14">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 text-3xl shadow-md">
          <i className="fas fa-project-diagram"></i>
        </span>
        <h2 className="text-4xl font-extrabold text-indigo-900 tracking-tight relative select-text">
          Projects
          <span className="block w-16 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full mt-2"></span>
        </h2>
      </div>

      {/* Project 1 */}
      <article className="mb-16 bg-gradient-to-br from-white via-indigo-50 to-indigo-100 rounded-3xl shadow-2xl p-10 ring-1 ring-indigo-300 hover:ring-indigo-500 transition-all transform hover:scale-105 hover:shadow-2xl card-hover animate-fade-in-up">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 text-2xl shadow-md">
              <i className={projectIcons[0]}></i>
            </span>
            <h3 className="text-3xl font-extrabold text-indigo-900 leading-tight select-text">
              Multi-Vendor E-Commerce Platform
            </h3>
          </div>
          <time className="text-indigo-600 font-semibold text-lg mt-3 sm:mt-0 whitespace-nowrap select-text">
            Nov 2024 – Dec 2024
          </time>
        </div>
        <p className="italic text-indigo-700 mb-6 text-lg tracking-wide select-text">
          Node.js, Express, React, TailwindCSS
        </p>
        <ul className="list-disc list-inside space-y-3 text-indigo-900 max-h-72 overflow-y-auto scrollbar-thin pr-3 select-text">
          <li>
            <span className="font-semibold text-indigo-800">Description:</span> Developed a
            multi-vendor e-commerce platform following the C2C model, enabling individual customers
            to buy and sell products directly to each other. This platform is specifically focused
            on selling clothing.
          </li>
          <li>
            <span className="font-semibold text-indigo-800">Team:</span> 4 people (2 Frontend, 2
            Backend).
          </li>
          <li>
            <span className="font-semibold text-indigo-800">Role:</span> Frontend Developer
            responsible for designing the user interface for customers using Figma, and implementing
            it with ReactJS and TailwindCSS to ensure a responsive, interactive, and user-friendly
            experience.
          </li>
          <li>
            <span className="font-semibold text-indigo-800">Figma Design:</span>{' '}
            <a
              className="underline-animated hover:text-indigo-700"
              href="https://www.figma.com/design/u2nJ4UczPbPwNbHGgiIMmZ/DATH?node-id=0-1&t=0McQgcLsCXXZiUu6-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Figma Design Link
            </a>
          </li>
          <li>
            <span className="font-semibold text-indigo-800">GitHub Repository:</span>{' '}
            <a
              className="underline-animated hover:text-indigo-700"
              href="https://github.com/HoaNguyenz/Multi_vendor_ecom"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub Project Link
            </a>
          </li>
        </ul>
      </article>

      {/* Project 2 */}
      <article className="bg-gradient-to-br from-white via-indigo-50 to-indigo-100 rounded-3xl shadow-2xl p-10 ring-1 ring-indigo-300 hover:ring-indigo-500 transition-all transform hover:scale-105 hover:shadow-2xl card-hover animate-fade-in-up">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 text-2xl shadow-md">
              <i className={projectIcons[1]}></i>
            </span>
            <h3 className="text-3xl font-extrabold text-indigo-900 leading-tight select-text">
              Smart Farm IoT System
            </h3>
          </div>
          <time className="text-indigo-600 font-semibold text-lg mt-3 sm:mt-0 whitespace-nowrap select-text">
            Feb 2025 – May 2025
          </time>
        </div>
        <p className="italic text-indigo-700 mb-6 text-lg tracking-wide select-text">
          Node.js, React, MQTT.js, Adafruit IO
        </p>
        <ul className="list-disc list-inside space-y-3 text-indigo-900 max-h-72 overflow-y-auto scrollbar-thin pr-3 select-text">
          <li>
            <span className="font-semibold text-indigo-800">Description:</span> Developed a Smart
            Farm IoT System to automate the monitoring and control of environmental conditions for
            dragon fruit farms.
          </li>
          <li>
            <span className="font-semibold text-indigo-800">Team:</span> 5 people (2 Frontend, 2
            Backend, 1 IoT Developer).
          </li>
          <li>
            <span className="font-semibold text-indigo-800">Role:</span> As a Frontend Developer, I
            am responsible for designing and implementing user interfaces, with a particular focus
            on creating a dynamic dashboard that displays real-time environmental data from IoT
            devices. I ensure a responsive, user-friendly experience across multiple devices, while
            also conducting thorough testing to identify and fix bugs and issues. Additionally, I am
            responsible for developing and managing an admin user interface for user management,
            including functionality for creating, updating, and deleting user profiles. I also
            integrate and fetch APIs to support various functionalities, ensuring smooth
            communication between the frontend and backend services. This includes handling
            authentication, data retrieval, and real-time updates to ensure a seamless user
            experience.
          </li>
          <li>
            <span className="font-semibold text-indigo-800">Figma Design:</span>{' '}
            <a
              className="underline-animated hover:text-indigo-700"
              href="https://www.figma.com/design/BSGI21YeWjGGBhpAKZ5SrL/demo-đồ-án?node-id=19-179&t=OMxdkVbUHyVItNna-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Figma Design Link
            </a>
          </li>
          <li>
            <span className="font-semibold text-indigo-800">GitHub Repository:</span>{' '}
            <a
              className="underline-animated hover:text-indigo-700"
              href="https://github.com/baohuynhhcmut/smartfarm-fe"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub Project Link
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Projects;
