import React, { useState, useEffect } from "react";
import img1 from "../assets/image3.jpeg";
import img2 from "../assets/image4.jpeg";
// Use a file with NO spaces in the name to avoid import issues
import img3 from "../assets/image6.jpg";

import { industries } from "../pages/industries";
import solutionsData from "../data/solutionsData";

const Services = () => {
  const [selected, setSelected] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
  const showNext = () => {
    const nextIndex = (currentIndex + 1) % solutionsData.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(solutionsData[nextIndex]);
  };

  const showPrev = () => {
    const prevIndex = (currentIndex - 1 + solutionsData.length) % solutionsData.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(solutionsData[prevIndex]);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4">
            Industries We Serve and Our Solutions
          </h2>
          <p className="text-[#8B4513] max-w-xl mx-auto">
            Comprehensive <strong>storage</strong> solutions designed to meet your specific needs and requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Industries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {industries.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelected(item)}
                className="cursor-pointer border rounded-lg p-5 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
                <ul className="text-xs text-muted-foreground list-disc list-inside">
                  {item.features.slice(0, 3).map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Image Slideshow — guaranteed height via inline style */}
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

      {/* Industry Popup */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] relative shadow-lg flex flex-col overflow-hidden">
            {/* Close */}
            <button
              className="absolute top-3 right-4 text-3xl text-red-500 hover:text-red-600 font-bold"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>

            <div className="overflow-y-auto p-6">
              {/* Icon & Title */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="mb-3">
                  {React.cloneElement(selected.icon, {
                    className: "w-28 h-28 object-contain text-primary",
                  })}
                </div>
                <h3 className="text-4xl font-bold text-primary text-center">{selected.title}</h3>
                <h3 className="text-xl text-primary mt-7 w-full text-left">{selected.title1}</h3>
              </div>

              {/* Features */}
              <ul className="list-disc list-inside text-muted-foreground space-y-2 text-base mb-8">
                {selected.features.slice(0, 8).map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
  
                <h3 className="text-2xl font-bold text-primary text-center mt-4 mb-4">{selected.title2}</h3>




              {/* Solutions Grid */}
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {solutionsData
                  .filter((sol) => sol.category === selected.category)   //  filter here
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded shadow-md overflow-hidden flex flex-col items-center text-center p-4 hover:shadow-lg transition cursor-pointer h-[320px]"
                      onClick={() => {
                        setSelectedImage(item);
                        setCurrentIndex(idx);
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-40 h-40 object-cover object-center transition-transform duration-300 hover:scale-105"
                      />
                      <h2 className="text-lg font-semibold text-foreground mt-4">{item.title}</h2>
                      <p className="text-sm text-[#8B4513]">{item.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div className="fixed inset-0 backdrop-blur-2xl bg-black/80 flex items-center justify-center z-[60]">
          <div className="relative max-w-3xl w-full mx-4 text-white">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-3xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="flex justify-between mt-4 px-4">
              <button onClick={showPrev} className="text-lg font-semibold">
                &larr; Prev
              </button>
              <button onClick={showNext} className="text-lg font-semibold">
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
