import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-[1400px] mx-auto py-auto flex flex-col lg:flex-row items-center justify-center">
        {/* Left Section */}
        <div className="lg:w-1/2 ml-24 text-center lg:text-left">
          <h1 className="text-[77px] font-bold text-navy-900 leading-[1.2] tracking-[-3.31px] font-dmSans">
            We are <span className="text-blue-500">always</span> there for your
            need.
          </h1>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-lg">
            Evool Foundation harnesses technology for social good, driving
            change through digital identity, elderly care, health solutions,
            education, and community impact. We innovate for humanity and the
            planet, making tech work for a better world.
          </p>
          <Link
            to="/contact-us"
            className="mt-8 inline-block bg-[#008cff] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-600 transition-all"
          >
            Contact us
          </Link>
        </div>

        {/* Right Section - Image with Text Overlay */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <div className="relative rounded-lg overflow-hidden shadow-lg max-w-[500px]">
            <img
              src="/landing_image.png"
              alt="Event"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
              <p className="text-sm font-light opacity-80">
                Evool Foundation - Event
              </p>
              <h2 className="text-2xl font-semibold mt-1 leading-tight">
                Technological development <br /> towards society
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
