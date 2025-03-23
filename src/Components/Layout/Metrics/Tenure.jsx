import MetricsMenu from "../../Common/MetricsMenu";

function Tenure() {
  return (
    <div className="w-full h-[90%] flex flex-col gap-[20px]">
      <MetricsMenu />
      <h1 className="text-[28px] font-semibold">Tenure</h1>

      <div className="flex justify-between items-center">
        <div className="w-[49%] flex flex-col gap-[10px] rounded-[10px] p-[25px] bg-white">
          <h1 className="text-[24px] font-medium">Property Tenure</h1>
          <h1 className="text-[32px] font-semibold">1024 days</h1>
          <h1 className="text-[14px] font-normal">This is, on average how long a member stays within an Owner’s Portfolio.</h1>
        </div>
        <div className="w-[49%] flex flex-col gap-[10px] rounded-[10px] p-[25px] bg-white">
          <h1 className="text-[24px] font-medium">Average Property Age</h1>
          <h1 className="text-[32px] font-semibold">1061 days</h1>
          <h1 className="text-[14px] font-normal">This is, on average how long a property listed on our Platform.</h1>
        </div>
      </div>

      <div className="w-full bg-white py-[30px] px-[40px]">
        <h1 className="text-[24px] font-semibold">Tenure By Properties</h1>

        <div className="w-full flex flex-col gap-[20px] mt-[20px]">
            <div className="flex justify-between items-center border-b-[1px] border-[#EEEEEE] py-[20px]">
                <h3 className="text-[14px] text-[#16457E] font-semibold">Address</h3>
                <h3 className="text-[14px] text-[#16457E] font-semibold">Average Tenure (Days)</h3>
            </div>
            <div className="flex justify-between items-center border-b-[1px] border-[#EEEEEE] py-[20px]">
                <h3 className="text-[14px] text-[#292D32] font-normal">3321 Clear-view Court</h3>
                <h3 className="text-[14px] text-[#292D32] font-normal">30</h3>
            </div>
            <div className="flex justify-between items-center border-b-[1px] border-[#EEEEEE] py-[20px]">
                <h3 className="text-[14px] text-[#292D32] font-normal">3321 Clear-view Court</h3>
                <h3 className="text-[14px] text-[#292D32] font-normal">30</h3>
            </div>
            <div className="flex justify-between items-center border-b-[1px] border-[#EEEEEE] py-[20px]">
                <h3 className="text-[14px] text-[#292D32] font-normal">3321 Clear-view Court</h3>
                <h3 className="text-[14px] text-[#292D32] font-normal">30</h3>
            </div>
            <div className="flex justify-between items-center border-b-[1px] border-[#EEEEEE] py-[20px]">
                <h3 className="text-[14px] text-[#292D32] font-normal">3321 Clear-view Court</h3>
                <h3 className="text-[14px] text-[#292D32] font-normal">30</h3>
            </div>
            <div className="w-full bg-white flex justify-between items-center py-[12px] px-[24px] rounded-[5px] shadow-[0px 0px 4.7px 0px #0000004D]">
            <h3 className="text-[14px] text-[#B5B7C0] font-normal">Showing data 1 to 8 of  256K entries</h3>

          <div className="flex items-center justify-center gap-[10px]">
            <h4 className="w-[40px] h-[40px] flex items-center justify-center bg-[#F4F4F4] rounded-[5px] text-[14px] font-medium text-[#16457E]">
              1
            </h4>
            <h4 className="w-[40px] h-[40px] flex items-center justify-center rounded-[5px] text-[14px] font-medium text-[#667085]">
              2
            </h4>
            <h4 className="w-[40px] h-[40px] flex items-center justify-center rounded-[5px] text-[14px] font-medium text-[#667085]">
              3
            </h4>
            <h4 className="w-[40px] h-[40px] flex items-center justify-center rounded-[5px] text-[14px] font-medium text-[#667085]">
              ...
            </h4>
            <h4 className="w-[40px] h-[40px] flex items-center justify-center rounded-[5px] text-[14px] font-medium text-[#667085]">
              8
            </h4>
            <h4 className="w-[40px] h-[40px] flex items-center justify-center rounded-[5px] text-[14px] font-medium text-[#667085]">
              9
            </h4>
            <h4 className="w-[40px] h-[40px] flex items-center justify-center rounded-[5px] text-[14px] font-medium text-[#667085]">
              10
            </h4>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default Tenure;
