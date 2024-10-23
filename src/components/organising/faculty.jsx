import React from "react";
import udit from "./images/faculty/uditsir.png";
import chirra from "./images/faculty/chirra.png";
import reg2 from "./images/faculty/reg2.png";
import co3 from "./images/faculty/co3.png";
// import mocktailsImage from "assets/images/Mocktails1.png";
// import dessertsImage from "assets/images/Deserts.png";
// import qrCodeImage from "assets/images/qr-code-removebg-preview.png";
import "./org.css";

const FacultyCoordinator = () => {
  return (
    <div className="bg-black rounded-xl">
      <div>
        <h1 className="text-left pl-8 mb-5 text-5xl font-fluxbox text-white">
        Faculty Coordinators
        </h1>
      </div>
      <div className="wrapper">
        <div className="card">
          <div className="poster">
            <img src={udit} alt="copatron 1" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. Udit Narayana Kar</h1>
            <h2 className="font-spacemono">Faculty Coordinator</h2>
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
            <img src={chirra} alt="Patron 4" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. Chirra Venkata Ramireddy</h1>
            <h2 className="font-spacemono">Faculty Coordinator</h2>
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
            <img src={reg2} alt="Patron 1" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. Kothandharaman Dhandapani</h1>
            <h2 className="font-spacemono">Faculty Coordinator</h2>
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
            <img src={co3} alt="Patron 1" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. Jeethu V Devasia</h1>
            <h2 className="font-spacemono">Faculty Coordinator</h2>
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

export default FacultyCoordinator;
