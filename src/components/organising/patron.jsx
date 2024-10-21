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
    <div className="bg-black rounded-xl">
      <div>
        <h1 className="text-left pl-8 mb-5 text-5xl font-fluxbox text-white">
          Patron
        </h1>
      </div>
      <div className="wrapper">
        <div className="card">
          <div className="poster">
            <img src={vc} alt="Patron 3" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. S. V. Kota Reddy</h1>
            <h2 className="font-spacemono">Vice Chancellor</h2>
            <p
              className="desc"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {/* <img src={qrCodeImage} alt="QR code" /> */}
            </p>
          </div>
        </div>

        <div className="card">
          <div className="poster">
            <img src={registrar} alt="Patron 4" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. Jagadish Chandra Dhandapani</h1>
            <h2 className="font-spacemono">Registrar</h2>
            <p
              className="desc"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {/* <img src={qrCodeImage} alt="QR code" /> */}
            </p>
          </div>
        </div>

        <div className="card">
          <div className="poster">
            <img src={sudhakar} alt="Patron 1" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. S. Sudhakar Ilango</h1>
            <h2 className="font-spacemono">Dean SCOPE</h2>
            <p
              className="desc"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {/* <img src={qrCodeImage} alt="QR code" /> */}
            </p>
          </div>
        </div>

        {/* <div className="card">
        <div className="poster">
          <img src={mocktailsImage} alt="Mocktails image" />
        </div>
        <div className="details">
          <h1 className="font-spacemono">
            Mocktail Menu
          </h1>
          <h2 className="font-spacemono">
            Individual - From ₹100
          </h2>
          <p className="desc" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            <img src={qrCodeImage} alt="QR code" />
          </p>
        </div>
      </div>

      <div className="card">
        <div className="poster">
          <img src={dessertsImage} alt="Desserts image" />
        </div>
        <div className="details">
          <h1 className="font-spacemono">
            Desserts Menu
          </h1>
          <h2 className="font-spacemono">
            Complimentary - Included in Buffet
          </h2>
          <p className="desc" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            <img src={qrCodeImage} alt="QR code" />
          </p>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Patrons;
