import React from "react";
import { motion } from "framer-motion";
import { style } from "../style";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${style.paddingX} absolute insert-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-4">
          {/* for create a line and dot  */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h2 className={`${style.heroHeadText} text-white`}>
            Hi, I am <span className="text-[#915eff]">Sangita</span>
          </h2>
          <p className={`${style.heroSubText} mt-2 mb-2 text-white-100`}>
            I am Software Engineer & I develop 3D visuals user interfaces & web
            applications <br className="sm:block hidden" />
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="relative xs:bottom-10 bottom-32 top-2 w-full flex justify-center items-center">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2"
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
