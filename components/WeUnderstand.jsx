// components/WeUnderstand.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const WeUnderstand = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Section Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col items-center text-center mb-12 sm:mb-16 mt-16 sm:mt-20 md:mt-24 px-4 sm:px-6"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
          style={{ fontFamily: "Poppins" }}
        >
          We Understand Your Challenges <br className="hidden sm:block" />
          And We Are Here to Help
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
        >
          Managing your health should not feel like an uphill battle. At{" "}
          <span className="font-semibold text-[#0670B2]">Mobee Medical</span>, we
          address common struggles with practical, effective solutions — so you
          can focus on feeling your best.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-5 sm:mt-6 w-20 sm:w-24 h-1 bg-[#0670B2] rounded-full"
        />
      </motion.div>

      {/* Main Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mx-4 sm:mx-6 lg:mx-30 bg-[#F9FBFF] py-12 sm:py-16 md:py-20 lg:py-24 rounded-2xl sm:rounded-3xl"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14 px-4 sm:px-6 md:px-8 lg:px-10">
          {/* Left: Video */}
          <motion.div
            variants={videoVariants}
            className="flex-1 relative w-full h-56 xs:h-64 sm:h-80 md:h-96 lg:h-[520px] rounded-2xl overflow-hidden shadow-xl group"
          >
            <video
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              src="/videos/checkingbp.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#00000060] via-[#00000020] to-transparent pointer-events-none" />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            variants={itemVariants}
            className="flex-1 flex flex-col gap-5 sm:gap-6 lg:pr-6 xl:pr-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              Practical Support for Real Health Challenges
            </h2>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Whether you’re managing chronic conditions or just aiming for
              everyday wellness, we make health care simple, personalized, and
              accessible. Our team listens, understands, and guides you every
              step of the way — because your journey to better health deserves
              attention and care.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 w-fit bg-[#066BAA] cursor-pointer text-white font-normal text-base sm:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300"
            >
              Schedule A Visit
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default WeUnderstand;