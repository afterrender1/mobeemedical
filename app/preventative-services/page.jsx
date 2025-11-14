// app/preventative-care/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CheckCircle2, Heart, Shield, Calendar, Phone, 
  Instagram, Facebook, MapPin, Mail, ArrowUp 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoveToTop from "@/components/MoveToTop";

export default function PreventativeCarePage() {
  return (
    <>
 

      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <section
          className="relative bg-linear-to-br from-[#066BAA]/5 via-white to-teal-50 py-28 overflow-hidden"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <h1 className="text-5xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Protect Your Health with Preventative Care
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-12 max-w-4xl mx-auto">
                Your health is your most valuable asset, and preventative care is the foundation of long-term wellness. 
                At Mobee Medical, we focus on identifying potential health risks early and empowering you to take proactive steps to stay healthy and vibrant. 
                With regular check-ups, screenings, and personalized guidance, we’re here to help you avoid illness and enjoy a better quality of life.
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
                  src="/images/preventative.png"
                  alt="Doctor discussing preventative care with patient"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h2 className="text-4xl font-bold mb-2">Prevention is Power</h2>
                  <p className="text-xl">Early action = lifelong health</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Preventative Care Matters */}
        <section className="py-28 bg-white" style={{ fontFamily: "Poppins" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Text */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl font-bold text-slate-900 mb-8">
                  Why Preventative Care Matters
                </h2>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  Did you know that many serious health conditions can be prevented or managed more effectively with early detection? Consider these facts:
                </p>

                <div className="space-y-6">
                  {[
                    "80% of heart disease, stroke, and type 2 diabetes cases are preventable with lifestyle changes and routine screenings.",
                    "Cancer screenings can detect many types of cancer early, significantly improving treatment outcomes.",
                    "Vaccines prevent 2-3 million deaths globally each year, highlighting the importance of immunizations.",
                  ].map((fact, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-5"
                    >
                      <Heart className="w-7 h-7 text-[#066BAA] shrink-0 mt-1" />
                      <p className="text-lg text-slate-700 font-medium">{fact}</p>
                    </motion.div>
                  ))}
                </div>

                <p className="text-lg text-slate-700 mt-8 leading-relaxed">
                  Preventative care doesn’t just save lives—it helps you live healthier, longer, and more comfortably.
                </p>
              </motion.div>

              {/* Right: Image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-first lg:order-last"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/images/running.png"
                    alt="Healthy lifestyle and active living"
                    width={2000}
                    height={700}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What’s Included */}
        <section className="py-28 bg-linear-to-br from-[#066BAA]/4 to-teal-50" style={{ fontFamily: "Poppins" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-slate-900 text-center mb-16"
            >
              What’s Included in Preventative Care?
            </motion.h2>

            <p className="text-center text-lg text-slate-700 max-w-4xl mx-auto mb-16 leading-relaxed">
              At Mobee Medical, our preventative services are designed to catch potential health issues early and keep you feeling your best. These include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: "Annual Check-Ups", desc: "Comprehensive health evaluations to monitor your overall well-being and address any concerns." },
                { title: "Cancer Screenings", desc: "Early detection of conditions like breast, cervical, and colorectal cancer for better outcomes." },
                { title: "Cardiovascular Health Assessments", desc: "Blood pressure, cholesterol, and heart health evaluations to reduce your risk of heart disease." },
                { title: "Diabetes Risk Monitoring", desc: "Screening and management plans for prediabetes and diabetes." },
                { title: "Immunizations", desc: "Up-to-date vaccines to protect you against illnesses like influenza, pneumonia, and more." },
                { title: "Lifestyle Counseling", desc: "Guidance on nutrition, exercise, stress management, and other habits to support your long-term health." },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
                >
                  <div className="w-14 h-14 bg-[#066BAA]/10 rounded-2xl flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#066BAA]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-lg text-slate-700 max-w-4xl mx-auto mt-16 leading-relaxed">
              Preventative care isn’t just about avoiding disease—it’s about optimizing your health and catching small issues before they become big problems.
            </p>
          </div>
        </section>

        {/* When to Seek Care */}
        <section className="py-28 bg-white" style={{ fontFamily: "Poppins" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/images/writing.png"
                    alt="Patient scheduling preventative care appointment"
                    width={800}
                    height={700}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <Calendar className="w-10 h-10 mb-2" />
                    <p className="text-2xl font-bold">Schedule Today</p>
                  </div>
                </div>
              </motion.div>

              {/* Right: Text */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl font-bold text-slate-900 mb-8">
                  When Should You Seek Preventative Care?
                </h2>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  Preventative care is for everyone, regardless of age or current health status. You don’t need to feel sick to visit your provider—in fact, the best time to prioritize your health is when you’re feeling well.
                </p>

                <div className="space-y-5">
                  {[
                    "Annual wellness visits to maintain a baseline of health",
                    "Age-appropriate screenings, such as mammograms or colonoscopies",
                    "Managing risk factors like high blood pressure or family history of chronic illness",
                    "Staying up-to-date on immunizations",
                  ].map((reason, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <Shield className="w-6 h-6 text-[#066BAA]" />
                      <p className="text-lg text-slate-700 font-medium">{reason}</p>
                    </motion.div>
                  ))}
                </div>

                <p className="text-lg text-slate-700 mt-8 leading-relaxed">
                  By staying proactive, you’re investing in your future health and well-being.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mobee Difference + CTA */}
        <section className="py-28 bg-linear-to-br from-[#066BAA]/6 to-teal-50" style={{ fontFamily: "Poppins" }}>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-slate-900 mb-8"
            >
              The Mobee Medical Difference
            </motion.h2>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto mb-12 leading-relaxed">
              At Mobee Medical, we go beyond basic check-ups to offer truly personalized care. Our providers take the time to understand your unique health needs and concerns, ensuring that every aspect of your health plan is tailored to you. We’re not just here to monitor your health—we’re here to partner with you in protecting and enhancing it.
            </p>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto mb-12 leading-relaxed">
              We understand that health management is a journey, and we are committed to being with you every step of the way. Our team works with you to create a care strategy that fits your lifestyle, goals, and preferences.
            </p>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto mb-16 leading-relaxed">
              With convenient telehealth options and in-person services, we make it easy to incorporate wellness practices into your busy life. Whether you’re at home or in the office, we ensure you have access to the support you need to stay healthy.
            </p>

          

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-12 max-w-6xl mx-auto border border-slate-200"
            >
              <h3 className="text-4xl font-bold text-slate-900 mb-6">
                Start Taking Control of Your Health Today
              </h3>
              <p className="text-lg text-slate-700 mb-10 leading-relaxed">
                Regular health check-ups are one of the most powerful tools you have to protect your well-being and avoid future complications. By identifying potential health concerns early, we can provide the appropriate guidance and support to help you lead a longer, healthier life. Let Mobee Medical help you stay ahead of potential health risks and support you in living your best life.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#066BAA] hover:bg-[#055996] text-white px-10 py-5 rounded-full font-bold text-xl transition flex items-center justify-center gap-3 shadow-lg"
                >
                  <Calendar className="w-6 h-6" />
                  Schedule Appointment
                </Link>
                <Link
                  href="tel:+17133248884"
                  className="border-2 border-[#066BAA] hover:bg-[#066BAA] hover:text-white text-[#066BAA] px-10 py-5 rounded-full font-bold text-xl transition flex items-center justify-center gap-3"
                >
                  <Phone className="w-6 h-6" />
                  Call (713) 324-8884
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
<Footer/>

 <MoveToTop/>
   
    </>
  );
}