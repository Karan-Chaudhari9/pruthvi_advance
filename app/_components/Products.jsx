import Image from 'next/image';
import Link from 'next/link';

const Products = () => {
    // Sample products data - replace with your actual products
    const previewProducts = [
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
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            {/* Header */}
            <div className="grid md:grid-cols-4 mb-16">
                <div className=""></div>
                <div className="col-span-2 text-center">
                    <h2 className="text-xl font-medium pb-3 text-gray-700 flex items-center justify-center">
                        <span className="w-8 h-[2px] bg-red-500 mr-3"></span>
                        Our Products
                        <span className="w-8 h-[2px] bg-red-500 ml-3"></span>
                    </h2>
                    <h1 className="text-4xl font-semibold">
                        Medical <span className="text-red-500">Equipment</span>
                    </h1>
                </div>
                <div className="flex justify-end items-start pt-10 pr-4">
                    <Link 
                        href="/products"
                        className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg group"
                    >
                        View All
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {previewProducts.map((product) => (
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
        </section>
    );
};

export default Products; 