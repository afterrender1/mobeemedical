"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    review:
      "Mobee Medical has completely changed how I manage my health. The staff is so caring and professional!",
    rating: 5,
  },
  {
    name: "David Miller",
    review:
      "Their telehealth service is incredibly convenient. I felt heard and supported throughout my treatment.",
    rating: 4,
  },
  {
    name: "Emily Davis",
    review:
      "Excellent experience! Scheduling was easy, and the doctors truly care about your well-being.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    review:
      "Professional, friendly, and effective — I’m seeing real improvements thanks to Mobee Medical!",
    rating: 5,
  },
  {
    name: "Laura Smith",
    review:
      "The weight loss program worked wonders for me. Highly recommended!",
    rating: 4,
  },
  {
    name: "James Wilson",
    review:
      "Best healthcare experience I’ve had in years. Simple, supportive, and reliable.",
    rating: 5,
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount =
        direction === "left"
          ? -current.offsetWidth / 1.1
          : current.offsetWidth / 1.1;

      // Infinite scroll logic
      if (
        direction === "right" &&
        current.scrollLeft + current.offsetWidth >= current.scrollWidth - 10
      ) {
        current.scrollTo({ left: 0, behavior: "smooth" });
      } else if (direction === "left" && current.scrollLeft <= 0) {
        current.scrollTo({ left: current.scrollWidth, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  // --- Drag Scroll Handlers ---
  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const stopDrag = () => setIsDragging(false);

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      className="py-24 bg-[#F9FBFF] text-center select-none"
      style={{ fontFamily: "Poppins" }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
        What Our Patients Say
      </h2>
      <p className="text-gray-600 text-lg mb-14 max-w-2xl mx-auto leading-relaxed">
        Hear from patients who trusted{" "}
        <span className="font-semibold text-[#0670B2]">Mobee Medical</span> for
        expert, compassionate care and real results.
      </p>

      {/* Slider Controls */}
      <div className="relative mx-30">
        <button
          onClick={() => scroll("left")}
          className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg p-3 rounded-full hover:scale-105 hover:bg-blue-50 transition-all duration-300 z-10"
        >
          <ChevronLeft className="text-[#0670B2] w-6 h-6" />
        </button>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          onMouseDown={startDrag}
          onMouseLeave={stopDrag}
          onMouseUp={stopDrag}
          onMouseMove={onDrag}
          className="flex gap-8 overflow-x-auto scroll-smooth  px-6 lg:px-10 py-8 cursor-grab active:cursor-grabbing hide-scrollbar"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE
          }}
        >
          {/* Hide scrollbar for WebKit (Chrome, Safari, Edge) */}
          <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-none w-[95%] sm:w-[60%] lg:w-[33%] bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 p-18"
            >
              <div className="flex justify-center mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                “{item.review}”
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                — {item.name}
              </h3>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg p-3 rounded-full hover:scale-105 hover:bg-blue-50 transition-all duration-300 z-10"
        >
          <ChevronRight className="text-[#0670B2] w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
