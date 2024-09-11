import { getStaticData } from "@/sanity/schemas/sanity-utils";
import React from "react";

export default async function Staticpage() {
  const getdata = await getStaticData();
  return (
    <div className=" w-full h-screen flex flex-col-reverse gap-10 p-10 md:flex-row md:justify-between items-center bg-[#99B898] card">
      <div className="w-[55%] lg:ml-16">
        <div className="font-normal">
          <p className="ml-1">{getdata[0].title}</p>
        </div>
        <div className="text-[45px] font-semibold font-Inter leading-tight text-gray-800 mt-5">
          <p>{getdata[0].headingdescription}</p>
        </div>
        <div className="mt-4 font-Inter font-medium text-[20px] tracking-wide ">
          <p>Next Js Used</p>
        </div>
      </div>
      <div className="w-80 md:w-[45%]">
        <img src={getdata[0].svg} alt={getdata[0].altText}></img>
      </div>
    </div>
  );
}
