import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { industries } from "../data/industries";
import solutionsData from "../data/solutionsData";

const IndustryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const industry = industries[id]; // find industry by index
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!industry) return <p className="text-center mt-10">Industry not found.</p>;

  // Image Viewer navigation
  const showNext = () => {
    const filtered = solutionsData.filter((sol) => sol.category === industry.category);
    const nextIndex = (currentIndex + 1) % filtered.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filtered[nextIndex]);
  };

  const showPrev = () => {
    const filtered = solutionsData.filter((sol) => sol.category === industry.category);
    const prevIndex = (currentIndex - 1 + filtered.length) % filtered.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filtered[prevIndex]);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-primary font-bold hover:underline"
        >
          ← Back
        </button>

        {/* Industry Info */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            {React.cloneElement(industry.icon, {
              className: "w-28 h-28 object-contain text-primary",
            })}
          </div>
          <h2 className="text-4xl font-bold text-primary">{industry.title}</h2>
          <p className="text-lg text-muted-foreground mt-4">{industry.title1}</p>
        </div>

        {/* Features */}
       <ul className="!list-disc !list-outside pl-6 text-black text-lg mb-8">
  {industry.features.slice(0, 8).map((f, i) => (
    <li
      key={i}
      className="leading-relaxed marker:text-primary marker:text-xl"
    >
      {f}
    </li>
  ))}
</ul>



        <h3 className="text-2xl font-bold text-primary text-center mt-6 mb-6">
          {industry.title2}
        </h3>

        {/* Solutions Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {solutionsData
            .filter((sol) => sol.category === industry.category)
            .map((item, idx) => (
         <div
  key={idx}
  className="bg-white rounded shadow-md overflow-hidden flex flex-col items-center text-center p-3 hover:shadow-lg transition cursor-pointer h-[280px] w-[220px] sm:w-[240px] md:w-[260px]"
  onClick={() => {
    setSelectedImage(item);
    setCurrentIndex(idx);
  }}
>
  {/* Image Wrapper - fixed size box, centers all images */}
  <div className="w-40 h-40 flex items-center justify-center bg-gray-50 rounded-md">
    <img
      src={item.image}
      alt={item.title}
      className="max-w-full max-h-full object-contain"
    />
  </div>

  {/* Spacer pushes description down so all align */}
  <div className="flex-1" />

  {/* Description aligned at bottom */}
  <p className="text-sm sm:text-base text-[#8B4513] leading-snug">
    {item.description}
  </p>
</div>



            ))}
        </div>
      </div>

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

export default IndustryDetail;
