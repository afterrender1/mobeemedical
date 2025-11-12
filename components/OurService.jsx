"use client";

import React from "react";

const services = [
  {
    title: "Chronic Condition Management",
    description:
      "We provide expert care for conditions like diabetes and hypertension, offering personalized plans and ongoing support to help you take control of your health and live your best life.",
    icon: "/images/chronic.jpg",
    cta: "Learn More",
  },
  {
    title: "Preventative Health and Wellness",
    description:
      "Your health is your greatest asset. Through regular check-ups, screenings, and personalized wellness plans, we help you stay proactive, confident, and in control of your well-being.",
    icon: "/images/health.jpg",
    cta: "Learn More",
  },
  {
    title: "Exclusive 12 Week Weight Loss Program",
    description:
      "Transform your health with a medically supervised plan that includes personalized support and progress tracking to help you achieve your weight loss goals and feel your best.",
    icon: "/images/wlp.jpg",
    cta: "Learn More",
  },
];

export default function OurServices() {
  return (
    <section className="w-full bg-gray-50 py-16" style={{fontFamily : "poppins"}}>
      <div className="max-w-[1650px] mx-auto px-6">
   <div className="text-center mb-12">
  {/* Section Heading */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
    Our Services
  </h2>

  {/* Section Subheading / Description */}
  <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
    Whether you are ready to take control of your weight, manage a chronic condition, or stay proactive with preventative care, our experts at Mobee Medical are here to guide and support you every step of the way.
  </p>

  {/* Optional Accent Underline */}
  <div className="mt-6 w-24 h-1 bg-blue-600 rounded-full mx-auto"></div>
</div>

        

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl p-6 flex flex-col justify-between shadow hover:shadow-lg transition"
            >
              {/* Icon/Image */}
              <div className="w-full h-140 mb-6 relative">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>

              {/* CTA Button */}
<a
  href="#"
  className="mt-3 relative inline-block px-8 py-3 font-semibold text-blue-700 border-2 border-[#066BAA] rounded-full overflow-hidden group"
>
  <span className="absolute inset-0 bg-[#066BAA] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out rounded-full"></span>
  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
    {service.cta}
  </span>
</a>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
