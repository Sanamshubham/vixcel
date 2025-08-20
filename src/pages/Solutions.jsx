import React, { useState } from "react";
import solutionsData from "../data/solutionsData";

const Solutions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(solutionsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = solutionsData.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const openModal = (idx) => {
    setCurrentIndex(startIndex + idx);
    setSelectedImage(solutionsData[startIndex + idx]);
  };

  const closeModal = () => setSelectedImage(null);

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


  <div>  
    <div className="p-6 bg-secondary/10 min-h-screen">
      {/* <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
        Storage Solutions
      </h1> */}

      <p className="text-center text-muted-foreground text-sm md:text-base max-w-3xl mx-auto mb-12">
        All these solutions are offered in-house. To add your concepts, designs and more features to it,
        please contact us — we'll match your requirement.
      </p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {currentItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded shadow-md overflow-hidden flex flex-col items-center text-center p-4 hover:shadow-lg transition cursor-pointer"
            onClick={() => openModal(idx)}
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

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10 space-x-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx + 1}
            onClick={() => goToPage(idx + 1)}
            className={`px-3 py-2 rounded ${currentPage === idx + 1 ? "bg-primary text-white" : "bg-gray-200 hover:bg-gray-300"}`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Modal Viewer */}
      {selectedImage && (
        <div className="fixed inset-0 backdrop-blur-2xl bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full mx-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-primary text-3xl font-bold"
            >
              &times;
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain"
            />

            <div className="flex justify-between mt-4 text-primary px-4">
              <button onClick={showPrev} className="text-lg font-semibold">&larr; Prev</button>
              <button onClick={showNext} className="text-lg font-semibold">Next &rarr;</button>
            </div>
          </div>
        </div>
      )}
    </div>

    </div>
  );
};

export default Solutions;
