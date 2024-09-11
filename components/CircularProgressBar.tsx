"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";

const CircularProgressBar: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = documentHeight - viewportHeight;
      const rawProgress =
        maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;

      // Calculate the segmented progress
      const segmentSize = 10;
      const segmentedProgress =
        Math.ceil(rawProgress / segmentSize) * segmentSize;

      setProgress(segmentedProgress);

      // Show progress bar only after scrolling past 500px
      setShowProgress(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showProgress) {
      controls.start({ strokeDashoffset: calculateOffset(progress) });
    }
  }, [progress, controls, showProgress]);

  const calculateOffset = (progress: number) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    return circumference - (progress / 100) * circumference;
  };

  const radius = 40;
  const stroke = 8;
  const circumference = 2 * Math.PI * radius;

  return (
    <div>
      {showProgress && (
        <div style={{ position: "fixed", bottom: 10, right: 10, zIndex: 10 }}>
          <svg width="70" height="70" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#e6e6e6"
              strokeWidth={stroke}
              fill="none"
            />
            <motion.circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#333333"
              strokeWidth={stroke}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={calculateOffset(progress)}
              animate={controls}
              transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation
            />
          </svg>
          <IoIosArrowUp
            className="scrollup"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          ></IoIosArrowUp>
        </div>
      )}
      {children}
    </div>
  );
};

export default CircularProgressBar;
