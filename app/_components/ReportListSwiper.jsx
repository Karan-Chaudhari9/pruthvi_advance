import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { reports } from "@/app/_data/reports";
import { FaArrowRight } from "react-icons/fa";

const ReportListSwiper = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-medium pb-2 text-gray-700 flex items-center justify-center">
            <span className="w-8 h-[2px] bg-red-500 mr-3"></span>
            Available Test by Health Conditions
            <span className="w-8 h-[2px] bg-red-500 ml-3"></span>
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-red-500">Explore</span> Our Health Report Categories
          </h1>
        </div>

        {/* Swiper Section */}
        <div className="relative px-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{ 
              delay: 2000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            modules={[Autoplay]}
            className="w-100"
            breakpoints={{
              640: { 
                slidesPerView: 2,
                spaceBetween: 18
              },
              768: { 
                slidesPerView: 3,
                spaceBetween: 1
              },
              1024: { 
                slidesPerView: 4,
                spaceBetween: 18
              }
            }}
          >
            {reports.map((report, index) => (
              <SwiperSlide
                key={index}
                className="!w-70"
              >
                <Link href={`/reports/${report.slug}`}>
                  <div className="bg-white rounded-xl p-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
                    <div className="flex items-center gap-3">
                      {/* Icon Container */}
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-lg flex items-center justify-center">
                          <Image 
                            src={report.icon} 
                            alt={report.name} 
                            width={30} 
                            height={30}
                            className="transform group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        {/* Decorative Dot */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                          {report.name}
                        </h3>
                        {report.testsCount && (
                          <div className="text-sm text-gray-500">
                            {report.testsCount}+ Tests Available
                          </div>
                        )}
                      </div>

                      {/* Arrow Icon */}
                      <div className="text-gray-400 group-hover:text-red-500 transform group-hover:translate-x-1 transition-all">
                        <FaArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ReportListSwiper;
