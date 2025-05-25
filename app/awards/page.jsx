"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";

const AwardsPage = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    // Sample awards data - you can replace this with your actual data
    const allAwards = [
        {
            id: 1,
            title: "Excellence in Healthcare",
            year: "2023",
            image: "/awards1.jpg",
            description: "Recognized for outstanding healthcare services",
            category: "Healthcare Excellence"
        },
        {
            id: 2,
            title: "Best Diagnostic Center",
            year: "2022",
            image: "/awards2.jpg",
            description: "Awarded for diagnostic excellence",
            category: "Diagnostics"
        },
        {
            id: 3,
            title: "Customer Satisfaction",
            year: "2023",
            image: "/awards3.jpg",
            description: "Highest rated healthcare provider",
            category: "Customer Service"
        },
        {
            id: 4,
            title: "Innovation in Healthcare",
            year: "2023",
            image: "/awards4.jpg",
            description: "Leading innovation in healthcare technology",
            category: "Innovation"
        },
        {
            id: 5,
            title: "Best Healthcare Provider",
            year: "2022",
            image: "/awards5.jpg",
            description: "Recognized as the leading healthcare provider",
            category: "Healthcare Excellence"
        },
        {
            id: 6,
            title: "Quality Excellence",
            year: "2023",
            image: "/awards6.jpg",
            description: "Outstanding quality in healthcare services",
            category: "Quality"
        }
    ];

    return (
        <div className="container mx-auto p-6 lg:px-8">
            <div className="grid md:grid-cols-4 mb-12">
                <div className=""></div>
                <div className="col-span-2 text-center py-10">
                    <h2 className="text-xl font-medium pb-3 text-gray-700">- Our Recognition</h2>
                    <h1 className="text-4xl font-semibold">
                        Awards & <span className="text-red-500">Achievements</span>
                    </h1>
                    <p className="text-gray-600 text-lg mt-4">Recognizing our commitment to excellence in healthcare</p>
                </div>
                <div className=""></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
                {allAwards.map((award) => (
                    <div 
                        key={award.id}
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        data-aos="fade-up"
                    >
                        <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                            <Image
                                src={award.image}
                                alt={award.title}
                                fill
                                className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3">
                            {award.category}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                            {award.title}
                        </h3>
                        <p className="text-gray-600 mb-2 font-medium">{award.year}</p>
                        <p className="text-gray-700 leading-relaxed">{award.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AwardsPage; 