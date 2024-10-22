import React from "react";
import convoTahir from "./images/convo/convo1.png";
import convoAbhinav from "./images/convo/convo2.png";
// import mocktailsImage from "assets/images/Mocktails1.png";
// import dessertsImage from "assets/images/Deserts.png";
// import qrCodeImage from "assets/images/qr-code-removebg-preview.png";
import "./org.css"

const Convenor = () => {
  return (
    <div className="bg-black rounded-xl">
      <div>
        <h1 className="text-left pl-8 mb-5 text-5xl font-fluxbox text-white">
          Convenors
        </h1>
      </div>
      <div className="wrapper">
        <div className="card">
          <div className="poster">
            <img src={convoTahir} alt="convenor 1" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">
              Syed Tahir Abbas
            </h1>
            <h2 className="font-spacemono">
              Convener VITAURA'24 <br /> Club Advisor - Uniquest
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
              Abhinav Pentani
            </h1>
            <h2 className="font-spacemono">
              Convener VITAURA'24 <br /> Club Advisor - Entrepreneurship Club
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

export default Convenor;
