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
      className="w-full py-10 bg-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="mx-0 sm:mx-2 md:mx-2 lg:mx-2 xl:mx-30 px-4 sm:px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="rounded-2xl p-6 sm:p-8 md:p-10 h-auto lg:h-[650px] bg-linear-to-br from-[#bbdcfc] via-[#ebdbf7] to-[#e9d7bb] flex flex-col justify-center shadow-md">
          {/* Tag */}
          <span className="inline-block mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-blue-700 bg-blue-100 px-3 py-2 sm:py-3 rounded-full w-fit">
            24/7 Services Available
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6 sm:mb-8">
            Your Health, Our Technology.
            <br className="hidden sm:block" /> Trusted Doctors at Your
            Fingertips.
          </h1>

          {/* Paragraph */}
          <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-10">
            Whether in person or online, Doctify connects you with certified,
            compassionate healthcare professionals — quickly, safely, and
            effortlessly.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 sm:mb-10">
            <button className="bg-[#1381c5] text-white px-6 sm:px-8 py-3 flex justify-center items-center gap-2 rounded-full font-semibold cursor-pointer hover:bg-[#066baa] transition-all w-full sm:w-auto">
              <span className="bg-white p-2 rounded-full">
                <NotebookPen size={20} className="text-[#1381c5]" />
              </span>
              Book Appointment
            </button>

            <button className="text-gray-800 flex items-center justify-center gap-2 border border-gray-400 px-6 sm:px-8 py-3 rounded-full cursor-pointer font-semibold hover:bg-gray-50 transition w-full sm:w-auto">
              See How It Works
              <CircleArrowOutUpRight size={20} className="text-black" />
            </button>
          </div>

          {/* Bottom Small Cards */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Left: Users */}
            <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-xl shadow-sm w-full sm:w-auto">
              <Users className="text-blue-600 flex-shrink-0" size={20} />
              <p className="text-sm text-gray-700 font-medium">
                More than 50 Doctors in your Doctify
              </p>
            </div>

            {/* Right: Calling */}
            <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-xl shadow-sm w-full sm:w-auto">
              <Phone className="text-green-600 flex-shrink-0" size={20} />
              <p className="text-sm text-gray-700 font-medium">Calling…</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center order-first lg:order-last">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/hero.png"
              alt="Doctors"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
