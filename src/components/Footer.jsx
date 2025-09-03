import React from "react";
import logo from "../assets/logo.jpeg"; // Adjust path as needed

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="text-center md:text-left">
          <img src={logo} alt="Vixel Logo" className="h-13 w-30 mx-auto md:mx-0 mb-2 rounded-[10%]" />
          <h3 className="text-2xl font-bold mb-2 hover:underline cursor-pointer transition">V I X E L</h3>
          <p className="opacity-90 text-sm">Your trusted destination for custom-built storage solutions.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 hover:text-white transition">Products</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="hover:underline cursor-pointer">CNC tools cabinets</li>
            <li className="hover:underline cursor-pointer">Fireman lockers</li>
            <li className="hover:underline cursor-pointer">Security Lockers</li>
            <li className="hover:underline cursor-pointer">Kitchen Cabinets</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 hover:text-white transition">Services</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="hover:underline cursor-pointer">Design Consultation</li>
            <li className="hover:underline cursor-pointer">Custom Manufacturing</li>
            <li className="hover:underline cursor-pointer">Professional Installation</li>
            <li className="hover:underline cursor-pointer">Maintenance Support</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 hover:text-white transition">Solutions</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="hover:underline cursor-pointer">Residential</li>
            <li className="hover:underline cursor-pointer">Commercial</li>
            <li className="hover:underline cursor-pointer">Industrial</li>
            <li className="hover:underline cursor-pointer">Hospitality</li>
          </ul>
        </div>
      </div>

      <div className="h-px w-full my-8 bg-primary-foreground/20"></div>

      {/* <!-- Website developed by Shubham Srivastav. Contact: 8960778911.
       LinkedIn: https://www.linkedin.com/in/shubham-srivastav-281803251/ --> */}


      <div className="text-center text-sm opacity-75">
        <p>© 2025 VIXEL Solutions. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
