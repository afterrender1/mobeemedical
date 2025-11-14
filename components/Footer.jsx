// components/Footer.jsx
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const linkHover = {
    hover: { x: 4, color: "#ffffff" },
  };

  return (
    <footer
      className="bg-[#082e46] text-gray-200 pt-12 pb-8 mx-4 sm:mx-6 lg:mx-32 rounded-2xl my-4"
      style={{ fontFamily: "Poppins" }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 py-6">
          {/* About */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Image
              src="/images/logos/mmwhite.png"
              alt="Mobee Medical Logo"
              width={180}
              height={60}
              className="object-contain h-12 sm:h-14"
              priority
            />
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Your partner in advanced healthcare solutions, providing personalized treatment and preventive care for a healthier tomorrow.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                {/* <FaInstagram size={20} /> */}
                <span className="text-xs">[Instagram]</span>
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                {/* <FaFacebookF size={20} /> */}
                <span className="text-xs">[Facebook]</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-base sm:text-lg font-semibold text-white">Contact Us</h3>
            <p className="text-gray-400 text-sm">7070 Knights Court, Suite 1503</p>
            <p className="text-gray-400 text-sm">Missouri City, TX 77459</p>
            <p className="text-gray-400 text-sm mt-2">Phone: (713) 324-8884</p>
            <p className="text-gray-400 text-sm">Email: info@mobeemedical.com</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-1.5 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/team", label: "Meet the Team" },
                { href: "/appointment", label: "Book Appointment" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact Us" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms & Conditions" },
              ].map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    variants={linkHover}
                    whileHover="hover"
                    className="text-gray-400 hover:text-white transition block"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/20 mt-8 pt-6 text-center text-gray-500 text-xs sm:text-sm"
        >
          © 2024 Mobee Medical - All Rights Reserved
        </motion.div>
      </motion.div>
    </footer>
  );
}