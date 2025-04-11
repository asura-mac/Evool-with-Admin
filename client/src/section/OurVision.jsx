import React from "react";
import OurVisionImage from "../assets/vission.png";

export default function OurVision() {
	return (
		<div className="w-auto bg-[#EDF4FF] rounded-xl py-20 m-24">
			<div className="flex flex-col lg:flex-row items-center justify-between w-[85%] mx-auto gap-10 md:gap-20">
				{/* Left Side - Image */}
				<div className="lg:w-1/2 flex justify-center">
					<img
						src={OurVisionImage}
						alt="About Us"
						className="sm:w-full lg:w-[30rem] xl:w-[35rem] rounded-lg"
					/>
				</div>

				{/* Right Side - Text */}
				<div className="lg:w-1/2 text-left">
					<h1 className="text-4xl sm:text-6xl font-semibold text-navy-900 mb-6">
						OUR VISION
					</h1>
					<p className="text-lg md:text-[1.6rem] text-gray-700 leading-relaxed">
					We envision a world where technology is a catalyst for sustainable development, enhancing the quality of life for all. Our goal is to lead the way in using innovative technological solutions to create a fairer, more sustainable future. We aim to ensure that technology bridges gaps, empowers communities, and leaves no one behind. By fostering a culture of continuous improvement and collaboration, we strive to make a lasting positive impact on society and the environment.
					</p>
				</div>
			</div>
		</div>
	);
}
