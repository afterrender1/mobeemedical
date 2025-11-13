"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const serviceLinks = [
    { name: "IMMIGRATION PHYSICALS", href: "/services/implants" },
    { name: "PREVENTATIVE SERVICES", href: "/services/cosmetic" },
    { name: "WEIGHTLOSS MANAGEMENT", href: "/services/orthodontics" },
    { name: "ACUTE AND CHRONIC CARE MANAGEMENT", href: "/services/whitening" },
  ];

  return (
    <nav
   className=" bg-white mx-0 sm:mx-0 md:mx-0 lg:mx-8 xl:mx-12 2xl:mx-30"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/mobee3.png"
            alt="Logo"
            width={180}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Center: Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8 text-gray-800 font-normal">
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/ourteam" className="hover:text-blue-600 transition">
              Meet the Team
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-600 transition">
              Services
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

      <AnimatePresence>
  {servicesOpen && (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ 
        duration: 0.28,
        ease: [0.32, 0, 0.2, 1],
      }}
      className="absolute top-14 left-1/2 -translate-x-1/2 w-72 
                 bg-white rounded-2xl shadow-xl 
                 border border-gray-200/80 
                 overflow-hidden z-50 
                 ring-1 ring-black/5"
      style={{
        boxShadow: `
          0 20px 25px -5px rgba(0, 0, 0, 0.06),
          0 8px 10px -6px rgba(0, 0, 0, 0.06),
          0 0 0 1px rgba(0, 0, 0, 0.04)
        `
      }}
    >
      <motion.ul className="py-2">
        {serviceLinks.map((link, index) => (
          <motion.li
            key={link.name}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
          >
            <Link
              href={link.href}
              onClick={() => setServicesOpen(false)}
              className="flex items-center justify-between 
                         px-6 py-3.5 text-gray-800 font-medium text-base
                         hover:bg-gray-50/80 
                         hover:text-[#066BAA] 
                         transition-all duration-200 
                         group"
            >
              <span className="tracking-tight">{link.name}</span>
              
              <motion.span
                className="text-[#066BAA] opacity-0 group-hover:opacity-100 
                           translate-x-0 group-hover:translate-x-1 
                           transition-all duration-300 font-bold"
              >
                →
              </motion.span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {/* Subtle bottom divider */}
      <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
    </motion.div>
  )}
</AnimatePresence>
          </li>

          <li>
            <Link href="/portal" className="hover:text-blue-600 transition">
              Patient Portal
            </Link>
          </li>
          {/* <li>
            <Link href="/blog" className="hover:text-blue-600 transition">
              Blog
            </Link>
          </li> */}
          <li>
            <Link href="/contactus" className="hover:text-blue-600 transition">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Right: Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/signup"
            className="bg-white text-black px-5 py-3 rounded-full font-semibold border hover:bg-black hover:text-white transition"
          >
            Sign up
          </Link>
          <Link
            href="/login"
            className="bg-black text-white px-5 py-3 rounded-full font-semibold hover:bg-black/90 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-gray-800"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-inner"
          >
            <ul className="flex flex-col text-gray-800 font-medium px-6 py-4 space-y-4">
              <li>
                <Link
                  href="/"
                  className="block hover:text-blue-600 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="block hover:text-blue-600 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Meet the Team
                </Link>
              </li>

              {/* Services Dropdown inside Mobile */}
              <li>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full hover:text-blue-600"
                >
                  <span>Services</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      servicesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 mt-2 space-y-2"
                    >
                      {serviceLinks.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="block text-gray-600 hover:text-blue-600"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link
                  href="/portal"
                  className="block hover:text-blue-600 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Patient Portal
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/blog"
                  className="block hover:text-blue-600 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Blog
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  className="block hover:text-blue-600 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Link>
              </li>

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                <Link
                  href="/signup"
                  className="text-center bg-white text-black border rounded-full py-3 font-semibold hover:bg-black hover:text-white transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign up
                </Link>
                <Link
                  href="/login"
                  className="text-center bg-black text-white rounded-full py-3 font-semibold hover:bg-black/90 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                </Link>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
