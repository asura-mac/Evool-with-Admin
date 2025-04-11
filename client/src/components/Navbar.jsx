import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const menuItems = [
  { label: "Mission", path: "/our-mission" },
  { label: "Vision", path: "/our-vision" },
  { label: "Projects", path: "/our-projects" },
  { label: "About us", path: "/about-us" },
  { label: "Blog", path: "/blog" },
  { label: "Get Involved", path: "/get-involved" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-6 left-0 z-50 flex justify-center">
      {/* Navbar Container with Rounded Corners & Shadow */}
      <div className="flex justify-between items-center w-[90%] max-w-6xl bg-white shadow-lg rounded-full py-4 px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/evool_t.png"
            alt="Evool Foundation"
            className="w-10 mr-2"
          />
          <span className="text-lg font-semibold">Evool Foundation</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.label}
              className="hover:text-gray-600"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Contact Us Button */}
        <Link
          to="/contact-us"
          className="hidden md:block bg-[#0B0D39] text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-gray-800 transition"
        >
          Contact us
        </Link>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <img src="/close.png" alt="Close" className="w-6" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 absolute w-[90%] max-w-6xl rounded-xl top-16">
          <div className="flex flex-col items-center space-y-4">
            {menuItems.map((item) => (
              <Link
                to={item.path}
                key={item.label}
                className="text-lg font-medium hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact-us"
              className="bg-black text-white px-5 py-2 rounded-full text-lg font-medium hover:bg-gray-800"
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
