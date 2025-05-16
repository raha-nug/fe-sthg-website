"use client";
import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/082123458169"
        className="fixed bottom-5 left-5 z-[999] bg-green-500 text-white p-3 rounded-full shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed z-[999] bottom-5 right-5 bg-red-600 text-white p-3 rounded-sm shadow-lg"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
