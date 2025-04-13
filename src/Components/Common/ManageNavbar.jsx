import { useState } from "react";
import Overview from "../Layout/Manage/Overview";
import HouseManual from "../Layout/Manage/HouseManual";
import ManageEarning from "../Layout/Manage/ManageEarning";
import Vehicles from "../Layout/Manage/Vehicles";
import Promotions from "../Layout/Manage/Promotions";

function ManageNavbar() {
  const [activeComponent, setActiveComponent] = useState("Overview");

  return (
    <div className="w-full flex flex-col gap-[30px]">
      {/* 77 Sparkes Road  */}
      <div className="w-full flex justify-between items-center  py-[10px] px-[20px] bg-white rounded-[5px] shadow-[0px 0px 4.7px 0px #0000004D]">
        <div className="flex items-center gap-[20px]">
          <h2 className="text-[20px] text-[#596574] font-medium border-r-[3px] border-[#CC4848] pr-[20px]">
            77 Sparkes Road
          </h2>
          <h2 className="text-[20px] text-[#596574] font-medium">
            Bray Park QLD 4500
          </h2>

          <div className="px-[5px] text-[14px] bg-[#12B76A] text-white rounded-[6px] w-fit flex items-center justify-center">
            <i className="bi bi-dot text-[20px] text-white"></i>8.0
          </div>
        </div>

        <button className="w-fit bg-f2 py-[8px] px-[14px] rounded-[5px] text-[14px] font-medium text-white shadow-[0px 1px 2px 0px #1018280D]">
          Add Room
        </button>

        <div className="flex items-center gap-[10px]">
          <h3 className="flex items-center gap-[5px] text-[14px] font-normal text-[#596574] border-r-[2px] border-[#CC4848] pr-[10px]">
            <i className="bi bi-house-fill text-[18px] text-[#CC4848]"></i>
            House
          </h3>
          <h3 className="flex items-center gap-[5px] text-[14px] font-normal text-[#596574] border-r-[2px] border-[#CC4848] pr-[10px]">
            <i className="bi bi-house-door text-[18px] text-[#CC4848]"></i>3
            beds
          </h3>
          <h3 className="flex items-center gap-[5px] text-[14px] font-normal text-[#596574] border-r-[2px] border-[#CC4848] pr-[10px]">
            <i className="bi bi-droplet text-[18px] text-[#CC4848]"></i>2 baths
          </h3>
          <h3 className="flex items-center gap-[5px] text-[14px] font-normal text-[#596574] border-r-[2px] border-[#CC4848] pr-[10px]">
            <i className="bi bi-car-front text-[18px] text-[#CC4848]"></i>0 cars
          </h3>
        </div>
      </div>

      {/* Navbar  */}
      <div className="w-full flex justify-between items-center">
        <button
          onClick={() => setActiveComponent("Overview")}
          className={`text-[14px] text-[#989898] bg-white border-[1px] border-[#989898] font-normal rounded-[5px] py-[9px] px-[52px] shadow-[0px 0px 4.7px 0px #0000004D] ${
            activeComponent === "Overview" ? "text-[#CC4848]" : ""
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveComponent("HouseManual")}
          className={`text-[14px] text-[#989898] bg-white border-[1px] border-[#989898] font-normal rounded-[5px] py-[9px] px-[52px] shadow-[0px 0px 4.7px 0px #0000004D] ${
            activeComponent === "HouseManual" ? "text-[#CC4848]" : ""
          }`}
        >
          House Manual
        </button>
        <button
          onClick={() => setActiveComponent("ManageEarning")}
          className={`text-[14px] text-[#989898] bg-white border-[1px] border-[#989898] font-normal rounded-[5px] py-[9px] px-[52px] shadow-[0px 0px 4.7px 0px #0000004D] ${
            activeComponent === "ManageEarning" ? "text-[#CC4848]" : ""
          }`}
        >
          Earnings
        </button>
        <button
          onClick={() => setActiveComponent("Vehicles")}
          className={`text-[14px] text-[#989898] bg-white border-[1px] border-[#989898] font-normal rounded-[5px] py-[9px] px-[52px] shadow-[0px 0px 4.7px 0px #0000004D] ${
            activeComponent === "Vehicles" ? "text-[#CC4848]" : ""
          }`}
        >
          Vehicles
        </button>
        <button
          onClick={() => setActiveComponent("Promotions")}
          className={`text-[14px] text-[#989898] bg-white border-[1px] border-[#989898] font-normal rounded-[5px] py-[9px] px-[52px] shadow-[0px 0px 4.7px 0px #0000004D] ${
            activeComponent === "Promotions" ? "text-[#CC4848]" : ""
          }`}
        >
          Promotions
        </button>
        <button
          onClick={() => setActiveComponent("")}
          className={`text-[14px] text-[#989898] bg-white border-[1px] border-[#989898] font-normal rounded-[5px] py-[9px] px-[52px] shadow-[0px 0px 4.7px 0px #0000004D] ${
            activeComponent === "Overview" ? "text-[#CC4848]" : ""
          }`}
        >
          Settings
        </button>
      </div>

      {/* Show Only Active Component */}
      <div className="px-[20px] pt-[50px]">
        {activeComponent === "Overview" && <Overview />}
        {activeComponent === "HouseManual" && <HouseManual />}
        {activeComponent === "ManageEarning" && <ManageEarning />}
        {activeComponent === "Vehicles" && <Vehicles />}
        {activeComponent === "Promotions" && <Promotions />}
      </div>
    </div>
  );
}

export default ManageNavbar;
