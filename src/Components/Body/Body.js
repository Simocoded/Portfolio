import React, { useState, useEffect } from "react";
import Bg1 from "../../Assests/Images/download.svg";
import Bg2 from "../../Assests/Images/bg1.jpg";
import { Transition } from "@headlessui/react"; // Import Transition for animations

function Body() {
  const [text, setText] = useState("");
  const [isSahmod, setIsSahmod] = useState(true);

  useEffect(() => {
    const sahmodText = " Sahmod";
    const frontEndDevText = " a Website developer";

    const typingEffect = () => {
      let currentText = isSahmod ? sahmodText : frontEndDevText;
      let currentIndex = 0;

      const timer = setInterval(() => {
        if (currentIndex <= currentText.length) {
          setText(currentText.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setIsSahmod(!isSahmod);
          }, 1000); // Delay before changing text
        }
      }, 100); // Typing speed
    };

    typingEffect();

    return () => {
      setText("");
    };
  }, [isSahmod]);

  return (
    <div className="flex justify-center items-center h-screen bg-black relative">
      <img
        src={Bg1}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <img
          src={Bg2}
          alt=""
          className="w-48 h-48 bg-gray-800 rounded-full overflow-hidden mb-8 md:mb-0"
        />

        {/* Text Content */}
        <div className="max-w-lg p-8 text-white rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-50">
          <Transition
            show={true}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <h2 className="text-4xl font-bold mb-4">
              Hi 👋, <br /> I'm{text}
            </h2>
          </Transition>

          <Transition
            show={true}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <p className="text-lg mb-4">
              A <b className="font-bold">front-end developer</b> and{" "}
              <b className="font-bold">technical writer</b> passionate about
              solving problems with tech. I am skilled with building exceptional{" "}
              <b>websites</b> and <b>mobile applications</b>, and currently, I'm
              exploring the AI (Artificial Intelligence) ecosystem.
            </p>
          </Transition>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Explore
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
