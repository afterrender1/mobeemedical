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
    { name: "Dental Implants", href: "/services/implants" },
    { name: "Cosmetic Dentistry", href: "/services/cosmetic" },
    { name: "Orthodontics", href: "/services/orthodontics" },
    { name: "Teeth Whitening", href: "/services/whitening" },
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
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-0 bg-white shadow-md rounded-lg overflow-hidden z-50 w-48 border border-gray-100"
                >
                  {serviceLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
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
            <Link href="/portal" className="hover:text-blue-600 transition">
              Patient Portal
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-600 transition">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600 transition">
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
              <li>
                <Link
                  href="/blog"
                  className="block hover:text-blue-600 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Blog
                </Link>
              </li>
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
