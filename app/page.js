"use client";
import React from "react";
import { motion } from "framer-motion";
import Pemisah from "@/components/pemisah";
import Intro from "@/components/intro";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import SwipeCarousel from "@/components/swipecaraousel";
import Isi from "@/components/isi";
import Footer from "@/components/footer";
import Project from "@/components/project/project";
import Skill from "@/components/skill/skill";
import Preloader from "@/components/Preloader";

const Home = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.main className="flex min-h-screen flex-col bg-stone-700">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <motion.div
            className="container mt-24 mx-auto px-12 py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Intro />
            <Pemisah />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <About />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SwipeCarousel />
            </motion.div>
            <Isi />
            <Pemisah />
            <Skill />
            <Project />
            <Footer />
          </motion.div>
        </>
      )}
    </motion.main>
  );
};

export default Home;
