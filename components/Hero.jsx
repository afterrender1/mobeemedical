// components/Hero.tsx
"use client";
import React from "react";
import Image from "next/image";
import {
  PlayCircle,
  Phone,
  Users,
  NotebookPen,
  CircleArrowOutUpRight,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      className="w-full min-h-screen bg-white select-none pt-16 sm:pt-20"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 xl:mx-30 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 h-auto lg:h-[650px] bg-linear-to-br from-[#bbdcfc] via-[#ebdbf7] to-[#e9d7bb] flex flex-col justify-center shadow-lg">
          {/* Tag */}
          <span className="inline-block mb-5 sm:mb-6 md:mb-7 text-xs sm:text-sm md:text-base font-medium text-blue-700 bg-blue-100 px-3 py-2 sm:py-2.5 md:py-3 rounded-full w-fit">
            24/7 Services Available
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-5 sm:mb-6 md:mb-7">
            Your Partner in Better
            <br className="hidden sm:block" /> Health and Wellness
          </h1>

          {/* Paragraph */}
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed">
            At Mobee Medical, we deliver expert, personalized care <br className="hidden sm:block" />
            tailored to your needs — from weight loss solutions to chronic condition management.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-7 sm:mb-8 md:mb-10">
            <button className="bg-[#1381c5] text-white px-5 sm:px-6 md:px-7 lg:px-8 py-3 flex justify-center items-center gap-2 rounded-full font-semibold hover:bg-[#066baa] transition-all w-full sm:w-auto text-sm sm:text-base">
              <span className="bg-white p-1.5 sm:p-2 rounded-full">
                <NotebookPen size={18} className="text-[#1381c5]" />
              </span>
              Book Appointment
            </button>

            <button className="text-gray-800 flex items-center justify-center gap-2 border border-gray-400 px-5 sm:px-6 md:px-7 lg:px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition w-full sm:w-auto text-sm sm:text-base">
              Schedule a visit
              <CircleArrowOutUpRight size={18} className="text-black" />
            </button>
          </div>

          {/* Bottom Small Cards */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            {/* Users */}
            <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-xl shadow-sm w-full sm:w-auto">
              <Users className="text-blue-600 shrink-0" size={18} />
              <p className="text-xs sm:text-sm text-gray-700 font-medium">
                More than 50 Doctors in your Doctify
              </p>
            </div>

            {/* Calling */}
            <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-xl shadow-sm w-full sm:w-auto">
              <Phone className="text-green-600 shrink-0" size={18} />
              <p className="text-xs sm:text-sm text-gray-700 font-medium">Calling…</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center order-first lg:order-last">
          <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[480px] lg:h-[580px] xl:h-[650px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/realhero2.png"
              alt="Doctors"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;