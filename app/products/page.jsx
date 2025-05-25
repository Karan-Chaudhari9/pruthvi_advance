"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '../_components/PageHeader';

const ProductsPage = () => {
    // Sample products data - replace with your actual products
    const allProducts = [
        {
            id: 1,
            name: "Blood Glucose Monitor",
            category: "Diagnostic Equipment",
            image: "/glucose-monitor.jpg",
            shortDescription: "Advanced blood glucose monitoring system for accurate diabetes management",
            price: "₹2,999"
        },
        {
            id: 2,
            name: "Digital X-Ray System",
            category: "Imaging Equipment",
            image: "/xray-system.jpg",
            shortDescription: "High-resolution digital X-ray system for precise diagnostic imaging",
            price: "₹1,99,999"
        },
        {
            id: 3,
            name: "Biochemistry Analyzer",
            category: "Laboratory Equipment",
            image: "/biochemistry-analyzer.jpg",
            shortDescription: "Automated biochemistry analyzer for comprehensive blood testing",
            price: "₹4,99,999"
        },
        {
            id: 4,
            name: "Hematology Analyzer",
            category: "Laboratory Equipment",
            image: "/hematology-analyzer.jpg",
            shortDescription: "Advanced hematology analyzer for complete blood count testing",
            price: "₹3,99,999"
        },
        {
            id: 5,
            name: "ECG Machine",
            category: "Diagnostic Equipment",
            image: "/ecg-machine.jpg",
            shortDescription: "12-lead ECG machine for cardiac monitoring and diagnosis",
            price: "₹89,999"
        },
        {
            id: 6,
            name: "Ultrasound System",
            category: "Imaging Equipment",
            image: "/ultrasound-system.jpg",
            shortDescription: "High-frequency ultrasound system for detailed imaging",
            price: "₹5,99,999"
        }
    ];

    const categories = [...new Set(allProducts.map(product => product.category))];
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = allProducts.filter(product => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Filters */}
            <div className="mb-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
                        <button
                            onClick={() => setSelectedCategory('All')}
                            className={`px-4 py-2 rounded-full whitespace-nowrap ${
                                selectedCategory === 'All'
                                ? 'bg-red-500 text-white'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                        >
                            All Products
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                                    selectedCategory === category
                                    ? 'bg-red-500 text-white'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-64">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                        <svg
                            className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <Link 
                            href={`/products/${product.id}`} 
                            key={product.id}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-3">
                                        {product.category}
                                    </span>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-red-500 transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {product.shortDescription}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold text-gray-800">
                                            {product.price}
                                        </span>
                                        <span className="inline-flex items-center text-red-500 font-medium group-hover:translate-x-2 transition-transform duration-300">
                                            View Details
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                className="h-5 w-5 ml-2" 
                                                fill="none" 
                                                viewBox="0 0 24 24" 
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage; 