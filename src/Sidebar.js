import React from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="fixed top-4 right-4 z-50 md:hidden p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        )}
      </button>

      <aside
        className={`fixed top-0 right-0 w-64 h-full bg-gray-100 dark:bg-gray-800 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 md:static md:translate-x-0 md:w-64 p-6`}
      >
      <div className="md:sticky md:top-0">
          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  to="overview"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  to="endpoints"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg"
                >
                  Endpoints
                </Link>
              </li>
              <li>
                <Link
                  to="pricing"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="how-to-use"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg"
                >
                  How to Use the API
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
