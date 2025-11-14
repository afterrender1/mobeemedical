// components/Testimonials.jsx
"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    review: "Mobee Medical has completely changed how I manage my health. The staff is so caring and professional!",
    rating: 5,
  },
  {
    name: "David Miller",
    review: "Their telehealth service is incredibly convenient. I felt heard and supported throughout my treatment.",
    rating: 4,
  },
  {
    name: "Emily Davis",
    review: "Excellent experience! Scheduling was easy, and the doctors truly care about your well-being.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    review: "Professional, friendly, and effective — I’m seeing real excellent improvements thanks to Mobee Medical!",
    rating: 5,
  },
  {
    name: "Laura Smith",
    review: "The weight loss program worked wonders for me. Highly recommended!",
    rating: 4,
  },
  {
    name: "James Wilson",
    review: "Best healthcare experience I’ve had in years. Simple, supportive, and reliable.",
    rating: 5,
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    // Estimate card width + gap
    const card = container.querySelector("div");
    const cardWidth = card ? card.offsetWidth : 300;
    const gap = direction === "right" ? 32 : 32; // gap-8 = 2rem
    const scrollAmount = cardWidth + gap;

    if (direction === "right") {
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 50) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      if (container.scrollLeft <= 50) {
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-[#F9FBFF] text-center"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
          What Our Patients Say
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          Hear from patients who trusted{" "}
          <span className="font-semibold text-[#0670B2]">Mobee Medical</span> for
          expert, compassionate care and real results.
        </p>

        {/* Slider */}
        <div className="relative mx-4 sm:mx-6 lg:mx-30">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 bg-white/90 backdrop-blur-sm shadow-lg p-2.5 sm:p-3 rounded-full hover:bg-blue-50 hover:scale-105 transition z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#0670B2]" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 sm:gap-7 md:gap-8 overflow-x-auto scroll-smooth px-2 py-6 hide-scrollbar snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* Duplicate array for infinite scroll */}
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex-none w-[85%] xs:w-[75%] sm:w-[60%] md:w-[45%] lg:w-[31%] bg-white border border-gray-200 rounded-3xl p-5 sm:p-6 md:p-7 shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 snap-center"
              >
                <div className="flex justify-center mb-3 sm:mb-4 gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 italic mb-4 text-sm sm:text-base leading-relaxed line-clamp-4">
                  “{item.review}”
                </p>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  — {item.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 bg-white/90 backdrop-blur-sm shadow-lg p-2.5 sm:p-3 rounded-full hover:bg-blue-50 hover:scale-105 transition z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#0670B2]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;