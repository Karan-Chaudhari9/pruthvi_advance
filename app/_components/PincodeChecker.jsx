"use client";
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";

const PincodeChecker = () => {
  const [pincode, setPincode] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkPincode = async () => {
    if (!pincode || pincode.length !== 6) {
      setError("Please enter a valid 6-digit pincode");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/Serviceable pincode list.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(worksheet);

      const pincodeData = data.find(row => row.Pincode === parseInt(pincode));

      if (pincodeData) {
        setResult({
          city: pincodeData.City,
          roi: pincodeData.ROI,
          state: pincodeData.State,
          services: {
            path: pincodeData.Path === 1,
            ecg: pincodeData.ECG === 1,
            femaleECG: pincodeData["Female ECG"] === 1,
            maleECG: pincodeData["Male ECG"] === 1
          }
        });
      } else {
        setError("This pincode is not serviceable");
      }
    } catch (err) {
      setError("Error checking pincode. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Check Your <span className="text-red-500">Location</span>
            </h2>
            <p className="text-gray-600 text-lg">Enter your pincode to check service availability in your area</p>
          </div>

          {/* Pincode Input Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8" data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    placeholder="Enter 6-digit pincode"
                    className="w-full px-6 py-4 text-lg rounded-xl border-2 border-gray-200 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all duration-300"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <button
                onClick={checkPincode}
                disabled={loading || pincode.length !== 6}
                className="px-8 py-4 bg-red-500 text-white text-lg font-semibold rounded-xl hover:bg-red-600 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Checking...
                  </>
                ) : (
                  "Check Availability"
                )}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6" data-aos="fade-up">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}

          {/* Result */}
          {result && (
            <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Service Available in {result.city}
                  </h3>
                  <p className="text-gray-600">{result.state}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-gray-600 mb-1">ROI</p>
                  <p className="text-2xl font-bold text-gray-800">{result.roi}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-gray-600 mb-1">Status</p>
                  <p className="text-2xl font-bold text-green-500">Available</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Available Services:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(result.services).map(([service, available]) => (
                    <div
                      key={service}
                      className={`flex items-center gap-3 p-4 rounded-xl ${
                        available ? "bg-green-50" : "bg-gray-50"
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full ${available ? "bg-green-500" : "bg-gray-400"}`}></div>
                      <span className="font-medium capitalize">
                        {service.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PincodeChecker; 