import React from "react";
import Navbar from "../navbar/navbar";

const TshirtGallery = () => {
  // Array of t-shirt image data (front and back for the same t-shirt)
  const tshirtData = [
    {
      frontImg: "Virtualthreads (2).png",
      backImg: "Virtualthreads (1).png",
      title: "Virtual Threads T-Shirt",
      price: "₹350",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="tshirt-gallery min-h-screen bg-black flex flex-col items-center place-content-center text-center font-fluxbox py-50">
        <h2 className="text-4xl text-white mb-12 font-bold">
          T-Shirt Collection
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-10 px-4 md:px-16">
            {tshirtData.map((tshirt, index) => (
              <div
                key={index}
                className="relative group p-6 bg-orange-100 rounded-lg shadow-lg"
              >
                <div className="flex justify-center gap-4 items-center">
                  <img
                    src={tshirt.frontImg}
                    alt={`T-shirt Front ${index + 1}`}
                    className="w-48 h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  />
                  <img
                    src={tshirt.backImg}
                    alt={`T-shirt Back ${index + 1}`}
                    className="w-48 h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl text-black font-semibold mb-2 mt-4">
                  {tshirt.title}
                </h3>
                <p className="text-lg text-gray-700 mb-4">{tshirt.price}</p>
                <a
                  href="https://forms.gle/RjDrJkKkwWVG52Hr6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gradient-to-r from-[#F50062] to-[#b700ba]  py-2 px-4 rounded-lg transition duration-300 text-white">
                    Buy Now
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TshirtGallery;
