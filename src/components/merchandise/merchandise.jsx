import React from "react";


const TshirtGallery = () => {
  // Array of t-shirt image data
  const tshirtData = [
    {
      img: "Virtualthreads.png", // Use absolute paths for public folder
      title: "Virtual Threads T-Shirt 1",
      price: "$25",
    },
    {
      img: "Virtualthreads (1).png",
      title: "Virtual Threads T-Shirt 2",
      price: "$30",
    },
    {
      img: "Virtualthreads (2).png",
      title: "Virtual Threads T-Shirt 3",
      price: "$35",
    },
  ];
  

  return (
    <div className="tshirt-gallery min-h-screen bg-black flex flex-col items-center text-center font-fluxbox py-10">
      <h2 className="text-4xl text-white mb-12 font-bold">T-Shirt Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-16">
        {tshirtData.map((tshirt, index) => (
          <div key={index} className="relative group p-6 bg-gray-800 rounded-lg shadow-lg">
            <img
              src={tshirt.img}
              alt={`T-shirt ${index + 1}`}
              className="w-full h-72 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
            <h3 className="text-xl text-white font-semibold mb-2">{tshirt.title}</h3>
            <p className="text-lg text-gray-400 mb-4">{tshirt.price}</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TshirtGallery;
