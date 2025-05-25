"use client";

import React, { useState } from "react";
import { FiUpload, FiPhone, FiFileText, FiClock, FiCheck } from "react-icons/fi";
import Image from "next/image";

const PrescriptionUpload = () => {
  const [mobile, setMobile] = useState("");
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Mobile Number:", mobile);
    console.log("Uploaded File:", file);
  };

  const steps = [
    {
      icon: FiUpload,
      title: "Upload Prescription",
      description: "Share your prescription in PDF, JPG, or PNG format"
    },
    {
      icon: FiPhone,
      title: "Share Contact",
      description: "Provide your mobile number for communication"
    },
    {
      icon: FiClock,
      title: "Quick Response",
      description: "Our team will contact you within 30 minutes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-medium pb-3 text-gray-700 flex items-center justify-center">
            <span className="w-8 h-[2px] bg-red-500 mr-3"></span>
            Upload Your Prescription
            <span className="w-8 h-[2px] bg-red-500 ml-3"></span>
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your <span className="text-red-600">Lab Tests</span> Booked
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simply upload your prescription and share your contact details. Our team will assist you in booking your tests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section - Upload Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* File Upload Area */}
              <div
                className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                  isDragging ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-400"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="prescription"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                />
                <label htmlFor="prescription" className="block cursor-pointer">
                  <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                    <FiUpload className="w-8 h-8 text-red-500" />
                  </div>
                  {file ? (
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <FiCheck className="w-5 h-5" />
                      <span className="font-medium">{file.name}</span>
                    </div>
                  ) : (
                    <>
                      <p className="text-lg font-medium text-gray-700 mb-2">
                        Drag & Drop or Click to Upload
                      </p>
                      <p className="text-sm text-gray-500">
                        Supported formats: PDF, JPG, PNG (Max size: 5MB)
                      </p>
                    </>
                  )}
                </label>
              </div>

              {/* Mobile Number Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiPhone className="text-gray-500" />
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter your 10-digit mobile number"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    maxLength="10"
                    pattern="\d{10}"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-red-600 text-white font-semibold rounded-xl shadow-lg hover:bg-red-700 transition-all transform hover:-translate-y-0.5"
              >
                Submit Prescription
              </button>
            </form>
          </div>

          {/* Right Section - Process Steps */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">How It Works</h3>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <FiCheck className="flex-shrink-0 w-5 h-5" />
                  <span className="text-white">ISO Certified Laboratory</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiCheck className="flex-shrink-0 w-5 h-5" />
                  <span className="text-white">Quick Response within 30 minutes</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiCheck className="flex-shrink-0 w-5 h-5" />
                  <span className="text-white">Home Collection Available</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiCheck className="flex-shrink-0 w-5 h-5" />
                  <span className="text-white">Digital Reports within 24 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionUpload;
