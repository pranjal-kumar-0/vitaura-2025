import React from 'react';
import { Link } from 'react-router-dom';
import image from "../images/finalfinal.png";
import { motion } from 'framer-motion';

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <img 
            src={image}
            alt="Vitaura Logo" 
            className="h-20 mx-auto mb-8"
          />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#FF7B02] to-[#FC4C05] text-transparent bg-clip-text font-spacemono">
              2025
            </span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#F50062] to-[#b700ba] text-transparent bg-clip-text font-fluxbox">
              VITAURA
            </span>
          </h2>
        </motion.div>

        {/* Registration Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-[#F50062] to-[#b700ba] text-white px-8 py-4 rounded-lg inline-block">
            <span className="text-xl font-bold font-spacemono">
              Registration Opening Soon
            </span>
          </div>
        </motion.div>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-400 text-lg mb-12 font-spacemono"
        >
          VIT-AP University •  26th Oct'25
        </motion.p>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            to="/"
            className="inline-flex items-center text-[#ff9500] bg-black border-2 border-[#ff9500] py-3 px-8 focus:outline-none hover:bg-[#ff5900] hover:text-white hover:border-[#ff5900] rounded text-lg font-fluxbox font-bold transition duration-300 ease-in-out"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoonPage;