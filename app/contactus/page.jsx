"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", phone: "", message: "", consent: false });
  };

  return (
    <>
      <Navbar />
      <section
        className="min-h-screen bg-linear-to-br from-slate-50 via-white to-teal-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ fontFamily: "poppins" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 px-2 sm:px-0"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              We're here to help. Reach out today and let us care for you and your family.
            </p>
          </motion.div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left: Video + Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col h-full"
            >
              <div className="relative flex-1 rounded-3xl overflow-hidden shadow-2xl">
                <video
                  src="/videos/drcall.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                {/* Contact Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
                    Visit Us Today
                  </h3>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                      <div className="bg-white/25 backdrop-blur-sm p-2 sm:p-3 rounded-full mt-1">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-base sm:text-lg">
                          7070 KNIGHTS COURT, SUITE 1503 , TEXAS, 77459
                        </p>
                        <p className="text-xs sm:text-sm opacity-90">Missouri City, TX 77459, USA</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-white/25 backdrop-blur-sm p-2 sm:p-3 rounded-full">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <p className="font-semibold text-base sm:text-lg">713-324-8884</p>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-white/25 backdrop-blur-sm p-2 sm:p-3 rounded-full">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <p className="font-semibold text-base sm:text-lg">info@mobeemedical.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 sm:mt-8 bg-white/90 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100"
              >
                <h4 className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-bold text-slate-800 mb-4 sm:mb-5">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                  Office Hours
                </h4>
                <div className="space-y-2 sm:space-y-3 text-slate-600 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-slate-800">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-slate-800">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-red-600">Closed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-full"
            >
              <div className="h-full bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-12 border border-slate-200 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 sm:mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50/80 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#066BAA] focus:border-transparent transition-all placeholder-slate-500 text-sm sm:text-base"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50/80 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#066BAA] focus:border-transparent transition-all placeholder-slate-500 text-sm sm:text-base"
                    />
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50/80 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#066BAA] focus:border-transparent transition-all placeholder-slate-500 text-sm sm:text-base"
                  />

                  <textarea
                    name="message"
                    placeholder="How can we help you today?"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50/80 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#066BAA] focus:border-transparent transition-all resize-none placeholder-slate-500 text-sm sm:text-base"
                  />

                  <label className="flex items-start gap-2 sm:gap-4 cursor-pointer text-xs sm:text-sm">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 sm:w-6 sm:h-6 mt-0.5 text-[#066BAA] rounded-lg focus:ring-[#066BAA] border-slate-300"
                    />
                    <span className="leading-relaxed text-slate-600">
                      I consent to receiving communication from Mobee Clinic and agree to the{" "}
                      <a
                        href="/privacy"
                        className="text-teal-600 font-medium underline hover:text-teal-700"
                      >
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-linear-to-r from-[#0a649c] to-[#066BAA] text-white font-bold py-4 sm:py-5 rounded-2xl shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 text-sm sm:text-lg"
                  >
                    <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                    Send Message
                  </motion.button>
                </form>

                <p className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-slate-500 font-medium">
                  We typically respond within <span className="text-[#066BAA] font-bold">24 hours</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-12 sm:mt-16 lg:mt-20 text-center px-2 sm:px-0"
          >
            <div className="inline-flex flex-wrap justify-center gap-6 sm:gap-10 text-slate-600">
              {[
                { icon: "✓", label: "HIPAA Compliant", color: "teal" },
                { icon: "24/7", label: "Emergency Support", color: "emerald" },
                { icon: "5★", label: "Patient Rated", color: "cyan" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-md"
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-${item.color}-100 rounded-full flex items-center justify-center`}
                  >
                    <span className={`text-${item.color}-600 font-black text-base sm:text-xl`}>
                      {item.icon}
                    </span>
                  </div>
                  <span className="font-medium text-xs sm:text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
