import React from "react";

export default function GetInvolved() {
  return (
    <>
      <div className="w-full max-w-[85%] mx-auto my-24">
        {/* Support Section */}
        <div className="bg-[#EDF4FF] rounded-xl py-20 px-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-semibold text-navy-900 mb-12">
            SUPPORT EVOOL FOUNDATION
          </h1>
          <p className="text-lg md:text-[1.6rem] text-gray-700 leading-relaxed max-w-8xl mx-auto">
            At Evool Foundation, we are dedicated to harnessing the power of
            technology for social good. Your support can help us continue our
            mission to simplify lives, generate employment, and promote
            environmental sustainability. By donating to Evool Foundation, you
            are contributing to a brighter, more sustainable future for all.
          </p>
        </div>
      </div>

      {/* Why We Need Your Support Section */}
      <h1 className="text-4xl sm:text-6xl font-semibold text-navy-900 mt-20 text-center">
        WHY WE NEED YOUR SUPPORT
      </h1>
      {/* cards */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 w-[85%] mx-auto m-24">
        {/* Card 1 - Partner with Us */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center flex flex-col justify-between h-[300px]">
          <h2 className="text-xl font-semibold mb-4">
            Research and Development
          </h2>
          <p className="text-gray-600 flex-grow">
            Innovation is at the heart of what we do. Your donations will help
            us invest in cutting-edge research and development to create new
            technological solutions that address everyday challenges and improve
            lives.
          </p>
        </div>

        {/* Card 2 - Volunteer */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center flex flex-col justify-between h-[300px]">
          <h2 className="text-xl font-semibold mb-4">
            Research and Development
          </h2>
          <p className="text-gray-600 flex-grow">
            Innovation is at the heart of what we do. Your donations will help
            us invest in cutting-edge research and development to create new
            technological solutions that address everyday challenges and improve
            lives.
          </p>
        </div>

        {/* Card 3 - Supporter */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center flex flex-col justify-between h-[300px]">
          <h2 className="text-xl font-semibold mb-4">
            Research and Development
          </h2>
          <p className="text-gray-600 flex-grow">
            Innovation is at the heart of what we do. Your donations will help
            us invest in cutting-edge research and development to create new
            technological solutions that address everyday challenges and improve
            lives.
          </p>
        </div>
      </div>
    </>
  );
}
