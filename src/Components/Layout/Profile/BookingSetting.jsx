
function BookingSetting() {
  return (
    <div className="flex flex-col gap-[50px] w-full">

      <div className="w-full flex flex-col gap-[30px] px-[20px]">
        <div className="flex flex-col gap-[30px]">
          <h3 className="text-[24px] font-semibold">Booking setting</h3>
          <div className="w-full flex justify-between items-center bg-white shadow-[0px 0px 4px 0px #00000040] p-[50px] rounded-[5px]">
            <div>
              <div className="w-full flex items-center justify-between mb-[20px]">
                <h3 className="text-[20px] font-medium mb-[15px]">
                  Enhanced Member Setting
                </h3>
                <i className="bi bi-toggle-on text-[30px] ml-[40px] mr-[10px] text-f2"></i>
              </div>

              <p className="text-[16px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse
              </p>
            </div>
          </div>
          <div className="w-full flex justify-between items-center bg-white shadow-[0px 0px 4px 0px #00000040] p-[50px] rounded-[5px]">
            <div>
              <div className="w-full flex items-center justify-between mb-[20px]">
                <h3 className="text-[20px] font-medium mb-[15px]">
                  Enhanced Member Setting
                </h3>
                <i className="bi bi-toggle-on text-[30px] ml-[40px] mr-[10px] text-f2"></i>
              </div>

              <p className="text-[16px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          <h3 className="text-[24px] font-semibold">
            Booking setting per property
          </h3>
          <div className="w-full flex justify-between items-center bg-white shadow-[0px 0px 4px 0px #00000040] py-[10px] pl-[10px] pr-[60px] rounded-[5px]">
            <div className="flex items-center gap-[20px]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
                alt="Error-Image"
                className="w-[250px] object-cover"
              />
              <div>
                <h4 className="text-[16px] font-semibold mb-[20px]">
                  Northridge Parkway
                </h4>
                <div className="flex items-center gap-[10px]">
                  <button className="text-[12px] font-medium border-[1px] border-[#ADACAC] py-[8px] px-[27px]">
                    Enhanced Member Screening
                  </button>
                  <button className="text-[12px] font-medium border-[1px] border-[#ADACAC] py-[8px] px-[27px]">
                    Booking Approvals
                  </button>
                </div>
              </div>
            </div>
            <h4 className="text-[14px] text-f2 font-medium underline">
              Property Setting
            </h4>
          </div>
          <div className="w-full flex justify-between items-center bg-white shadow-[0px 0px 4px 0px #00000040] py-[10px] pl-[10px] pr-[60px] rounded-[5px]">
            <div className="flex items-center gap-[20px]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
                alt="Error-Image"
                className="w-[250px] object-cover"
              />
              <div>
                <h4 className="text-[16px] font-semibold mb-[20px]">
                  Northridge Parkway
                </h4>
                <div className="flex items-center gap-[10px]">
                  <button className="text-[12px] font-medium border-[1px] border-[#ADACAC] py-[8px] px-[27px]">
                    Enhanced Member Screening
                  </button>
                  <button className="text-[12px] font-medium border-[1px] border-[#ADACAC] py-[8px] px-[27px]">
                    Booking Approvals
                  </button>
                </div>
              </div>
            </div>
            <h4 className="text-[14px] text-f2 font-medium underline">
              Property Setting
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingSetting;
