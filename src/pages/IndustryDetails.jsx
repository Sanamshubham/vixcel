import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { industries } from "./industries";

const IndustryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const industry = industries.find((ind) => ind.id === id);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!industry) return <p>Industry not found</p>;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="mb-4 text-blue-600 hover:underline">
          ← Back
        </button>

        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-28 h-28 mb-3">{industry.icon}</div>
          <h1 className="text-4xl font-bold text-primary">{industry.title}</h1>
        </div>

        <ul className="list-disc list-inside space-y-2 text-lg mb-8">
          {industry.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {industry.images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt=""
                className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <img src={selectedImage} alt="" className="max-w-full max-h-full rounded-lg" />
          <button
            className="absolute top-5 right-5 text-white text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default IndustryDetails;
