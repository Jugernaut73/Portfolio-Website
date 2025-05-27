import React from "react";

type NavItem = {
    name: string;
    link: string;
};

const Navbar = ({ navItems }: { navItems: NavItem[] }) => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-[#121212] text-white py-2 px-6 rounded-full shadow-md z-50">
      <ul className="flex space-x-6 text-sm font-medium">
        {navItems.map((item, index) =>(
            <li key={index}>
                <a href={item.link} className="hover:text-blue-400 transition">
                    {item.name}
                </a>
            </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;