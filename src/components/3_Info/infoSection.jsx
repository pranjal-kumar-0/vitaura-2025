import React from 'react';

const VITAURAHackathonSection = () => {
  return (
    <section className="py-10 bg-black text-[#C1FF43]">
      {/* Main Container */}
      <div className="flex justify-center pt-[15rem] w-full">
        {/* Inner Container */}
        <div className="max-w-[1000px] w-full">
          <div className="text-left mb-16">
            <h1 className="hackathon-title text-[7rem] font-fluxbox font-extrabold mb-0 leading-[1.1]">
              <span className="text-hotpink">24Hrs</span>
              <br />
              <span className="text-neongreen">of VITAURA</span>
            </h1>
            <p className="text-gray-200 font-spacemono text-lg max-w-[100rem] mb-12">
              Brace yourself for the explosive debut of VITAURA's first chapter.
              Meet fellow innovators, compete, win big, and make connections at
              this unforgettable event!
            </p>
          </div>
        </div>
      </div>

      {/* Day Breakdown Section */}
      <div className="day-breakdown flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="day-box bg-[#F94AC9]  text-black p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
          <h3 className="day-title text-2xl font-semibold mb-2">Day 1</h3>
          <p className="day-description text-black">Kickoff and Orientation</p>
        </div>
        <div className="day-box bg-[#F94AC9] text-black p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
          <h3 className="day-title text-2xl font-semibold mb-2">Day 2</h3>
          <p className="day-description text-black">
            Building and Collaborating
          </p>
        </div>
        <div className="day-box bg-[#F94AC9] text-black p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
          <h3 className="day-title text-2xl font-semibold mb-2">Day 3</h3>
          <p className="day-description text-black">Presentation and Judging</p>
        </div>
      </div>
    </section>
  );
};

export default VITAURAHackathonSection;
