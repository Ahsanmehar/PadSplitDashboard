
function PendingRoom() {
  return (
    <div className="w-full h-[90%] flex flex-col gap-[20px]">
      <h1 className="text-[28px] font-semibold">Pending Room</h1>

      <div className="w-full flex flex-col gap-[20px] rounded-[10px] p-[25px] bg-white">
        <h1 className="text-[20px] font-medium">Room In Eviction</h1>
        <div className="flex items-center justify-center w-full h-[100px] bg-[#FFEFEF] rounded-[10px]">
          <h1 className="text-[18px] font-semibold">No Room in Eviction</h1>
        </div>
      </div>

      <table className="w-full  rounded-lg overflow-hidden">
        <thead>
          <tr className="text-[14px] text-white bg-f2">
            <th className="font-normal p-[20px]">Tickets ID</th>
            <th className="font-normal p-[20px]">Address</th>
            <th className="font-normal p-[20px]">Rooms</th>
            <th className="font-normal p-[20px]">Days in Flip</th>
            <th className="font-normal p-[20px]">Missed Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-[14px] bg-white">
            <th className="font-normal p-[20px]">SB001</th>
            <th className="font-normal p-[20px]">Address</th>
            <th className="font-normal p-[20px]">Acetaminophen</th>
            <th className="font-normal p-[20px]">2</th>
            <th className="font-medium py-[16px] px-[24px] text-center">
              <div className="py-[1px] px-[6px] bg-[#FECDCA] text-[#B42318] rounded-[6px] w-fit flex items-center justify-center mx-auto">
                $ 2000
              </div>
            </th>
          </tr>
          <tr className="text-[14px] bg-white">
            <th className="font-normal p-[20px]">SB001</th>
            <th className="font-normal p-[20px]">Address</th>
            <th className="font-normal p-[20px]">Acetaminophen</th>
            <th className="font-normal p-[20px]">2</th>
            <th className="font-medium py-[16px] px-[24px] text-center">
              <div className="py-[1px] px-[6px] bg-[#FECDCA] text-[#B42318] rounded-[6px] w-fit flex items-center justify-center mx-auto">
                $ 2000
              </div>
            </th>
          </tr>
          <tr className="text-[14px] bg-white">
            <th className="font-normal p-[20px]">SB001</th>
            <th className="font-normal p-[20px]">Address</th>
            <th className="font-normal p-[20px]">Acetaminophen</th>
            <th className="font-normal p-[20px]">2</th>
            <th className="font-medium py-[16px] px-[24px] text-center">
              <div className="py-[1px] px-[6px] bg-[#FECDCA] text-[#B42318] rounded-[6px] w-fit flex items-center justify-center mx-auto">
                $ 2000
              </div>
            </th>
          </tr>
          <tr className="text-[14px] bg-white">
            <th className="font-normal p-[20px]">SB001</th>
            <th className="font-normal p-[20px]">Address</th>
            <th className="font-normal p-[20px]">Acetaminophen</th>
            <th className="font-normal p-[20px]">2</th>
            <th className="font-medium py-[16px] px-[24px] text-center">
              <div className="py-[1px] px-[6px] bg-[#FECDCA] text-[#B42318] rounded-[6px] w-fit flex items-center justify-center mx-auto">
                $ 2000
              </div>
            </th>
          </tr>
          <tr className="text-[14px] bg-white">
            <th className="font-normal p-[20px]">SB001</th>
            <th className="font-normal p-[20px]">Address</th>
            <th className="font-normal p-[20px]">Acetaminophen</th>
            <th className="font-normal p-[20px]">2</th>
            <th className="font-medium py-[16px] px-[24px] text-center">
              <div className="py-[1px] px-[6px] bg-[#FECDCA] text-[#B42318] rounded-[6px] w-fit flex items-center justify-center mx-auto">
                $ 2000
              </div>
            </th>
          </tr>
          <tr className="text-[14px] bg-white">
            <th className="font-normal p-[20px]">SB001</th>
            <th className="font-normal p-[20px]">Address</th>
            <th className="font-normal p-[20px]">Acetaminophen</th>
            <th className="font-normal p-[20px]">2</th>
            <th className="font-medium py-[16px] px-[24px] text-center">
              <div className="py-[1px] px-[6px] bg-[#FECDCA] text-[#B42318] rounded-[6px] w-fit flex items-center justify-center mx-auto">
                $ 2000
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PendingRoom;
