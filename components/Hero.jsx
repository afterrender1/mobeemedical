"use client";
import React from "react";
import Image from "next/image";
import { PlayCircle, Phone, Users , NotebookPen , CircleArrowOutUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full py-4 bg-white" style={{fontFamily : "poppins"}}> 
      <div className="mx-30 px-6 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        {/* LEFT SIDE */}
        <div className="rounded-2xl p-10 h-[650px] bg-linear-to-br from-[#bbdcfc] via-[#ebdbf7] to-[#e9d7bb] ">
          {/* Tag */}
          <span className="inline-block mb-10 text-sm font-medium text-blue-700 bg-blue-100 px-3 py-3 rounded-full">
            24/7 Services Available
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-10">
            Your Health, Our Technology.
            <br /> Trusted Doctors at Your Fingertips.
          </h1>

          {/* Paragraph */}
          <p className="text-gray-600 text-lg mb-8">
            Whether in person or online, Doctify connects you with certified,
            compassionate healthcare professionals — quickly, safely, and
            effortlessly.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-[#1381c5] text-white px-8 py-3 flex justify-center items-center gap-2 rounded-full font-semibold cursor-pointer hover:bg-[#066baa] transition-all">
             <span className="bg-white p-2 rounded-full">
                <NotebookPen size={20} className="text-[#1381c5]"/></span> Book Appointment
            </button>

            <button className="text-gray-800 flex items-center gap-2 border border-gray-400 px-6 py-3 rounded-full cursor-pointer font-semibold hover:bg-gray-50 transition">
             
              See How It Works <CircleArrowOutUpRight size={20} className="text-black"/>
            </button>
          </div>

          {/* Bottom Small Cards */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Left: Users */}
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm">
              <Users className="text-blue-600" size={20} />
              <p className="text-sm text-gray-700 font-medium">
                More than 50 Doctors in your Doctify
              </p>
            </div>

            {/* Right: Calling */}
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm">
              <Phone className="text-green-600" size={20} />
              <p className="text-sm text-gray-700 font-medium">Calling…</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">
          <div className="relative w-full h-[500px] md:h-[650px] rounded-2xl overflow-hidden">
            <Image
              src="/images/hero.png"
              alt="Doctors"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
