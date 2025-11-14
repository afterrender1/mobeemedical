// components/Care.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Care() {
  const features = [
    "Board Certified Internal Medicine Physicians",
    "Exclusive Weight Loss Program",
    "Convenient Telehealth Services",
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const featureHover = {
    hover: { x: 6, scale: 1.02 },
  };

  const imageHover = {
    hover: { scale: 1.05 },
  };

  return (
    <>
      {/* Heading Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
          style={{ fontFamily: "Poppins" }}
        >
          We Care About Your Health
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl"
        >
          Providing compassionate, expert care for every stage of your health journey.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-4 sm:mt-6 w-16 sm:w-20 h-1 bg-blue-600 rounded-full"
        />
      </motion.div>

      {/* Main Care Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="bg-white py-12 sm:py-16 md:py-20 lg:py-24"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 xl:mx-34 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Image */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="flex-1 relative w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[450px] lg:h-[520px] xl:h-[600px] rounded-2xl overflow-hidden shadow-lg"
          >
            <motion.div variants={imageHover}>
              <Image
                src="/images/care.png"
                alt="Comprehensive Care"
                fill
                className="object-cover object-center transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={itemVariants}
            className="flex-1 flex flex-col gap-5 sm:gap-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight"
            >
              Comprehensive Care for Every Stage of Your Health Journey
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Mobee Medical is dedicated to providing compassionate, expert care
              for your unique health needs. We're here to support you every step
              of the way.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-4 sm:mt-6"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature}
                  variants={featureHover}
                  whileHover="hover"
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white border border-gray-100 rounded-xl shadow hover:shadow-lg transition-shadow"
                >
                  <div className="shrink-0 bg-blue-100 text-blue-600 rounded-full p-1.5 sm:p-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <p className="text-gray-800 font-medium text-sm sm:text-base">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}