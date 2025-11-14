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
              Weight Loss Management
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed mb-12 max-w-4xl mx-auto">
              Take control of your health and achieve lasting results with Mobee Medical’s exclusive <strong>12-Week Weight Loss Program</strong>, designed to help you shed excess weight, boost your confidence, and improve your overall well-being.
            </p>
            <p className="text-lg text-slate-600 mb-10 max-w-4xl mx-auto">
              By incorporating the latest advancements in medical weight loss, including <strong>weekly GLP-1 injections</strong>, we provide a comprehensive, medically supervised approach tailored to your unique needs and goals.
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
                src="/images/familywl.png"
                alt="Patient receiving GLP-1 injection for weight loss"
                width={1200}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <h2 className="text-4xl font-bold mb-2">12 Weeks to a Healthier You</h2>
                <p className="text-xl">Medically Supervised • Science-Backed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Our Program Different */}
      <section className="py-28 bg-white" style={{fontFamily : "poppins"}}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-5xl font-bold text-slate-900 mb-8">What Makes Our Program Different</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>GLP-1 injections</strong> are game-changing medications in the field of weight loss. These FDA-approved treatments work by regulating appetite and improving blood sugar control, helping you feel fuller for longer while reducing food cravings.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mt-6">
              Unlike fad diets or one-size-fits-all programs, our approach is designed to address the biological and behavioral factors that impact weight. Through consistent monitoring and support, we focus on helping you not just lose weight but also <strong>maintain it for the long term</strong>.
            </p>
            <p className="text-sm text-amber-700 font-medium mt-8 bg-amber-50 rounded-2xl p-5 border border-amber-200">
              Please note that our Weight Loss Program is a <strong>cash-based service</strong>, offering the flexibility and personalized attention you deserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How the Program Works - With Image */}
      <section className="py-28 bg-linear-to-br from-[#066BAA]/4 to-teal-50 cursor-default" style={{fontFamily : "poppins"}}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-slate-900 text-center mb-16"
          >
            How the Program Works
          </motion.h2>

          {/* Image Above Steps */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hiw2.png"
                alt="Step-by-step weight loss journey with GLP-1"
                width={1000}
                height={500}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto" >
            {[
              {
                icon: Calendar,
                title: "Initial Consultation",
                desc: "During your first visit, our experienced providers will take the time to understand your medical history, lifestyle, and weight loss goals. Together, we’ll create a customized plan that fits your needs and sets you up for success.",
              },
              {
                icon: Syringe,
                title: "Weekly Injections",
                desc: "Your journey will include weekly injections, carefully administered and monitored by our medical team to ensure safety and effectiveness. These medications help regulate hormones that influence appetite and metabolism.",
              },
              {
                icon: HeartPulse,
                title: "Ongoing Support & Monitoring",
                desc: "Weight loss is a journey, and we’re with you every step of the way. Our team will provide regular progress tracking, lifestyle recommendations, and encouragement to keep you motivated.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8  hover:shadow-lg transition-shadow border border-slate-200 text-center"
              >
                <div className="w-16 h-16 bg-[#066BAA]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-9 h-9 text-[#066BAA]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Obesity Management */}
      <section className="py-28 bg-white" style={{fontFamily : "poppins"}}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-slate-900 mb-8"
          >
            Obesity Management Services
          </motion.h2>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed mb-10">
            Obesity is a complex condition that affects more than <strong>40% of adults in the United States</strong> and is often tied to other serious health issues like diabetes, hypertension, and cardiovascular disease.
          </p>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
            At Mobee Medical, we take a <strong>personalized, science-backed approach</strong> to help you manage obesity effectively. Whether you’re looking for a structured program like our 12-Week Weight Loss Program or more general guidance, we’re here to provide expert care that works for you.
          </p>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-28 bg-linear-to-br from-[#066BAA]/4 to-teal-50" style={{fontFamily : "poppins"}}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-slate-900 text-center mb-16"
          >
            The Benefits of Our Program
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              "Safe, Medically Supervised Weight Loss: Our program prioritizes your safety and health at every step.",
              "Sustainable Results: Backed by science, our treatments target the root causes of weight gain, helping you maintain your progress.",
              "Improved Health: Beyond weight loss, many participants experience better energy levels, improved blood sugar control, and reduced risk of related health conditions.",
              "Personalized Care: No two journeys are the same. Your plan is tailored to your specific goals, challenges, and lifestyle.",
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-5 bg-white p-7 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <CheckCircle2 className="w-8 h-8 text-[#066BAA] shrink-0 mt-1" />
                <p className="text-lg text-slate-700 font-medium leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Is This Program Right for You? - With Image */}
      <section className="py-28 bg-white" style={{fontFamily : "poppins"}}>
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
                  src="/images/gym.png"
                  alt="Before and after weight loss transformation"
                  width={800}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <Scale className="w-10 h-10 mb-2" />
                  <p className="text-2xl font-bold">Real Results</p>
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
            >
              <h2 className="text-5xl font-bold text-slate-900 mb-8">
                Is This Program Right for You?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you’ve struggled with traditional diets, feel stuck in your weight loss journey, or are looking for a <strong>proven, safe, and effective solution</strong>, this program may be the right fit for you.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our expert team will guide you every step of the way, ensuring you feel fully supported, informed, and truly empowered.
              </p>
              <p className="text-xl font-semibold text-[#066BAA] mt-8">
                Start your journey toward a healthier, happier, and more fulfilling you today.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer/>

    
    </>
  );
}