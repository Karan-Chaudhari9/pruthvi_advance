"use client";
import React, { useState } from "react"; // Ensure useState is imported
import { Button } from "@/components/ui/button";
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaClock, FaMapMarkerAlt, FaMedkit } from 'react-icons/fa';

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    age: "",
    gender: "",
    address: "",
    package: "",
    date: "",
    slot: "",
    reportPreference: [],
    authorization: false,
    hardcopy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "authorization") {
        setFormData({ ...formData, [name]: checked });
      } else {
        const updatedPreferences = checked
          ? [...formData.reportPreference, value]
          : formData.reportPreference.filter((item) => item !== value);
        setFormData({ ...formData, reportPreference: updatedPreferences });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Appointment booked successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-medium pb-3 text-gray-700 flex items-center justify-center">
            <span className="w-8 h-[2px] bg-red-500 mr-3"></span>
            Book Appointment
            <span className="w-8 h-[2px] bg-red-500 ml-3"></span>
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 mt-4">Schedule Your Health Check</h1>
          <p className="mt-4 text-lg text-gray-600">Fill in your details and we'll take care of the rest</p>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <FaUser className="text-red-500" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Full Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Email Address*</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Mobile Number*</label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="Your mobile number"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Age*</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Your age"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Gender*</label>
                <div className="flex gap-6">
                  {['Male', 'Female'].map((gender) => (
                    <label key={gender} className="relative flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        checked={formData.gender === gender}
                        onChange={handleChange}
                        className="sr-only peer"
                        required
                      />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-red-500 peer-checked:bg-red-500 transition-colors"></div>
                      <span className="text-gray-700">{gender}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Appointment Details Section */}
            <div className="space-y-6 pt-6 border-t border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <FaMedkit className="text-red-500" />
                Appointment Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Select Package*</label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    required
                  >
                    <option value="">Choose a package</option>
                    <option value="Basic">Basic Health Check</option>
                    <option value="Advanced">Advanced Health Check</option>
                    <option value="Premium">Premium Health Check</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Appointment Date*</label>
                  <div className="relative">
                    <FaCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Preferred Time Slot*</label>
                  <div className="relative">
                    <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                      name="slot"
                      value={formData.slot}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      required
                    >
                      <option value="">Select a slot</option>
                      <option value="Morning">Morning (8 AM - 12 PM)</option>
                      <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening">Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Address*</label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="Enter your complete address"
                      rows="3"
                      minLength={25}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences Section */}
            <div className="space-y-6 pt-6 border-t border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">Communication Preferences</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {["Whatsapp", "Call", "Email", "SMS"].map((method) => (
                  <label key={method} className="relative flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="reportPreference"
                      value={method}
                      checked={formData.reportPreference.includes(method)}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:border-red-500 peer-checked:bg-red-500 transition-colors"></div>
                    <span className="text-gray-700">{method}</span>
                  </label>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="hardcopy"
                    checked={formData.hardcopy}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                  <span className="ml-3 text-sm font-medium text-gray-700">Need hardcopy of report (₹50 extra)</span>
                </label>

                <label className="relative flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="authorization"
                    checked={formData.authorization}
                    onChange={handleChange}
                    className="sr-only peer"
                    required
                  />
                  <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:border-red-500 peer-checked:bg-red-500 transition-colors"></div>
                  <span className="text-sm text-gray-700">I authorize the representative to contact me</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-red-300"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
