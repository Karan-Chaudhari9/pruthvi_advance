"use client";

import { FaFlask, FaDna, FaHeartbeat, FaBrain, FaAllergies, FaBacterium, FaVials, FaUserMd } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Clinical Laboratory",
    description: "Comprehensive blood tests, urinalysis, and specialized diagnostic testing",
    icon: FaFlask,
    tests: ["Complete Blood Count", "Lipid Profile", "Liver Function", "Kidney Function"],
    color: "blue"
  },
  {
    title: "Molecular Diagnostics",
    description: "Advanced genetic testing and molecular analysis for precise diagnosis",
    icon: FaDna,
    tests: ["DNA Sequencing", "PCR Testing", "Genetic Screening", "Mutation Analysis"],
    color: "purple"
  },
  {
    title: "Cardiac Laboratory",
    description: "Specialized tests for heart health and cardiovascular conditions",
    icon: FaHeartbeat,
    tests: ["Cardiac Markers", "Cholesterol Panel", "Coagulation Tests", "Enzyme Analysis"],
    color: "red"
  },
  {
    title: "Neurology Tests",
    description: "Diagnostic services for neurological conditions and disorders",
    icon: FaBrain,
    tests: ["CSF Analysis", "Neurotransmitter Tests", "Biomarker Testing", "Antibody Panels"],
    color: "green"
  },
  {
    title: "Immunology",
    description: "Comprehensive testing for immune system function and allergies",
    icon: FaAllergies,
    tests: ["Allergy Panels", "Autoimmune Tests", "Immunoglobulin Levels", "Complement Tests"],
    color: "yellow"
  },
  {
    title: "Microbiology",
    description: "Detection and analysis of infectious diseases and pathogens",
    icon: FaBacterium,
    tests: ["Culture & Sensitivity", "Viral Load Tests", "Parasitology", "Fungal Studies"],
    color: "pink"
  },
  {
    title: "Endocrinology",
    description: "Hormone testing and endocrine system evaluation",
    icon: FaVials,
    tests: ["Thyroid Panel", "Hormone Levels", "Diabetes Screening", "Metabolic Tests"],
    color: "indigo"
  },
  {
    title: "Preventive Health",
    description: "Comprehensive health screening and preventive testing packages",
    icon: FaUserMd,
    tests: ["Annual Check-up", "Cancer Screening", "Wellness Profile", "Executive Health Check"],
    color: "teal"
  }
];

const colorVariants = {
  blue: "bg-blue-50 text-blue-600 border-blue-200",
  purple: "bg-purple-50 text-purple-600 border-purple-200",
  red: "bg-red-50 text-red-600 border-red-200",
  green: "bg-green-50 text-green-600 border-green-200",
  yellow: "bg-yellow-50 text-yellow-600 border-yellow-200",
  pink: "bg-pink-50 text-pink-600 border-pink-200",
  indigo: "bg-indigo-50 text-indigo-600 border-indigo-200",
  teal: "bg-teal-50 text-teal-600 border-teal-200"
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Laboratory <span className="text-red-500">Services</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            State-of-the-art diagnostic testing with precision, reliability, and quick turnaround times
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`p-6 ${colorVariants[service.color]} border-b`}>
                  <service.icon className="h-8 w-8 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </div>
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Available Tests:</h4>
                  <ul className="space-y-2">
                    {service.tests.map((test, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-400 mr-2"></span>
                        {test}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute top-2 right-2">
                  <button className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 