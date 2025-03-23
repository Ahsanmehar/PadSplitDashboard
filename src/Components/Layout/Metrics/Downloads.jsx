import MetricsMenu from "../../Common/MetricsMenu";

function Downloads() {
  return (
    <div className="w-full h-[90%] flex flex-col gap-[20px]">
      <MetricsMenu />
      <h1 className="text-[28px] font-semibold">Downloads</h1>

      <div className="flex flex-col gap-[20px] w-full bg-white py-[30px] px-[40px] rounded-[10px]">
        <h1 className="text-[20px] font-medium">By Room</h1>
        <h3 className="text-[16px] font-normal">
          Point in time information about each of your room, including the
          current and most recent prices, occupancy lengths, days on market and
          many more.
        </h3>
        <button className="w-fit flex items-center justify-center ml-auto gap-[10px] bg-f2 py-[8px] px-[14px] rounded-[5px] text-[14px] font-medium text-white shadow-[0px 1px 2px 0px #1018280D]">
          <i className="bi bi-arrow-down"></i>
          Download CSV
        </button>
      </div>
      <div className="flex flex-col gap-[20px] w-full bg-white py-[30px] px-[40px] rounded-[10px]">
        <h2 className="text-[20px] font-medium">Room change History</h2>
        <h3 className="text-[16px] font-normal">
          A history of any price or status changes to the rooms in a given
          property.
        </h3>
        <div className="flex items-center gap-[15px]">
          <h2 className="text-[16px] font-medium">Property</h2>
          <div className="relative inline-block">
            <select className="bg-white text-[#242424] text-[14px] font-normal border-[1px] border-[#000000] p-2 pr-8 rounded-[5px] focus:outline-none">
              <option>Select Property</option>
              <option>Northridge Parkway</option>
              <option>Northridge Parkway</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-[15px]">
          <div className="flex items-center gap-[15px]">
            <h2 className="text-[16px] font-medium">Start Time</h2>
            <input
              type="date"
              className="text-[#242424] text-[14px] font-normal border-[1px] border-[#000000] p-2  rounded-[5px] focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-[15px]">
            <h2 className="text-[16px] font-medium">End Time</h2>
            <input
              type="date"
              className="text-[#242424] text-[14px] font-normal border-[1px] border-[#000000] p-2  rounded-[5px] focus:outline-none"
            />
          </div>
          <button className="w-fit flex items-center justify-center ml-auto gap-[10px] bg-f2 py-[8px] px-[14px] rounded-[5px] text-[14px] font-medium text-white shadow-[0px 1px 2px 0px #1018280D]">
            <i className="bi bi-arrow-down"></i>
            Download CSV
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] w-full bg-white py-[30px] px-[40px] rounded-[10px]">
        <h2 className="text-[20px] font-medium">
          Occupancy by a month for year
        </h2>
        <h3 className="text-[16px] font-normal">
          Historical Occupancy by month for each of your properties.
        </h3>
        <div className="flex items-center gap-[15px]">
          <div className="flex items-center gap-[15px]">
            <h2 className="text-[16px] font-medium">Year</h2>
            <div className="relative inline-block">
              <select className="bg-white text-[#242424] text-[14px] font-normal border-[1px] border-[#000000] p-2 pr-8 rounded-[5px] focus:outline-none">
                <option>Select Year</option>
                <option>Northridge Parkway</option>
                <option>Northridge Parkway</option>
              </select>
            </div>
          </div>
          <button className="w-fit flex items-center justify-center ml-auto gap-[10px] bg-f2 py-[8px] px-[14px] rounded-[5px] text-[14px] font-medium text-white shadow-[0px 1px 2px 0px #1018280D]">
            <i className="bi bi-arrow-down"></i>
            Download CSV
          </button>
        </div>
      </div>
    </div>
  );
}

export default Downloads;
