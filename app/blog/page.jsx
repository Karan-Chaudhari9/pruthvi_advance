"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "Understanding Blood Test Results",
    excerpt: "Learn how to interpret your blood test results and what they mean for your health.",
    content: "Blood tests are essential diagnostic tools that help healthcare providers understand your overall health. This comprehensive guide will help you understand common blood test parameters and their significance.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Health Tips",
    image: "/blog/blood-test.jpg",
    slug: "understanding-blood-test-results"
  },
  {
    title: "The Importance of Regular Health Check-ups",
    excerpt: "Discover why regular health check-ups are crucial for maintaining good health.",
    content: "Regular health check-ups are the cornerstone of preventive healthcare. They help identify potential health issues early and provide an opportunity for early intervention.",
    author: "Dr. Michael Chen",
    date: "March 10, 2024",
    readTime: "4 min read",
    category: "Preventive Care",
    image: "/blog/health-check.jpg",
    slug: "importance-of-regular-health-checkups"
  },
  {
    title: "Nutrition Tips for Better Health",
    excerpt: "Essential nutrition tips to improve your overall health and well-being.",
    content: "Good nutrition is fundamental to good health. Learn about balanced diets, essential nutrients, and how to make better food choices for your health.",
    author: "Dr. Emily Brown",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Nutrition",
    image: "/blog/nutrition.jpg",
    slug: "nutrition-tips-for-better-health"
  },
  {
    title: "Managing Diabetes Through Diet",
    excerpt: "Learn how to manage diabetes effectively through proper diet and nutrition.",
    content: "Diabetes management requires a comprehensive approach, with diet playing a crucial role. This guide covers essential dietary strategies for diabetes management.",
    author: "Dr. Robert Wilson",
    date: "March 1, 2024",
    readTime: "7 min read",
    category: "Diabetes",
    image: "/blog/diabetes.jpg",
    slug: "managing-diabetes-through-diet"
  },
  {
    title: "Understanding Thyroid Disorders",
    excerpt: "A comprehensive guide to understanding thyroid disorders and their treatment.",
    content: "Thyroid disorders affect millions worldwide. Learn about common thyroid conditions, their symptoms, and available treatment options.",
    author: "Dr. Lisa Chen",
    date: "February 28, 2024",
    readTime: "5 min read",
    category: "Thyroid",
    image: "/blog/thyroid.jpg",
    slug: "understanding-thyroid-disorders"
  },
  {
    title: "The Role of Exercise in Health",
    excerpt: "Discover how regular exercise contributes to overall health and well-being.",
    content: "Exercise is a key component of a healthy lifestyle. Learn about different types of exercise and their benefits for physical and mental health.",
    author: "Dr. James Smith",
    date: "February 25, 2024",
    readTime: "6 min read",
    category: "Fitness",
    image: "/blog/exercise.jpg",
    slug: "role-of-exercise-in-health"
  }
];

const categories = [
  "All",
  "Health Tips",
  "Preventive Care",
  "Nutrition",
  "Diabetes",
  "Thyroid",
  "Fitness"
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Health & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-600">Wellness Blog</span>
          </h1>
          <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto">
            Stay informed with our latest articles on health, wellness, and medical insights.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-red-600">
                    {post.category}
                  </span>
                </div>
                <div className="w-full h-full bg-gray-100 animate-pulse" />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <Link href={`/blog/${post.slug}`}>
                  <button className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center gap-2 group">
                    Read More
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
} 