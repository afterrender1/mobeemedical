// components/WeightLossSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WeightLossSection() {
  return (
    <section
      className="relative w-full bg-fixed bg-center bg-cover py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16"
      style={{
        backgroundImage: "url('/images/weightlossbg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1650px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center text-white">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 sm:gap-6"
          style={{ fontFamily: "Poppins" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Take the first step toward achieving your weight loss goals
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
            Designed around the latest advancements in medical weight loss, our
            program combines weekly injections with personalized support to help
            you see real results and maintain them long-term.
          </p>

          <button className="mt-4 w-fit bg-[#066BAA] hover:bg-[#05598d] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 rounded-full font-semibold cursor-pointer transition text-sm sm:text-base">
            Start Your Journey
          </button>
        </motion.div>

        {/* Right Side Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col rounded-2xl bg-white bg-clip-border text-gray-700 shadow-xl hover:-translate-y-2 transition-all duration-300">
            {/* Gradient Header with Image */}
            <div className="relative mx-3 sm:mx-4 -mt-5 sm:-mt-6 h-36 sm:h-40 md:h-44 lg:h-48 overflow-hidden rounded-xl bg-linear-to-r from-[#066BAA] to-blue-600 shadow-lg shadow-blue-500/40">
              <Image
                src="/images/wlcard2.png"
                alt="Weight Loss Program"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px"
                priority
              />
            </div>

            {/* Card Content */}
            <div className="p-5 sm:p-6 text-left">
              <h5 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                12-Week Weight Loss Program
              </h5>

              <div className="space-y-3">
                <h6 className="text-[#036AB8] font-medium text-sm sm:text-base">Key Program Features:</h6>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 text-lg leading-none">•</span>
                    <span className="text-gray-600 text-xs sm:text-sm">Weekly injections with medical supervision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 text-lg leading-none">•</span>
                    <span className="text-gray-600 text-xs sm:text-sm">Ongoing support and progress tracking by our expert team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 text-lg leading-none">•</span>
                    <span className="text-gray-600 text-xs sm:text-sm">Customized approach tailored to your unique goals</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-5 sm:p-6 pt-0">
              <button
                type="button"
                className="cursor-pointer w-full rounded-lg bg-[#066BAA] py-3 px-5 sm:px-6 text-xs sm:text-sm md:text-base font-bold uppercase text-white shadow-md shadow-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/50 focus:opacity-90"
              >
                Read More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}