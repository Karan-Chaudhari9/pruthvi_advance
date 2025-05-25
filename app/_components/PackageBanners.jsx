"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaStethoscope, FaUserFriends, FaHeart, FaFlask, FaPhone, FaTimes, FaClock, FaCalendar, FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

// Contact Modal Component
const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <FaTimes className="w-5 h-5" />
                    </button>
                </div>
                <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Call us at</p>
                        <a href="tel:+919876543210" className="text-xl text-blue-600 font-semibold hover:text-blue-700">
                            +91 98765 43210
                        </a>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Email us at</p>
                        <a href="mailto:info@pruthvi.com" className="text-xl text-blue-600 hover:text-blue-700">
                            info@pruthvi.com
                        </a>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const packageBanners = [
    {
        id: 1,
        title: "Family Health Package",
        description: "Comprehensive health checkup for your entire family with advanced diagnostics and personalized care",
        icon: FaUserFriends,
        price: "₹9999",
        originalPrice: "₹14999",
        tests: "40+ Tests",
        features: [
            "Complete Blood Count",
            "Diabetes Screening",
            "Cardiac Risk Assessment",
            "Vitamin Profile",
            "Thyroid Function Test",
            "Liver Function Test"
        ],
        deliveryTime: "24 Hours",
        reportFormat: "Digital + Physical",
        image: "/family-health-banner.jpg",
        recommended: true
    },
    {
        id: 2,
        title: "Complete Health Combo",
        description: "Full body checkup package with advanced diagnostics and expert consultation",
        icon: FaStethoscope,
        price: "₹7999",
        originalPrice: "₹11999",
        tests: "30+ Tests",
        features: [
            "Liver Function Test",
            "Kidney Function Test",
            "Thyroid Profile",
            "Lipid Profile",
            "Blood Sugar Test",
            "Urine Analysis"
        ],
        deliveryTime: "12 Hours",
        reportFormat: "Digital",
        image: "/family-health-banner.jpg",
        recommended: false
    },
    {
        id: 3,
        title: "Premium Wellness Package",
        description: "Executive health screening with comprehensive diagnostics and lifestyle assessment",
        icon: FaHeart,
        price: "₹12999",
        originalPrice: "₹18999",
        tests: "50+ Tests",
        features: [
            "Advanced Cardiac Screening",
            "Cancer Markers",
            "Hormone Analysis",
            "Bone Health",
            "Vitamin D3 & B12",
            "Heavy Metal Analysis"
        ],
        deliveryTime: "36 Hours",
        reportFormat: "Digital + Physical",
        image: "/family-health-banner.jpg",
        recommended: false
    },
    {
        id: 4,
        title: "Premium Wellness Package",
        description: "Executive health screening with comprehensive diagnostics and lifestyle assessment",
        icon: FaHeart,
        price: "₹12999",
        originalPrice: "₹18999",
        tests: "50+ Tests",
        features: [
            "Advanced Cardiac Screening",
            "Cancer Markers",
            "Hormone Analysis",
            "Bone Health",
            "Vitamin D3 & B12",
            "Heavy Metal Analysis"
        ],
        deliveryTime: "36 Hours",
        reportFormat: "Digital + Physical",
        image: "/family-health-banner.jpg",
        recommended: false
    },
    {
        id: 5,
        title: "Premium Wellness Package",
        description: "Executive health screening with comprehensive diagnostics and lifestyle assessment",
        icon: FaHeart,
        price: "₹12999",
        originalPrice: "₹18999",
        tests: "50+ Tests",
        features: [
            "Advanced Cardiac Screening",
            "Cancer Markers",
            "Hormone Analysis",
            "Bone Health",
            "Vitamin D3 & B12",
            "Heavy Metal Analysis"
        ],
        deliveryTime: "36 Hours",
        reportFormat: "Digital + Physical",
        image: "/family-health-banner.jpg",
        recommended: false
    }
];

const PackageBanner = ({ banner, onContactClick }) => {
    const Icon = banner.icon;
    return (
        <div className="h-full px-4 py-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                {/* Banner Image */}
                <div className="relative h-48 w-full">
                    <Image
                        src={banner.image}
                        alt={banner.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    {banner.recommended && (
                        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                            Recommended
                        </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="bg-white/90 p-2 rounded-lg">
                                <Icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-xl font-semibold text-white">
                                {banner.title}
                            </h2>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/90">
                            <span className="flex items-center bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                                <FaClock className="w-3.5 h-3.5 mr-1.5 text-white" />
                                {banner.deliveryTime}
                            </span>
                            <span className="flex items-center bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                                <FaFlask className="w-3.5 h-3.5 mr-1.5 text-white" />
                                {banner.tests}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">
                        {banner.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 gap-2 mb-6 flex-1">
                        {banner.features.map((feature, index) => (
                            <div 
                                key={index} 
                                className="flex items-center text-sm text-gray-700"
                            >
                                <FaCheck className="w-3.5 h-3.5 mr-2 text-green-500 flex-shrink-0" />
                                <span className="line-clamp-1">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                            <div className="text-2xl font-bold text-gray-900">
                                {banner.price}
                                <span className="text-base text-gray-400 line-through ml-2">
                                    {banner.originalPrice}
                                </span>
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5">
                                {banner.reportFormat}
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <Link 
                                href="/appointment"
                                className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Book Now
                                <FaCalendar className="w-3.5 h-3.5 ml-1.5" />
                            </Link>
                            <button 
                                onClick={onContactClick}
                                className="inline-flex items-center px-3 py-1.5 border border-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Contact
                                <FaPhone className="w-3.5 h-3.5 ml-1.5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function PackageBanners() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [swiper, setSwiper] = useState(null);

    return (
        <section className="py-12">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 mb-12">
                <div className="text-center mb-12">
                    <h2 className="text-xl font-medium pb-3 text-gray-700 flex items-center justify-center">
                        <span className="w-8 h-[2px] bg-red-600 mr-3"></span>
                        Health Packages
                        <span className="w-8 h-[2px] bg-red-600 ml-3"></span>
                    </h2>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Comprehensive <span className="text-red-600">Health Checkup</span>
                    </h1>
                </div>
            </div>

            <div className="relative">
                {/* Custom Navigation Buttons */}
                <button 
                    onClick={() => swiper?.slidePrev()}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2.5 rounded-r-lg shadow-sm transition-colors"
                >
                    <FaChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button 
                    onClick={() => swiper?.slideNext()}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2.5 rounded-l-lg shadow-sm transition-colors"
                >
                    <FaChevronRight className="w-5 h-5 text-gray-600" />
                </button>

                <Swiper
                    modules={[Autoplay]}
                    onSwiper={setSwiper}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 32,
                        },
                    }}
                    className="px-8"
                >
                    {packageBanners.map((banner) => (
                        <SwiperSlide key={banner.id} className="h-auto">
                            <PackageBanner 
                                banner={banner} 
                                onContactClick={() => setIsContactModalOpen(true)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <ContactModal 
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </section>
    );
} 