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
    <div className="bg-black rounded-xl p-6 sm:p-8">
      <div>
        <h1 className="text-left pl-4 sm:pl-8 mb-5 text-3xl sm:text-4xl font-fluxbox text-white">
          Patron
        </h1>
      </div>
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="poster">
            <img src={vc} alt="Patron 3" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. S. V. Kota Reddy</h1>
            <h2 className="font-spacemono">Vice Chancellor</h2>
          </div>
        </div>
        <div className="card">
          <div className="poster">
            <img src={registrar} alt="Patron 4" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. Jagadish Chandra Dhandapani</h1>
            <h2 className="font-spacemono">Registrar</h2>
          </div>
        </div>
        <div className="card">
          <div className="poster">
            <img src={sudhakar} alt="Patron 1" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. S. Sudhakar Ilango</h1>
            <h2 className="font-spacemono">Dean SCOPE</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patrons;
