import React, { useState } from "react";
import img1 from "../assets/image3.jpeg";
import img2 from "../assets/image6.jpg";
import img3 from "../assets/image5.jpeg"; // example image import

const Services = () => {
  const [current, setCurrent] = useState(0);
  const images = [img1 , img2 ,img3];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div>
      <section id="services" className="py-20 bg-white">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">Our Services &amp; Offerings</h2>
              <p class="text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive furniture solutions designed to meet your specific needs and requirements.</p>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Cards */}
            <div>
              {/* <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Services &amp; Offerings</h2>
              <p class="text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive furniture solutions designed to meet your specific needs and requirements.</p>
            */}

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="rounded-lg bg-card text-card-foreground group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div class="flex flex-col space-y-1.5 p-6">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house h-6 w-6 text-primary">
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></div>
                  <h3 class="text-2xl font-semibold leading-none tracking-tight group-hover:text-primary transition-colors">Custom Wardrobe Design</h3></div>
                <div class="p-6 pt-0"><p class="text-muted-foreground text-base">Tailor-made wardrobes designed to fit your space, style, and storage needs.</p></div></div>
              <div class="rounded-lg bg-card text-card-foreground group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div class="flex flex-col space-y-1.5 p-6"><div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building h-6 w-6 text-primary">
                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path>
                    <path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path>
                    <path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg></div><h3 class="text-2xl font-semibold leading-none tracking-tight group-hover:text-primary transition-colors">Office Furniture Solutions</h3></div>
                <div class="p-6 pt-0"><p class="text-muted-foreground text-base">Durable cabinets and secure filing units tailored for corporate environments.</p></div></div><
                  div class="rounded-lg bg-card text-card-foreground group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div class="flex flex-col space-y-1.5 p-6"><div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock h-6 w-6 text-primary">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
                  <h3 class="text-2xl font-semibold leading-none tracking-tight group-hover:text-primary transition-colors">High-Security Lockers</h3></div>
                <div class="p-6 pt-0"><p class="text-muted-foreground text-base">Robust and secure lockers for personal, office, or industrial use.</p></div></div>
              <div class="rounded-lg bg-card text-card-foreground group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div class="flex flex-col space-y-1.5 p-6"><div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench h-6 w-6 text-primary">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z">
                    </path></svg></div><h3 class="text-2xl font-semibold leading-none tracking-tight group-hover:text-primary transition-colors">Modular Cabinets</h3></div>
                <div class="p-6 pt-0"><p class="text-muted-foreground text-base">Space-saving, modern cabinets that combine utility with aesthetics.</p></div></div>
              <div class="rounded-lg bg-card text-card-foreground group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div class="flex flex-col space-y-1.5 p-6"><div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-6 w-6 text-primary">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg></div>
                  <h3 class="text-2xl font-semibold leading-none tracking-tight group-hover:text-primary transition-colors">Kitchen Storage Solutions</h3></div>
                <div class="p-6 pt-0"><p class="text-muted-foreground text-base">Smart, ergonomic kitchen cabinets crafted for daily convenience and lasting performance.</p>
                </div>

                </div>
              </div>
            </div>


          


          {/* Right Image Slider */}
          <div className="relative w-full h-full max-h-[600px] rounded-xl overflow-hidden">
            <img
              src={images[current]}
              alt={`Slide ${current + 1}`}
              className="w-550 h-full object-cover transition-all duration-700"
            />
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 text-white rounded-full p-2 hover:bg-black/50"
            >
              &#8592;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 text-white rounded-full p-2 hover:bg-black/50"
            >
              &#8594;
            </button>

             {/* Cursor Indicator */}
            {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    current === index ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrent(index)}
                ></div>
              ))}
            </div> */}
          </div>
        </div>
       </div>
      </section>
    </div>
  );
};

export default Services;



