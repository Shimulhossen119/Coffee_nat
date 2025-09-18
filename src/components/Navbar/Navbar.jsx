import React, { useState } from "react";
import { FaCoffee } from "react-icons/fa";
import logo from "../../assets/Coffee-logo.png";

const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div>
            <a href="#" className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
              <span className="text-2xl font-bold tracking-wider font-cursive">Coffe net</span>
            </a>
          </div>
          {/* Links section */}
          <div className="hidden sm:flex items-center gap-4">
            {Menus.map((data) => (
              <a key={data.id} href={data.link} className="text-xl hover:text-gray-300">
                {data.name}
              </a>
            ))}
            <button className="bg-primary/70 px-4 py-2 rounded-full flex items-center gap-2">
              Order
              <FaCoffee className="text-xl cursor-pointer" />
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden block text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden mt-4">
            {Menus.map((data) => (
              <a key={data.id} href={data.link} className="block text-xl py-2 hover:text-gray-300">
                {data.name}
              </a>
            ))}
            <button className="bg-primary/70 px-4 py-2 rounded-full flex items-center gap-2">
              Order
              <FaCoffee className="text-xl cursor-pointer" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;