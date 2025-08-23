import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur-3xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Vixel Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="hidden sm:inline text-2xl font-bold text-primary">
                V I X E L
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-5">
            <Link
              to="/"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md h-10 px-4 py-2 text-sm font-medium"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center rounded-md h-10 w-10 hover:bg-accent hover:text-accent-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-4 text-center">
            <Link
              to="/"
              className="block text-foreground/80 hover:text-foreground"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-foreground/80 hover:text-foreground"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-foreground/80 hover:text-foreground"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block text-foreground/80 hover:text-foreground"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="block w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-md py-2 text-sm font-medium"
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
