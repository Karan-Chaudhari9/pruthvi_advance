"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Heart, Activity, Utensils, Youtube, Clock, ThumbsUp, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const healthTips = [
  {
    title: "Stay Hydrated",
    shortDesc: "Essential tips for maintaining proper hydration throughout the day.",
    details: "Learn about the importance of hydration, how much water you should drink, and creative ways to stay hydrated. This video covers everything from water intake recommendations to signs of dehydration.",
    youtubeLink: "https://www.youtube.com/embed/your-video-id-1",
    icon: <Activity className="w-6 h-6" />,
    bgColor: "bg-blue-50",
    accentColor: "text-blue-500",
    borderColor: "border-blue-200",
    duration: "8:45",
    views: "1.2M",
    likes: "45K",
    tags: ["Hydration", "Health Tips", "Wellness"]
  },
  {
    title: "Exercise Regularly",
    shortDesc: "Effective workout routines for busy professionals.",
    details: "Discover time-efficient workout routines that fit into your busy schedule. This video includes quick exercises, proper form demonstrations, and tips for staying motivated to exercise regularly.",
    youtubeLink: "https://www.youtube.com/embed/your-video-id-2",
    icon: <Heart className="w-6 h-6" />,
    bgColor: "bg-red-50",
    accentColor: "text-red-500",
    borderColor: "border-red-200",
    duration: "12:30",
    views: "2.5M",
    likes: "98K",
    tags: ["Exercise", "Fitness", "Workout"]
  },
  {
    title: "Eat a Balanced Diet",
    shortDesc: "Nutrition tips for a healthier lifestyle.",
    details: "Learn about balanced nutrition, meal planning, and healthy eating habits. This comprehensive guide covers everything from macro nutrients to meal prep strategies for busy individuals.",
    youtubeLink: "https://www.youtube.com/embed/your-video-id-3",
    icon: <Utensils className="w-6 h-6" />,
    bgColor: "bg-green-50",
    accentColor: "text-green-500",
    borderColor: "border-green-200",
    duration: "15:20",
    views: "3.1M",
    likes: "120K",
    tags: ["Nutrition", "Diet", "Healthy Eating"]
  },
];

const HealthTips = () => {
  const [selectedTip, setSelectedTip] = useState(null);
  const [hoveredTip, setHoveredTip] = useState(null);

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center pb-12">
        <h2 className="text-xl font-medium pb-2 text-gray-700 flex items-center justify-center">
            <span className="w-8 h-[2px] bg-red-500 mr-3"></span>
            Health Tips
            <span className="w-8 h-[2px] bg-red-500 ml-3"></span>
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Watch Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-600">Health Tips</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover expert health tips and advice through our curated collection of informative videos.
          </p>
        </div>
        
        {/* Tips Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {healthTips.map((tip, index) => (
            <div 
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredTip(index)}
              onMouseLeave={() => setHoveredTip(null)}
            >
              <div
                className={`p-6 rounded-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer h-full flex flex-col`}
                onClick={() => setSelectedTip(tip)}
              >
                {/* Content Container */}
                <div className="flex-1">
                  {/* Icon and Title Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`${tip.accentColor} p-3 rounded-xl ${tip.bgColor} border ${tip.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                      {tip.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{tip.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-lg mb-6">{tip.shortDesc}</p>

                  {/* Stats Section */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Youtube className="w-4 h-4" />
                      <span className="text-sm">{tip.views}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">{tip.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{tip.duration}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tip.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className={`text-xs px-2 py-1 rounded-full ${tip.bgColor} ${tip.accentColor} border ${tip.borderColor}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Watch Now Button - Fixed at bottom */}
                <button
                  className={`mt-6 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl`}
                >
                  Watch Now
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Modal Popup */}
      {selectedTip && (
        <Dialog open={!!selectedTip} onOpenChange={() => setSelectedTip(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <div className="flex items-center gap-3">
                <div className={`${selectedTip.accentColor} p-2 rounded-lg ${selectedTip.bgColor}`}>
                  {selectedTip.icon}
                </div>
                <DialogTitle className="text-2xl font-bold">{selectedTip.title}</DialogTitle>
              </div>
            </DialogHeader>

            <div className="mt-6">
              {/* YouTube Embed */}
              <div className="relative w-full h-[400px] mb-6 overflow-hidden rounded-xl">
                <iframe
                  src={selectedTip.youtubeLink}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">{selectedTip.details}</p>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-lg mb-4">Video Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>Duration: {selectedTip.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Youtube className="w-4 h-4 text-gray-500" />
                      <span>Views: {selectedTip.views}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="w-4 h-4 text-gray-500" />
                      <span>Likes: {selectedTip.likes}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedTip.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className={`text-sm px-3 py-1 rounded-full ${selectedTip.bgColor} ${selectedTip.accentColor} border ${selectedTip.borderColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-4">
                <Button
                  variant="outline"
                  onClick={() => setSelectedTip(null)}
                  className="px-6"
                >
                  Close
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900"
                  onClick={() => setSelectedTip(null)}
                >
                  Watch Later
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default HealthTips;
