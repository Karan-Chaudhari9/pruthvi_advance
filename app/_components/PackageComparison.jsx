"use client";
import { FaCheck, FaTimes, FaStethoscope, FaUserFriends, FaHeart } from 'react-icons/fa';
import Link from 'next/link';

const packages = [
    {
        name: "Basic Health Package",
        icon: FaStethoscope,
        price: "₹7999",
        originalPrice: "₹11999",
        description: "Essential health screening for individuals",
        recommended: false,
        color: "from-rose-500 to-pink-600",
        features: {
            "Complete Blood Count": true,
            "Diabetes Screening": true,
            "Thyroid Function Test": true,
            "Liver Function Test": true,
            "Kidney Function Test": true,
            "Lipid Profile": true,
            "Vitamin D Test": false,
            "Cancer Markers": false,
            "Hormone Analysis": false,
            "Heavy Metal Analysis": false,
            "Cardiac Risk Assessment": false,
            "Bone Health": false,
        },
        additionalBenefits: [
            "Digital Reports",
            "24 Hour Report Delivery",
            "Free Doctor Consultation",
        ]
    },
    {
        name: "Family Health Package",
        icon: FaUserFriends,
        price: "₹9999",
        originalPrice: "₹14999",
        description: "Comprehensive care for your entire family",
        recommended: true,
        color: "from-blue-500 to-cyan-600",
        features: {
            "Complete Blood Count": true,
            "Diabetes Screening": true,
            "Thyroid Function Test": true,
            "Liver Function Test": true,
            "Kidney Function Test": true,
            "Lipid Profile": true,
            "Vitamin D Test": true,
            "Cancer Markers": false,
            "Hormone Analysis": true,
            "Heavy Metal Analysis": false,
            "Cardiac Risk Assessment": true,
            "Bone Health": true,
        },
        additionalBenefits: [
            "Digital + Physical Reports",
            "24 Hour Report Delivery",
            "Free Doctor Consultation",
            "Diet Consultation",
            "Follow-up Check"
        ]
    },
    {
        name: "Premium Wellness Package",
        icon: FaHeart,
        price: "₹12999",
        originalPrice: "₹18999",
        description: "Executive health screening with advanced diagnostics",
        recommended: false,
        color: "from-rose-500 to-pink-600",
        features: {
            "Complete Blood Count": true,
            "Diabetes Screening": true,
            "Thyroid Function Test": true,
            "Liver Function Test": true,
            "Kidney Function Test": true,
            "Lipid Profile": true,
            "Vitamin D Test": true,
            "Cancer Markers": true,
            "Hormone Analysis": true,
            "Heavy Metal Analysis": true,
            "Cardiac Risk Assessment": true,
            "Bone Health": true,
        },
        additionalBenefits: [
            "Digital + Physical Reports",
            "Priority Processing",
            "24 Hour Report Delivery",
            "Free Doctor Consultation",
            "Diet Consultation",
            "Follow-up Check",
            "Lifestyle Assessment",
            "Annual Health Record"
        ]
    }
];

export default function PackageComparison() {
    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium mb-4 shadow-lg">
                        Health Packages
                    </span>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Compare Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Health Packages</span>
                    </h1>
                    <p className="text-red-600 text-lg max-w-2xl mx-auto font-medium">
                        Every package offers are changed every 15 days
                    </p>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Choose the perfect health package that suits your needs
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {packages.map((pkg, index) => {
                        const Icon = pkg.icon;
                        return (
                            <div 
                                key={index}
                                className={`bg-white rounded-2xl border-2 ${pkg.recommended ? 'border-blue-400 shadow-2xl' : 'border-transparent shadow-xl'} p-6 relative group hover:shadow-3xl transition-all duration-300`}
                            >
                                {pkg.recommended && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                                        Recommended
                                    </div>
                                )}
                                
                                <div className="text-center mb-6">
                                    <div className={`inline-block p-3 bg-gradient-to-r ${pkg.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">
                                        {pkg.price}
                                        <span className="text-base text-gray-400 line-through ml-2">
                                            {pkg.originalPrice}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    {Object.entries(pkg.features).map(([feature, included], idx) => (
                                        <div 
                                            key={idx}
                                            className="flex items-center justify-between text-sm"
                                        >
                                            <span className="text-gray-600">{feature}</span>
                                            {included ? (
                                                <FaCheck className="w-4 h-4 text-green-500" />
                                            ) : (
                                                <FaTimes className="w-4 h-4 text-red-500" />
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-100 pt-4 mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-2">Additional Benefits:</h4>
                                    <ul className="space-y-2">
                                        {pkg.additionalBenefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-600">
                                                <FaCheck className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Buttons Row */}
                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <Link 
                            key={index}
                            href="/appointment"
                            className={`block w-full py-3 px-4 rounded-xl text-center font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg
                                ${pkg.recommended 
                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white' 
                                    : `bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white`}`}
                        >
                            Choose This Package
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
} 