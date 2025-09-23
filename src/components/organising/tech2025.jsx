import React from "react";
import tanvish from "./images/tech/tanvish-reddy-sanikommu.webp";
import pranjal from "./images/tech/pranjal-kumar.webp";
import shaunak from "./images/tech/shaunak.jpg";
import mayank from "./images/tech/mayank.jpg";


import "./org.css";

const Tech2025 = () => {
  return (
    <div className="bg-black rounded-xl">
      <div>
        <h1 className="text-center mb-5 text-5xl font-fluxbox text-white">
          Technical Team
        </h1>
      </div>
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <div className="card transition-all duration-300 hover:scale-105">
          <div className="poster">
            <img src={tanvish} alt="Tanvish Reddy Sanikommu" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Tanvish Reddy Sanikommu</h1>
            <h2 className="font-spacemono">
              Technical Lead
            </h2>
            <p
              className="desc"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
            </p>
          </div>
        </div>

        <div className="card transition-all duration-300 hover:scale-105">
          <div className="poster">
            <img src={pranjal} alt="Pranjal Kumar" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Pranjal Kumar</h1>
            <h2 className="font-spacemono">
              Technical Team Member
            </h2>
            <p
              className="desc"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
            </p>
          </div>
        </div>

        <div className="card transition-all duration-300 hover:scale-105">
          <div className="poster">
            <img src={shaunak} alt="Shaunak Choudary" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Shaunak Choudary</h1>
            <h2 className="font-spacemono">Technical Team Member</h2>
            <p
              className="desc"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
            </p>
          </div>
        </div>

        <div className="card transition-all duration-300 hover:scale-105">
          <div className="poster">
            <img src={mayank} alt="Mayank" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Mayank</h1>
            <h2 className="font-spacemono">
              Technical Team Member
            </h2>
            <p
              className="desc"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech2025;