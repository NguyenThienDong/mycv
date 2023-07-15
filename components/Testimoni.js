import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Projects = ({
  listProjects = [
    {
      name: "SSM Edufit",
      image: "/assets/ssm_edufit.png",
      discription:
        "Website about managing students, parents, classes, study programs of the international school group Edufit",
      company: "Educo",
      position: "Frontend Development",
      technologies: "ReactJs, Ant Design Pro, Redux",
      responsibilities: [
        "Students Management",
        "Timetable Mangement",
        "Class Management",
        "Study Management",
        "Health Management",
        "Attendance Student",
        "Family of student",
      ],
    },
    {
      name: "SSM Edufit",
      image: "/assets/ssm_edufit.png",
      discription:
        "Website about managing students, parents, classes, study programs of the international school group Edufit",
      company: "Educo",
      position: "Frontend Development",
      technologies: "ReactJs, Ant Design Pro, Redux",
      responsibilities: [
        "Students Management",
        "Timetable Mangement",
        "Class Management",
        "Study Management",
        "Health Management",
        "Attendance Student",
        "Family of student",
      ],
    },
    {
      name: "SSM Edufit",
      image: "/assets/ssm_edufit.png",
      discription:
        "Website about managing students, parents, classes, study programs of the international school group Edufit",
      company: "Educo",
      position: "Frontend Development",
      technologies: "ReactJs, Ant Design Pro, Redux",
      responsibilities: [
        "Students Management",
        "Timetable Mangement",
        "Class Management",
        "Study Management",
        "Health Management",
        "Attendance Student",
        "Family of student",
      ],
    },
    {
      name: "SSM Edufit",
      image: "/assets/ssm_edufit.png",
      discription:
        "Website about managing students, parents, classes, study programs of the international school group Edufit",
      company: "Educo",
      position: "Frontend Development",
      technologies: "ReactJs, Ant Design Pro, Redux",
      responsibilities: [
        "Students Management",
        "Timetable Mangement",
        "Class Management",
        "Study Management",
        "Health Management",
        "Attendance Student",
        "Family of student",
      ],
    },
    {
      name: "SSM Edufit",
      image: "/assets/ssm_edufit.png",
      discription:
        "Website about managing students, parents, classes, study programs of the international school group Edufit",
      company: "Educo",
      position: "Frontend Development",
      technologies: "ReactJs, Ant Design Pro, Redux",
      responsibilities: [
        "Students Management",
        "Timetable Mangement",
        "Class Management",
        "Study Management",
        "Health Management",
        "Attendance Student",
        "Family of student",
      ],
    },
    {
      name: "SSM Edufit",
      image: "/assets/ssm_edufit.png",
      discription:
        "Website about managing students, parents, classes, study programs of the international school group Edufit",
      company: "Educo",
      position: "Frontend Development",
      technologies: "ReactJs, Ant Design Pro, Redux",
      responsibilities: [
        "Students Management",
        "Timetable Mangement",
        "Class Management",
        "Study Management",
        "Health Management",
        "Attendance Student",
        "Family of student",
      ],
    },
    {
      name: "SSM Edufit",
      image: "/assets/ssm_edufit.png",
      discription:
        "Website about managing students, parents, classes, study programs of the international school group Edufit",
      company: "Educo",
      position: "Frontend Development",
      technologies: "ReactJs, Ant Design Pro, Redux",
      responsibilities: [
        "Students Management",
        "Timetable Mangement",
        "Class Management",
        "Study Management",
        "Health Management",
        "Attendance Student",
        "Family of student",
      ],
    },
    {
      name: "SSM Edufit",
      image: "/assets/ssm_edufit.png",
      discription:
        "Website about managing students, parents, classes, study programs of the international school group Edufit",
      company: "Educo",
      position: "Frontend Development",
      technologies: "ReactJs, Ant Design Pro, Redux",
      responsibilities: [
        "Students Management",
        "Timetable Mangement",
        "Class Management",
        "Study Management",
        "Health Management",
        "Attendance Student",
        "Family of student",
      ],
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listProjects.map((project, index) => (
          <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a
              href=""
              class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
              <div class="relative pb-48 overflow-hidden">
                <img
                  class="absolute inset-0 h-full w-full object-cover"
                  src={project.image}
                  alt=""
                />
              </div>
              <div class="p-4">
                <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  11/2022 - Present
                </span>
                <h2 class="mt-2 mb-2  font-bold">{project.name}</h2>
                <p class="text-sm">{project.discription}</p>
              </div>
              <div class="p-4 flex items-center text-sm text-gray-600">
                <span class="ml-2">{project.company}</span>
              </div>
            </a>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
