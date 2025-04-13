import { useState } from "react";
import PropertyScores from "../Layout/Metrics/PropertyScores";
import MembersRating from "../Layout/Metrics/MembersRating";
import Occupancy from "../Layout/Metrics/Occupancy";
import Tenure from "../Layout/Metrics/Tenure";
import TimetoFlip from "../Layout/Metrics/TimetoFlip";
import PendingRoom from "../Layout/Metrics/PendingRoom";
import Listing from "../Layout/Metrics/Listing";
import Downloads from "../Layout/Metrics/Downloads";

function MetricsNavbar() {
  const [activeComponent, setActiveComponent] = useState("PropertyScore");
  return (
    <div>
      {/* Navbar  */}
      <div className="w-full flex justify-between items-center  py-[10px] px-[20px] bg-white rounded-[5px] shadow-[0px 0px 4.7px 0px #0000004D]">
        <button
          onClick={() => setActiveComponent("PropertyScore")}
          className={`text-[14px] font-medium rounded-[5px] py-[10px] px-[20px] ${
            activeComponent === "PropertyScore"
              ? "bg-f2 text-white"
              : "bg-transparent"
          }`}
        >
          Property Scores
        </button>
        <button
          onClick={() => setActiveComponent("MembersRating")}
          className={`text-[14px] font-medium rounded-[5px] py-[10px] px-[20px] ${
            activeComponent === "MembersRating"
              ? "bg-f2 text-white"
              : "bg-transparent"
          }`}
        >
          Members Rating
        </button>

        <button
          onClick={() => setActiveComponent("Occupancy")}
          className={`text-[14px] font-medium rounded-[5px] py-[10px] px-[20px] ${
            activeComponent === "Occupancy"
              ? "bg-f2 text-white"
              : "bg-transparent"
          }`}
        >
          Occupancy
        </button>
        <button
          onClick={() => setActiveComponent("Tenure")}
          className={`text-[14px] font-medium rounded-[5px] py-[10px] px-[20px] ${
            activeComponent === "Tenure"
              ? "bg-f2 text-white"
              : "bg-transparent"
          }`}
        >
          Tenure
        </button>
        <button
          onClick={() => setActiveComponent("TimetoFlip")}
          className={`text-[14px] font-medium rounded-[5px] py-[10px] px-[20px] ${
            activeComponent === "TimetoFlip"
              ? "bg-f2 text-white"
              : "bg-transparent"
          }`}
        >
          Time to Flip
        </button>
        <button
          onClick={() => setActiveComponent("PendingRooms")}
          className={`text-[14px] font-medium rounded-[5px] py-[10px] px-[20px] ${
            activeComponent === "PendingRooms"
              ? "bg-f2 text-white"
              : "bg-transparent"
          }`}
        >
          Pending Rooms
        </button>
        <button
          onClick={() => setActiveComponent("Listing")}
          className={`text-[14px] font-medium rounded-[5px] py-[10px] px-[20px] ${
            activeComponent === "Listing"
              ? "bg-f2 text-white"
              : "bg-transparent"
          }`}
        >
          Listing
        </button>
        <button
          onClick={() => setActiveComponent("Download")}
          className={`text-[14px] font-medium rounded-[5px] py-[10px] px-[20px] ${
            activeComponent === "Download"
              ? "bg-f2 text-white"
              : "bg-transparent"
          }`}
        >
          Download
        </button>
      </div>

      {/* Show Only Active Component */}
      <div className="px-[20px] pt-[50px]">
        {activeComponent === "PropertyScore" && <PropertyScores />}
        {activeComponent === "MembersRating" && <MembersRating />}
        {activeComponent === "Occupancy" && <Occupancy />}
        {activeComponent === "Tenure" && <Tenure />}
        {activeComponent === "TimetoFlip" && <TimetoFlip />}
        {activeComponent === "PendingRooms" && <PendingRoom />}
        {activeComponent === "Listing" && <Listing />}
        {activeComponent === "Download" && <Downloads />}
      </div>
    </div>
  );
}

export default MetricsNavbar;
