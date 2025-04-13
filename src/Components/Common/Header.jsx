import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex justify-between items-center bg-white px-[50px] shadow-[0px_2px_48px_0px_#0000000D]">
      <div>Logo</div>
      <div className="flex items-center">
        <i className="bi bi-chat-left-text text-f2 mr-[14px]"></i>
        <i className="bi bi-bell-fill text-f2 mr-[7px]"></i>
        <div className="relative flex items-center gap-[8px]">
          <img
            src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
            alt="Error-Image"
            className="w-[38px] h-[38px] border-blue border-[1px] rounded-[50%] ml-[10px]"
          />
          <div className="cursor-pointer" onClick={() => setIsClick(!isClick)}>
            <h4 className="text-[14px] font-bold text-f2">Diky</h4>
            <h5 className="text-[12px] font-normal text-[#80A9D7]">Admin</h5>
          </div>
        </div>

        {isClick ? (
          <div className="absolute top-[60px] right-[30px] w-[200px] bg-white rounded-[5px] p-[10px]">
            <div
              className="relative flex items-center gap-[8px] border-b-[1px] border-[#999999] pb-[20px]"
              onClick={() => navigate("/profile")}
            >
              <img
                src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                alt="Error-Image"
                className="w-[30px] h-[30px] border-blue border-[1px] rounded-[50%] ml-[10px]"
              />
              <div className="cursor-pointer">
                <h4 className="text-[14px] font-medium text-[#484848]">Diky</h4>
                <h5 className="text-[12px] font-normal text-[#999999]">
                  diky@mail.com
                </h5>
              </div>
            </div>

            <div className="flex flex-col gap-[15px] mt-[10px]">
              <h4 className="text-[12px] font-normal text-[#484848] ml-[10px]">
                <i className="bi bi-sliders mr-[10px]"></i>Setting
              </h4>
              <h4 className="text-[12px] font-normal text-[#484848] ml-[10px]">
                <i className="bi bi-file-text mr-[10px]"></i>Document
              </h4>
              <h4 className="text-[12px] font-normal text-[#484848] ml-[10px]">
                <i className="bi bi-heart mr-[10px]"></i>Help
              </h4>
              <h4 className="text-[12px] font-normal text-[#484848] ml-[10px]">
                <i className="bi bi-box-arrow-left mr-[10px]"></i>Sign Out
              </h4>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
