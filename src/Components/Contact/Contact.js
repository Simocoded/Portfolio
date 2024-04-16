import React from "react";
import Navbar from "../Navbar/Navbar";
import Bg1 from "../../Assests/Images/download.svg";
import { motion } from "framer-motion";

function Contact() {
  const emailAddress = "samodgafar@gmail.com";

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   try {
  //     const response = await fetch("https://your-api-endpoint.com/contact", {
  //       method: "POST",
  //       body: formData,
  //     });
  //     if (response.ok) {
  //       alert("Message sent successfully!");
  //       // Reset form fields if needed
  //     } else {
  //       throw new Error("Failed to send message");
  //     }
  //   } catch (error) {
  //     console.error("Error sending message:", error.message);
  //     alert("Failed to send message. Please try again later.");
  //   }
  // };

  return (
    <div>
      <Navbar />

      <div className="relative bg-black md:overflow-hidden min-h-screen">
        <img
          src={Bg1}
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full"
        />

        <div className="container mx-auto py-24 px-4 md:px-0 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 bg-opacity-90 p-8 md:p-12 rounded-lg shadow-lg mt-4"
          >
            <h1 className="text-4xl text-gray-800 font-bold mb-6 text-center pt-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-900 text-center mb-8">
              If you want to reach out to us for Partnerships, New projects, or
              just for Consulting:
              <br />
              You can also email us @{" "}
              <a
                href={`mailto:${emailAddress}`}
                className=" text-black font-black hover:underline"
              >
                {emailAddress}
              </a>
            </p>
            <p className="text-lg text-gray-900 mb-8 text-center">
              We use VeilMail.io to protect your email address from spam.
            </p>

            <div className="max-w-lg mx-auto">
              <form  className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-900"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-gray-900 text-gray-900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-900"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-gray-900 text-gray-900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-900"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-gray-900 text-gray-900"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-gray-900 text-white font-bold py-3 rounded-lg transition duration-300 hover:bg-gray-900"
                >
                  Send Message ✉
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
