"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
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
  }
];

const Blogs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center pb-12">
          <h2 className="text-xl font-medium pb-2 text-gray-700 flex items-center justify-center">
            <span className="w-8 h-[2px] bg-red-500 mr-3"></span>
            Our Blog
            <span className="w-8 h-[2px] bg-red-500 ml-3"></span>
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-600">Health Insights</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest articles on health, wellness, and medical insights.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/blog">
            <button className="px-8 py-3 rounded-xl bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto group">
              View All Articles
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs; 