import React, { useState } from "react";
import { Phone, Mail } from "react-feather";
import { AiOutlinePlus } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const SpeedDial = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCall = () => {
    const telLink = `tel:+84334707290`;
    window.location.href = telLink;
  };
  const handleMail = () => {
    const mailtoLink = `mailto:nguyenthiendong17031998@gmail.com`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="fixed bottom-20 md:bottom-10 right-5 md:right-10 z-10">
      {isOpen && (
        <div className="flex flex-col items-center space-y-4 mb-4">
          <button
            className="speed-dial transition-all hover:scale-125"
            onClick={handleCall}
          >
            <Phone size={24} />
          </button>
          <button
            className="speed-dial transition-all hover:scale-125"
            onClick={handleMail}
          >
            <Mail size={24} />
          </button>
          <button
            className="speed-dial transition-all hover:scale-125"
            onClick={handleCall}
          >
            <FaLinkedin className="text-[#fff] text-[24px]" />
          </button>
          <button
            className="speed-dial transition-all hover:scale-125"
            onClick={() =>
              window.open("https://www.facebook.com/dongnt1703", "_blank")
            }
          >
            <FaFacebookF className="text-[#fff] text-[24px]" />
          </button>
          <button
            className="speed-dial transition-all hover:scale-125"
            onClick={() =>
              window.open("https://github.com/NguyenThienDong", "_blank")
            }
          >
            <FaGithub className="text-[#fff] text-[24px]" />
          </button>
        </div>
      )}
      <button
        className="speed-dial transition-all hover:scale-125"
        onClick={handleToggle}
      >
        {isOpen ? (
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <AiOutlinePlus className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default SpeedDial;
