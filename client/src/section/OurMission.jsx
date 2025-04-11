import React from "react";
import OurMissionImage from "../assets/mission.png";

export default function OurMission() {
  return (
    <div className="w-full py-20 bg-white" id="our-mission">
      <div className="max-w-7xl mx-auto">
        {/* Section with Title and Content */}
        <div className="w-[100%] flex flex-col lg:flex-row items-center gap-20px">
          {/* Left Column with Title and Text */}
          <div className="lg:w-3/5 ">
            <h3 className="text-4xl sm:text-5xl font-semibold text-navy-900 mb-8">
              OUR MISSION
            </h3>
            <p className="text-lg md:text-[1.6rem] text-gray-700 leading-relaxed">
              Our mission is to simplify lives, generate employment, and foster
              environmental sustainability through innovative technological
              solutions. We strive to meet the needs of our community and the
              environment, ensuring that technology acts as a force for positive
              change and sustainable development.
            </p>
          </div>

          {/* Right Column with Image */}
          <div className="lg:w-2/5 flex items-center justify-center">
            <img
              src={OurMissionImage}
              alt="Our Mission"
              className="w-full max-w-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
