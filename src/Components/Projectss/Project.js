import React from "react";
import Navbar from "../Navbar/Navbar";
import Bg4 from "../../Assests/Images/bg4.jpg";
import { motion } from "framer-motion";

function Project() {
  return (
    <div>
      <Navbar />
      <section id="folio" className="sec-folio bg-black text-white py-16">
        <div className="container mx-auto">
          <div className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="container mx-auto"
            >
              <h1 className="text-center text-3xl font-bold mb-6">
                My Projects
              </h1>
              <hr className="border-t border-gray-700 mb-8 md:w-full w-72 ml-12" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((projectIndex) => (
                  <motion.div
                    key={projectIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: projectIndex * 0.2 }}
                    className="p-4 border border-[#374151] rounded-lg"
                  >
                    <a
                      href="https://www.tksinvestments.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="relative block"
                      style={{ textDecoration: "none" }}
                    >
                      <motion.img
                        src={Bg4}
                        alt={`Project ${projectIndex}`}
                        className="w-full h-80 rounded-lg mb-4 hover:bg-black"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-[#374151] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                        <a
                          href="https://www.tksinvestments.com/"
                          className="text-white font-black"
                        >
                          https://www.tksinvestments.com
                        </a>
                      </div>
                      <h2 className="text-xl font-black mb-2">Tks Investment</h2>
                      <p className="text-gray-200">
                        TKS Investment is the official Value-Added Reseller and
                        Local Partner to Market-leading Norwegian, Malaysian, and
                        Australian IT / AI. We are In IT to Change IT.
                      </p>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="sec-testimonials bg-black text-white py-16">
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl font-bold mb-8"
          >
            Clients said
          </motion.h1>
          <hr className="border-t border-gray-700 mb-8" />
          <div className="flex flex-wrap justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
            >
              <div className="testimonial">
                "Alex did a great job when designing our website. It was a pleasure
                to work with him and I'm sure we will hire him again."
              </div>
              <div className="testimonial-author text-right">
                - Marc Andressen
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
            >
              <div className="testimonial">
                "Alex proved to be a truly creative designer who is able to create
                just stunning designs that I immediately fell in love with!"
              </div>
              <div className="testimonial-author text-right">
                - Emily Cooper
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
            >
              <div className="testimonial">
                "I have worked with several different people and it always
                seemed like a pain—luckily I found Alex Devero. Thank you, Alex!"
              </div>
              <div className="testimonial-author text-right">
                - Scott Grubber
              </div>
            </motion.div>
         
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
