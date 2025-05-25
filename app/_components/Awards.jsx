"use client";
import Link from 'next/link';
import { FaTrophy, FaAward, FaMedal, FaChevronRight, FaStar, FaCertificate, FaHandshake } from 'react-icons/fa';

const Awards = () => {
    const previewAwards = [
        {
            id: 1,
            title: "Excellence in Healthcare",
            year: "2023",
            description: "Recognized for outstanding healthcare services and patient care excellence",
            icon: FaTrophy,
            color: "from-yellow-400 to-yellow-600",
            stats: "98% Patient Satisfaction",
            gradient: "from-yellow-50 to-yellow-100"
        },
        {
            id: 2,
            title: "Best Diagnostic Center",
            year: "2022",
            description: "Awarded for diagnostic excellence and cutting-edge technology implementation",
            icon: FaAward,
            color: "from-blue-400 to-blue-600",
            stats: "50+ Advanced Tests",
            gradient: "from-blue-50 to-blue-100"
        },
        {
            id: 3,
            title: "Customer Satisfaction",
            year: "2023",
            description: "Highest rated healthcare provider with exceptional service quality",
            icon: FaMedal,
            color: "from-red-400 to-red-600",
            stats: "24/7 Support",
            gradient: "from-red-50 to-red-100"
        },
        {
            id: 4,
            title: "Quality Assurance",
            year: "2023",
            description: "ISO certified laboratory with highest quality standards",
            icon: FaCertificate,
            color: "from-green-400 to-green-600",
            stats: "ISO 9001:2015",
            gradient: "from-green-50 to-green-100"
        },
        {
            id: 5,
            title: "Innovation Award",
            year: "2023",
            description: "Leading the industry with innovative diagnostic solutions",
            icon: FaStar,
            color: "from-purple-400 to-purple-600",
            stats: "100+ Innovations",
            gradient: "from-purple-50 to-purple-100"
        },
        {
            id: 6,
            title: "Partnership Excellence",
            year: "2023",
            description: "Recognized for outstanding partnerships and collaborations",
            icon: FaHandshake,
            color: "from-orange-400 to-orange-600",
            stats: "50+ Partners",
            gradient: "from-orange-50 to-orange-100"
        }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header Section with View All Button */}
                <div className="grid md:grid-cols-4 mb-8">
                    <div className=""></div>
                    <div className="col-span-2 text-center py-10">
                        <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
                            Our Recognition
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Achievements</span>
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Celebrating our commitment to excellence in healthcare and diagnostic services
                        </p>
                    </div>
                    <div className="flex items-center justify-end pr-4">
                        <Link 
                            href="/awards"
                            className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg group"
                        >
                            <span className="hidden sm:inline text-white">View All</span>
                            <span className="sm:hidden text-white">View</span>
                            <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-12">
                    {previewAwards.map((award) => {
                        const Icon = award.icon;
                        return (
                            <div 
                                key={award.id}
                                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 overflow-hidden"
                            >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${award.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                {/* Award Icon */}
                                <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${award.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Year Badge */}
                                <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm text-red-600 rounded-full text-sm font-medium mb-4 mt-6 shadow-sm">
                                    <Icon className="w-4 h-4 mr-2" />
                                    {award.year}
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-300">
                                        {award.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                                        {award.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                        {award.stats}
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-gradient-to-br from-red-100 to-transparent rounded-full opacity-50"></div>
                                <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br from-red-100 to-transparent rounded-full opacity-50"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Awards;