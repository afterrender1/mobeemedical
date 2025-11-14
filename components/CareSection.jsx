// components/Care.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function Care() {
  const features = [
    "Board Certified Internal Medicine Physicians",
    "Exclusive Weight Loss Program",
    "Convenient Telehealth Services",
  ];

  return (
    <>
      {/* Heading Section */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
          style={{ fontFamily: "Poppins" }}
        >
          We Care About Your Health
        </h1>

        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
          Providing compassionate, expert care for every stage of your health journey.
        </p>

        <div className="mt-4 sm:mt-6 w-16 sm:w-20 h-1 bg-blue-600 rounded-full"></div>
      </div>

      {/* Main Care Section */}
      <section
        className="bg-white py-12 sm:py-16 md:py-20 lg:py-24"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 xl:mx-34 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Image */}
          <div className="flex-1 relative w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[450px] lg:h-[520px] xl:h-[600px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/care.png"
              alt="Comprehensive Care"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col gap-5 sm:gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              Comprehensive Care for Every Stage of Your Health Journey
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Mobee Medical is dedicated to providing compassionate, expert care
              for your unique health needs. We're here to support you every step
              of the way.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-4 sm:mt-6">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white border border-gray-100 rounded-xl shadow hover:shadow-lg transition-shadow"
                >
                  <div className="shrink-0 bg-blue-100 text-blue-600 rounded-full p-1.5 sm:p-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <p className="text-gray-800 font-medium text-sm sm:text-base">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}