// components/AcceptedInsure.jsx
"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const insurances = [
  "Aetna Health Plans",
  "Cigna",
  "Molina Healthcare",
  "Partners Direct Health",
  "UnitedHealthCare",
  "Ambetter",
  "Humana Care Plan",
  "Multiplan PHCS",
  "Provider Partners Health Plan",
  "Memorial Herman Health Plan",
  "BCBS",
  "Humana PPO",
  "Multiplan PPO",
  "Superior HealthPlans",
  "Blue Cross and Blue Shield – Texas",
  "Medicare",
  "Other",
  "Tricare",
];

const AcceptedInsure = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardHover = {
    hover: { scale: 1.02, y: -4 },
  };

  return (
    <section
      className="flex justify-center py-12 sm:py-16 md:py-20 px-4 bg-[#F8FBFF]"
      style={{ fontFamily: "Poppins" }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="w-full max-w-5xl bg-linear-to-b from-[#E9F5FF] to-[#CDE9FF] text-[#0A2540] rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 border border-blue-300 transition-all duration-500 hover:shadow-xl"
      >
        {/* Heading */}
        <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm text-[#1B70C9] mb-1 sm:mb-2 uppercase tracking-wide font-semibold">
            We Accept
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 leading-tight">
            Accepted Insurances
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We proudly collaborate with trusted insurance providers to make
            quality healthcare accessible and affordable for everyone.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8 sm:mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#0670B2] cursor-pointer text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300"
          >
            Verify My Insurance
          </motion.button>
        </motion.div>

        {/* List Section */}
        <motion.div variants={itemVariants} className="border-t border-blue-200 pt-6 sm:pt-8">
          <h4 className="text-[#0A2540] font-semibold mb-5 sm:mb-6 text-center text-base sm:text-lg">
            Our Insurance Partners Include:
          </h4>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 text-gray-700 text-xs sm:text-sm"
          >
            {insurances.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="flex items-start gap-2.5 sm:gap-3 cursor-default bg-white border border-blue-100 p-3 sm:p-3.5 rounded-xl shadow-sm transition-all duration-300"
              >
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#1B70C9] shrink-0 mt-0.5" />
                <span className="font-medium">{plan}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AcceptedInsure;