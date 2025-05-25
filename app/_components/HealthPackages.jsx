import { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaClock, FaVial, FaPercent } from "react-icons/fa";

const categories = [
    "All",
    "Wellness",
    "PCOS/PCOD",
    "Sexual Health",
    "Menstrual Health",
    "Pregnancy",
    "Cancer",
    "Infertility",
];

const packages = [
    {
        title: "Stay Fit Plus Full Body Checkup With Free RA Factor - Female",
        reportsIn: "15 hours",
        parameters: 100,
        tags: ["Heart", "Diabetes (Hba1c)", "Liver", "Kidney", "Infection", "Thyroid", "Iron"],
        price: 2499,
        oldPrice: 8760,
        discount: "71% off",
        category: "Wellness",
    },
    {
        title: "Senior Citizen Full Body Checkup - Female (Advance)",
        reportsIn: "15 hours",
        parameters: 99,
        tags: ["Blood Pressure", "Cholesterol", "Bone Health"],
        price: 2199,
        oldPrice: 8760,
        discount: "74% off",
        category: "Wellness",
    },
    {
        title: "Free HsCRP with Stayfit Full body Checkup - Female",
        reportsIn: "15 hours",
        parameters: 100,
        tags: ["CBC", "ESR", "HbA1c", "Lipid Profile", "CRP", "Vitamin B12"],
        price: 2499,
        oldPrice: 9970,
        discount: "74% off",
        category: "PCOS/PCOD",
    },
    {
        title: "Pregnancy Care Comprehensive Checkup",
        reportsIn: "24 hours",
        parameters: 80,
        tags: ["Iron", "Calcium", "Vitamin D", "Thyroid"],
        price: 2999,
        oldPrice: 6999,
        discount: "57% off",
        category: "Pregnancy",
    },
    {
        title: "Menstrual Health & Hormone Balance Test",
        reportsIn: "12 hours",
        parameters: 75,
        tags: ["Estrogen", "Progesterone", "Thyroid", "Prolactin"],
        price: 1899,
        oldPrice: 4999,
        discount: "62% off",
        category: "Menstrual Health",
    },
];

export default function HealthPackage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredPackages = selectedCategory === "All" ? packages : packages.filter(pkg => pkg.category === selectedCategory);
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className="py-16 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-xl font-medium pb-3 text-gray-700 flex items-center justify-center">
                        <span className="w-8 h-[2px] bg-red-500 mr-3"></span>
                        Health Packages
                        <span className="w-8 h-[2px] bg-red-500 ml-3"></span>
                    </h2>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Women's Health & <span className="text-red-500">Wellness</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Take control of your health with our comprehensive women's health packages
                    </p>
                </div>

                {/* Categories */}
                <div className="flex justify-center gap-3 mb-12 overflow-x-auto pb-4 scrollbar-hide">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2.5 rounded-full transition-all duration-300 text-sm font-semibold border-2 hover:shadow-lg transform hover:-translate-y-0.5 ${
                                selectedCategory === cat 
                                ? "bg-red-500 text-white border-red-500 shadow-lg" 
                                : "bg-white text-gray-700 border-gray-200 hover:border-red-200"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Packages Slider */}
                <div className="relative mt-6">
                    <button
                        className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-50 z-10 transition-all hover:scale-110"
                        onClick={scrollLeft}
                    >
                        <FaArrowLeft className="text-gray-600" />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-8 px-4 py-8 scrollbar-hide"
                    >
                        {filteredPackages.map((pkg, index) => (
                            <div
                                key={index}
                                className="group bg-white p-6 rounded-2xl shadow-md min-w-[380px] max-w-[380px] border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-red-100 cursor-pointer"
                            >
                                {/* Package Header */}
                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                                            {pkg.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-red-500 transition-colors">
                                        {pkg.title}
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
                                    <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-red-600 hover:shadow-lg">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-50 z-10 transition-all hover:scale-110"
                        onClick={scrollRight}
                    >
                        <FaArrowRight className="text-gray-600" />
                    </button>
                </div>
            </div>
        </div>
    );
}
