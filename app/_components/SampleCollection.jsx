"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FaCalendarCheck, FaMapMarkerAlt, FaFileAlt, FaTimes, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import riderAnimation from "/public/rider.json";

const steps = [
  {
    icon: <FaCalendarCheck className="w-6 h-6" />,
    title: "Book Appointment",
    description: "Select your preferred time slot"
  },
  {
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    title: "Home Visit",
    description: "Our expert visits your location"
  },
  {
    icon: <FaFileAlt className="w-6 h-6" />,
    title: "Get Reports",
    description: "Receive digital reports in 24 hours"
  }
];

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Book in 3 Simple Steps</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 bg-blue-50 p-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
            
            <Button
              className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-lg font-semibold"
              onClick={onClose}
            >
              Close
              <FaArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SampleCollection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-blue-50 border border-blue-100 p-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Sample Collection in <span className="text-red-500">60 Minutes*</span>
            </h2>
            <p className="text-lg text-gray-600">
              Professional home collection service
            </p>
          </div>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-6 text-lg font-semibold"
            onClick={() => setIsModalOpen(true)}
          >
            Book Appointment in 3 Steps
            <FaArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Right Animation */}
        <div className="w-full md:w-1/2 max-w-sm">
          <Lottie 
            animationData={riderAnimation} 
            loop={true}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
