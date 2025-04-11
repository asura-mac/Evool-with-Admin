import React from "react";
import BusinessGrowthImage from "../assets/BusinessGrowth.png";
import JobOpportunitiesImage from "../assets/JobOpportunities.png";
import SustainabilityImage from "../assets/EnvironmentSustainability.png";

export default function WhatWeDo() {
  return (
    <div className="w-full py-20 bg-white">
      {/* Section Title */}
      <h1 className="text-4xl sm:text-6xl font-semibold text-center mb-16">
        What We Do
      </h1>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 w-[85%] mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center flex flex-col justify-between h-[450px]">
          <div
            className="w-full h-28 bg-cover bg-center rounded-t-2xl border mb-8"
            style={{
              backgroundImage: `url(${BusinessGrowthImage})`,
            }}
          ></div>
          <h2 className="text-xl font-semibold mb-4">
            How A Website Growths your Business
          </h2>
          <p className="text-gray-600 flex-grow">
            We create intuitive platforms that address everyday challenges,
            making life easier and more efficient. Our solutions are designed to
            offer practical benefits and improve daily routines.
          </p>
        </div>

        {/* Card 2 - Creating Job Opportunities */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center flex flex-col justify-between h-[450px]">
          <div
            className="w-full h-28 bg-cover bg-center rounded-t-2xl border mb-8"
            style={{
              backgroundImage: `url(${JobOpportunitiesImage})`,
            }}
          ></div>
          <h2 className="text-xl font-semibold mb-4">
            Creating Job Opportunities
          </h2>
          <p className="text-gray-600 flex-grow">
            A core objective is to generate employment through the platforms we
            develop. By providing tools that help individuals and businesses
            operate more efficiently, we open doors to financial independence
            and long-term growth.
          </p>
        </div>

        {/* Card 3 - Promoting Sustainability */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center flex flex-col justify-between h-[450px]">
          <div
            className="w-full h-28 bg-cover bg-center rounded-t-2xl border mb-8"
            style={{
              backgroundImage: `url(${SustainabilityImage})`,
            }}
          ></div>
          <h2 className="text-xl font-semibold mb-4">
            Promoting Sustainability
          </h2>
          <p className="text-gray-600 flex-grow">
            We design eco-friendly solutions that encourage sustainable living
            practices, contributing to environmental conservation.
          </p>
        </div>
      </div>
    </div>
  );
}
