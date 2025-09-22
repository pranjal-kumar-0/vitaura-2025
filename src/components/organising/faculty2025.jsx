import React from "react";

import udit from "./images/faculty/udit_narayan.avif";
import shaik from "./images/faculty/shaik_subhani.avif";
import shanthi from "./images/faculty/shanthi.avif";
import kuppusamy from "./images/faculty/kuppusamy.avif";
import "./org.css";

const FacultyCoordinator2025 = () => {
  return (
    <div className="bg-black rounded-xl">
      <div>
        <h1 className="text-center mb-5 text-5xl font-fluxbox text-white">
          Faculty Coordinators
        </h1>
      </div>
      <div className="wrapper">
        {/* Faculty Coordinator 1 */}
        <div className="card">
          <div className="poster">
            <img src={udit} alt="Dr. Udit Narayan Kar" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. Udit Narayan Kar</h1>
            <h2 className="font-spacemono">Faculty Coordinator</h2>
            <p
              className="desc"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {/* Description or additional information */}
            </p>
          </div>
        </div>

        {/* Faculty Coordinator 2 */}
        <div className="card">
          <div className="poster">
            <img src={shaik} alt="Dr. Shaik Subhani" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. Shaik Subhani</h1>
            <h2 className="font-spacemono">Faculty Coordinator</h2>
            <p
              className="desc"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {/* Description or additional information */}
            </p>
          </div>
        </div>

        {/* Faculty Coordinator 3 */}
        <div className="card">
          <div className="poster">
            <img src={shanthi} alt="Dr. A. Shanthi" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. A. Shanthi</h1>
            <h2 className="font-spacemono">Faculty Coordinator</h2>
            <p
              className="desc"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
            </p>
          </div>
        </div>

        {/* Faculty Coordinator 4 */}
        <div className="card">
          <div className="poster">
            <img src={kuppusamy} alt="Dr. Kuppusamy P" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. Kuppusamy P</h1>
            <h2 className="font-spacemono">Faculty Coordinator</h2>
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

export default FacultyCoordinator2025;