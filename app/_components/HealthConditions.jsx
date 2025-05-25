"use client";
import React, { useState } from "react";

const conditions = [
  {
    id: 1,
    src: "/heart.jpg",
    title: "Heart Health",
    subtitle: "Monitor your heart condition",
    details: "Regular heart checkups can detect early signs of cardiovascular diseases, reducing risk factors such as high cholesterol and hypertension.",
    precautions: [
      "Maintain a healthy diet with low sodium",
      "Exercise regularly (30 mins per day)",
      "Avoid smoking and excessive alcohol",
      "Manage stress effectively",
      "Regular checkups if you have a family history of heart disease",
    ],
  },
  {
    id: 2,
    src: "/kidney.jpg",
    title: "Kidney Health",
    subtitle: "Check kidney functionality",
    details: "Kidney function tests help detect chronic kidney disease, ensuring early intervention for conditions like kidney stones or infections.",
    precautions: [
      "Stay hydrated and drink enough water",
      "Reduce salt intake",
      "Limit excessive protein consumption",
      "Control blood sugar and blood pressure",
      "Avoid overuse of painkillers (NSAIDs)",
    ],
  },
  {
    id: 3,
    src: "/liver.jpg",
    title: "Liver Health",
    subtitle: "Essential for detoxification",
    details: "Liver tests help assess liver function, detecting issues like fatty liver disease, hepatitis, or liver cirrhosis.",
    precautions: [
      "Avoid excessive alcohol consumption",
      "Eat a balanced diet with fiber-rich foods",
      "Maintain a healthy weight",
      "Get vaccinated for Hepatitis A and B",
      "Regular liver enzyme tests if at risk",
    ],
  },
  {
    id: 4,
    src: "/lung.jpg",
    title: "Lung Health",
    subtitle: "Assess your respiratory system",
    details: "Lung function tests can identify conditions like asthma, COPD, or lung infections early for better treatment outcomes.",
    precautions: [
      "Avoid smoking and exposure to pollutants",
      "Exercise to improve lung capacity",
      "Stay hydrated to keep airways clear",
      "Use masks in polluted environments",
      "Get flu and pneumonia vaccines",
    ],
  },
  {
    id: 5,
    src: "/thyroid.jpg",
    title: "Thyroid Health",
    subtitle: "Regulates metabolism and energy",
    details: "Thyroid function tests check for hypothyroidism or hyperthyroidism, ensuring timely medical intervention.",
    precautions: [
      "Maintain a balanced iodine intake",
      "Monitor symptoms of fatigue or weight gain",
      "Avoid excessive soy-based products",
      "Manage stress effectively",
      "Regular thyroid hormone level tests",
    ],
  },
];

const HealthConditions = () => {
  const [selectedCondition, setSelectedCondition] = useState(null);

  return (
    <div className="py-10 md:py-20">
      {/* Header Section */}
      <div className="text-center pb-8">
        <h2 className="text-xl font-medium pb-3 text-gray-700 flex items-center justify-center">
                        <span className="w-8 h-[2px] bg-red-500 mr-3"></span>
                        Health Check-ups for a Better Tomorrow
                        <span className="w-8 h-[2px] bg-red-500 ml-3"></span>
                    </h2>
        <h1 className="text-2xl md:text-4xl font-semibold">
          Explore Key Organ<span className="text-red-500"> Tests & Preventive Care</span>
        </h1>
      </div>

      {/* Grid Layout for Conditions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {conditions.map((condition) => (
          <div
            key={condition.id}
            className="relative w-full bg-white rounded-xl shadow-lg p-4 cursor-pointer transition hover:shadow-xl"
            onClick={() => setSelectedCondition(condition)}
          >
            {/* Image Box with Proper Fit */}
            <div className="w-full h-40 overflow-hidden rounded-md">
              <img
                src={condition.src}
                alt={condition.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <h2 className="text-xl font-bold mt-4">{condition.title}</h2>
            <p className="text-gray-600 text-sm">{condition.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Popup (Modal) for More Details */}
      {selectedCondition && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-2xl relative transform scale-95 transition-all duration-300">
            {/* Close Button */}
            <button
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setSelectedCondition(null)}
            >
              ✖
            </button>

            {/* Image Box Fit in Popup */}
            <div className="w-full h-52 overflow-hidden rounded-md">
              <img
                src={selectedCondition.src}
                alt={selectedCondition.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <h2 className="text-2xl font-bold mt-4">{selectedCondition.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{selectedCondition.details}</p>

            {/* Precautions */}
            <h3 className="text-lg font-semibold mt-4">Precautions:</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
              {selectedCondition.precautions.map((precaution, index) => (
                <li key={index}>{precaution}</li>
              ))}
            </ul>

            {/* Close Button */}
            <button
              className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
              onClick={() => setSelectedCondition(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthConditions;
