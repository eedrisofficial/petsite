import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Cat from "./pets/Cat";
import Dog from "./pets/Dog";
import { motion } from "framer-motion";
import Birds from "./pets/Birds";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        animate={{}}
        className="mb-10"
      >
        <Hero />
        <Dog />
        <Cat />
        <Birds />
      </motion.div>
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
