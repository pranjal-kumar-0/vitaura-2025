import React from "react";
import "./org.css";
import sudhakar from "./images/co-patrons/associate.png";
import associate from "./images/co-patrons/sudhakar.png";

const CoPatrons2025 = () => {
  return (
    <div className="bg-black rounded-xl">
      <div>
        <h1 className="text-center mb-5 text-5xl font-fluxbox text-white">
          Co-patrons
        </h1>
      </div>
      <div className="wrapper">
        {/* Co-patron 1 */}
        <div className="card">
          <div className="poster">
            <img src={associate} alt="Co-patron 1" className="image" /> {/* Added image */}
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. Sudhakar Ilango </h1> {/* Example title */}
            <h2 className="font-spacemono">Dean SCOPE</h2>
            <p className="desc" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              {/* Add description for Co-patron 1 */}
            </p>
          </div>
        </div>

        {/* Co-patron 2 */}
        <div className="card">
          <div className="poster">
            <img src={sudhakar} alt="Co-patron 2" className="image" /> {/* Added image */}
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. Saroj Kumar Panigrahy</h1> {/* Example title */}
            <h2 className="font-spacemono">Associate Dean SCOPE</h2>
            <p className="desc" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              {/* Add description for Co-patron 2 */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoPatrons2025;