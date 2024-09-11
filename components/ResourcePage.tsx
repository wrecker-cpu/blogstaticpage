import { getStaticData } from "@/sanity/schemas/sanity-utils";
import React from "react";

export default async function ResourcePage() {
  const resourcedata = await getStaticData();
  return (
    <div className=" h-screen w-full flex flex-col justify-center lg:flex-row lg:justify-start items-center gap-10 bg-[#E84A5F] card">
      <div className="lg:ml-[100px]">
        {" "}
        <img
          className="w-80 md:w-[450px] md:h-[450px]"
          src={resourcedata[1].svg}
          alt={resourcedata[1].altText}
        ></img>
      </div>
      <div className="text-white">
        <div className="font-normal ">
          <p className="uppercase">{resourcedata[1].title}</p>
        </div>
        <div className="text-[45px] font-semibold font-Inter leading-tight mt-3">
          <p>Sanity Used</p>
        </div>
        <div className="mt-4 font-Inter font-medium text-[20px] tracking-wide ">
          <p>For Education Purpose</p>
        </div>
      </div>
    </div>
  );
}
