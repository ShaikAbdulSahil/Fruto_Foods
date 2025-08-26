import React from "react";
import branches from "../assets/images/branches.png"; // branches PNG
import process from "../assets/images/process.png"; // process diagram PNG
import star from "../assets/images/star.png";

const Process = () => (
  <div id="process" className="relative py-16 overflow-hidden bg-white">
    {/* Branches Background */}
    <img
      src={branches}
      alt="Branches Background"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />

    {/* Gray Overlay */}
    {/* <div className="absolute inset-0 bg-gray-200/40 z-0"></div> */}

    {/* Content */}
    <div className=" px-6 leading-none z-10 ">
      <div className="flex  items-center ml-12 text-6xl font-medium mb-6">
        <img src={star} alt="Star Icon" className=" inline-block " />

        <h2 className="text-6xl ml-1 leading-none">
          <span className="border-b-4 border-[#7B2D26]">Our Proc</span>ess</h2>
      </div>
      <p className="ml-14 text-3xl mx-auto text-gray-800 mb-8">
        “From handpicking fresh harvests to careful cleaning, gentle drying, fine grinding, and secure packaging — our process preserves nature’s purity and delivers wholesome goodness straight to you.”
      </p>
      <div className="flex justify-center">
        <img src={process} alt="Our Process Diagram" className="w-200 h-200" />
      </div>
    </div>
  </div>
);

export default Process;
