"use client";

import { Button } from "@/components/ui/button";
import { 
  MoveUpRight, 
  Clock, 
  Calendar, 
  FileText, 
  ArrowRight
} from "lucide-react";
import React from "react";
import Link from "next/link";

const Banner = () => {
  const features = [
    {
      icon: Clock,
      text: "Same Day Reports"
    },
    {
      icon: Calendar,
      text: "Home Collection"
    },
    {
      icon: FileText,
      text: "Online Reports"
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="w-full px-4 py-12 md:py-20">
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
            NABL Certified Laboratory
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Advanced
              <span className="relative inline-block">
                <span className="relative z-10 text-red-600 ml-4">Diagnostic</span>
                <span className="absolute bottom-2 left-4 w-full h-4 bg-red-100/60 -rotate-2"></span>
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">Solutions</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-blue-100/60 rotate-2"></span>
              </span>
            </h1>

            {/* Slogan */}
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 italic">
                <span className="relative inline-block">
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-red-100/60 -rotate-1"></span>
                </span>
                <span className="relative inline-block ml-2">
                  <span className="relative z-10">सेहत है,</span><span className="relative z-10 text-red-600 ml-4">तो जिंदगी है</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-100/60 rotate-1"></span>
                </span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience excellence in diagnostic care with our state-of-the-art laboratory services. 
              Accurate results, quick turnaround, and professional care - all in one place.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-50 rounded-lg">
                      <feature.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="font-medium text-gray-700">{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/appointment" className="flex-1 sm:flex-none">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-xl font-semibold"
                >
                  Book Appointment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/prescription" className="flex-1 sm:flex-none">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 px-8 py-6 rounded-xl font-semibold hover:bg-gray-50"
                >
                  Upload Prescription
                  <MoveUpRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
