// app/chronic-care/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeartPulse, Stethoscope, ShieldCheck, Calendar, Phone, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ChronicCarePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-linear-to-br from-[#066BAA]/5 via-white to-teal-50 py-28 overflow-hidden"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Comprehensive Acute and Chronic Care Tailored to You
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed mb-12 max-w-4xl mx-auto">
              When health challenges arise—whether sudden or ongoing—you need expert, compassionate care to help you navigate them. At Mobee Medical, we specialize in diagnosing, treating, and managing a wide range of acute and chronic conditions, empowering you to live a healthier and more fulfilling life.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/drtalkingchronic.png"
                alt="Doctor providing compassionate chronic care consultation"
                width={1200}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <h2 className="text-4xl font-bold mb-2">Personalized Care, Real Results</h2>
                <p className="text-xl">Acute • Chronic • Compassionate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Managing Chronic Conditions Is Critical */}
      <section className="py-28 bg-white"
        style={{ fontFamily: "Poppins" }}
      
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-5xl font-bold text-slate-900 mb-8">
              Why Managing Chronic Conditions Is Critical
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-10">
              Millions of Americans live with chronic illnesses, such as diabetes, hypertension, or kidney disease. In fact:
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: HeartPulse,
                stat: "37M+",
                desc: "adults in the U.S. have diabetes, yet 1 in 5 don’t know it.",
              },
              {
                icon: ShieldCheck,
                stat: "50%",
                desc: "of adults have high blood pressure, the “silent killer.”",
              },
              {
                icon: Stethoscope,
                stat: "70%",
                desc: "of annual U.S. deaths are due to chronic diseases—many preventable.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-linearlinear-to-br from-slate-50 to-white rounded-3xl p-8 shadow-lg border border-slate-200 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#066BAA]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-9 h-9 text-[#066BAA]" />
                </div>
                <p className="text-4xl font-black text-[#066BAA] mb-3">{item.stat}</p>
                <p className="text-slate-700 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed"
          >
            Living with a chronic condition can feel overwhelming, but <strong>you’re not alone</strong>. Our providers are dedicated to working alongside you to create <strong>personalized care plans</strong> that address your symptoms and help you regain control over your health.
          </motion.p>
        </div>
      </section>

      {/* Conditions We Treat - Image Section */}
      <section className="py-28 bg-linear-to-br from-[#066BAA]/4 to-teal-50"
        style={{ fontFamily: "Poppins" }}
      
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/last.png"
                  alt="Medical team managing chronic conditions"
                  width={800}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <Stethoscope className="w-10 h-10 mb-2" />
                  <p className="text-2xl font-bold">Expert Diagnosis & Treatment</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Conditions List */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-5xl font-bold text-slate-900 mb-10">
                Conditions We Treat
              </h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                From sudden illnesses to long-term management, we provide expert care for:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Diabetes (Type 1 & 2)",
                  "Hypertension",
                  "Kidney Disease",
                  "Thyroid Disorders",
                  "Asthma & COPD",
                  "Heart Disease",
                  "Arthritis",
                  "Acute Infections",
                  "And more...",
                ].map((condition, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md border border-slate-100"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#066BAA] shrink-0" />
                    <p className="font-medium text-slate-800">{condition}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-28 bg-white"
        style={{ fontFamily: "Poppins" }}
      
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-slate-900 mb-8"
          >
            Our Approach to Your Care
          </motion.h2>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed mb-16">
            We believe in <strong>whole-person care</strong>—treating not just the condition, but the individual. Our process includes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                title: "Thorough Diagnosis",
                desc: "Advanced testing and detailed evaluations to understand your unique health profile.",
              },
              {
                title: "Personalized Treatment Plans",
                desc: "Custom strategies combining medication, lifestyle changes, and ongoing monitoring.",
              },
              {
                title: "Continuous Support",
                desc: "Regular check-ins, education, and adjustments to keep you on track.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-linear-to-br from-slate-50 to-white rounded-3xl p-8 shadow-lg border border-slate-200"
              >
                <div className="w-16 h-16 bg-[#066BAA]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <HeartPulse className="w-9 h-9 text-[#066BAA]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <Footer/>
    </>
  );
}