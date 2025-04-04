// 'use client';

// import { useState } from "react";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Лого */}
//         <div className="flex items-center gap-2">
//           <Image src="/logo.png" alt="Logo" width={40} height={40} />
//           <span className="font-bold text-xl">LKW Connect</span>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
//           <li className="hover:text-blue-600 cursor-pointer">Services</li>
//           <li className="hover:text-blue-600 cursor-pointer">About Us</li>
//           <li className="hover:text-blue-600 cursor-pointer">Kontakt</li>
//         </ul>

//         {/* Language Selector */}
//         <div className="hidden md:block">
//           <select className="border rounded px-2 py-1">
//             <option value="mk">MK</option>
//             <option value="de">DE</option>
//             <option value="en">EN</option>
//           </select>
//         </div>

//         {/* Hamburger Icon */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden px-4 pb-4">
//           <ul className="flex flex-col gap-4 text-gray-700 font-medium">
//             <li className="hover:text-blue-600 cursor-pointer">Services</li>
//             <li className="hover:text-blue-600 cursor-pointer">About Us</li>
//             <li className="hover:text-blue-600 cursor-pointer">Kontakt</li>
//           </ul>
//           <div className="mt-4">
//             <select className="border rounded px-2 py-1 w-full">
//               <option value="mk">MK</option>
//               <option value="de">DE</option>
//               <option value="en">EN</option>
//             </select>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/images/logo.png" alt="Logo" width={120} height={120} />
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex space-x-8 text-sm font-semibold uppercase">
          <a href="#services" className="text-gray-800 hover:underline hover:text-[#be73ae] transition-colors duration-300">
            Services
          </a>
          <a href="#about" className="text-gray-800 hover:underline hover:text-[#be73ae] transition-colors duration-300">
            About Us
          </a>
          <a href="#contact" className="text-gray-800 hover:underline hover:text-[#be73ae] transition-colors duration-300">
            Kontakt
          </a>
        </nav>

        {/* Language selector placeholder */}
        <div className="block md:block">
          <select className="bg-transparent text-sm"  style={{ color: "#be73ae" }}>
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="mk">MK</option>
          </select>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}  style={{ color: "#be73ae" }} >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-3 space-y-2 shadow">
          <a href="#services" className="text-gray-600 block text-sm hover:underline hover:text-[#be73ae] transition-colors duration-300">
            Services
          </a>
          <a href="#about" className="text-gray-600 block text-sm hover:underline hover:text-[#be73ae] transition-colors duration-300">
            About Us
          </a>
          <a href="#contact" className="text-gray-600 block text-sm hover:underline hover:text-[#be73ae] transition-colors duration-300">
            Kontakt
          </a>       
        </div>
      )}
    </header>
  );
};

export default Navbar;
