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
    <div className="bg-black rounded-xl">
      <div>
        <h1 className="text-center mb-5 text-5xl font-fluxbox text-white">
          Technical Team
        </h1>
      </div>
      <div className="wrapper">
        <div className="card">
          <div className="poster">
            <img src={atharv} alt="copatron 1" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Atharv Rastogi</h1>
            <h2 className="font-spacemono">
              Technical Lead - VITAURA, Uniquest
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
            <img src={devvrat} alt="Patron 4" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Devvrat Pathak</h1>
            <h2 className="font-spacemono">
              Technical Lead - Entrepreneurship Club
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
            <img src={anand} alt="Patron 1" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Anand RajaM</h1>
            <h2 className="font-spacemono">Technical Co-Lead - Uniquest</h2>
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
            <img src={ayus} alt="Patron 1" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Ayus Pathak</h1>
            <h2 className="font-spacemono">
              President - Entrepreneurship Club
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

export default Tech;
