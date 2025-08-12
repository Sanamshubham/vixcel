import React, { useState } from "react";
import img100 from "../assets/oil.png";
import img1 from "../assets/image3.jpeg";
import img2 from "../assets/image4.jpeg";
import img3 from "../assets/image6.jpg";

// Icons
import { FaIndustry, FaShippingFast, FaGraduationCap, FaHospitalAlt, FaHotel } from "react-icons/fa";

// Solutions Data (can be in a separate file)
const solutionsData = [
  { title: "Gas Locker", description: "Secure gas storage", image: img1 },
  { title: "PPGI Cabinet", description: "Durable storage", image: img2 },
  { title: "Fireproof Locker", description: "Safety assured", image: img3 },
  { title: "Tool Cabinet", description: "Organized tools", image: img1 },
  { title: "Component Storage", description: "Efficient storage", image: img2 },
  { title: "PP Cabinet", description: "High-quality storage", image: img3 },
  { title: "Bulk Storage", description: "Large capacity", image: img1 },
  { title: "Trolley", description: "Portable storage", image: img2 },
  { title: "Pallet Cabinet", description: "Heavy duty", image: img3 },
];

// Industries Data
const industries = [
  {
    title: "Oil & Gas Sector",
    icon: <img src={img100} alt="icon" className="h-10 w-10 object-contain" />,
    features: ["Gas lockers", "PPGI cabinets", "Fireproof solutions", "Custom safety design", "Ventilated storage", "Hazmat cabinets", "Explosion-proof locks", "Industrial grade steel"],
  },
  {
    title: "Industrial & Manufacturing Sector",
    icon: <FaIndustry className="text-3xl text-primary" />,
    features: ["Tool cabinets", "Component storage", "PP cabinets", "Heavy-duty racks", "Material bins", "Workbenches", "Mobile tool carts", "Automated storage"],
  },
  {
    title: "Logistics & Fulfillment sector",
    icon: <FaShippingFast className="text-3xl text-primary" />,
    features: ["Bulk storage", "Trolleys", "Pallet cabinets", "Sorting shelves", "Dock lockers", "Packaging stations", "Cold storage lockers", "Mobile racks"],
  },
  {
    title: "Hospitality Sector",
    icon: <FaHotel className="text-3xl text-primary" />,
    features: ["Bar cabinets", "Safe lockers", "Housekeeping trolleys", "Pantry racks", "Wine storage", "Luggage lockers", "Room service carts", "Mini-bar cabinets"],
  },
  {
    title: "Educational Sector",
    icon: <FaGraduationCap className="text-3xl text-primary" />,
    features: ["Student lockers", "Library cabinets", "Mobile charging lockers", "Stationery storage", "Lab cabinets", "Sports lockers", "Music storage", "Faculty file cabinets"],
  },
  {
    title: "Health Care Sector",
    icon: <FaHospitalAlt className="text-3xl text-primary" />,
    features: ["Medicine cabinets", "SS lockers", "Hazmat storage", "Refrigerated cabinets", "Surgical instrument storage", "First aid lockers", "Pharmacy shelves", "Biohazard bins"],
  },
];

const Services = () => {
  const [selected, setSelected] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  //this 
  const [current, setCurrent] = useState(0);
  const images = [img1, img2, img3];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Image Modal Navigation
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
          <h2 className="text-3xl md:text-4xl font-bold  text-[#8B4513] mb-4 ">
            Industries we serve and our solutions
          </h2>
          <p className="text-[#8B4513] max-w-xl mx-auto">
            Comprehensive <strong>storage</strong> solutions designed to meet your specific needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
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
                <ul className="text-sm text-muted-foreground list-disc list-inside">
                  {item.features.slice(0, 3).map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
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
          </div>

          
             {/* Cursor Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    current === index ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrent(index)}
                ></div>
              ))}
            </div>
        </div>
      </div>
      {/* Industry Popup */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] relative shadow-lg flex flex-col overflow-hidden">
            {/* Close button */}
            <button
              className="absolute top-3 right-4 text-3xl text-red-500 hover:text-red-600"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto p-6">
              {/* Icon & Title */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="mb-3">
                  {React.cloneElement(selected.icon, {
                    className: "w-28 h-28 object-contain text-primary",
                  })}
                </div>
                <h3 className="text-4xl font-bold text-primary">{selected.title}</h3>
              </div>

              {/* Features */}
              <ul className="list-disc list-inside text-muted-foreground space-y-2 text-base mb-8">
                {selected.features.slice(0, 8).map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              {/* Solutions Grid */}
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                {solutionsData.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded shadow-md overflow-hidden flex flex-col items-center text-center p-4 hover:shadow-lg transition cursor-pointer"
                    onClick={() => {
                      setSelectedImage(item);
                      setCurrentIndex(idx);
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-48 h-48 object-cover object-center transition-transform duration-300 hover:scale-105"
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
          <div className="relative max-w-3xl w-full mx-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="flex justify-between mt-4 text-white px-4">
              <button onClick={showPrev} className="text-lg font-semibold">&larr; Prev</button>
              <button onClick={showNext} className="text-lg font-semibold">Next &rarr;</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
