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
<div className="flex flex-col items-center text-center mb-12">
  {/* Main Heading */}
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight" style={{ fontFamily: "Poppins" }}>
    We Care About Your Health
  </h1>

  {/* Subheading / Accent */}
  <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl">
    Providing compassionate, expert care for every stage of your health journey.
  </p>

  {/* Optional underline accent */}
  <div className="mt-6 w-20 h-1 bg-blue-600 rounded-full"></div>
</div>

    <section className="mx-34 bg-white py-16" style={{fontFamily : "poppins"}}>
      <div className=" px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="flex-1 relative w-full h-64 sm:h-80 lg:h-135">
          <Image
            src="/images/care.png" // replace with your image
            alt="Comprehensive Care"
            fill
            className="object-cover rounded-xl "
          />
        </div>

        {/* Right Content */}
      <div className="flex-1 flex flex-col gap-6 space-y-2">
  <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
    Comprehensive Care for Every Stage of Your Health Journey
  </h2>
  <p className="text-gray-700 text-lg">
    Mobee Medical is dedicated to providing compassionate, expert care
    for your unique health needs. We're here to support you every step
    of the way.
  </p>

  {/* Features Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
    {features.map((feature) => (
      <div
        key={feature}
        className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow hover:shadow-lg transition-shadow"
      >
        <div className="shrink-0 bg-blue-100 text-blue-600 rounded-full p-2">
          <Check className="w-5 h-5" />
        </div>
        <p className="text-gray-800 font-medium">{feature}</p>
      </div>
    ))}
  </div>
</div>

      </div>

      {/* Optional Right Image for two-image layout */}
      
      
    </section>
 </>
  );
}
