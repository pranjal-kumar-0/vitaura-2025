import React from 'react';

const HackathonSection = () => {
  return (
    <section className="hackathon-section text-neongreen font-fluxbox body-font bg-gradient-to-r from-black via-gray-950 to-black py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>

      <div className="container mx-auto text-center relative z">
        {/* Statistics */}
        <div className="stats-section flex flex-col md:flex-row justify-center items-center mb-16 space-y-6 md:space-y-0 md:space-x-16">
          <div
            className="stat-item text-center"
            style={{ marginRight: "5rem" }}
          >
            <h2
              className="stat-number hover:text-green-500 transition duration-300"
              style={{ fontSize: "6rem" }}
            >
              5+
            </h2>
            <p
              className="stat-label text-white text-lg"
              style={{ fontSize: "2.5rem" }}
            >
              Speakers
            </p>
          </div>
          <div
            className="stat-item text-center"
            style={{ marginRight: "5rem" }}
          >
            <h2
              className="stat-number hover:text-green-500 transition duration-300"
              style={{ fontSize: "6rem" }}
            >
              10+
            </h2>
            <p
              className="stat-label text-white text-lg"
              style={{ fontSize: "2.5rem" }}
            >
              Events
            </p>
          </div>
          <div
            className="stat-item text-center"
            style={{ marginRight: "5rem" }}
          >
            <h2
              className="stat-number hover:text-green-500 transition duration-300"
              style={{ fontSize: "6rem" }}
            >
              1000+
            </h2>
            <p
              className="stat-label text-white text-lg"
              style={{ fontSize: "2.5rem" }}
            >
              Attendees
            </p>
          </div>
          <div className="stat-item text-center">
            <h2
              className="stat-number hover:text-green-500 transition duration-300"
              style={{ fontSize: "6rem" }}
            >
              1Lakh+
            </h2>
            <p
              className="stat-label text-white text-lg"
              style={{ fontSize: "2.5rem" }}
            >
              Prizes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonSection;
