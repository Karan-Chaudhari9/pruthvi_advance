"use client";

import { motion } from "framer-motion";
import AboutUs from "../_components/AboutUs";
import { FaCheckCircle, FaMicroscope, FaUserMd, FaHospital, FaCertificate, FaFlask, FaHeartbeat, FaChartLine } from "react-icons/fa";

export default function AboutPage() {
  const achievements = [
    { number: "25+", label: "Years Experience" },
    { number: "50K+", label: "Happy Patients" },
    { number: "100+", label: "Lab Tests" },
    { number: "20+", label: "Expert Doctors" }
  ];

  const features = [
    {
      title: "ISO Certified Laboratory",
      description: "Certified for maintaining highest quality standards in diagnostic testing",
      icon: FaCertificate
    },
    {
      title: "Advanced Technology",
      description: "State-of-the-art equipment for precise and accurate results",
      icon: FaMicroscope
    },
    {
      title: "Expert Team",
      description: "Highly qualified pathologists and technicians",
      icon: FaUserMd
    },
    {
      title: "Modern Facility",
      description: "Spacious, hygienic, and patient-friendly environment",
      icon: FaHospital
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* About Us Section */}
      <section>
        <div className="container mx-auto px-4 lg:px-8">
          <AboutUs />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Vision & Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100 relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 z-0"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <FaHeartbeat className="text-3xl text-blue-600 mr-4" />
                  <h2 className="text-2xl font-bold text-blue-600">Our Vision</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  To revolutionize healthcare diagnostics by becoming the most trusted and innovative laboratory in India. We envision:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Setting new standards in precision diagnostics and patient care</p>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Leading technological advancement in laboratory services</p>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Making quality healthcare accessible to all communities</p>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100 relative overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 z-0"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <FaChartLine className="text-3xl text-blue-600 mr-4" />
                  <h2 className="text-2xl font-bold text-blue-600">Our Mission</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  To deliver excellence in diagnostic services through:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Providing accurate, timely, and reliable diagnostic results</p>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Maintaining the highest standards of quality and ethics</p>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Continuous innovation and adoption of latest technologies</p>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Empowering healthcare decisions through expert diagnostics</p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Excellence in Diagnostic Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Excellence in Diagnostic Services
              </h2>
              <p className="text-xl text-gray-600">
                Setting the benchmark in laboratory diagnostics with cutting-edge technology and expert care
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaFlask className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">State-of-the-Art Technology</h3>
                <p className="text-gray-600">
                  Our laboratory is equipped with the latest diagnostic equipment and automated systems, ensuring precise and reliable results every time.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <FaUserMd className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
                <p className="text-gray-600">
                  Our team of experienced pathologists and technicians brings decades of combined expertise in diagnostic testing and analysis.
                </p>
              </motion.div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 shadow-inner">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment to Excellence</h3>
              <div className="grid gap-4">
                {[
                  "Advanced automated testing systems for accurate results",
                  "Rigorous quality control measures at every step",
                  "Continuous training and skill development programs",
                  "24/7 emergency testing services",
                  "Digital reports with secure online access",
                  "Home collection services for patient convenience",
                  "Competitive and transparent pricing",
                  "Dedicated customer support team"
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="text-blue-600 text-3xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 