import React from "react";
<<<<<<< HEAD:src/components/organising/faculty.jsx
import udit from "./images/faculty/uditsir.png";
import chirra from "./images/faculty/chirra.png";
import reg2 from "./images/faculty/reg2.png";
import co3 from "./images/faculty/co3.png";
=======
import sudhakar from "./images/patrons/sudhakar.png";
import associate from "./images/patrons/associate.png";

import udit from "./images/copatrons/uditsir.png";
import chirra from "./images/copatrons/chirra.png";
import reg2 from "./images/copatrons/reg2.png";
import co3 from "./images/copatrons/co3.png";
>>>>>>> 596077fec99ce227eb869e1824a5bfbb44ab276d:src/components/organising/copatron.jsx
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

        <div className="card flex flex-col items-center">
          <div className="poster mb-4">
            <img src={associate} alt="Patron 3" className="rounded-lg" />
          </div>
          <div className="details text-center">
            <h1 className="font-spacemono text-white">
              Dr. Saroj Kumar Panigrahy
            </h1>
            <h2 className="font-spacemono text-gray-300">Associate Dean SCOPE</h2>
          </div>
        </div>


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
