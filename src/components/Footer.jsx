import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16 sm:py-20 lg:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Company Name */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-wide">VIXEL LLC </h2>
          {/* <p className="opacity-80 mt-2">
            Industrial Storage & Safety Solutions
          </p> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center lg:text-left">
          
          {/* Email */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <FaEnvelope className="text-xl" />
              <h4 className="font-semibold text-lg">Email</h4>
            </div>
            <p className="opacity-80">info@vixeluae.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <FaPhoneAlt className="text-xl" />
              <h4 className="font-semibold text-lg">Phone</h4>
            </div>
            <p className="opacity-80">050-9196290</p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="font-semibold mb-3 text-lg">Follow Us</h4>
            <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 transition p-3 rounded-full shadow-md"
              >
                <FaFacebookF className="text-xl" />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 transition p-3 rounded-full shadow-md"
              >
                <FaInstagram className="text-xl" />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 transition p-3 rounded-full shadow-md"
              >
                <FaLinkedinIn className="text-xl" />
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 transition p-3 rounded-full shadow-md"
              >
                <FaYoutube className="text-xl text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full my-10 bg-white/20"></div>

        {/* Bottom Note */}
        <div className="text-center text-sm opacity-80">
          <p>© 2025 VIXEL. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;