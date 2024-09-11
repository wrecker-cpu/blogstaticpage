import React from "react";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

type sideBarProps = {
  closeSidebar: () => void;
  src: string | undefined;
};

export default function Sidebar({ closeSidebar, src }: sideBarProps) {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="bg-yellow-200 w-full h-screen overflow-hidden overflow-y-scroll"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className=" flex flex-row items-center justify-between p-10"
      >
         <p className="font-semibold text-[50px]">
        K<span className="text-[30px] font-extrabold">J</span>
      </p>
        <RxCross2 className="w-8 h-8 cursor-pointer" onClick={closeSidebar} />
      </motion.div>
      <div>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="w-fit  flex flex-col gap-10 text-[55px] uppercase p-10"
        >
          <li className="font-light transition-all duration-200 ease-in-out hover:font-bold">
            <a href="#">Home</a>
          </li>
          <li className="font-light transition-all duration-200 ease-in-out hover:font-bold">
            <a href="#">Blogs</a>
          </li>
          <li className="font-light  transition-all duration-200 ease-in-out hover:font-bold">
            <a href="#">Contact</a>
          </li>
          <li className="font-light  transition-all duration-200 ease-in-out hover:font-bold">
            <a href="#">Categories</a>
          </li>
          <li className="font-light transition-all duration-200 ease-in-out hover:font-bold">
            <a href="#">Resoruces</a>
          </li>
        </motion.ul>
      </div>
    </motion.div>
  );
}
