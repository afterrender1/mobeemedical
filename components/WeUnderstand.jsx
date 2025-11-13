"use client";

import React from "react";

const WeUnderstand = () => {
  return (
    <>
      {/* Section Heading */}
      <div className="flex flex-col items-center text-center mb-1 mt-24 px-4">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
          style={{ fontFamily: "Poppins" }}
        >
          We Understand Your Challenges—<br className="hidden sm:block" />And We
          Are Here to Help
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
          Managing your health should not feel like an uphill battle. At{" "}
          <span className="font-semibold text-[#0670B2]">Mobee Medical</span>, we
          address common struggles with practical, effective solutions — so you
          can focus on feeling your best.
        </p>

        <div className="mt-6 w-24 h-1 bg-[#0670B2] rounded-full"></div>
      </div>

      {/* Main Section */}
      <section
        className="mx-6 lg:mx-30 bg-[#F9FBFF] py-20 rounded"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-14 px-6">
          {/* Left: Video */}
          <div className="flex-1 relative w-full h-72 sm:h-96 lg:h-[520px] rounded overflow-hidden shadow-xl group">
            <video
              className="object-cover w-full h-full rounded-2xl group-hover:scale-105 transition-transform duration-500"
              src="/videos/CHECKINGBP.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>

            {/* Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-linear-to-t from-[#00000050] via-[#00000020] to-transparent"></div>
          </div>

          {/* Right: Text Content */}
          <div className="flex-1 flex flex-col gap-6 lg:pr-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug">
              Practical Support for Real Health Challenges
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you’re managing chronic conditions or just aiming for
              everyday wellness, we make health care simple, personalized, and
              accessible. Our team listens, understands, and guides you every
              step of the way — because your journey to better health deserves
              attention and care.
            </p>

            {/* CTA Button */}
            <button className="mt-4 w-fit bg-[#066BAA] cursor-pointer text-white font-normal text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl hover:brightness-105 hover:scale-105 transition-all duration-300">
              Schedule A Visit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeUnderstand;
