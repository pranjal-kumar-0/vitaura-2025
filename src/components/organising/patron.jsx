import React from "react";
import sudhakar from "./images/patrons/sudhakar.png";
import associate from "./images/patrons/associate.png";
import vc from "./images/patrons/vc.png";
import registrar from "./images/patrons/registrar.png";
// import mocktailsImage from "assets/images/Mocktails1.png";
// import dessertsImage from "assets/images/Deserts.png";
// import qrCodeImage from "assets/images/qr-code-removebg-preview.png";
import "./org.css";

const Patrons = () => {
  return (
    <div className="bg-black rounded-xl p-6 sm:p-8 mb-20">
      <div>
        <h1 className="text-left pl-4 sm:pl-8 mb-5 text-3xl sm:text-4xl font-fluxbox text-white">
          Patron
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
              Dr. Jagadish Chandra Dhandapani
            </h1>
            <h2 className="font-spacemono text-gray-300">Registrar</h2>
          </div>
        </div>
        <div className="card flex flex-col items-center">
          <div className="poster mb-4">
            <img src={sudhakar} alt="Patron 3" className="rounded-lg" />
          </div>
          <div className="details text-center">
            <h1 className="font-spacemono text-white">
              Dr. S. Sudhakar Ilango
            </h1>
            <h2 className="font-spacemono text-gray-300">Dean SCOPE</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patrons;
