import React, { useState } from "react";
import "./App.css";
import GalleryItem from "./components/Gallery/GalleryItem";
import "./components/Gallery/Gallery.css";
import BlurBackground from "./components/BlurBackground/BlurBackground.jsx";
import { motion } from "framer-motion";

import "./assets/fonts/acorn.woff";

import GalleryItemOpenContext from "./context/GalleryItemOpenContext.jsx";
import MyDetails from "./components/MyDetails/MyDetails.jsx";

const componentList = [
  "MORE: Mobility Report",
  "Portfolio for Architect",
  // "Game Collection",
  // "WhatToWatch",
];

function App() {
  const [itemOpen, setItemOpen] = useState(false);
  const value = { itemOpen, setItemOpen };

  return (
    <div className="App">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      ></motion.h1>
      <BlurBackground></BlurBackground>
      <span className="warning">This porfolio is work in progress 😓</span>
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="home-title">
          <h1>Hi! I'm Pau Galan.</h1>

          <h2>A Frontend Developer.</h2>

          <span>
            Enthusiast of FrontEnd design and development. More than two years
            of experience in React, TS, Tailwind... Eager to start a new
            adventure!
          </span>
        </div>
      </motion.h1>

      <MyDetails />
      <h1 className="projects-title">Projects</h1>

      <GalleryItemOpenContext.Provider value={value}>
        <div className="gallery">
          {componentList.map((el, index) => (
            <GalleryItem componentName={el} key={index} />
          ))}
        </div>
      </GalleryItemOpenContext.Provider>
    </div>
  );
}

export default App;
