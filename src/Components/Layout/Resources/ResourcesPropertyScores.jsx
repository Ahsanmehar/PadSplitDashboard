function ResourcesPropertyScores() {
  return (
    <div className="flex flex-col gap-[40px]">
      <h1 className="text-[28px] font-semibold">Property Scores</h1>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[50px] w-[32%]">
          <div className="flex flex-col gap-[15px] bg-white rounded-[5px] shadow-[0px 0px 6.8px 1px #00000040] p-[15px]">
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
              alt="Error-Image"
              className="w-full object-cover"
            />
            <h3 className="text-[20px] font-semibold">Compare Properties</h3>
            <p className="text-[14px] font-light">
              Calculate your earnings break down difference between income and
              costs
            </p>
          </div>

          <button className="w-full bg-[#16457E] text-[16px] text-white font-medium py-[18px] px-[85px] rounded-[5px]">
            Calculate Earnings
          </button>
        </div>
        <div className="flex flex-col gap-[50px] w-[32%]">
          <div className="flex flex-col gap-[15px] bg-white rounded-[5px] shadow-[0px 0px 6.8px 1px #00000040] p-[15px]">
            <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXB1dGVyfGVufDB8fDB8fHww"
              alt="Error-Image"
              className="w-full object-cover"
            />
            <h3 className="text-[20px] font-semibold">Where to buy next?</h3>
            <p className="text-[14px] font-light">
              Figure out where to buy your next house and home with this map.
            </p>
          </div>

          <button className="w-full bg-[#16457E] text-[16px] text-white font-medium py-[18px] px-[85px] rounded-[5px]">
            Explore Maps
          </button>
        </div>
        <div className="flex flex-col gap-[50px] w-[32%]">
          <div className="flex flex-col gap-[15px] bg-white rounded-[5px] shadow-[0px 0px 6.8px 1px #00000040] p-[15px]">
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
              alt="Error-Image"
              className="w-full object-cover"
            />
            <h3 className="text-[20px] font-semibold">Requirement</h3>
            <p className="text-[14px] font-light">
              Each properties have their own requirements before it should be
              listed.
            </p>
          </div>

          <button className="w-full bg-[#16457E] text-[16px] text-white font-medium py-[18px] px-[85px] rounded-[5px]">
            Read Guidelines
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResourcesPropertyScores;
