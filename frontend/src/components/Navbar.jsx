import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Map as MapIcon, Phone, PlusCircle } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Buy Land", path: "/listings" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center gap-2 group"
            >
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-600/20 group-hover:scale-105 transition-transform">
                <MapIcon className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-gray-900 tracking-tight leading-none">
                  ApnaPlot
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                  Real Estate
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-green-700 ${
                  isActive(link.path)
                    ? "text-green-700 font-bold"
                    : "text-gray-500"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="h-6 w-px bg-gray-200 mx-2"></div>

            <a href="tel:917978300902">
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-green-700 hover:bg-green-50"
              >
                <Phone className="w-4 h-4 mr-2" /> Support
              </Button>
            </a>

            <Button className="bg-gray-900 hover:bg-gray-800 text-white shadow-md">
              <PlusCircle className="w-4 h-4 mr-2" /> Post Property
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-green-700 bg-green-50"
                    : "text-gray-600 hover:text-green-700 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100 grid grid-cols-2 gap-3">
              <a href="tel:917978300902">
                <Button variant="outline" className="w-full justify-center">
                  <Phone className="w-4 h-4 mr-2" /> Call
                </Button>
              </a>
              <Button className="w-full bg-green-600 hover:bg-green-700 justify-center">
                Post Property
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
