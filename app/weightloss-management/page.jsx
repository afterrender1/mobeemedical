// app/weight-loss/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Syringe, Scale, HeartPulse, Calendar, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WeightLossPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#066BAA]/5 via-white to-teal-50 py-20 sm:py-28 md:py-32 overflow-hidden" style={{ fontFamily: "Poppins" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 md:mb-10 leading-tight">
              Weight Loss Management
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-4 sm:mb-6 md:mb-8">
              Take control of your health and achieve lasting results with Mobee Medical’s exclusive <strong>12-Week Weight Loss Program</strong>, designed to help you shed excess weight, boost your confidence, and improve your overall well-being.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 md:mb-10">
              By incorporating the latest advancements in medical weight loss, including <strong>weekly GLP-1 injections</strong>, we provide a comprehensive, medically supervised approach tailored to your unique needs and goals.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.9 }} className="max-w-full sm:max-w-4xl md:max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/familywl.png"
                alt="Patient receiving GLP-1 injection for weight loss"
                width={1200}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-4 sm:left-6 md:left-10 text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-1 sm:mb-2">12 Weeks to a Healthier You</h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-xl">Medically Supervised • Science-Backed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Difference */}
      <section className="py-16 sm:py-20 md:py-28 bg-white" style={{ fontFamily: "Poppins" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 mb-6 sm:mb-8">What Makes Our Program Different</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed mb-4">
              <strong>GLP-1 injections</strong> are game-changing medications in the field of weight loss. These FDA-approved treatments work by regulating appetite and improving blood sugar control, helping you feel fuller for longer while reducing food cravings.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed mb-4">
              Unlike fad diets or one-size-fits-all programs, our approach is designed to address the biological and behavioral factors that impact weight. Through consistent monitoring and support, we focus on helping you not just lose weight but also <strong>maintain it for the long term</strong>.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-amber-700 font-medium mt-6 bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200">
              Please note that our Weight Loss Program is a <strong>cash-based service</strong>, offering the flexibility and personalized attention you deserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 sm:py-20 md:py-28 bg-linear-to-br from-[#066BAA]/4 to-teal-50" style={{ fontFamily: "Poppins" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 text-center mb-12 sm:mb-16 md:mb-20">
            How the Program Works
          </motion.h2>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-full sm:max-w-3xl md:max-w-4xl mx-auto mb-16 sm:mb-20">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hiw2.png"
                alt="Step-by-step weight loss journey with GLP-1"
                width={1000}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto">
            {[{
              icon: Calendar,
              title: "Initial Consultation",
              desc: "Our team understands your medical history, lifestyle, and weight loss goals, creating a customized plan for success.",
            },{
              icon: Syringe,
              title: "Weekly Injections",
              desc: "Administered safely, these regulate hormones influencing appetite and metabolism.",
            },{
              icon: HeartPulse,
              title: "Ongoing Support & Monitoring",
              desc: "Regular tracking, lifestyle recommendations, and encouragement keep you motivated.",
            }].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#066BAA]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <step.icon className="w-6 sm:w-8 h-6 sm:h-8 text-[#066BAA]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-16 sm:py-20 md:py-28 bg-linear-to-br from-[#066BAA]/4 to-teal-50" style={{ fontFamily: "Poppins" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 text-center mb-12 sm:mb-16 md:mb-20">
            The Benefits of Our Program
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              "Safe, Medically Supervised Weight Loss",
              "Sustainable Results",
              "Improved Health",
              "Personalized Care",
            ].map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i%2===0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i*0.1 }} viewport={{ once: true }} className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <CheckCircle2 className="w-6 sm:w-7 h-6 sm:h-7 text-[#066BAA] shrink-0 mt-1" />
                <p className="text-sm sm:text-base md:text-lg text-slate-700 font-medium leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
