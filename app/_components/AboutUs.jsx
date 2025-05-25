import React from "react";
import Image from 'next/image';

const AboutUs = () => {
    const features = [
        {
            title: "State-of-the-Art Equipment",
            description: "Advanced diagnostic machines and automated testing systems for accurate results",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            title: "Expert Team",
            description: "Qualified pathologists, technicians, and healthcare professionals with years of experience",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            title: "Quick Turnaround",
            description: "Fast and efficient testing process with rapid result delivery systems",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Quality Assurance",
            description: "NABL accredited with strict quality control measures and standardized procedures",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-16" data-aos="fade-up">
            {/* Header */}
            <div className="grid md:grid-cols-4 mb-12">
                <div className=""></div>
                <div className="col-span-2 text-center">
                <h2 className="text-xl font-medium pb-3 text-gray-700 flex items-center justify-center">
                        <span className="w-8 h-[2px] bg-red-500 mr-3"></span>
                        About Us
                        <span className="w-8 h-[2px] bg-red-500 ml-3"></span>
                    </h2>
                    <h1 className="text-4xl font-semibold">
                        Leading <span className="text-red-500">Diagnostic Excellence</span>
                    </h1>
                </div>
                <div className=""></div>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Image */}
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl" data-aos="fade-right">
                    <Image
                        src="/lab-image.jpg"
                        alt="Modern Laboratory"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                        <div className="text-white">
                            <p className="text-2xl font-semibold mb-2">25+ Years of Excellence</p>
                            <p className="text-sm opacity-90">Trusted by over 1 million patients</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="space-y-8" data-aos="fade-left">
                    <div className="space-y-4">
                        <p className="text-gray-600 leading-relaxed">
                            Welcome to our state-of-the-art diagnostic laboratory, where cutting-edge technology meets compassionate care. With over two decades of experience, we've been at the forefront of medical diagnostics, providing accurate and reliable testing services to healthcare providers and patients alike.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our commitment to excellence is reflected in our NABL accreditation and our continuous investment in the latest diagnostic technologies and professional development of our team.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-6 pt-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
