import React from "react";
import avatar from "../assets/avatar.jpg";  // Import the avatar image

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-10 sm:gap-16 border-b border-indigo-300 pb-10 fade-in-up bg-indigo-50 p-8 rounded-xl shadow-lg">
      <div className="relative w-44 h-44 rounded-full shadow-xl overflow-hidden ring-4 ring-indigo-400 ring-opacity-60 transform hover:scale-105 transition-all duration-300">
        <img
          alt="Portrait of Nguyen Viet Anh"
          className="object-cover w-full h-full"
          src={avatar}
        />
      </div>
      <div className="text-left">
        <h1 className="text-5xl font-extrabold tracking-tight text-indigo-900 drop-shadow-lg mb-3 select-text">
          Nguyen Viet Anh
        </h1>
        <div className="space-y-3 text-lg text-indigo-700 font-medium tracking-wide">
          <p className="flex items-center gap-3">
            <i className="fas fa-map-marker-alt text-indigo-500 text-xl"></i>
            Ho Chi Minh City, Vietnam
          </p>
          <p className="flex items-center gap-3">
            <i className="fas fa-phone-alt text-indigo-500 text-xl"></i>
            (+84) 396 319 888
          </p>
          <p className="flex items-center gap-3">
            <i className="fas fa-envelope text-indigo-500 text-xl"></i>
            <a
              className="underline-animated hover:text-indigo-800 transition"
              href="mailto:nguyenvietanh1803.hcmut@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              nguyenvietanh1803.hcmut@gmail.com
            </a>
          </p>
          <div className="flex gap-8 text-indigo-600 text-2xl mt-2 select-none">
            <a
              aria-label="LinkedIn Profile"
              className="hover:text-indigo-800 transition"
              href="https://www.linkedin.com/in/anh-nguy%E1%BB%85n-vi%E1%BB%87t-835081336/"
              rel="noopener noreferrer"
              target="_blank"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              aria-label="GitHub Profile"
              className="hover:text-indigo-800 transition"
              href="https://github.com/VietAnh1803"
              rel="noopener noreferrer"
              target="_blank"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
