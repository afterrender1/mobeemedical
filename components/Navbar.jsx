// components/Navbar.tsx
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
    { name: "IMMIGRATION PHYSICALS", href: "/immigration-physicals" },
    { name: "PREVENTATIVE SERVICES", href: "/preventative-services" },
    { name: "WEIGHTLOSS MANAGEMENT", href: "/weightloss-management" },
    { name: "ACUTE AND CHRONIC CARE MANAGEMENT", href: "/acute-chronic-management" },
  ];

  return (
    <nav
      className="bg-white mx-auto w-full max-w-[1920px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-30"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/mobee3.png"
            alt="Logo"
            width={180}
            height={60}
            className="h-12 w-auto sm:h-14 lg:h-16 object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm xl:text-base font-normal text-gray-800">
          <li>
            <Link href="/" className="hover:text-[#066BAA] transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/ourteam" className="hover:text-[#066BAA] transition">
              Meet the Team
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#066BAA] transition">
              Services
              <ChevronDown
                size={18}
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.32, 0, 0.2, 1] }}
                  className="absolute top-14 left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl shadow-xl border border-gray-200/80 overflow-hidden z-50 ring-1 ring-black/5"
                  style={{
                    boxShadow: `
                      0 20px 25px -5px rgba(0, 0, 0, 0.06),
                      0 8px 10px -6px rgba(0, 0, 0, 0.06),
                      0 0 0 1px rgba(0, 0, 0, 0.04)
                    `,
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
                          className="flex items-center justify-between px-6 py-3.5 text-gray-800 font-medium text-sm xl:text-base hover:bg-gray-50/80 hover:text-[#066BAA] transition-all duration-200 group"
                        >
                          <span className="tracking-tight">{link.name}</span>
                          <motion.span
                            className="text-[#066BAA] opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300 font-bold"
                          >
                            →
                          </motion.span>
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link href="/portal" className="hover:text-[#066BAA] transition">
              Patient Portal
            </Link>
          </li>
          <li>
            <Link href="/contactus" className="hover:text-[#066BAA] transition">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/signup"
            className="bg-white text-black px-4 xl:px-5 py-2.5 xl:py-3 rounded-full font-semibold border hover:bg-black hover:text-white transition text-sm xl:text-base"
          >
            Sign up
          </Link>
          <Link
            href="/login"
            className="bg-black text-white px-4 xl:px-5 py-2.5 xl:py-3 rounded-full font-semibold hover:bg-black/90 transition text-sm xl:text-base"
          >
            Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-gray-800"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-inner"
          >
            <ul className="flex flex-col text-gray-800 font-medium px-6 py-4 space-y-4 text-base">
              <li>
                <Link
                  href="/"
                  className="block hover:text-[#066BAA] transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/ourteam"
                  className="block hover:text-[#066BAA] transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Meet the Team
                </Link>
              </li>

              {/* Mobile Services */}
              <li>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full hover:text-[#066BAA] transition"
                >
                  <span>Services</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 mt-2 space-y-2 text-sm text-gray-600"
                    >
                      {serviceLinks.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="block hover:text-[#066BAA] transition"
                            onClick={() => {
                              setMobileOpen(false);
                              setServicesOpen(false);
                            }}
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
                  className="block hover:text-[#066BAA] transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className="block hover:text-[#066BAA] transition"
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