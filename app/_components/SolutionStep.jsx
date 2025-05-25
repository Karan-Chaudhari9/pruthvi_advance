import React, { useState } from "react";

const SolutionStep = () => {
  // Track hovered card
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="container py-10 md:py-20">
      {/* Header Section */}
      <div className="grid md:grid-cols-4">
        <div className=""></div>
        <div className="col-span-2 text-center py-10">
        <h2 className="text-xl font-medium pb-3 text-gray-700 flex items-center justify-center">
                        <span className="w-8 h-[2px] bg-red-500 mr-3"></span>
                        Fastest Solution
                        <span className="w-8 h-[2px] bg-red-500 ml-3"></span>
                    </h2>
          <h1 className="text-4xl font-semibold">
            Quick Results in <span className="text-red-500">4 Simple Steps </span>
          </h1>
        </div>
        <div className=""></div>
      </div>

      {/* Solution Steps Section */}
      <div className="grid md:grid-cols-4 gap-10 mt-10">
        {/** Solution Steps **/}
        {solutionSteps.map((step, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
              hoveredIndex === index ? "bg-blue-800 shadow-2xl" : "bg-white shadow-lg"
            }`}
            onMouseEnter={() => handleMouseEnter(index)} // Set hovered card
            onMouseLeave={handleMouseLeave} // Reset hovered state when mouse leaves
          >
            {/* Animated Background Fill */}
            <div
              className={`absolute inset-0 transform transition-all duration-500 ease-in-out ${
                hoveredIndex === index
                  ? "translate-y-0 bg-blue-800"
                  : "translate-y-full bg-blue-500"
              }`}
            ></div>

            {/* Content */}
            <div
              className={`p-6 flex flex-col items-center justify-center relative z-10 text-center transition-all duration-500 ${
                hoveredIndex === index ? "text-white" : "text-gray-800"
              }`}
            >
              <img
                src={step.icon}
                className="w-16 mb-4"
                alt={step.title}
              />
              <h2
                className={`text-2xl font-semibold mb-2 transition-colors duration-500 ${
                  hoveredIndex === index ? "text-white" : "text-gray-800"
                }`}
              >
                {step.title}
              </h2>
              <p
                className={`text-gray-600 transition-colors duration-500 ${
                  hoveredIndex === index ? "text-white" : "text-gray-600"
                }`}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const solutionSteps = [
  {
    icon: "/icons/lab-technician.png",
    title: "Experienced Sr. Dr. MD Pathology & Lab Technicians",
    description: "Our skilled technicians ensure accurate and timely test results."
  },
  {
    icon: "/icons/clock.png",
    title: "Quick Test Results",
    description: "Get fast and reliable test reports with minimal wait times."
  },
  {
    icon: "/icons/medical-diagnostics.png",
    title: "Advanced Diagnostic Tools",
    description: "We use state-of-the-art equipment for precise diagnostics."
  },
  {
    icon: "/icons/microscope.png",
    title: "Comprehensive Testing Services",
    description: "From routine tests to specialized screenings, we cover a wide range of tests."
  }
];

export default SolutionStep;
