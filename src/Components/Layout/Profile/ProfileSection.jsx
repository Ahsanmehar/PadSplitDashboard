import { useState } from "react";

export default function ProfileSection() {
  const [isEditable, setIsEditable] = useState({
    basicInfo: false,
    bookingRequest: false,
    additionalDetails: false,
  });

  // Toggle edit mode
  const handleEdit = (section) => {
    setIsEditable((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="flex flex-col gap-[50px] w-full">
      <div className="flex items-center justify-between">
        <div className="w-[29%] bg-white flex flex-col items-center py-[30px] gap-[50px]">
          <div className="flex flex-col items-center text-center space-y-3">
            <img
              src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Profile"
              className="w-[150px] h-[150px] rounded-full object-cover"
            />
            <div>
              <h2 className="text-[20px] text-[#484848] font-semibold">
                Diky Micheal
              </h2>
              <p className="my-[12px] text-[18px] text-[#6C6C6C] font-light">
                diky.micheal@gmail.com
              </p>
              <button className="text-[14px] py-[12px] px-[20px] bg-[#16457E] text-white rounded-[5px]">
                Upload new Picture
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <button className="text-[14px] py-[10px] px-[16px] bg-transparent text-[#16457E] rounded-[5px] border-[#16457E] border-[1px]">
              Upload new Picture
            </button>
            <button className="text-[14px] py-[10px] px-[16px] bg-transparent text-[#AA2117] rounded-[5px] border-[#AA2117] border-[1px]">
              Upload new Picture
            </button>
          </div>
          <button className="text-[14px] bg-[#AA2117] text-white rounded-[5px] shadow-[0px 1px 2px 0px #1018280D] py-[10px] px-[16px]">
            Delete Account
          </button>
        </div>

        <div className="w-[69%]">
          {/* Basic Info Section */}
          <div className="flex justify-between items-center">
            <h2 className="text-[18px] text-[#484848] font-semibold">
              Basic Info
            </h2>
            <button
              onClick={() => handleEdit("basicInfo")}
              className="bg-[#16457E] text-white rounded py-[8px] px-[34px] text-[14px] font-medium"
            >
              Edit
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div>
              <label
                htmlFor="f1"
                className="block font-normal text-[14px] text-[#484848] mb-[10px] mb-[10px]"
              >
                First Name
              </label>
              <input
                type="text"
                id="f1"
                className="py-[10px] px-[14px] border rounded w-full text-[16px] text-[#667085] focus:outline-none placeholder:text-[#667085]"
                placeholder="Diky"
                disabled={!isEditable.basicInfo}
              />
            </div>
            <div>
              <label className="block font-medium font-normal text-[14px] text-[#484848] mb-[10px]">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Micheal"
                className="py-[10px] px-[14px] border rounded w-full text-[16px] text-[#667085] focus:outline-none placeholder:text-[#667085]"
                disabled={!isEditable.basicInfo}
              />
            </div>
          </div>
          <div className="mt-3">
            <label className="block font-medium font-normal text-[14px] text-[#484848] mb-[10px]">
              Gender
            </label>
            <select
              className="w-full py-[10px] px-[14px] border rounded text-[16px] text-[#667085] focus:outline-none placeholder:text-[#667085]"
              disabled={!isEditable.basicInfo}
            >
              <option>Choose Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="mt-3">
            <label className="block font-medium font-normal text-[14px] text-[#484848] mb-[10px]">
              Email
            </label>
            <input
              type="email"
              placeholder="diky.micheal@gmail.com"
              className="py-[10px] px-[14px] border rounded w-full text-[16px] text-[#667085] focus:outline-none placeholder:text-[#667085]"
              disabled={!isEditable.basicInfo}
            />
          </div>
          <div className="mt-3">
            <label className="block font-medium font-normal text-[14px] text-[#484848] mb-[10px]">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="+12 345 6789"
              className="py-[10px] px-[14px] border rounded w-full text-[16px] text-[#667085] focus:outline-none placeholder:text-[#667085]"
              disabled={!isEditable.basicInfo}
            />
          </div>
          <div className="mt-3">
            <label className="block font-medium font-normal text-[14px] text-[#484848] mb-[10px]">
              Nationality
            </label>
            <select
              className="w-full py-[10px] px-[14px] border rounded text-[16px] text-[#667085] focus:outline-none placeholder:text-[#667085]"
              disabled={!isEditable.basicInfo}
            >
              <option>Select Nationality</option>
              <option>Pakistani</option>
              <option>Indian</option>
            </select>
          </div>
          <div className="mt-3">
            <label className="block font-medium font-normal text-[14px] text-[#484848] mb-[10px]">
              Current Address
            </label>
            <input
              type="text"
              placeholder="6789 Oakwood Ave, Los Angeles, CA 90036"
              className="py-[10px] px-[14px] border rounded w-full text-[16px] text-[#667085] focus:outline-none placeholder:text-[#667085]"
              disabled={!isEditable.basicInfo}
            />
          </div>
          <div className="w-full flex">
            <button className="ml-auto text-[14px] bg-[#AA2117] text-white rounded-[5px] mt-[20px] shadow-[0px 1px 2px 0px #1018280D] py-[10px] px-[16px]">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
