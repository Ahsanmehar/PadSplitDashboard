
function PromoCodes() {
  return (
    <div className="flex flex-col gap-[50px] w-full">

      <div className="w-full flex flex-col gap-[50px] px-[20px]">
        <div className="w-full flex items-center">
          <div className="w-full flex items-center gap-[50px]">
            <h3 className="text-[20px] font-medium whitespace-nowrap">
              Promo Codes
            </h3>
            <div className="flex items-center gap-[10px] w-[400px] h-[60px] bg-white rounded-[5px] shadow-[0px 0px 4px 0px #00000040] p-[8px]">
              <div className="w-full h-full bg-[#F5F5F5]"></div>
              <h3 className="text-[16px] py-[] text-[#16457E] font-medium">
                Apply
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full">
          <label
            form="f1"
            className="text-[20px] font-medium flex flex-col gap-[20px]"
          >
            Applied Promotions
            <textarea
              className="w-full bg-white rounded-[5px] focus:outline-none shadow-[0px 0px 4px 0px #00000040]"
              rows={10}
              id="f1"
            ></textarea>
          </label>
        </div>
      </div>
    </div>
  );
}

export default PromoCodes;
