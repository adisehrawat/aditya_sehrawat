import React from "react";
import TextTransition, { presets } from "react-text-transition";
import EmailIcon from "@mui/icons-material/Email";
import FadeInSection from "./FadeInSection";
import MovingComponent from "react-moving-text"
const Intro = () => {
  return (
    <div
      id="intro"
      className="flex flex-col items-center justify-center min-h-screen p-6 sm:p-4 bg-transparent text-white text-center pb-0"
    >
      <FadeInSection delay="0.2s">
        <h1 className=" mt-30 xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold">
          <MovingComponent
            type="fadeInFromLeft"
            duration="1300ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            hi, <span className="text-red-500">adi</span> here.
          </MovingComponent>
        </h1>
      </FadeInSection>

      <FadeInSection delay="0.5s">
        <h2 className="xl:text-5xl sm:text-2xl md:text-3xl text-xl xl:mt-10 md:mt-8 sm:mt-5 mt-2">Hemlo guys!</h2>
      </FadeInSection>

      <FadeInSection delay="0.8s">
        <p className="max-w-3xl mt-4 xl:text-3xl md:text-1.5xl sm:text-xl text-gray-300 px-4 sm:px-2">
          I thrive at the intersection of creativity and technology, solving complex problems and building impactful solutions.
          Proficient in Rust, Java, and C, I specialize in blockchain and Web3 development, with a strong foundation in data
          structures, algorithms, and compiler design. Passionate about decentralized systems, smart contracts, and high-performance
          applications, I’m particularly drawn to Solana and its potential. A lifelong learner and problem-solver, I’m driven by curiosity
          and a desire to create meaningful change through innovation.
        </p>
      </FadeInSection>

      <FadeInSection delay="1s">
        <a
          href="mailto:sehrawataditya22@gmail.com"
          className="mt-8 inline-flex items-center gap-3 xl:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold text-red-400 hover:text-red-500"
        >
          <EmailIcon fontSize="larger" />
          {" Say hi!"}
        </a>
      </FadeInSection>
    </div>
  );
};

export default Intro;
