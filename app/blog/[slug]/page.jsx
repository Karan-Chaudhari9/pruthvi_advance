"use client";
import { useState } from "react";
import { Calendar, Clock, User, ArrowLeft, Heart, MessageCircle, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";

// This would typically come from an API or database
const blogPosts = [
  {
    title: "Understanding Blood Test Results",
    excerpt: "Learn how to interpret your blood test results and what they mean for your health.",
    content: `Blood tests are essential diagnostic tools that help healthcare providers understand your overall health. This comprehensive guide will help you understand common blood test parameters and their significance.

    What are Blood Tests?
    Blood tests are laboratory analyses of blood samples that provide valuable information about your health. They can help diagnose various conditions, monitor existing health issues, and assess your overall well-being.

    Common Blood Test Parameters:
    1. Complete Blood Count (CBC)
    - Red blood cells
    - White blood cells
    - Hemoglobin
    - Hematocrit
    - Platelets

    2. Basic Metabolic Panel
    - Sodium
    - Potassium
    - Chloride
    - Carbon dioxide
    - Glucose
    - Calcium
    - Blood urea nitrogen (BUN)
    - Creatinine

    3. Lipid Panel
    - Total cholesterol
    - HDL cholesterol
    - LDL cholesterol
    - Triglycerides

    Understanding Your Results:
    When you receive your blood test results, it's important to:
    - Compare them to the reference ranges provided
    - Discuss any abnormal values with your healthcare provider
    - Consider trends over time rather than single measurements
    - Take into account your overall health and medical history

    Tips for Getting Accurate Results:
    1. Follow fasting instructions if required
    2. Stay hydrated
    3. Inform your healthcare provider about medications
    4. Schedule tests at consistent times
    5. Maintain a regular sleep schedule

    Remember that blood test results are just one piece of the puzzle in understanding your health. Always consult with your healthcare provider to interpret results in the context of your overall health.`,
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Health Tips",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    likes: 234,
    comments: 45,
    slug: "understanding-blood-test-results"
  },
  {
    title: "The Importance of Regular Health Check-ups",
    excerpt: "Discover why regular health check-ups are crucial for maintaining good health.",
    content: `Regular health check-ups are the cornerstone of preventive healthcare. They help identify potential health issues early and provide an opportunity for early intervention.

    Why Regular Check-ups Matter:
    1. Early Detection
    - Identify health issues before they become serious
    - Monitor existing conditions
    - Track changes in your health over time

    2. Prevention
    - Receive vaccinations
    - Get preventive screenings
    - Learn about lifestyle modifications

    3. Health Maintenance
    - Update medical history
    - Review medications
    - Discuss lifestyle changes

    What to Expect During a Check-up:
    - Physical examination
    - Vital signs measurement
    - Blood tests
    - Health history review
    - Lifestyle assessment

    Tips for a Successful Check-up:
    1. Prepare your questions
    2. Bring your medical history
    3. List your medications
    4. Be honest about your lifestyle
    5. Follow up on recommendations`,
    author: "Dr. Michael Chen",
    date: "March 10, 2024",
    readTime: "4 min read",
    category: "Preventive Care",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    likes: 189,
    comments: 32,
    slug: "importance-of-regular-health-checkups"
  },
  {
    title: "Nutrition Tips for Better Health",
    excerpt: "Essential nutrition tips to improve your overall health and well-being.",
    content: `Good nutrition is fundamental to good health. Learn about balanced diets, essential nutrients, and how to make better food choices for your health.

    The Basics of Healthy Eating:
    1. Balanced Diet
    - Include all food groups
    - Eat in moderation
    - Choose whole foods

    2. Essential Nutrients
    - Proteins
    - Carbohydrates
    - Healthy fats
    - Vitamins and minerals

    3. Meal Planning
    - Prepare meals ahead
    - Portion control
    - Healthy snacks

    Tips for Better Nutrition:
    1. Eat more fruits and vegetables
    2. Choose whole grains
    3. Limit processed foods
    4. Stay hydrated
    5. Practice mindful eating

    Common Nutrition Myths:
    - Myth: All fats are bad
    - Myth: Skipping meals helps weight loss
    - Myth: Supplements replace healthy eating
    - Myth: Organic is always better

    Remember that good nutrition is about balance and consistency, not perfection.`,
    author: "Dr. Emily Brown",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    likes: 312,
    comments: 67,
    slug: "nutrition-tips-for-better-health"
  }
];

export default function BlogPost({ params }) {
  const resolvedParams = use(params);
  const post = blogPosts.find(post => post.slug === resolvedParams.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center gap-2 mx-auto group">
              Back to Blog
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-red-600 mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
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

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-600 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Engagement Section */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                <Heart className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
            </div>
            <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost, index) => (
                <Link 
                  key={index}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    {relatedPost.date} • {relatedPost.readTime}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 