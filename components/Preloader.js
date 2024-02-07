// components/Preloader.js
import React from "react";
import { motion } from "framer-motion";
import { BarLoader } from "react-spinners";

const Preloader = () => (
  <motion.div
    className="flex justify-center items-center h-screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <BarLoader color="#FFFFFF" loading={true} height={5} width={150} />
  </motion.div>
);

export default Preloader;
