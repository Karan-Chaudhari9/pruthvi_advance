"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "Dr. Vykunta Raju K. N",
    role: "Pediatric Neurologist",
    location: "Bengaluru",
    image: "/main male doctor3.jpg",
    comment:
      "Pruthvi Advance delivers exceptional and accurate diagnostic services with a knowledgeable and dedicated team.",
  },
  {
    name: "Dr. Seneesh KV",
    role: "Fetal Medicine Specialist",
    location: "Kerala",
    image: "/main male doctor3.jpg",
    comment:
      "Pruthvi Advance delivers exceptional and accurate diagnostic services with a knowledgeable and dedicated team.",
  },
  {
    name: "Dr. Chitra Ganesh",
    role: "Fetal Medicine Specialist",
    location: "Bengaluru",
    image: "/main male doctor3.jpg",
    comment:
      "Pruthvi Advance delivers exceptional and accurate diagnostic services with a knowledgeable and dedicated team.",
  },
];

export default function Testimonial() {
  return (
    <div className="py-10 px-4 md:px-8 flex justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-6xl w-full">
        <div className="py-10 text-center">
          <h2 className="text-lg md:text-xl font-medium pb-3 text-gray-700 flex items-center justify-center">
            <span className="w-6 md:w-8 h-[2px] bg-red-500 mr-3"></span>
            Testimonial
            <span className="w-6 md:w-8 h-[2px] bg-red-500 ml-3"></span>
          </h2>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            What our <span className="text-red-500">Customers</span> say
          </h1>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Navigation]}
          className="my-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-md text-left transition-all duration-300 hover:shadow-lg">
                <p className="text-gray-700 text-base md:text-lg mb-6">
                  ❝ {testimonial.comment} ❞
                </p>
                <div className="flex items-center">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-gray-300"
                  />
                  <div className="ml-4">
                    <p className="text-sm md:text-md font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
