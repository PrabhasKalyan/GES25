import { useState } from "react";

export default function SimpleMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Menu Toggle Button */}
      <button
        className="fixed bottom-4 right-4 p-3 bg-gray-800 text-white rounded-full lg:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <XIcon /> : <MenuIcon />}
        <span className="sr-only">Toggle navigation menu</span>
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 p-4 shadow-lg transition-transform dark:bg-gray-800 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="self-start p-2 bg-gray-300 rounded dark:bg-gray-700"
          onClick={toggleMenu}
        >
          <XIcon />
          <span className="sr-only">Close menu</span>
        </button>

        <nav className="mt-4 space-y-4">
          <a href="#" className="block text-lg font-semibold">
            Home
          </a>
          <a href="#" className="block text-lg font-semibold">
            Speakers
          </a>
          <a href="#" className="block text-lg font-semibold">
            Events
          </a>
          <a href="#" className="block text-lg font-semibold">
            Competitions
          </a>
          <a href="#" className="block text-lg font-semibold">
            Competition Sponsors
          </a>
          <a href="#" className="block text-lg font-semibold">
            Sponsors
          </a>
          <a href="#" className="block text-lg font-semibold">
            Team
          </a>
        </nav>
      </div>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
