
function Listing() {
  return (
    <div className="w-full h-[90%] flex flex-col gap-[20px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[28px] font-semibold">Listing</h1>
        <div className="flex items-center gap-[15px]">
          <h2 className="text-[16px] font-medium">Select Property</h2>
          <div className="relative inline-block">
            <select className=" bg-white text-[#242424] text-[14px] p-2 pr-8 rounded-[5px] focus:outline-none">
              <option>Northridge Parkway</option>
              <option>Northridge Parkway</option>
              <option>Northridge Parkway</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[20px] w-full bg-white py-[30px] px-[40px]">
        <div className="flex flex-col gap-[13px]">
          <h1 className="text-[20px] font-semibold">Ranking</h1>
          <h1 className="text-[14px] font-normal">
            Ranking is based on members House scource reviews.
          </h1>
        </div>

        <div className="w-full flex flex-col gap-[20px] mt-[20px]">
          <div className="flex flex-col justify-center items-center gap-[30px]">
            <div className="flex flex-col justify-center items-center gap-[12px]">
              <h3 className="text-[14px] font-normal">
                The Property Ranking is
              </h3>
              <h1 className="text-[32px] font-semibold">Very Good</h1>
            </div>

            <div className="w-full flex items-center justify-between">
              <div className="w-[19%] flex flex-col items-center gap-[15px]">
                <div className="w-full h-[10px] bg-[#CC4848] rounded-[50px]"></div>
                <h3 className="text-[20px] font-medium">Poor</h3>
              </div>
              <div className="w-[19%] flex flex-col items-center gap-[15px]">
                <div className="w-full h-[10px] bg-[#EE8224] rounded-[50px]"></div>
                <h3 className="text-[20px] font-medium">Fair</h3>
              </div>
              <div className="w-[19%] flex flex-col items-center gap-[15px]">
                <div className="w-full h-[10px] bg-[#FFD400] rounded-[50px]"></div>
                <h3 className="text-[20px] font-medium">Good</h3>
              </div>
              <div className="w-[19%] flex flex-col items-center gap-[15px]">
                <div className="w-full h-[10px] bg-[#B2FF00] rounded-[50px]"></div>
                <h3 className="text-[20px] font-medium">Very Good</h3>
              </div>
              <div className="w-[19%] flex flex-col items-center gap-[15px]">
                <div className="w-full h-[10px] bg-[#008D36] rounded-[50px]"></div>
                <h3 className="text-[20px] font-medium">Exceptional</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="w-[49%] flex flex-col items-center justify-center gap-[10px] rounded-[10px] px-[25px] py-[100px] bg-[#F4F4F4]">
          <h3 className="text-[14px] font-normal">
            Your Property’s average is
          </h3>
          <h1 className="text-[36px] text-[#CC4848] font-semibold">3.8</h1>
          <div className="w-full h-[10px] bg-white rounded-[50px]">
            <div className="w-[80%] h-[10px] bg-[#004566] rounded-[50px]"></div>
          </div>
          <h3 className="text-[12px] font-normal">
            Your Property’s average is based on 8 members response
          </h3>
        </div>
        <div className="w-[49%] flex flex-col items-center justify-center gap-[10px] rounded-[10px] px-[25px] py-[100px] bg-[#F4F4F4]">
          <h3 className="text-[14px] font-normal">Metro area average is</h3>
          <h1 className="text-[36px] text-[#CC4848] font-semibold">3.9</h1>
          <div className="w-full h-[10px] bg-white rounded-[50px]">
            <div className="w-[80%] h-[10px] bg-[#004566] rounded-[50px]"></div>
          </div>
          <h3 className="text-[12px] font-normal">
            The average age property score across all properties in this metro
            area.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Listing;
