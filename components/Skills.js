import { motion } from "framer-motion";
import Image from "next/image";
import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Trans from "./Trans";
import { FaAngular, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";

const technicalSkills = [
  "HTML, CSS, JavaScript, TypeScript",
  "Node (ExpressJS, NestJs)",
  "RESTful API, GraphQL",
  "MySQL, PostgreSQL, NoSQL (MongoDB)",
  "ReactJs, NextJs, VueJs",
  "UI: Material UI, Ant Design, TailwillCss, Bootstrap, CoreUI...",
  "GIT",
];

const softSkills = [
  "Teamwork and Collaboration",
  "Dependable and Responsible",
  "Teambuilding",
  "Active Listening",
  "Problem-Solving",
];

const skill = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="skills"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 text-center">
              <Trans id={"technicalSkills"} />
            </h3>
            <div>
              <p className="my-2 text-black-500">
                <Trans id={"technicalSkills"} />
              </p>
              <ul className="text-black-500 self-start list-inside ml-8">
                {technicalSkills.map((skill, index) => (
                  <motion.li
                    className="relative circle-check custom-list"
                    custom={{ duration: 2 + index }}
                    variants={scrollAnimation}
                    key={skill}
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <p className="my-2 text-black-500">
                <Trans id={"softSkills"} />
              </p>
              <ul className="text-black-500 self-start list-inside ml-8">
                {softSkills.map((skill, index) => (
                  <motion.li
                    className="relative circle-check custom-list"
                    custom={{ duration: 2 + index }}
                    variants={scrollAnimation}
                    key={skill}
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
            variants={scrollAnimation}
          >
            {/* <Netflix className="h-18 w-auto" /> */}
            <FaReact className="text-[64px] text-[#087ea4]" />
            <FaAngular className="text-[64px] text-[#c3002f]" />
            <FaVuejs className="text-[64px] text-[#42d392]" />
            <FaNodeJs className="text-[64px] text-[#84ba64]" />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default skill;
