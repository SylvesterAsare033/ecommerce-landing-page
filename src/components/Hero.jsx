import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-white text-gray-900 py-16 md:py-20 flex justify-center items-center overflow-hidden">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 opacity-30 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl px-6 py-8 md:p-10 bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl mx-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to MyStore
        </h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8 drop-shadow-md">
          Discover the best products at unbeatable prices.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Shop Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;