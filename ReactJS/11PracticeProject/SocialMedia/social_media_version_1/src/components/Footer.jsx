import React from "react";

function Footer() {
  return (
    <footer className=" w-full bg-black fixed bottom-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              YourBrand
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Building the future, one step at a time.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
