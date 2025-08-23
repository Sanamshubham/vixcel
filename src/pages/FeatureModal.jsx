// src/components/FeatureModal.jsx
import React from "react";

const FeatureModal = ({ selected, onClose }) => {
  if (!selected) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg relative shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-2 right-3 text-3xl text-red-500 hover:text-red-600"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Icon and Title Section */}
        <div className="flex flex-col items-center justify-center mb-6 text-center">
          <div className="h-32 w-32 object-contain mb-3">
            {selected.icon}
          </div>
          <h3 className="text-4xl font-bold text-primary">
            {selected.title}
          </h3>
        </div>

        {/* Feature List */}
        <ul className="list-disc list-inside text-muted-foreground space-y-2 text-base">
          {selected.features.slice(0, 8).map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureModal;
