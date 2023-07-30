"use client";
import { useState } from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  email: string;
}

const Modal: React.FC<ModalProps> = ({ email, isOpen, onClose }) => {
  return (
    <div className="min-h-screen bg-mywhite md:bg-charcoalgrey flex justify-center flex-col md:items-center">
      <div className="flex flex-col  md:justify-center max-w-full  bg-mywhite md:max-w-lg rounded-3xl pr-10">
        <div className="ml-10">
          <div className="mt-10">
            <img src="assets/icon-success.svg" alt="icon" />
          </div>
          <div className="text-5xl max-w-min  font-semibold  items-center mt-10 ">
            Thanks for subscribing!
          </div>
          <div className="mt-6 mb-10 max-w-md  ">
            A confirmation email has been sent to
            <span className="font-semibold"> {email}</span>. Please open it and
            click the button inside to confirm your subscription.
          </div>
          <div className="justify-end mt-56 md:mt-0 items-end flex mb-10">
            <button
              type="button"
              className="font-bold  w-full justify-center p-4 rounded-lg   md:mb-0 text-mywhite bg-gradient-to-r text-bold from-darkslategrey to-darkslategrey hover:from-pink-500 hover:to-primary transition"
              onClick={onClose}
            >
              Dismiss message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
