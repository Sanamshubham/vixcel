import { useNavigate } from "react-router-dom";
import IndustryDetail from "./IndustryDetails";
import { industries } from "../data/industries";
import React, { useState, useEffect } from "react";
import img1 from "../assets/image3.jpeg";
import img2 from "../assets/image4.jpeg";
// Use a file with NO spaces in the name to avoid import issues
import img3 from "../assets/image6.jpg";


// import solutionsData from "../data/solutionsData";


const Services = () => {
  const navigate = useNavigate();
  //  const [selected, setSelected] = useState(null);
  // const [selectedImage, setSelectedImage] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // Right-side slideshow
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  // Responsive, JS-driven height so it works even if Tailwind arbitrary classes are purged
  const [sliderHeight, setSliderHeight] = useState(260); // mobile default

  useEffect(() => {
    const updateHeight = () => {
      const w = window.innerWidth;
      // mobile / sm / md / lg
      const h = w >= 1024 ? 520 : w >= 768 ? 420 : w >= 640 ? 320 : 260;
      setSliderHeight(h);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Auto-play every 3s
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images.length]);

  // Fullscreen gallery nav (popup)
  // const showNext = () => {
  //   const nextIndex = (currentIndex + 1) % solutionsData.length;
  //   setCurrentIndex(nextIndex);
  //   setSelectedImage(solutionsData[nextIndex]);
  // };

  // const showPrev = () => {
  //   const prevIndex = (currentIndex - 1 + solutionsData.length) % solutionsData.length;
  //   setCurrentIndex(prevIndex);
  //   setSelectedImage(solutionsData[prevIndex]);
  // };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Industries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {industries.map((item, idx) => (
              <div
                key={idx}
                onClick={() => navigate(`/industry/${idx}`)} // go to new page
                className="cursor-pointer border rounded-lg p-5 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <ul className="text-xs text-muted-foreground list-disc list-inside">
                  {item.features.slice(0, 3).map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Slideshow (same as before) */}

           <div
            className="relative w-full rounded-xl overflow-hidden flex items-center justify-center bg-white"
            style={{ height: sliderHeight }}
          >
            <img
              src={images[current]}
              alt={`Slide ${current + 1}`}
              className="absolute inset-0 w-full h-full object-contain"
              loading="eager"
            />

            {/* Prev */}
            <button
              onClick={() => setCurrent((p) => (p - 1 + images.length) % images.length)}
              className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/60"
              aria-label="Previous slide"
            >
              &#8592;
            </button>

            {/* Next */}
            <button
              onClick={() => setCurrent((p) => (p + 1) % images.length)}
              className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/60"
              aria-label="Next slide"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;