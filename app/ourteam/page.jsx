"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Patrick Odia, MD",
    role: "Cardiologist",
    info: `Dr. Patrick Odia is a board-certified Internal Medicine physician. He has a wealth of experience in hospitalist and primary care medicine. He completed his residency training in Internal Medicine at Harlem Hospital Center, an affiliate of Columbia University in New York.

Outside of the clinic, Dr. Odia spends his free time with his family and is an avid soccer fan who rarely misses a match!`,
    image: "/images/patrik.jpg",
  },
  {
    name: "Oyinade Odia, MD",
    role: "Pediatrician",
    info: `Dr. Oyinade Odia is a board-certified Internal Medicine physician with a strong commitment to providing high-quality, compassionate care to adult patients. She completed her Internal Medicine residency at Harlem Hospital Center, an affiliate of Columbia University in New York.

In her free time, she enjoys spending time with her family, cooking, and actively participating in church and community events.`,
    image: "/images/odia.jpg",
  },
];

const MeetOurTeam = () => {
  return (
    <>
      <Navbar />
      <section className="bg-linear-to-b from-slate-50 to-white py-24 px-6 overflow-hidden" style={{ fontFamily: "Poppins, sans-serif" }}>
        <div className="max-w-7xl mx-auto">
          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">
              Meet Our Dedicated Team
            </h2>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Exceptional care starts with exceptional people. Get to know the experts behind your health.
            </p>
  <div className="mt-6 w-24 h-1 bg-blue-600 rounded-full mx-auto"></div>

          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-lg shadow-md  transition-all duration-500 overflow-hidden border border-slate-100"
              >
                {/* Image Container */}
                <div className="relative h-160 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Role Badge */}
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-white/95 backdrop-blur-sm text-slate-800 font-semibold px-5 py-2 rounded-full text-sm tracking-wide shadow-md">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10">
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="w-20 h-1 bg-linear-to-r from-teal-500 to-emerald-600 rounded-full mb-6"></div>
                  
                  <p className="text-slate-600 leading-relaxed text-base whitespace-pre-line">
                    {member.info}
                  </p>
                </div>

                {/* Subtle Border Glow on Hover */}
                <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-teal-400/30 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Optional CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-20"
          >
            <p className="text-slate-600 text-lg">
              Ready to experience personalized care?{" "}
              <a href="/contact" className="text-teal-600 font-semibold hover:text-teal-700 transition">
               Schedule a visit →
              </a>
            </p>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default MeetOurTeam;