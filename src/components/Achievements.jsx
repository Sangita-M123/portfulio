import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { style } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl w-[300px] sm:w-[360px]"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover"></div>
        </div>
      </Tilt>
    </motion.div>
  );
};
const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}>My Achivements</p>
        <h2 className={style.sectionHeadText}>Achivements.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        ></motion.p>
      </div>
      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {certificates.map((certificate, index) => (
          <ProjectCard key={`project-${index}`} {...certificate} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
