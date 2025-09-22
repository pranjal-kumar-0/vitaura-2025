import React from "react";

import udit from "./images/faculty/uditsir.png";
import chirra from "./images/faculty/chirra.png";
import reg2 from "./images/faculty/reg2.png";
import co3 from "./images/faculty/co3.png";
import "./org.css";

const FacultyCoordinator = () => {
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
            <img src={udit} alt="Dr. Udit Narayana Kar" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. Udit Narayana Kar</h1>
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
            <img src={chirra} alt="Dr. Chirra Venkata Ramireddy" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. Chirra Venkata Ramireddy</h1>
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
            <img src={reg2} alt="Dr. Kothandharaman Dhandapani" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. Kothandharaman Dhandapani</h1>
            <h2 className="font-spacemono">Faculty Coordinator</h2>
            <p
              className="desc"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {/* Description or additional information */}
            </p>
          </div>
        </div>

        {/* Faculty Coordinator 4 */}
        <div className="card">
          <div className="poster">
            <img src={co3} alt="Dr. Jeethu V Devasia" />
          </div>
          <div className="details">
            <h1 className="font-spacemono">Dr. Jeethu V Devasia</h1>
            <h2 className="font-spacemono">Faculty Coordinator</h2>
            <p
              className="desc"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {/* Description or additional information */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyCoordinator;
