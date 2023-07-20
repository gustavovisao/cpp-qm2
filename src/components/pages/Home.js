import React from "react";
import "../../App.css";
import Sobre from "../Sobre";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Inscrever from "../Inscrever";
import Parceiros from "../Parceiros";

function Home() {
  return (
    <>
      <HeroSection />
      <Sobre />
      <Inscrever />
      <Parceiros />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
