"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WeightLossSection() {
  return (
    <section
      className="relative w-full bg-fixed bg-center bg-cover py-20 px-6"
      style={{
        backgroundImage: "url('/images/weightlossbg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1650px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "poppins" }}
          >
            Take the first step toward achieving your weight loss goals
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed"    style={{ fontFamily: "poppins" }}>
            Designed around the latest advancements in medical weight loss, our
            program combines weekly injections with personalized support to help
            you see real results and maintain them long-term.
          </p>

          <button className="mt-4 w-fit bg-[#066BAA] hover:bg-[#05598d] text-white px-22 py-4 rounded-full  cursor-pointer transition"    style={{ fontFamily: "poppins" }}>
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
             style={{ fontFamily: "poppins" }}
        >
          <div className="relative w-80 flex flex-col rounded-2xl bg-white bg-clip-border text-gray-700 shadow-xl hover:-translate-y-2 transition-all duration-300">
            {/* Gradient Header */}
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-linear-to-r from-[#066BAA] to-blue-600 shadow-lg shadow-blue-500/40">
            <Image
                src="/images/wlcard2.png"
                alt="Weight Loss Program"
                height={160}
                width={320}
                className="object-cover object-center"
              />
            </div>

            {/* Card Content */}
<div className="p-6 text-left">
  <h5 className="text-2xl font-semibold text-gray-900 mb-4">
    12-Week Weight Loss Program
  </h5>

  
  <div className="space-y-3">
    <h6 className="text-[#036AB8] font-medium">Key Program Features:</h6>
    <ul className="space-y-2">
      <li className="flex items-start gap-2">
        <span className="text-blue-500 text-lg leading-none">•</span>
        <span className="text-gray-600 text-sm">Weekly injections with medical supervision</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-blue-500 text-lg leading-none">•</span>
        <span className="text-gray-600 text-sm">Ongoing support and progress tracking by our expert team</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-blue-500 text-lg leading-none">•</span>
        <span className="text-gray-600 text-sm">Customized approach tailored to your unique goals</span>
      </li>
    </ul>
  </div>
</div>

            {/* CTA Button */}
            <div className="p-6 pt-0">
              <button
                type="button"
                className="cursor-pointer w-full rounded-lg bg-[#066BAA] py-3 px-6 text-sm font-bold uppercase text-white shadow-md shadow-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/50 focus:opacity-90"
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
