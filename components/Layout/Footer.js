import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import { FaFacebookF, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Mail } from "react-feather";

const Footer = () => {
  const handleCall = () => {
    const telLink = `tel:+84334707290`;
    window.location.href = telLink;
  };
  const handleMail = () => {
    const mailtoLink = `mailto:nguyenthiendong17031998@gmail.com`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="bg-white-300 pt-44 pb-24" id="contact">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoVPN className="h-8 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">LaslesVPN</strong> is a private
            virtual network that has unique Skillss and has high security.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
              onClick={() =>
                window.open("https://www.facebook.com/dongnt1703", "_blank")
              }
            >
              <FaFacebookF className="text-[#f53855]" />
            </div>
            <div
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
              onClick={() =>
                window.open("https://github.com/NguyenThienDong", "_blank")
              }
            >
              <FaGithub className="text-[#f53855]" />
            </div>
            <div
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/nguyen-thien-dong-752357188/",
                  "_blank"
                )
              }
            >
              <FaLinkedin className="text-[#f53855]" />
            </div>
            <div
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
              onClick={handleCall}
            >
              <FaPhoneAlt className="text-[#f53855]" />
            </div>
            <div
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
              onClick={handleMail}
            >
              <SiGmail className="text-[#f53855]" />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - LaslesVPN
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Download{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Pricing{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Locations{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Server{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Countries{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              LaslesVPN ?{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Tutorials{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Affiliate{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
