import { useState } from "react";
import ProfileSection from "../Layout/Profile/ProfileSection";
import Notification from "../Layout/Profile/Notification";
import PromoCodes from "../Layout/Profile/PromoCodes";
import BookingSetting from "../Layout/Profile/BookingSetting";

function ProfileNavbar() {
  const [activeComponent, setActiveComponent] = useState("ProfileSection");
  return (
    <div>
      {/* Navbar  */}
      <div className="w-full flex justify-between items-center  py-[10px] px-[20px] rounded-[5px] shadow-[0px 0px 4.7px 0px #0000004D]">
        <button
          onClick={() => setActiveComponent("ProfileSection")}
          className={`text-[14px] w-[23%] text-center font-medium rounded-[5px] py-[15px] px-[20px] ${
            activeComponent === "ProfileSection"
              ? "bg-f2 text-white"
              : "bg-white"
          }`}
        >
          Property Scores
        </button>
        <button
          onClick={() => setActiveComponent("Notification")}
          className={`text-[14px] w-[23%] text-center font-medium rounded-[5px] py-[15px] px-[20px] ${
            activeComponent === "Notification"
              ? "bg-f2 text-white"
              : "bg-white"
          }`}
        >
          Members Rating
        </button>

        <button
          onClick={() => setActiveComponent("PromoCodes")}
          className={`text-[14px] w-[23%] text-center font-medium rounded-[5px] py-[15px] px-[20px] ${
            activeComponent === "PromoCodes"
              ? "bg-f2 text-white"
              : "bg-white"
          }`}
        >
          Occupancy
        </button>
        <button
          onClick={() => setActiveComponent("BookingSetting")}
          className={`text-[14px] w-[23%] text-center font-medium rounded-[5px] py-[15px] px-[20px] ${
            activeComponent === "BookingSetting"
              ? "bg-f2 text-white"
              : "bg-white"
          }`}
        >
          Tenure
        </button>
      </div>

      {/* Show Only Active Component */}
      <div className="px-[20px] pt-[50px]">
        {activeComponent === "ProfileSection" && <ProfileSection />}
        {activeComponent === "Notification" && <Notification />}
        {activeComponent === "PromoCodes" && <PromoCodes />}
        {activeComponent === "BookingSetting" && <BookingSetting />}
      </div>
    </div>
  );
}

export default ProfileNavbar;
