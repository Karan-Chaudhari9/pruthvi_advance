"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, ArrowRight, Beaker, FileText, Clock, Microscope, CheckCircle2, Building2, Trophy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Reports() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  // Extended test data
  const tests = [
    { code: "AAFP(24)", name: "ALPHA FETO PROTEIN (AFP)", mrp: "2500", category: "Hormone" },
    { code: "AAKP(24)", name: "ALKALINE PHOSPHATASE", mrp: "2100", category: "Enzyme" },
    { code: "AAPTT(24)", name: "ACTIVATED PARTIAL THROMBOPLASTIN TIME", mrp: "2300", category: "Coagulation" },
    { code: "AB-HCV", name: "ANTIBODIES TO HEPATITIS C VIRUS", mrp: "1800", category: "Viral" },
    { code: "ABO-RH", name: "ABO & RH BLOOD GROUP", mrp: "400", category: "Blood" },
    { code: "ACTH", name: "ADRENOCORTICOTROPIC HORMONE", mrp: "2800", category: "Hormone" },
    { code: "AFB", name: "ACID FAST BACILLI", mrp: "900", category: "Microbiology" },
    { code: "ALB", name: "ALBUMIN", mrp: "600", category: "Protein" },
    { code: "ANA", name: "ANTINUCLEAR ANTIBODIES", mrp: "2200", category: "Immunology" },
    { code: "B12", name: "VITAMIN B12", mrp: "1500", category: "Vitamin" },
    { code: "BMP", name: "BASIC METABOLIC PANEL", mrp: "3200", category: "Metabolic" },
    { code: "CBC", name: "COMPLETE BLOOD COUNT", mrp: "800", category: "Hematology" },
    { code: "CMP", name: "COMPREHENSIVE METABOLIC PANEL", mrp: "3500", category: "Metabolic" },
    { code: "CRP", name: "C-REACTIVE PROTEIN", mrp: "1200", category: "Inflammation" },
    { code: "D-DIM", name: "D-DIMER", mrp: "2700", category: "Coagulation" }
  ];

  const filteredTests = tests.filter(test => 
    test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    test.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    test.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = [
    { icon: Microscope, label: "Tests Available", value: "500+", color: "text-blue-500" },
    { icon: FileText, label: "Same Day Reports", value: "90%", color: "text-emerald-500" },
    { icon: Clock, label: "Quick Processing", value: "2-4 hrs", color: "text-indigo-500" }
  ];

  const features = [
    { 
      icon: Building2, 
      title: "Thyrocare Partnership", 
      description: "All tests processed at Thyrocare's state-of-the-art laboratory"
    },
    { 
      icon: CheckCircle2, 
      title: "Quality Assured", 
      description: "NABL accredited with highest accuracy standards"
    },
    { 
      icon: Trophy, 
      title: "Expert Analysis", 
      description: "Reports validated by experienced pathologists"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-blue-600 shadow-sm">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                NABL Accredited Laboratory
              </div>
              <div className="inline-flex items-center gap-4 bg-white px-5 py-3 rounded-full text-sm font-medium text-purple-600 shadow-sm">
                <Image 
                  src="/t_logo.jpg" 
                  alt="Thyrocare" 
                  width={104} 
                  height={104} 
                  className="rounded-full object-cover border-2 border-purple-100 shadow-md hover:shadow-lg transition-shadow"
                  priority
                />
                <span className="text-base">Powered by Thyrocare</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Laboratory Test
              <span className="block mt-2 text-red-600">
                Reports & Diagnostics
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Advanced Diagnostics for Accurate Results with Quick Turnaround Time
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 rounded-full ${stat.color} bg-gray-50`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2 text-gray-900">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-gray-50">
                <div className="p-3 rounded-full bg-white shadow-sm">
                  <feature.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 relative z-20 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Search by test name, code or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg border-gray-200 focus:border-red-500 focus:ring-red-500"
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-2 px-6 border-gray-200 hover:bg-gray-50"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter className="h-5 w-5" />
              Filter
            </Button>
          </div>
        </div>

        {/* Tests List */}
        <div className="max-w-6xl mx-auto mt-8">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 rounded-t-xl border-b text-sm font-medium text-gray-600">
            <div className="col-span-1">Sr No.</div>
            <div className="col-span-2">Test Code</div>
            <div className="col-span-4">Test Name</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-1">MRP (₹)</div>
            <div className="col-span-2">Action</div>
          </div>

          {/* Table Body */}
          <div className="bg-white rounded-b-xl shadow-lg divide-y">
            {filteredTests.map((test, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50 transition-colors"
              >
                <div className="col-span-1 text-gray-600">{index + 1}</div>
                <div className="col-span-2 font-medium text-gray-900">{test.code}</div>
                <div className="col-span-4 text-gray-800">{test.name}</div>
                <div className="col-span-2">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-700">
                    {test.category}
                  </span>
                </div>
                <div className="col-span-1 text-gray-900">₹{test.mrp}</div>
                <div className="col-span-2">
                  <Link href={`/appointment?test=${encodeURIComponent(test.code)}`}>
                    <Button
                      size="sm"
                      className="w-full flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white"
                    >
                      Book Now
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredTests.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-50 rounded-xl p-8 max-w-md mx-auto">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Tests Found</h3>
              <p className="text-gray-600">
                No tests found matching your search criteria. Try adjusting your search terms.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 