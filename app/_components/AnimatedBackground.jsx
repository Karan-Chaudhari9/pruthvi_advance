"use client";

import { 
  Beaker,
  Activity,
  HeartPulse,
  Stethoscope,
  FlaskConical,
  Microscope,
  TestTube2,
  Droplets,
  Atom,
  Brain,
  Dna,
  Syringe
} from "lucide-react";
import React, { useState, useEffect } from "react";

const AnimatedBackground = () => {
  const labIcons = [
    { icon: Beaker, color: "from-blue-400 to-blue-600", size: "w-24 h-24" },
    { icon: Activity, color: "from-green-400 to-green-600", size: "w-20 h-20" },
    { icon: HeartPulse, color: "from-purple-400 to-purple-600", size: "w-28 h-28" },
    { icon: Stethoscope, color: "from-yellow-400 to-yellow-600", size: "w-22 h-22" },
    { icon: FlaskConical, color: "from-red-400 to-red-600", size: "w-26 h-26" },
    { icon: Microscope, color: "from-indigo-400 to-indigo-600", size: "w-30 h-30" },
    { icon: TestTube2, color: "from-pink-400 to-pink-600", size: "w-18 h-18" },
    { icon: Droplets, color: "from-teal-400 to-teal-600", size: "w-20 h-20" },
    { icon: Atom, color: "from-cyan-400 to-cyan-600", size: "w-24 h-24" },
    { icon: Brain, color: "from-violet-400 to-violet-600", size: "w-26 h-26" },
    { icon: Dna, color: "from-rose-400 to-rose-600", size: "w-22 h-22" },
    { icon: Syringe, color: "from-emerald-400 to-emerald-600", size: "w-20 h-20" }
  ];

  // Fixed initial positions for SSR
  const [iconPositions, setIconPositions] = useState(
    labIcons.map(() => ({
      width: 100,
      height: 100,
      top: 50,
      left: 50,
      animationDelay: 0,
      animationDuration: 15,
      rotation: 0
    }))
  );

  // Update positions on client side
  useEffect(() => {
    setIconPositions(
      labIcons.map((_, index) => ({
        width: Math.random() * 100 + 50,
        height: Math.random() * 100 + 50,
        top: Math.random() * 100,
        left: Math.random() * 100,
        animationDelay: index * 1.5,
        animationDuration: Math.random() * 10 + 15,
        rotation: Math.random() * 360
      }))
    );
  }, []);

  return (
    <>
      {/* Base gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      
      {/* Animated elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Lab Icons */}
        {labIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.size} bg-gradient-to-br ${item.color} rounded-2xl opacity-10 animate-float`}
            style={{
              top: `${iconPositions[index].top}%`,
              left: `${iconPositions[index].left}%`,
              animationDelay: `${iconPositions[index].animationDelay}s`,
              animationDuration: `${iconPositions[index].animationDuration}s`,
              transform: `rotate(${iconPositions[index].rotation}deg)`
            }}
          >
            <div className="w-full h-full p-4 text-white animate-pulse-slow">
              <item.icon className="w-full h-full" />
            </div>
          </div>
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Spinning Circles */}
          <div className="absolute top-20 left-10 w-40 h-40 border-2 border-red-200/30 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-blue-200/30 rounded-full animate-spin-slow-reverse"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 border-2 border-purple-200/30 rounded-full animate-spin-slow"></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-red-100/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl animate-pulse-slow-delayed"></div>
        </div>
      </div>

      {/* Add custom animations to your global CSS */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) rotate(0deg) scale(1);
            filter: brightness(1);
          }
          50% { 
            transform: translateY(-20px) rotate(5deg) scale(1.05);
            filter: brightness(1.2);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .animate-float {
          animation: float infinite ease-in-out;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slow-delayed {
          animation: pulse-slow 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </>
  );
};

export default AnimatedBackground; 