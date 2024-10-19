import React from 'react';
import TataIMG from './images/tata.png';
import BmwIMG from './images/bmw.png';
import BrandHouseIMG from './images/brandhouse.png';
import SmaaashIMG from './images/smaaash.png';
import ChennaiShoppingMallIMG from './images/chennaiShoppingMall.png';
import KpIMG from './images/kp.png';

;


const SponsorsSection = () => {
  return (
    <section className="flex justify-center pt-[15rem] w-full">
      {/* Inner Container */}
      <div className="max-w-[1000px] w-full text-center">
        <div className="text-left mb-16">
          <h1 className="font-fluxbox text-[7rem] font-extrabold mb-0 leading-[1.1]">
            <span className="text-hotpink">PROUDLY</span>
            <br />
            <span className="text-neongreen">SPONSORED BY</span>
          </h1>
        </div>

        {/* Sponsors Logos */}
        <div className="sponsors-logos flex flex-wrap justify-center gap-8">
          <img src={TataIMG} alt="Sponsor 1" className="max-w-[300px] w-full" />
          <img src={BmwIMG} alt="Sponsor 2" className="max-w-[300px] w-full" />
          <img src={BrandHouseIMG} alt="Sponsor 3" className="max-w-[300px] w-full" />
          <img src={SmaaashIMG} alt="Sponsor 4" className="max-w-[350px] w-full" />
          <img src={ChennaiShoppingMallIMG} alt="Sponsor 5" className="max-w-[600px] w-full" />
          <img src={KpIMG} alt="Sponsor 6" className="max-w-[600px] w-full" />
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
