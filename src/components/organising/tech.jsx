import React from "react";
import anand from "./images/tech/anand.png";
import atharv from "./images/tech/atharv1.png";
import devvrat from "./images/tech/devvrat.png";
import ayus from "./images/tech/ayus.jpeg";
// import mocktailsImage from "assets/images/Mocktails1.png";
// import dessertsImage from "assets/images/Deserts.png";
// import qrCodeImage from "assets/images/qr-code-removebg-preview.png";
import "./org.css";

const Tech = () => {
  return (
    <div className="bg-black rounded-xl p-6 sm:p-8 mb-20">
      <div>
        <h1 className="text-left pl-4 sm:pl-8 mb-5 text-3xl sm:text-4xl font-fluxbox text-white">
          Technical Team
        </h1>
      </div>
      <div className="wrapper grid grid-cols-1 gap-8">
        <div className="card flex flex-col items-center">
          <div className="poster mb-4">
            <img src={atharv} alt="Patron 1" className="rounded-lg" />
          </div>
          <div className="details text-center">
            <h1 className="font-spacemono text-white">Atharv Rastogi</h1>
            <h2 className="font-spacemono text-gray-300">
              Technical Lead - VITAURA, Uniquest
            </h2>
          </div>
        </div>
        <div className="card flex flex-col items-center">
          <div className="poster mb-4">
            <img src={devvrat} alt="Patron 2" className="rounded-lg" />
          </div>
          <div className="details text-center">
            <h1 className="font-spacemono text-white">Devvrat Pathak</h1>
            <h2 className="font-spacemono text-gray-300">
              Technical Lead - Entrepreneurship Club
            </h2>
          </div>
        </div>
        <div className="card flex flex-col items-center">
          <div className="poster mb-4">
            <img src={anand} alt="Patron 3" className="rounded-lg" />
          </div>
          <div className="details text-center">
            <h1 className="font-spacemono text-white">Anand RajaM</h1>
            <h2 className="font-spacemono text-gray-300">
              Technical Co-Lead - Uniquest
            </h2>
          </div>
        </div>

        <div className="card flex flex-col items-center">
          <div className="poster mb-4">
            <img src={ayus} alt="Patron 3" className="rounded-lg" />
          </div>
          <div className="details text-center">
            <h1 className="font-spacemono text-white">Ayus Pathak</h1>
            <h2 className="font-spacemono text-gray-300">
              President - Entrepreneurship Club
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
