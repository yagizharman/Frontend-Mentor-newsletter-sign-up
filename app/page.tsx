"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "./components/Modal";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
    // Reset the validation status when the user edits the email field
  };

  const checkEmailValidity = (event: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
    if (isValidEmail) {
      setIsOpen(true);
    }
  };

  return (
    <>
      {isOpen && isValidEmail ? (
        <Modal
          isOpen={isOpen}
          email={email}
          onClose={() => setIsOpen(false)}
        ></Modal>
      ) : (
        <div className=" min-h-screen bg-charcoalgrey flex justify-center flex-col items-center">
          <div className=" card flex flex-col md:flex-row justify-center items-center bg-white rounded-3xl">
            <div className="flex flex-col justify-center items-center mr-5 order-2 md:order-1">
              <div className="flex flex-col justify-center ml-9 md:w-96 ">
                <h1 className="text-4xl md:text-5xl mt-4  text-left text-darkslategrey mb-5 font-roboto font-bold  ">
                  Stay updated!
                </h1>
                <span className="text-md mb-5">
                  Join 60,000+ product managers receiving monthly updates on:
                </span>
                <ul className="text-sm">
                  <li className="flex flex-row mb-3">
                    <img src="assets/icon-list.svg" className="mr-3" alt="" />{" "}
                    Product discovery and building what matters
                  </li>
                  <li className="flex flex-row mb-3">
                    <img src="assets/icon-list.svg" className="mr-3" alt="" />{" "}
                    Measuring to ensure updates are a success
                  </li>
                  <li className="flex flex-row mb-3">
                    <img src="assets/icon-list.svg" className="mr-3" alt="" />{" "}
                    And much more!
                  </li>
                </ul>
                <div className="mt-5 flex flex-col justify-content ">
                  <div className="flex flex-row items-center  mb-2 ">
                    <label className="justify-start text-sm font-bold text-charcoalgrey">
                      Email address
                    </label>
                    <span
                      className={`ml-auto text-sm text-red-500 font-semibold transition ${
                        isValidEmail ? "hidden" : ""
                      }`}
                    >
                      Valid email required
                    </span>
                  </div>

                  <input
                    type="email"
                    id="email"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 ${
                      !isValidEmail ? "bg-red-200 border-red-600 " : ""
                    }`}
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="email@company.com"
                    required
                  />
                  <button
                    type="button"
                    className="justify-center p-4 rounded-lg mt-5 mb-5 md:mb-0 text-mywhite bg-gradient-to-r text-bold from-darkslategrey to-darkslategrey hover:from-pink-500 hover:to-primary transition"
                    onClick={checkEmailValidity}
                  >
                    Subscribe to monthly newsletter
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto order-1 md:order-2 md:my-5 md:mr-5 md:ml-10">
              <img
                className="hidden md:block  w-full  "
                src="assets/illustration-sign-up-desktop.svg"
                alt="pic"
              />
              <img
                className="md:hidden  w-full "
                src="assets/illustration-sign-up-mobile.svg"
                alt="pic"
              />
            </div>
          </div>
          <footer>
            <div className="attribution text-mygrey text-center hidden md:block ">
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
              >
                Frontend Mentor
              </a>
              . Coded by <a href="#">Your Name Here</a>.
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
