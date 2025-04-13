
function Notifcation() {
  return (
    <div className="flex flex-col gap-[50px] w-full">

      <div className="w-full flex flex-col gap-[50px]">
        <div className="w-full flex justify-between items-center bg-white shadow-[0px 0px 4px 0px #00000040] p-[50px]">
          <div>
            <h3 className="text-[20px] font-medium mb-[15px]">Messages</h3>
            <p className="text-[16px] font-normal">
              Choose how you get notified when someone message you in chat.
            </p>
          </div>

          <div className="flex flex-col gap-[5px]">
            <h3 className="text-[16px] font-medium flex items-center border-b-[1px] border-[#8D8D8D]">
              Email
              <i className="bi bi-toggle-on text-[30px] ml-[40px] mr-[10px] text-f2"></i>
              on
            </h3>
            <h3 className="text-[16px] font-medium flex items-center">
              SMS
              <i className="bi bi-toggle-on text-[30px] ml-[40px] mr-[10px] text-[#F0F0F0]"></i>
              OFF
            </h3>
          </div>
        </div>
        <div className="w-full flex justify-between items-center bg-white shadow-[0px 0px 4px 0px #00000040] p-[50px]">
          <div>
            <h3 className="text-[20px] font-medium mb-[15px]">Tasks</h3>
            <p className="text-[16px] font-normal">
              Choose how you get notified about tasks.
            </p>
          </div>

          <div className="flex flex-col gap-[5px]">
            <h3 className="text-[16px] font-medium flex items-center border-b-[1px] border-[#8D8D8D]">
              Email
              <i className="bi bi-toggle-on text-[30px] ml-[40px] mr-[10px] text-f2"></i>
              on
            </h3>
            <h3 className="text-[16px] font-medium flex items-center">
              SMS
              <i className="bi bi-toggle-on text-[30px] ml-[40px] mr-[10px] text-[#F0F0F0]"></i>
              OFF
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifcation;
