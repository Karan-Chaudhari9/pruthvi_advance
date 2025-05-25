"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { FaClock, FaVial, FaPercent, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const packagesData = [
  { 
    id: "AA1.1WU", 
    name: "AAROGYAM 1.1 WITH UTSH", 
    price: 1599,
    oldPrice: 3999,
    discount: "60% off",
    parameters: 89,
    reportsIn: "15 hours",
    tags: ["Diabetes (HbA1c)", "Lipid", "Liver", "Kidney", "Infection", "Thyroid"]
  },
  { 
    id: "AA1.2WU", 
    name: "AAROGYAM 1.2 WITH UTSH", 
    price: 1999,
    oldPrice: 4999,
    discount: "60% off",
    parameters: 95,
    reportsIn: "15 hours",
    tags: ["Diabetes (HbA1c)", "Lipid", "Liver", "Kidney", "Thyroid", "Vitamin D"]
  },
  { 
    id: "AA1.3WU", 
    name: "AAROGYAM 1.3 WITH UTSH", 
    price: 3199,
    oldPrice: 7999,
    discount: "60% off",
    parameters: 98,
    reportsIn: "15 hours",
    tags: ["Complete Blood Count", "Diabetes", "Lipid", "Liver", "Kidney", "Thyroid"]
  },
  { 
    id: "AA1.4WU", 
    name: "AAROGYAM 1.4 WITH UTSH", 
    price: 3699,
    oldPrice: 8999,
    discount: "59% off",
    parameters: 102,
    reportsIn: "15 hours",
    tags: ["Diabetes", "Heart", "Liver", "Kidney", "Thyroid", "Vitamin B12"]
  },
  { 
    id: "AA1.5WU", 
    name: "AAROGYAM 1.5 WITH UTSH", 
    price: 4199,
    oldPrice: 9999,
    discount: "58% off",
    parameters: 105,
    reportsIn: "15 hours",
    tags: ["Complete Health", "Diabetes", "Heart", "Liver", "Kidney", "Thyroid"]
  }
];

export default function TopHealthPackages() {
  const scrollRef = useRef(null);
  const router = useRouter();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const openPackageDetails = (id) => {
    router.push(`/packages/${id}`);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-medium pb-3 text-gray-700 flex items-center justify-center">
            <span className="w-8 h-[2px] bg-red-500 mr-3"></span>
            Available Health Reports
            <span className="w-8 h-[2px] bg-red-500 ml-3"></span>
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-red-500">1 Easy Step</span> & Get Your Solution
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from our comprehensive range of health checkup packages
          </p>
        </div>

        {/* Packages Slider */}
        <div className="relative mt-6">
          <button
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-50 z-10 transition-all hover:scale-110"
            onClick={() => scroll("left")}
          >
            <FaChevronLeft className="text-gray-600" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 px-4 py-8 scrollbar-hide"
          >
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-white p-6 rounded-2xl shadow-md min-w-[380px] max-w-[380px] border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-red-100 cursor-pointer"
                onClick={() => openPackageDetails(pkg.id)}
              >
                {/* Package Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                      Premium Package
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-red-500 transition-colors">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <FaClock className="mr-2 text-red-500" />
                      <span>{pkg.reportsIn}</span>
                    </div>
                    <div className="flex items-center">
                      <FaVial className="mr-2 text-red-500" />
                      <span>{pkg.parameters} Parameters</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mb-6">
                  {pkg.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-red-50 group-hover:text-red-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">
                      ₹{pkg.price}
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ₹{pkg.oldPrice}
                      </span>
                    </p>
                    <div className="flex items-center text-green-600 mt-1">
                      <FaPercent className="mr-1 text-xs" />
                      <span className="font-medium text-sm">{pkg.discount}</span>
                    </div>
                  </div>
                  <button 
                    className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-red-600 hover:shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      openPackageDetails(pkg.id);
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-50 z-10 transition-all hover:scale-110"
            onClick={() => scroll("right")}
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
