import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-[#121212] text-white py-2 px-6 rounded-full shadow-md z-50">
      <ul className="flex space-x-6 text-sm font-medium">
        <li>
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
        </li>
        <li>
          <a href="#work" className="hover:text-blue-400 transition">Work</a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
        </li>
        <li>
          <a href="#certs" className="hover:text-blue-400 transition">Certs</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;