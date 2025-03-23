import StatCard from "../../Common/StatCard";

function MetricsManage() {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex justify-between">
        <h2 className="text-[22px] font-semibold text-f3">Metrics</h2>
        <div className="relative inline-block">
          <select className=" bg-white text-[#282828] text-[12px] p-2 pr-8 rounded-[5px] focus:outline-none">
            <option>Post 7 days</option>
            <option>Post 30 days</option>
            <option>Post 90 days</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-[20px]">
          <StatCard title="Customer" value="20" change="8" />
          <StatCard title="Orders" value="50" change="12" />
        </div>
        <div className="flex gap-[20px]">
          <StatCard title="Income" value="$2000" change="5" />
          <StatCard title="Expenses" value="$425" change="15" />
        </div>
      </div>

      <div className="bg-white shadow-[0px 10px 60px 0px #E2ECF980] rounded-[10px] p-[15px]">
        <div className="flex justify-between items-center">
          <h2 className="text-[18px] font-semibold text-f3">Manage</h2>
          <h4 className="text-[12px] font-semibold text-[#282828]">See All</h4>
        </div>
      </div>

      <div>
        <div className="flex items-center">
          <h3 className="w-[50%] text-[#282828] text-[14px] text-center font-normal border-b-[2px] border-f3 py-[7px]">
            Ongoing
          </h3>
          <h3 className="w-[50%] text-[#282828] text-[14px] text-center font-normal py-[7px]">
            Next 5 Days
          </h3>
        </div>

        <div className="flex flex-col gap-[10px] mt-[10px]">
          <div className="flex flex-col gap-[10px] border-[1px] border-[#C2C2C2] rounded-[8px] p-[13px]">
            <div className="flex justify-between items-center">
              <h4 className="text-[#757575] text-[12px] font-normal">000012</h4>
              <h4 className="text-white bg-[#22B07D] rounded-[5px] text-[12px] font-semibold py-[4px] px-[7px]">
                In Use
              </h4>
            </div>
            <div>
              <h4 className="text-black text-[12px] font-semibold">
                Southpark Road
              </h4>
              <h4 className="text-[#282828] rounded-[5px] text-[12px] font-normal leading-[30px]">
                B1234ABC
              </h4>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-[10px]">
                <img
                  src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                  alt="Error-Image"
                  className="w-[38px] h-[38px] border-blue border-[1px] rounded-[50%] ml-[10px]"
                />
                <h4 className="text-[#282828] rounded-[5px] text-[14px] font-normal">
                  Chris
                </h4>
              </div>
              <div className="flex items-center gap-[7px]">
                <i className="bi bi-telephone text-[22px] text-f3"></i>
                <h4 className="text-[#282828] rounded-[5px] text-[12px] font-normal">
                  0812345678
                </h4>
              </div>
              <div className="flex items-center gap-[10px]">
                <i className="bi bi-calendar3 text-[22px] text-f3"></i>
                <h4 className="text-[#282828] rounded-[5px] text-[12px] font-normal">
                  11 Jan 2021
                </h4>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] border-[1px] border-[#C2C2C2] rounded-[8px] p-[13px]">
            <div className="flex justify-between items-center">
              <h4 className="text-[#757575] text-[12px] font-normal">000012</h4>
              <h4 className="text-white bg-[#22B07D] rounded-[5px] text-[12px] font-semibold py-[4px] px-[7px]">
                In Use
              </h4>
            </div>
            <div>
              <h4 className="text-black text-[12px] font-semibold">
                Southpark Road
              </h4>
              <h4 className="text-[#282828] rounded-[5px] text-[12px] font-normal leading-[30px]">
                B1234ABC
              </h4>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-[10px]">
                <img
                  src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                  alt="Error-Image"
                  className="w-[38px] h-[38px] border-blue border-[1px] rounded-[50%] ml-[10px]"
                />
                <h4 className="text-[#282828] rounded-[5px] text-[14px] font-normal">
                  Chris
                </h4>
              </div>
              <div className="flex items-center gap-[7px]">
                <i className="bi bi-telephone text-[22px] text-f3"></i>
                <h4 className="text-[#282828] rounded-[5px] text-[12px] font-normal">
                  0812345678
                </h4>
              </div>
              <div className="flex items-center gap-[10px]">
                <i className="bi bi-calendar3 text-[22px] text-f3"></i>
                <h4 className="text-[#282828] rounded-[5px] text-[12px] font-normal">
                  11 Jan 2021
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetricsManage;
