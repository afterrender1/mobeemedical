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
import { motion } from "framer-motion";

const Hero = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const buttonHover = {
    hover: { scale: 1.05, y: -2 },
  };

  const cardHover = {
    hover: { y: -4, scale: 1.03 },
  };

  const imageHover = {
    hover: { scale: 1.04 },
  };

  return (
    <section
      className="w-full min-h-screen bg-white select-none pt-16 sm:pt-20"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 xl:mx-30 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
      >
        {/* LEFT SIDE */}
        <motion.div
          variants={itemVariants}
          className="rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 h-auto lg:h-[650px] bg-linear-to-br from-[#bbdcfc] via-[#ebdbf7] to-[#e9d7bb] flex flex-col justify-center shadow-lg"
        >
          {/* Tag */}
          <motion.span
            variants={itemVariants}
            className="inline-block mb-5 sm:mb-6 md:mb-7 text-xs sm:text-sm md:text-base font-medium text-blue-700 bg-blue-100 px-3 py-2 sm:py-2.5 md:py-3 rounded-full w-fit"
          >
            24/7 Services Available
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-5 sm:mb-6 md:mb-7"
          >
            Your Partner in Better
            <br className="hidden sm:block" /> Health and Wellness
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed"
          >
            At Mobee Medical, we deliver expert, personalized care <br className="hidden sm:block" />
            tailored to your needs — from weight loss solutions to chronic condition management.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-7 sm:mb-8 md:mb-10"
          >
            <motion.button
              variants={buttonHover}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className="bg-[#1381c5] text-white px-5 sm:px-6 md:px-7 lg:px-8 py-3 flex justify-center items-center gap-2 rounded-full font-semibold hover:bg-[#066baa] transition-all w-full sm:w-auto text-sm sm:text-base"
            >
              <span className="bg-white p-1.5 sm:p-2 rounded-full">
                <NotebookPen size={18} className="text-[#1381c5]" />
              </span>
              Book Appointment
            </motion.button>

            <motion.button
              variants={buttonHover}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className="text-gray-800 flex items-center justify-center gap-2 border border-gray-400 px-5 sm:px-6 md:px-7 lg:px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition w-full sm:w-auto text-sm sm:text-base"
            >
              Schedule a visit
              <CircleArrowOutUpRight size={18} className="text-black" />
            </motion.button>
          </motion.div>

          {/* Bottom Small Cards */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
          >
            {/* Users */}
            <motion.div
              variants={cardHover}
              whileHover="hover"
              className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-xl shadow-sm w-full sm:w-auto"
            >
              <Users className="text-blue-600 shrink-0" size={18} />
              <p className="text-xs sm:text-sm text-gray-700 font-medium">
                More than 50 Doctors in your Doctify
              </p>
            </motion.div>

            {/* Calling */}
            <motion.div
              variants={cardHover}
              whileHover="hover"
              className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-xl shadow-sm w-full sm:w-auto"
            >
              <Phone className="text-green-600 shrink-0" size={18} />
              <p className="text-xs sm:text-sm text-gray-700 font-medium">Calling…</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative flex justify-center order-first lg:order-last"
        >
          <motion.div
            variants={imageHover}
            className="relative w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[480px] lg:h-[580px] xl:h-[650px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/realhero2.png"
              alt="Doctors"
              fill
              className="object-cover object-center transition-transform duration-700"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;