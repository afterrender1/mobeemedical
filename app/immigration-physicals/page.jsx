// app/immigration-exam/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ImmigrationExamPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="bg-linear-to-br from-[#066BAA]/5 via-white to-teal-50 py-24"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Immigration Medical Exams (I-693)
            </h1>
            <p className="text-xl text-slate-600 mb-4">Missouri City, Texas</p>
            <p className="text-2xl text-[#066BAA] font-bold mb-8 flex items-center justify-center gap-3">
              <Shield className="w-8 h-8" />
              USCIS Certified Civil Surgeon – Dr. Odia
            </p>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Are you in need of a USCIS immigration physical (I-693 medical exam)? We provide comprehensive, efficient, and USCIS-compliant immigration medical exams in a professional and family-friendly environment. Dr. Patrick Odia is a certified Civil Surgeon authorized by USCIS, and we’re here to make this process as smooth as possible for you and your loved ones.
            </p>
          </motion.div>

          {/* Hero Image - Smaller, Elegant */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/holdingpass.png"
                alt="USCIS Immigration Exam - Dr. Patrick Odia"
                width={1000}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-3xl font-bold">Fast. Accurate. Approved.</p>
                <p className="text-lg mt-1">Results in 2–3 days</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What’s Included */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-16"
          >
            What’s Included in Your Immigration Exam?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              "Physical examination by a Civil Surgeon",
              "Review and documentation of vaccination records",
              "Required lab testing (TB, Syphilis, Gonorrhea)",
              "Completion and sealing of the official USCIS I-693 form",
              "A personal copy of your completed form for your records",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-5 bg-slate-50 p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle2 className="w-8 h-8 text-[#066BAA] shrink-0 mt-0.5" />
                <p className="text-lg text-slate-700 leading-relaxed font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All-Inclusive Fee */}
      <section className="py-28 bg-linear-to-br from-[#066BAA]/4 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Image - Smaller, Refined */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative group max-w-md mx-auto lg:mx-0">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/bpcheck.png"
                    alt="Blood pressure check during USCIS exam"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                </div>
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg border border-slate-200">
                  <p className="font-bold text-[#066BAA] text-base">All-Inclusive</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
              style={{fontFamily : "poppins"}}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-10">
                All-Inclusive Fee
              </h2>

              <div className="space-y-6 mb-10">
                {[
                  "Physical examination",
                  "Required lab testing",
                  "Form I-693 completion and sealing",
                  "Vaccine review and immunization coordination (we do not offer vaccines)",
                  "One sealed USCIS I-693 form + one personal copy",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-5"
                  >
                    <div className="w-10 h-10 bg-[#066BAA]/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-[#066BAA]" />
                    </div>
                    <p className="text-lg text-slate-700 font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-linear-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4 shadow-inner"
              >
                <p className="text-amber-900  text-lg leading-relaxed">
                  Please note: Vaccinations are not included in the fee and may require additional cost. 
                  Immigration physicals are not covered by insurance. 
                  We accept cash and all major debit and credit cards.
                </p>
              </motion.div>

            
            </motion.div>
          </div>
        </div>
      </section>

      <Footer/>

 
    </>
  );
}