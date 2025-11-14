// app/portal/page.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Clock, Calendar, Phone } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PatientPortal() {
  return (
    <>
      <Navbar />

      {/* Hero Maintenance Section */}
      <section className="relative min-h-screen bg-linear-to-b from-gray-50 to-white py-20 overflow-hidden" style={{fontFamily : "poppins"}}>
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100/50 bg-size:[60px_60px] opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-xl font-medium text-gray-700 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </motion.div>

          {/* Maintenance Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-amber-50 border border-amber-200 rounded-full"
          >
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-amber-800">System Maintenance</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
            style={{ fontFamily: "Poppins" }}
          >
            Patient Portal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Our patient portal is currently undergoing scheduled updates to improve performance and security.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base text-gray-500 mb-12 max-w-3xl mx-auto"
          >
            We anticipate completion within <strong className="text-gray-700">24 hours</strong>. Your health records remain secure and accessible to our team.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-6 mb-16"
          >
            <div className="flex items-center gap-2 text-gray-700">
              <Shield size={18} className="text-emerald-600" />
              <span className="text-sm font-medium">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Clock size={18} className="text-blue-600" />
              <span className="text-sm font-medium">24/7 Clinical Support</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar size={18} className="text-indigo-600" />
              <span className="text-sm font-medium">Same-Day Appointments</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alternative Access Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100" style={{fontFamily : "poppins"}}>
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              We're Still Here for You
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              While the portal is being enhanced, our care team is fully available to assist with prescriptions, appointments, and medical questions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="bg-[#066BAA] text-white px-8 py-4 rounded-xl font-medium text-lg shadow-md hover:shadow-lg hover:bg-[#055996] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Contact Support
              </Link>
              <Link
                href="/appointment"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium text-lg hover:bg-white hover:border-[#066BAA] hover:text-[#066BAA] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Schedule Visit
              </Link>
            </div>

            {/* Support Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-md mx-auto"
            >
              <p className="text-gray-600 text-sm mb-1">Office Hours Today</p>
              <p className="text-2xl font-bold text-[#066BAA]">8:00 AM – 6:00 PM</p>
              <p className="text-xs text-gray-500 mt-2">Phone lines open until 5:30 PM</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}