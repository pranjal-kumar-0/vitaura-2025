import React from "react";
import convoTahir from "./images/convo/convo1.png";
import dewansh from "./images/convo/dewansh.jpg";


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
              Sadiq Hasnain
            </h1>
            <h2 className="font-spacemono">
              Convener VITAURA'25
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
            <img src={dewansh} alt="convenor 2" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">
              Dewansh Wagh
            </h1>
            <h2 className="font-spacemono">
              Convener VITAURA'25 <br />
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