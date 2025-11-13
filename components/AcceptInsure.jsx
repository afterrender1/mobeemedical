"use client";

import React from "react";
import { Check } from "lucide-react";

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
  return (
    <section className="flex justify-center py-20 px-4 bg-[#F8FBFF]" style={{fontFamily : "poppins"}}>
      <div className="w-full max-w-5xl bg-linear-to-b from-[#E9F5FF] to-[#CDE9FF] text-[#0A2540] rounded-2xl shadow-lg p-10 border border-blue-300 transition-all duration-500 hover:shadow-xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm text-[#1B70C9] mb-2 uppercase tracking-wide font-semibold">
            We Accept
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-snug">
            Accepted Insurances
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            We proudly collaborate with trusted insurance providers to make
            quality healthcare accessible and affordable for everyone.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-10 ">
          <button className="bg-[#0670B2] cursor-pointer text-white font-semibold text-lg px-8 py-3 rounded-lg hover:scale-105 hover:shadow-lg hover:brightness-110 transition-all duration-300">
            Verify My Insurance
          </button>
        </div>

        {/* List Section */}
        <div className="border-t border-blue-200 pt-8">
          <h4 className="text-[#0A2540] font-semibold mb-6 text-center text-lg">
            Our Insurance Partners Include:
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-700 text-sm">
            {insurances.map((plan, index) => (
              <div
                key={index}
                className="flex items-start gap-3 cursor-default bg-white  border border-blue-100 p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Check className="w-5 h-5 text-[#1B70C9] shrink-0 mt-0.5" />
                <span className="font-medium">{plan}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcceptedInsure;
