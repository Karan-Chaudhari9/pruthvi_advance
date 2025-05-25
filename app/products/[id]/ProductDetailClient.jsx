"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductDetailClient = ({ productId }) => {
    const [showInquiryForm, setShowInquiryForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organization: '',
        message: ''
    });

    // Sample products data - replace with your actual products data
    const products = {
        1: {
            id: 1,
            name: "Blood Glucose Monitor",
            category: "Diagnostic Equipment",
            image: "/glucose-monitor.jpg",
            price: "₹2,999",
            description: "Advanced blood glucose monitoring system for accurate diabetes management with easy-to-use interface and rapid results.",
            features: [
                "Quick results in 5 seconds",
                "Large LCD display",
                "Memory for 500 readings",
                "Battery operated",
                "Auto shut-off",
                "Blood sample indicator"
            ],
            specifications: {
                "Measurement Range": "20-600 mg/dL",
                "Sample Size": "0.5 µL",
                "Memory Capacity": "500 readings",
                "Battery Life": "1000 tests",
                "Display Type": "LCD",
                "Weight": "50g"
            }
        },
        2: {
            id: 2,
            name: "Digital X-Ray System",
            category: "Imaging Equipment",
            image: "/xray-system.jpg",
            price: "₹1,99,999",
            description: "High-resolution digital X-ray system for precise diagnostic imaging. Features advanced image processing capabilities and intuitive user interface.",
            features: [
                "High-resolution imaging sensor",
                "Advanced image processing",
                "Touch-screen interface",
                "DICOM compatible",
                "Wireless connectivity",
                "Automatic exposure control"
            ],
            specifications: {
                "Resolution": "3072 x 3072 pixels",
                "Sensor Type": "Flat Panel Detector",
                "Image Depth": "16-bit",
                "Processing Time": "<5 seconds",
                "Power": "220-240V AC",
                "Weight": "150 kg"
            }
        },
        3: {
            id: 3,
            name: "Biochemistry Analyzer",
            category: "Laboratory Equipment",
            image: "/biochemistry-analyzer.jpg",
            price: "₹4,99,999",
            description: "Automated biochemistry analyzer for comprehensive blood testing with high throughput and accuracy.",
            features: [
                "Fully automated system",
                "High throughput",
                "Multiple test parameters",
                "Auto calibration",
                "Quality control monitoring",
                "Result printing"
            ],
            specifications: {
                "Throughput": "400 tests/hour",
                "Test Parameters": "120+",
                "Sample Types": "Serum, Plasma, Urine",
                "Sample Volume": "2-45 µL",
                "Display": "10.4\" Touch Screen",
                "Interface": "RS232, USB, LAN"
            }
        }
    };

    // Get the product details based on ID
    const product = products[productId] || products[1]; // Default to first product if ID not found

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            organization: '',
            message: ''
        });
        setShowInquiryForm(false);
        // Show success message
        alert('Thank you for your inquiry. We will contact you soon!');
    };

    return (
        <div className="container mx-auto p-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex mb-8" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link href="/" className="text-gray-600 hover:text-red-500">
                            Home
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <Link href="/products" className="text-gray-600 hover:text-red-500">
                                Products
                            </Link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-400">{product.name}</span>
                        </div>
                    </li>
                </ol>
            </nav>

            {/* Product Details */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
                {/* Left Column - Image */}
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Column - Details */}
                <div className="space-y-6">
                    <div>
                        <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-3">
                            {product.category}
                        </span>
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
                        <p className="text-3xl font-bold text-red-500 mb-6">{product.price}</p>
                        <p className="text-gray-600 leading-relaxed">{product.description}</p>
                    </div>

                    {/* Features */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
                        <ul className="grid grid-cols-2 gap-4">
                            {product.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Specifications */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Specifications</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {Object.entries(product.specifications).map(([key, value]) => (
                                <div key={key} className="flex flex-col">
                                    <span className="text-gray-600 font-medium">{key}</span>
                                    <span className="text-gray-800">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Inquiry Button */}
                    <button
                        onClick={() => setShowInquiryForm(true)}
                        className="w-full py-3 px-6 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
                    >
                        <span className='text-white'>Make an Inquiry</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Inquiry Form Modal */}
            {showInquiryForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Product Inquiry</h2>
                            <button
                                onClick={() => setShowInquiryForm(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Organization</label>
                                    <input
                                        type="text"
                                        value={formData.organization}
                                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    placeholder="Please provide any specific requirements or questions..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                            >
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetailClient; 