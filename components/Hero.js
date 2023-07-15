import { motion } from "framer-motion";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Trans from "./Trans";
import { MdLocationOn } from "react-icons/md";
import ButtonPrimary from "./misc/ButtonPrimary";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [viewMore, setViewMore] = useState(false);
  const listUser = [
    {
      name: "Hà Nội",
      icon: <MdLocationOn className="text-orange-500 text-2xl" />,
    },
    {
      name: "Hà Nội",
      number: "20",
      icon: "",
    },
    {
      name: "Server",
      number: "50",
      icon: "",
    },
  ];

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              <Trans id="personalSummary" />
            </h1>
            <div className="text-black-500 mt-4 mb-6 flex flex-col">
              <span>Position: Fullstack Developer</span>
              <span>Year of birth: 17/03/1998</span>
              <span>Gender: Male</span>
              {viewMore ? (
                <div className="flex flex-col">
                  <span>
                    Over 2.5 years of experience in programming with good
                    communication and quick learning skills
                  </span>
                  <span>
                    Strengths: Front-end technology and Back-end web application
                    development
                  </span>
                  <span>Proficiency in HTML, CSS, JavaScript, TypeScript</span>
                  <span>
                    Strong proficiency in JavaScript, including DOM manipulation
                    and the JavaScript object model
                  </span>
                  <span>
                    Thorough under standing of React.js and it score principles
                  </span>
                  <span>
                    Experience with popular React.js workflows (Redux, React
                    MobX, React Query)
                  </span>
                  <span>
                    Familiarity with newer specifications of EcmaScript
                  </span>
                  <span>Experience with data structure libraries</span>
                  <span>Familiarity with RESTful APIs</span>
                  <span>
                    Strong Experience in: JavaScript (ReactJS, VueJs, NodeJs),
                    MySQL, PostgreSNoSQL, GraphQL, JSON, API, AWS services
                  </span>
                  <span>
                    Proficient use of source code management tools: GIT
                  </span>
                  <span>
                    Proficiency in operating systems: Linux (Ubuntu, OSX),
                    Windows
                  </span>
                  <span>Ability to learn and apply new technology quickly</span>
                  <span>
                    Skilled in working under pressure and adapting to new
                    situations and challenges to best enhance the organizational
                    brand.
                  </span>
                </div>
              ) : null}
            </div>
            <ButtonPrimary clicked={() => setViewMore(!viewMore)}>
              <Trans id="viewMore" />
            </ButtonPrimary>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/Illustration1.png"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
