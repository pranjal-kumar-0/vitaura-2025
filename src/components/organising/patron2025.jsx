import React from "react";

import vc from "./images/patrons/vc.png";
import registrar from "./images/patrons/registrar.png";

import "./org.css";

const Patrons2025 = () => {
  return (
    <div className="bg-black rounded-xl p-6 sm:p-8 mb-20">
      <div>
        <h1 className="text-center mb-5 text-3xl sm:text-4xl font-fluxbox text-white">
          Patrons
        </h1>
      </div>
      <div className="wrapper grid grid-cols-1 gap-8">
        <div className="card flex flex-col items-center">
          <div className="poster mb-4">
            <img src={vc} alt="Patron 1" className="rounded-lg" />
          </div>
          <div className="details text-center">
            <h1 className="font-spacemono text-white">Dr. S. V. Kota Reddy</h1>
            <h2 className="font-spacemono text-gray-300">Vice Chancellor</h2>
          </div>
        </div>
        <div className="card flex flex-col items-center">
          <div className="poster mb-4">
            <img src={registrar} alt="Patron 2" className="rounded-lg" />
          </div>
          <div className="details text-center">
            <h1 className="font-spacemono text-white">
            Dr. Jagadish Chandra Mudiganti
            </h1>
            <h2 className="font-spacemono text-gray-300">Registrar</h2>
          </div>
        </div>

      </div>
      </div>

  );
};

export default Patrons2025;