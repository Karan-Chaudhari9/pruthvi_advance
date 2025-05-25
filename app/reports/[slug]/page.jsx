"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { reports } from "@/app/_data/reports";
import Image from "next/image";
import Link from "next/link";
import { FaFlask, FaCalendarAlt, FaWhatsapp } from "react-icons/fa";

const testOptions = {
  "full-body": ["CBC", "Lipid Profile", "Liver Function Test", "Kidney Function Test"],
  fever: ["Malaria Test", "Dengue Test", "Typhoid Test", "Complete Blood Count (CBC)"],
  heart: ["ECG", "Echocardiogram ( At Rajkot )", "TMT (  At Rajkot )", "Lipid Profile", "Troponin I Test"],
  diabetes: ["Fasting Blood Sugar", "HbA1c", "Glucose Tolerance Test"],
  vitamin: ["Vitamin D", "Vitamin B12", "Calcium Test"],
  thyroid: ["TSH", "T3", "T4"],
  arthritis: ["Rheumatoid Factor (RF)", "Anti-CCP", "CRP", "ESR"],
  cancer: ["Tumor Markers", "Biopsy", "CT Scan", "PET Scan"],
  "hormone-tests": ["Testosterone", "Estrogen", "Progesterone", "Cortisol"],
  allergy: ["Skin Prick Test", "IgE Blood Test", "Patch Test"],
  std: ["HIV Test", "Syphilis Test", "Gonorrhea Test", "Chlamydia Test"],
  combos: ["Full Body Checkup", "Diabetes & Heart Combo", "Immunity Booster Panel"],
  pregnancy: ["Beta HCG", "Ultrasound", "Blood Pressure Check"],
  fertility: ["Semen Analysis", "AMH Test", "Ovulation Tracking"],
  anemia: ["Hemoglobin Test", "Iron Studies", "Ferritin Test"],
  lifestyle: ["Cholesterol Test", "Blood Pressure Monitoring", "Metabolic Panel"],
};

export default function ReportDetailPage() {
  const params = useParams();
  const slug = useMemo(() => params?.slug?.toString(), [params]);

  if (!slug) return <p>Invalid report</p>;

  const report = reports.find((r) => r.slug === slug);

  if (!report) return <p>Report not found</p>;

  const relatedTests = testOptions[slug] || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-50 via-red-100 to-red-50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {report.name}
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Get comprehensive insights about your health with our advanced diagnostic tests
              </p>
              <div className="flex gap-4">
                <Link href={`/book-appointment?test=${report.name}`}>
                  <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 flex items-center gap-2">
                    <FaCalendarAlt />
                    Book Appointment
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-32 h-32 bg-white rounded-2xl shadow-xl p-6 relative z-10">
                <Image 
                  src={report.icon} 
                  alt={report.name} 
                  width={80} 
                  height={80} 
                  className="object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-red-200 rounded-2xl transform rotate-6"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tests Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <FaFlask className="text-red-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-900">Available Tests</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedTests.length > 0 ? (
                relatedTests.map((test, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">{test}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 col-span-2 text-center py-4">
                  No specific tests available for this report.
                </p>
              )}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Our Laboratory?</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>NABL Accredited Laboratory</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>Advanced Testing Equipment</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>Expert Medical Professionals</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>Quick & Accurate Results</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
