import React from "react";

const Projects = () => {
  return (
    <section className="mt-24 max-w-5xl mx-auto fade-in-up">
      <h2 className="text-4xl font-extrabold border-l-8 border-indigo-500 pl-6 mb-14 text-indigo-900 drop-shadow-lg select-text">
        Projects
      </h2>

      {/* Project 1 */}
      <article className="mb-16 bg-white rounded-3xl shadow-2xl p-10 ring-1 ring-indigo-300 hover:ring-indigo-500 transition-all transform hover:scale-105 hover:shadow-2xl card-hover">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h3 className="text-3xl font-extrabold text-indigo-900 leading-tight select-text">
            Multi-Vendor E-Commerce Platform
          </h3>
          <time className="text-indigo-600 font-semibold text-lg mt-3 sm:mt-0 whitespace-nowrap select-text">
            Nov 2024 – Dec 2024
          </time>
        </div>
        <p className="italic text-indigo-700 mb-6 text-lg tracking-wide select-text">
          Node.js, Express, React, TailwindCSS
        </p>
        <ul className="list-disc list-inside space-y-3 text-indigo-900 max-h-72 overflow-y-auto scrollbar-thin pr-3 select-text">
          <li>
            <span className="font-semibold text-indigo-800">Description:</span>{" "}
            Developed a multi-vendor e-commerce platform following the C2C
            model, enabling individual customers to buy and sell products
            directly to each other. This platform is specifically focused on
            selling clothing.
          </li>
          <li>
            <span className="font-semibold text-indigo-800">Team:</span> 4
            people (2 Frontend, 2 Backend).
          </li>
          <li>
            <span className="font-semibold text-indigo-800">Role:</span>{" "}
            Frontend Developer responsible for designing the user interface for
            customers using Figma, and implementing it with ReactJS and
            TailwindCSS to ensure a responsive, interactive, and user-friendly
            experience.
          </li>
          <li>
            <span className="font-semibold text-indigo-800">Figma Design:</span>{" "}
            <a
              className="underline-animated"
              href="https://www.figma.com/design/u2nJ4UczPbPwNbHGgiIMmZ/DATH?node-id=0-1&t=0McQgcLsCXXZiUu6-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Figma Design Link
            </a>
          </li>
          <li>
            <span className="font-semibold text-indigo-800">
              GitHub Repository:
            </span>{" "}
            <a
              className="underline-animated"
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
      <article className="bg-white rounded-3xl shadow-2xl p-10 ring-1 ring-indigo-300 hover:ring-indigo-500 transition-all transform hover:scale-105 hover:shadow-2xl card-hover">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h3 className="text-3xl font-extrabold text-indigo-900 leading-tight select-text">
            Smart Farm IoT System
          </h3>
          <time className="text-indigo-600 font-semibold text-lg mt-3 sm:mt-0 whitespace-nowrap select-text">
            Feb 2025 – May 2025 (expected)
          </time>
        </div>
        <p className="italic text-indigo-700 mb-6 text-lg tracking-wide select-text">
          Node.js, React, MQTT.js, Adafruit IO
        </p>
        <ul className="list-disc list-inside space-y-3 text-indigo-900 max-h-72 overflow-y-auto scrollbar-thin pr-3 select-text">
          <li>
            <span className="font-semibold text-indigo-800">Description:</span>{" "}
            Developed a Smart Farm IoT System to automate the monitoring and
            control of environmental conditions for dragon fruit farms.
          </li>
          <li>
            <span className="font-semibold text-indigo-800">Team:</span> 5
            people (2 Frontend, 2 Backend, 1 IoT Developer).
          </li>
          <li>
            <span className="font-semibold text-indigo-800">Role:</span>{" "}
            Frontend Developer responsible for designing and implementing user
            interfaces, particularly focusing on the dashboard to display
            real-time environmental data from IoT devices.
          </li>
          <li>
            <span className="font-semibold text-indigo-800">Figma Design:</span>{" "}
            <a
              className="underline-animated"
              href="https://www.figma.com/design/BSGI21YeWjGGBhpAKZ5SrL/demo-đồ-án?node-id=19-179&t=OMxdkVbUHyVItNna-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Figma Design Link
            </a>
          </li>
          <li>
            <span className="font-semibold text-indigo-800">
              GitHub Repository:
            </span>{" "}
            <a
              className="underline-animated"
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
