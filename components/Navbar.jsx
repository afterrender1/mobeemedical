"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceLinks = [
    { name: "Dental Implants", href: "/services/implants" },
    { name: "Cosmetic Dentistry", href: "/services/cosmetic" },
    { name: "Orthodontics", href: "/services/orthodontics" },
    { name: "Teeth Whitening", href: "/services/whitening" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className=" mx-30 px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/mobee3.png"
              alt="Logo"
              width={220}
              height={64}
              className="object-contain"
            />
           
          </Link>
        </div>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-800 font-normal" style={{fontFamily : "Poppins"}}>
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/team" className="hover:text-blue-600 transition">
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
                  className="absolute top-8 left-0 bg-white shadow-md rounded-lg overflow-hidden w-48 border border-gray-100"
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

        {/* Right: Button */}
        <div className="hidden md:flex items-center  gap-2" style={{fontFamily : "poppins"}}>
          <Link
            href="/book"
            className="bg-white text-black px-5 py-3 rounded-full font-semibold hover:text-white border  duration-400 hover:bg-black/90 transition"
          >
            Sign up
          </Link>
          <Link
            href="/book"
            className="bg-black text-white px-5 py-3 rounded-full font-semibold hover:bg-black/90 transition"
          >
       Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
