import React from "react";
import convoTahir from "./images/convo/convo1.png";
import convoAbhinav from "./images/convo/convo2.png";


import "./org.css"

const Convenor2025 = () => {
  return (
    <div className="bg-black rounded-xl">
      <div>
        <h1 className="text-center mb-5 text-5xl font-fluxbox text-white">
          Conveners
        </h1>
      </div>
      <div className="wrapper">
        <div className="card">
          <div className="poster">
            <img src={convoTahir} alt="convenor 1" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">
              [2025 Convener Name 1]
            </h1>
            <h2 className="font-spacemono">
              Convener VITAURA'25 <br /> [Role/Club]
            </h2>
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
            <img src={convoAbhinav} alt="convenor 2" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">
              [2025 Convener Name 2]
            </h1>
            <h2 className="font-spacemono">
              Convener VITAURA'25 <br /> [Role/Club]
            </h2>
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

export default Convenor2025;