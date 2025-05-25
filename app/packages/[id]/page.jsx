"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaClock, FaVial, FaPercent, FaCalendar, FaFileAlt, FaFlask, FaStopwatch, FaTag, FaGift } from "react-icons/fa";

const packagesData = [
    {
        "id": "AA1.1WU",
        "name": "AAROGYAM 1.1 WITH UTSH",
        "description": "Includes various health tests along with UTSH package",
        "price": 1599,
        "originalPrice": 3999,
        "discount": "60% OFF",
        "bookedTimes": 3000,
        "nextSlot": "26-02-2025, 8:00:00 AM",
        "reportTime": "12 Hrs",
        "sampleType": ["Blood", "Urine"],
        "tubeType": ["Serum", "EDTA", "Fluoride", "Urine container"],
        "fastingRequired": "8-10 Hrs",
        "offerPrice": 1399,
        "offerCode": "100CASH",
        "offerDescription": "Get Rs.100 PharmEasy Credits on bookings above Rs.999",
        "tests": [
          "Test 1",
          "Test 2",
          "Test 3"
        ]
      },
      {
        "id": "AA1.2WU",
        "name": "AAROGYAM 1.2 WITH UTSH",
        "description": "Includes enhanced tests with UTSH package",
        "price": 1999,
        "originalPrice": 4999,
        "discount": "60% OFF",
        "bookedTimes": 3500,
        "nextSlot": "26-02-2025, 9:00:00 AM",
        "reportTime": "14 Hrs",
        "sampleType": ["Blood", "Urine"],
        "tubeType": ["Serum", "EDTA", "Fluoride", "Urine container"],
        "fastingRequired": "8-10 Hrs",
        "offerPrice": 1699,
        "offerCode": "200CASH",
        "offerDescription": "Get Rs.200 PharmEasy Credits on bookings above Rs.999",
        "tests": [
          "Test 1",
          "Test 2",
          "Test 3"
        ]
      },
      {
        "id": "AA1.3WU",
        "name": "AAROGYAM 1.3 WITH UTSH",
        "description": "Comprehensive health checkup with UTSH tests",
        "price": 3199,
        "originalPrice": 7999,
        "discount": "60% OFF",
        "bookedTimes": 4000,
        "nextSlot": "26-02-2025, 10:00:00 AM",
        "reportTime": "16 Hrs",
        "sampleType": ["Blood", "Urine"],
        "tubeType": ["Serum", "EDTA", "Fluoride", "Urine container"],
        "fastingRequired": "8-10 Hrs",
        "offerPrice": 2799,
        "offerCode": "300CASH",
        "offerDescription": "Get Rs.300 PharmEasy Credits on bookings above Rs.999",
        "tests": [
          "Test 1",
          "Test 2",
          "Test 3",
          "Test 4"
        ]
      },
      {
        "id": "AA1.4WU",
        "name": "AAROGYAM 1.4 WITH UTSH",
        "description": "Advanced checkup including UTSH tests",
        "price": 3699,
        "originalPrice": 8999,
        "discount": "60% OFF",
        "bookedTimes": 4500,
        "nextSlot": "26-02-2025, 11:00:00 AM",
        "reportTime": "18 Hrs",
        "sampleType": ["Blood", "Urine"],
        "tubeType": ["Serum", "EDTA", "Fluoride", "Urine container"],
        "fastingRequired": "8-10 Hrs",
        "offerPrice": 3299,
        "offerCode": "400CASH",
        "offerDescription": "Get Rs.400 PharmEasy Credits on bookings above Rs.999",
        "tests": [
          "Test 1",
          "Test 2",
          "Test 3",
          "Test 4",
          "Test 5"
        ]
      },
      {
        "id": "AA1.5WU",
        "name": "AAROGYAM 1.5 WITH UTSH",
        "description": "Comprehensive health analysis with UTSH package",
        "price": 4199,
        "originalPrice": 9999,
        "discount": "60% OFF",
        "bookedTimes": 5000,
        "nextSlot": "26-02-2025, 12:00:00 PM",
        "reportTime": "20 Hrs",
        "sampleType": ["Blood", "Urine"],
        "tubeType": ["Serum", "EDTA", "Fluoride", "Urine container"],
        "fastingRequired": "8-10 Hrs",
        "offerPrice": 3799,
        "offerCode": "500CASH",
        "offerDescription": "Get Rs.500 PharmEasy Credits on bookings above Rs.999",
        "tests": [
          "Test 1",
          "Test 2",
          "Test 3",
          "Test 4",
          "Test 5",
          "Test 6"
        ]
      },
      {
        "id": "AA1.6WU",
        "name": "AAROGYAM 1.6 WITH UTSH",
        "description": "Extensive checkup with UTSH package for better health monitoring",
        "price": 4699,
        "originalPrice": 10999,
        "discount": "60% OFF",
        "bookedTimes": 5500,
        "nextSlot": "26-02-2025, 1:00:00 PM",
        "reportTime": "22 Hrs",
        "sampleType": ["Blood", "Urine"],
        "tubeType": ["Serum", "EDTA", "Fluoride", "Urine container"],
        "fastingRequired": "8-10 Hrs",
        "offerPrice": 4299,
        "offerCode": "600CASH",
        "offerDescription": "Get Rs.600 PharmEasy Credits on bookings above Rs.999",
        "tests": [
          "Test 1",
          "Test 2",
          "Test 3",
          "Test 4",
          "Test 5",
          "Test 6",
          "Test 7"
        ]
      },
      {
        "id": "AA1.7WU",
        "name": "AAROGYAM 1.7 WITH UTSH",
        "description": "Complete health check with the UTSH package and advanced tests",
        "price": 5499,
        "originalPrice": 12999,
        "discount": "60% OFF",
        "bookedTimes": 6000,
        "nextSlot": "26-02-2025, 2:00:00 PM",
        "reportTime": "24 Hrs",
        "sampleType": ["Blood", "Urine"],
        "tubeType": ["Serum", "EDTA", "Fluoride", "Urine container"],
        "fastingRequired": "8-10 Hrs",
        "offerPrice": 4999,
        "offerCode": "700CASH",
        "offerDescription": "Get Rs.700 PharmEasy Credits on bookings above Rs.999",
        "tests": [
          "Test 1",
          "Test 2",
          "Test 3",
          "Test 4",
          "Test 5",
          "Test 6",
          "Test 7",
          "Test 8"
        ]
      },
      {
        "id": "AA1.8WU",
        "name": "AAROGYAM 1.8 WITH UTSH",
        "description": "Ultimate health checkup with all UTSH tests included",
        "price": 6499,
        "originalPrice": 14999,
        "discount": "60% OFF",
        "bookedTimes": 6500,
        "nextSlot": "26-02-2025, 3:00:00 PM",
        "reportTime": "26 Hrs",
        "sampleType": ["Blood", "Urine"],
        "tubeType": ["Serum", "EDTA", "Fluoride", "Urine container"],
        "fastingRequired": "8-10 Hrs",
        "offerPrice": 5999,
        "offerCode": "800CASH",
        "offerDescription": "Get Rs.800 PharmEasy Credits on bookings above Rs.999",
        "tests": [
          "Test 1",
          "Test 2",
          "Test 3",
          "Test 4",
          "Test 5",
          "Test 6",
          "Test 7",
          "Test 8",
          "Test 9"
        ]
      },
      {
        "id": "AANFA",
        "name": "AAROGYAM 24X7 (NON FASTING) - ADVANCED",
        "description": "Non-fasting advanced health checkup for continuous monitoring",
        "price": 5149,
        "originalPrice": 12999,
        "discount": "60% OFF",
        "bookedTimes": 7000,
        "nextSlot": "26-02-2025, 4:00:00 PM",
        "reportTime": "28 Hrs",
        "sampleType": ["Blood", "Urine"],
        "tubeType": ["Serum", "EDTA", "Fluoride", "Urine container"],
        "fastingRequired": "None",
        "offerPrice": 4749,
        "offerCode": "900CASH",
        "offerDescription": "Get Rs.900 PharmEasy Credits on bookings above Rs.999",
        "tests": [
          "Test 1",
          "Test 2",
          "Test 3",
          "Test 4",
          "Test 5",
          "Test 6"
        ]
      },
      {
        "id": "AANFB",
        "name": "AAROGYAM 24X7 (NON FASTING) - BASIC",
        "description": "Basic non-fasting health checkup to keep your health in check",
        "price": 3099,
        "originalPrice": 7999,
        "discount": "60% OFF",
        "bookedTimes": 7500,
        "nextSlot": "26-02-2025, 5:00:00 PM",
        "reportTime": "30 Hrs",
        "sampleType": ["Blood", "Urine"],
        "tubeType": ["Serum", "EDTA", "Fluoride", "Urine container"],
        "fastingRequired": "None",
        "offerPrice": 2799,
        "offerCode": "1000CASH",
        "offerDescription": "Get Rs.1000 PharmEasy Credits on bookings above Rs.999",
        "tests": [
          "Test 1",
          "Test 2",
          "Test 3"
        ]
      }
      
];

export default function PackageDetail() {
  const { id } = useParams();
  const pkg = packagesData.find((item) => item.id === id);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Package Not Found</h2>
          <p className="mt-2 text-gray-600">The package you're looking for doesn't exist.</p>
          <Link href="/packages" className="mt-4 inline-block bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
            View All Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-medium pb-3 text-gray-700 flex items-center justify-center">
            <span className="w-8 h-[2px] bg-red-500 mr-3"></span>
            Package Details
            <span className="w-8 h-[2px] bg-red-500 ml-3"></span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Package Header */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-red-50 text-red-600 px-4 py-1 rounded-full text-sm font-medium">
                  POPULAR CHOICE
                </span>
                <span className="bg-green-50 text-green-600 px-4 py-1 rounded-full text-sm font-medium">
                  {pkg.discount}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{pkg.name}</h1>
              <p className="text-gray-600 text-lg mb-6">{pkg.description}</p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <FaClock className="text-red-500 text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Report Time</p>
                    <p className="font-semibold text-gray-900">{pkg.reportTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaCalendar className="text-red-500 text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Next Available</p>
                    <p className="font-semibold text-gray-900">{pkg.nextSlot}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 py-4 border-t border-b border-gray-100">
                <div>
                  <p className="text-4xl font-bold text-gray-900">₹{pkg.price}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-gray-400 line-through">₹{pkg.originalPrice}</span>
                    <span className="text-green-600 font-medium text-sm flex items-center">
                      <FaPercent className="mr-1" size={12} />
                      {pkg.discount}
                    </span>
                  </div>
                </div>
                <Link href="/appointment" className="ml-auto">
                  <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Sample Requirements */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Requirements</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <FaFlask className="text-red-500" />
                    <h3 className="font-semibold text-gray-900">Sample Type</h3>
                  </div>
                  <p className="text-gray-600">{pkg.sampleType.join(", ")}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <FaVial className="text-red-500" />
                    <h3 className="font-semibold text-gray-900">Tube Type</h3>
                  </div>
                  <p className="text-gray-600">{pkg.tubeType.join(", ")}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <FaStopwatch className="text-red-500" />
                    <h3 className="font-semibold text-gray-900">Fasting Required</h3>
                  </div>
                  <p className="text-gray-600">{pkg.fastingRequired}</p>
                </div>
              </div>
            </div>

            {/* Tests Included */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tests Included</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {pkg.tests.map((test, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <FaFileAlt className="text-red-500" />
                    <span className="text-gray-700">{test}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Offers & Trust */}
          <div className="space-y-6">
            {/* Special Offer Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <FaTag className="text-red-500 text-xl" />
                <h2 className="text-2xl font-bold text-gray-900">Special Offer</h2>
              </div>
              <div className="bg-red-50 rounded-xl p-6">
                <p className="text-2xl font-bold text-red-600 mb-2">₹{pkg.offerPrice}</p>
                <p className="text-gray-700 mb-4">{pkg.offerDescription}</p>
                <div className="bg-white rounded-lg p-3 inline-block">
                  <span className="font-mono font-bold text-gray-900">{pkg.offerCode}</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <FaGift className="text-red-500 text-xl" />
                <h2 className="text-2xl font-bold text-gray-900">Why Choose Us</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="text-3xl">🏥</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">NABL Accredited Labs</h3>
                    <p className="text-gray-600 text-sm">Ensuring accurate results</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="text-3xl">⚡</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quick Results</h3>
                    <p className="text-gray-600 text-sm">Get reports within {pkg.reportTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="text-3xl">💝</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Trusted by Millions</h3>
                    <p className="text-gray-600 text-sm">Over {pkg.bookedTimes.toLocaleString()}+ bookings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
