import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Bg1 from "../../Assests/Images/download.svg";
import Bg3 from "../../Assests/Images/bg3.png";

function About() {
  const [loadAnimation, setLoadAnimation] = useState(false);

  // Use useEffect to trigger animation and progress bar loading on component mount
  useEffect(() => {
    setLoadAnimation(true);
  }, []);

  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center bg-black relative md:overflow-hidden overflow-scroll w-full h-full ">
        <img
          src={Bg1}
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full"
        />

        <div
          className={`flex flex-col md:flex-row justify-around items-center p-4 md:p-20 relative top-10 w-full md:left-14 ${
            loadAnimation ? "animate-fadeIn" : "" // Apply fadeIn animation class conditionally
          }`}
        >
          <div className="flex-1 md:w-2/3">
            <h2 className="text-3xl mb-2 md:mb-5 font-black text-white">
              <b>About Us</b>
            </h2>
            <h2 className="text-2xl mb-2 md:mb-5 font-black text-white">
              <b>Hey 👋</b>
            </h2>
            <p className="mb-2 md:mb-5 text-white">
              My name is Sahmod, I am a <b>Website developer</b> and{" "}
              <b>technical writer</b>. Currently studying Computer Science at{" "}
              <u>APTECH</u>.
            </p>
            <p className="mb-2 md:mb-10 text-white">
              I have <b>1+ years experience</b> in crafting beautiful web and
              mobile interfaces. Plus I am an agile learner, I learn new cool
              stuff every day.
            </p>

            <h2 className="text-2xl mb-2 md:mb-5 font-black text-white">
              <b>Tech Stacks</b>
            </h2>

            {/* Progress Bar Components */}
            {loadAnimation && (
              <>
                <ProgressBar label="HTML & CSS" percentage={90} />
                <ProgressBar label="TAILWIND CSS" percentage={85} />
                <ProgressBar label="JAVASCRIPT" percentage={84} />
                <ProgressBar label="REACT JS" percentage={78} />
                <ProgressBar label="BOOTSTRAP" percentage={65} />
                <ProgressBar label="DJANGO" percentage={60} />
              </>
            )}
          </div>
          <div className="flex-1 hidden md:flex">
            <img src={Bg3} alt="" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Progress Bar component
const ProgressBar = ({ label, percentage }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  // Use useEffect to animate the progress bar on component mount
  useEffect(() => {
    if (percentage > 0) {
      const id = setInterval(() => {
        setProgressWidth((prevWidth) => {
          const newWidth = prevWidth + 1;
          if (newWidth >= percentage) {
            clearInterval(id);
          }
          return newWidth;
        });
      }, 10); // adjust the interval speed as needed
      return () => clearInterval(id);
    }
  }, [percentage]);

  return (
    <div className="w-full mb-2 md:mb-3">
      <div className="h-6 bg-gray-200 rounded-md relative">
        <div
          className="h-6 bg-[#1f2937] rounded-md"
          style={{ width: `${progressWidth}%` }}
        >
          <div className="text-center font-semibold text-white p-1">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
