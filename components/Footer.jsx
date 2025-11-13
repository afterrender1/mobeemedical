"use client";

import Image from "next/image";
import React from "react";
// import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#082e46] text-gray-200 pt-10 mx-32 rounded-lg my-4" style={{fontFamily : "poppins"}}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 ">
        {/* Top Section */}
        <div className="md:flex md:justify-between md:items-start gap-8 py-6">
          {/* About */}
          <div className="md:w-1/3 mb-8 md:mb-0">
           <Image
              src="/images/logos/mmwhite.png"
              alt="Logo"
              width={180}
              height={60}
              className="object-contain"
            />
            <p className="text-gray-400">
              Your partner in advanced healthcare solutions, providing personalized treatment and preventive care for a healthier tomorrow.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {/* <FaInstagram size={20} /> */}
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {/* <FaFacebookF size={20} /> */}
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-400">7070 Knights Court, Suite 1503</p>
            <p className="text-gray-400">Missouri City, TX 77459</p>
            <p className="text-gray-400 mt-2">Phone: (713) 324-8884</p>
            <p className="text-gray-400">Email: info@mobeemedical.com</p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/team" className="hover:text-white">Meet the Team</a></li>
              <li><a href="/appointment" className="hover:text-white">Book Appointment</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/40 mt-8 py-8 text-center text-gray-500 text-sm">
          © 2024 AfterRender - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
