import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-secondary/30">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your space? Contact us for a consultation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          
          {/* Left - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                       width="24" height="24" fill="none" 
                       stroke="currentColor" strokeWidth="2" 
                       strokeLinecap="round" strokeLinejoin="round" 
                       className="lucide lucide-mail h-6 w-6 text-primary">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground break-words">info@vixeluae.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                       width="24" height="24" fill="none" 
                       stroke="currentColor" strokeWidth="2" 
                       strokeLinecap="round" strokeLinejoin="round" 
                       className="lucide lucide-phone h-6 w-6 text-primary">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
                             19.79 19.79 0 0 1-8.63-3.07 
                             19.5 19.5 0 0 1-6-6 
                             19.79 19.79 0 0 1-3.07-8.67 
                             A2 2 0 0 1 4.11 2h3a2 2 0 0 1 
                             2 1.72 12.84 12.84 0 0 0 
                             .7 2.81 2 2 0 0 1-.45 2.11L8.09 
                             9.91a16 16 0 0 0 6 6l1.27-1.27
                             a2 2 0 0 1 2.11-.45 12.84 
                             12.84 0 0 0 2.81.7A2 2 
                             0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground"> 050-9196290</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Social Media */}
          <div className="rounded-lg bg-card text-card-foreground shadow-lg p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 text-center">
              Follow Us
            </h3>
            <div className="flex justify-center gap-5 flex-wrap">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="bg-blue-600 hover:bg-blue-800 transition p-3 sm:p-4 rounded-full shadow-md">
                <FaFacebookF className="text-lg sm:text-xl md:text-2xl text-white" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="bg-pink-500 hover:bg-pink-700 transition p-3 sm:p-4 rounded-full shadow-md">
                <FaInstagram className="text-lg sm:text-xl md:text-2xl text-white" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="bg-blue-700 hover:bg-blue-900 transition p-3 sm:p-4 rounded-full shadow-md">
                <FaLinkedinIn className="text-lg sm:text-xl md:text-2xl text-white" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" 
                 className="bg-red-600 hover:bg-red-800 transition p-3 sm:p-4 rounded-full shadow-md">
                <FaYoutube className="text-lg sm:text-xl md:text-2xl text-white" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default Contact;
