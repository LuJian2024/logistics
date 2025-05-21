
// "use client";
// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [language, setLanguage] = useState("en");


//   const handleScroll = () => {
//     const offset = window.scrollY;
//     setScrolled(offset > 50);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-white shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <Image src="/images/logo.png" alt="Logo" width={120} height={120} />
//         </div>

//         {/* Navigation links */}
//         <nav className="hidden md:flex space-x-8 text-sm font-semibold uppercase">
//           <a href="#services" className="text-gray-500 hover:underline hover:text-[#be73ae] transition-colors duration-300">
//             Services
//           </a>
//           <a href="#about" className="text-gray-800 hover:underline hover:text-[#be73ae] transition-colors duration-300">
//             About Us
//           </a>
//           <a href="#contact" className="text-gray-800 hover:underline hover:text-[#be73ae] transition-colors duration-300">
//             Kontakt
//           </a>
//         </nav>

//         {/* Language selector placeholder */}
//         <div className="block md:block">
//           <select className="bg-transparent text-sm focus:outline-none focus:border-none"  style={{ color: "#be73ae" }} value={language} onChange={(e) => setLanguage(e.target.value)}>
//             <option value="en">EN</option>
//             <option value="de">DE</option>
//             <option value="mk">MK</option>
//           </select>
//         </div>

//         {/* Mobile menu button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}  style={{ color: "#be73ae" }} >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white px-4 py-3 space-y-2 shadow">
//           <a href="#services" className="text-gray-600 block text-sm hover:underline hover:text-[#be73ae] transition-colors duration-300">
//             Services
//           </a>
//           <a href="#about" className="text-gray-600 block text-sm hover:underline hover:text-[#be73ae] transition-colors duration-300">
//             About Us
//           </a>
//           <a href="#contact" className="text-gray-600 block text-sm hover:underline hover:text-[#be73ae] transition-colors duration-300">
//             Kontakt
//           </a>       
//         </div>
//       )}
//     </header>
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
  const [language, setLanguage] = useState("en");

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
          <a
            href="#services"
            className="text-gray-500 hover:underline hover:text-[#be73ae] transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:underline hover:text-[#be73ae] transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:underline hover:text-[#be73ae] transition-colors duration-300"
          >
            Kontakt
          </a>
        </nav>

        {/* Language selector */}
        <div className="block md:block">
          <select
            className="bg-transparent text-sm focus:outline-none focus:border-none"
            style={{ color: "#be73ae" }}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="mk">MK</option>
          </select>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} style={{ color: "#be73ae" }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="fixed top-0 right-0 h-full bg-white shadow-lg px-4 py-6 space-y-4 w-[25%] transition-all duration-500 ease-out opacity-100 transform"
          style={{
            transform: isOpen ? "translateX(0)" : "translateX(100%)",
            opacity: isOpen ? 1 : 0,
            zIndex: 50,  // make sure it's on top of other content
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-xl text-[#be73ae]"
            style={{
              zIndex: 60,  // higher zIndex to make it stay above the menu
            }}
          >
            <X size={24} />
          </button>

          {/* Menu items */}
          <a
            href="#services"
            className="text-gray-600 block text-sm hover:underline hover:text-[#be73ae] transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-600 block text-sm hover:underline hover:text-[#be73ae] transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-gray-600 block text-sm hover:underline hover:text-[#be73ae] transition-colors duration-300"
          >
            Kontakt
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;



