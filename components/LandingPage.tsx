"use client";
import { getData } from "@/sanity/schemas/sanity-utils";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { HeaderPage } from "@/app/types/landing-page-types";

export default function LandingPage() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [data, setData] = useState<HeaderPage[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }
  function closeSidebar() {
    setSidebarOpen(false);
  }

  return (
    <div className="bg-[#FEFFEA] flex flex-col lg-1070:flex-row card">
      <div className="lg-1070:w-1/2 h-auto">
        {sidebarOpen ? (
          <Sidebar closeSidebar={closeSidebar} src={data[0]?.svgs[1]?.svg} />
        ) : (
          <>
            <div className="flex flex-row items-center justify-between m-10">
              <div className="logo">
              <p className="font-semibold text-[50px]">
        K<span className="text-[30px] font-extrabold">J</span>
      </p>
              </div>
              <div
                className="hamburgerbutton cursor-pointer"
                onClick={toggleSidebar}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66669 22.6666L17.3334 22.6666M6.66669 15.9999H25.3334M14.6667 9.33325L25.3334 9.33325"
                    stroke="#333333"
                    strokeWidth="2.70833"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="py-[190px] flex flex-col items-start justify-center mx-10 font-roboto">
              <div className="font-normal">
                <p className="ml-1">Explore . Write . Read</p>
              </div>
              <div className="text-[45px] font-semibold font-Inter leading-tight text-gray-800 mt-5">
                <p>Code Chronicles: Exploring the Intersection of Frontend and Backend Development through Blogs</p>
              </div>
              <div className="mt-4 font-Inter font-medium text-[20px] tracking-wide">
                <p>Typescript Used</p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="lg-1070:w-1/2 h-auto hidden lg-1070:block">
          <img
            className="lg-1070:w-[100vw]"
            src="https://cdn.sanity.io/images/zkvez4bd/production/4d38ce0b254d9b5aff01f1a131aeaaf48ae17e3f-821x1079.svg?w=828&q=100&fit=clip&auto=format"
            alt="wth"
          />
      </div>
    </div>
  );
}
