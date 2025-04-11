import React from "react";
import AboutUsImage from "../assets/about.png";

export default function AboutUs() {
  return (
    <div className="w-auto bg-[#EDF4FF] rounded-xl py-20 m-24">
      <div className="flex flex-col lg:flex-row items-center justify-between w-[85%] mx-auto gap-10 md:gap-20">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={AboutUsImage}
            alt="About Us"
            className="sm:w-full lg:w-[30rem] xl:w-[35rem] rounded-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-4xl sm:text-6xl font-semibold text-navy-900 mb-6">
            ABOUT US
          </h1>
          <p className="text-lg md:text-[1.6rem] text-gray-700 leading-relaxed">
            Founded on September 5, 2024, Evool Foundation is the first NGO in
            India to harness the power of technology for social good. We believe
            in the transformative potential of technology to drive positive
            change and improve lives. Our commitment is to use technology
            selflessly for the benefit of humanity and the planet.
          </p>
        </div>
      </div>
    </div>
  );
}
