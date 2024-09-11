"use client";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";

export default function ScrollBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
  );
}
