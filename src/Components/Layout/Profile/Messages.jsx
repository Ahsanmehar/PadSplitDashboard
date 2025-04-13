import ProfileMenu from "../../Common/ProfileMenu";

function Messages() {
  return (
    <div className="flex flex-col gap-[20px] w-full h-[87vh]">
      <h3 className="text-[32px] text-[#25409C] font-semibold">Messages</h3>
      <div className="w-full flex flex-col gap-[25px]">
        <div className="flex justify-between items-center px-[30px] py-[15px] bg-white rounded-[5px]">
          <h3 className="text-[18px] font-normal">
            <i className="bi bi-bell-fill text-[#CC4848] mr-[10px]"></i>
            Booking Requests
          </h3>
          <div className="flex items-center gap-[10px]">
            <h4 className="text-[16px] font-medium bg-[#CC4848] w-[25px] h-[25px] rounded-[5px] text-white flex items-center justify-center">
              4
            </h4>
            <i className="bi bi-caret-down"></i>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-[30%] bg-white p-[10px]">
          <div className="w-full flex justify-between items-center">
            <i className="bi bi-list text-[#707991] text-[25px]"></i>
            <div className="relative w-[360px]">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent border-[1px] border-[#D0D5DD] rounded-[5px] placeholder:text-[#757575] text-[16px] py-[10px] px-[40px]"
              />
              <i className="bi bi-search text-[#757575] absolute left-[15px] top-[50%] translate-y-[-50%] text-[16px]"></i>
            </div>
          </div>

          <div className="flex flex-col gap-[20px] mt-[20px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[15px]">
                <img
                  src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                  alt="Error-Image"
                  className="w-[50px] h-[50px] border-blue border-[1px] rounded-[50%]"
                />
                <div>
                  <h4 className="text-[16px] font-semibold text-[#011627]">
                    Chatgram <span className="font-normal">(Room 1)</span>
                  </h4>
                  <h5 className="text-[14px] font-normal text-[#707991]">
                    Chatgram Web was updated.
                  </h5>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[10px]">
                <h5 className="text-[12px] text-[#707991] font-normal">
                  19:48
                </h5>
                <h5 className="flex items-center justify-center w-[18px] h-[18px] rounded-[50%] text-[12px] text-white bg-[#CC4848] font-normal">
                  1
                </h5>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[15px]">
                <img
                  src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                  alt="Error-Image"
                  className="w-[50px] h-[50px] border-blue border-[1px] rounded-[50%]"
                />
                <div>
                  <h4 className="text-[16px] font-semibold text-[#011627]">
                    Chatgram <span className="font-normal">(Room 1)</span>
                  </h4>
                  <h5 className="text-[14px] font-normal text-[#707991]">
                    Chatgram Web was updated.
                  </h5>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[10px]">
                <h5 className="text-[12px] text-[#707991] font-normal">
                  19:48
                </h5>
                <h5 className="flex items-center justify-center w-[18px] h-[18px] rounded-[50%] text-[12px] text-white bg-[#CC4848] font-normal">
                  1
                </h5>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[15px]">
                <img
                  src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                  alt="Error-Image"
                  className="w-[50px] h-[50px] border-blue border-[1px] rounded-[50%]"
                />
                <div>
                  <h4 className="text-[16px] font-semibold text-[#011627]">
                    Chatgram <span className="font-normal">(Room 1)</span>
                  </h4>
                  <h5 className="text-[14px] font-normal text-[#707991]">
                    Chatgram Web was updated.
                  </h5>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[10px]">
                <h5 className="text-[12px] text-[#707991] font-normal">
                  19:48
                </h5>
                <h5 className="flex items-center justify-center w-[18px] h-[18px] rounded-[50%] text-[12px] text-white bg-[#CC4848] font-normal">
                  1
                </h5>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[15px]">
                <img
                  src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                  alt="Error-Image"
                  className="w-[50px] h-[50px] border-blue border-[1px] rounded-[50%]"
                />
                <div>
                  <h4 className="text-[16px] font-semibold text-[#011627]">
                    Chatgram <span className="font-normal">(Room 1)</span>
                  </h4>
                  <h5 className="text-[14px] font-normal text-[#707991]">
                    Chatgram Web was updated.
                  </h5>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[10px]">
                <h5 className="text-[12px] text-[#707991] font-normal">
                  19:48
                </h5>
                <h5 className="flex items-center justify-center w-[18px] h-[18px] rounded-[50%] text-[12px] text-white bg-[#CC4848] font-normal">
                  5
                </h5>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[15px]">
                <img
                  src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                  alt="Error-Image"
                  className="w-[50px] h-[50px] border-blue border-[1px] rounded-[50%]"
                />
                <div>
                  <h4 className="text-[16px] font-semibold text-[#011627]">
                    Chatgram <span className="font-normal">(Room 1)</span>
                  </h4>
                  <h5 className="text-[14px] font-normal text-[#707991]">
                    Chatgram Web was updated.
                  </h5>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[10px]">
                <h5 className="text-[12px] text-[#707991] font-normal">
                  19:48
                </h5>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[15px]">
                <img
                  src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                  alt="Error-Image"
                  className="w-[50px] h-[50px] border-blue border-[1px] rounded-[50%]"
                />
                <div>
                  <h4 className="text-[16px] font-semibold text-[#011627]">
                    Chatgram <span className="font-normal">(Room 1)</span>
                  </h4>
                  <h5 className="text-[14px] font-normal text-[#707991]">
                    Chatgram Web was updated.
                  </h5>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[10px]">
                <h5 className="text-[12px] text-[#707991] font-normal">
                  19:48
                </h5>
                <h5 className="flex items-center justify-center w-[18px] h-[18px] rounded-[50%] text-[12px] text-white bg-[#CC4848] font-normal">
                  4
                </h5>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[15px]">
                <img
                  src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                  alt="Error-Image"
                  className="w-[50px] h-[50px] border-blue border-[1px] rounded-[50%]"
                />
                <div>
                  <h4 className="text-[16px] font-semibold text-[#011627]">
                    Chatgram <span className="font-normal">(Room 1)</span>
                  </h4>
                  <h5 className="text-[14px] font-normal text-[#707991]">
                    Chatgram Web was updated.
                  </h5>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[10px]">
                <h5 className="text-[12px] text-[#707991] font-normal">Wed</h5>
                <h5 className="flex items-center justify-center w-[18px] h-[18px] rounded-[50%] text-[12px] text-white bg-[#CC4848] font-normal">
                  3
                </h5>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[15px]">
                <img
                  src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                  alt="Error-Image"
                  className="w-[50px] h-[50px] border-blue border-[1px] rounded-[50%]"
                />
                <div>
                  <h4 className="text-[16px] font-semibold text-[#011627]">
                    Chatgram <span className="font-normal">(Room 1)</span>
                  </h4>
                  <h5 className="text-[14px] font-normal text-[#707991]">
                    Chatgram Web was updated.
                  </h5>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[10px]">
                <h5 className="text-[12px] text-[#707991] font-normal">Tue</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-[70%] bg-[#F5F5F5]">
          <div className="flex items-center justify-between py-[5px] pl-[30px] pr-[5px] bg-white">
            <div className="flex items-center gap-[15px]">
              <img
                src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                alt="Error-Image"
                className="w-[40px] h-[40px] border-blue border-[1px] rounded-[50%]"
              />
              <div>
                <h4 className="text-[16px] font-semibold text-[#011627]">
                  David Moore
                </h4>
                <h5 className="text-[14px] font-normal text-[#707991]">
                  last seen 5 mins ago
                </h5>
              </div>
            </div>
            <div className="flex items-center gap-[20px]">
              <i className="bi bi-search text-[#16457E]"></i>
              <i className="bi bi-telephone-fill text-[#16457E]"></i>
              <i className="bi bi-three-dots-vertical text-[#16457E]"></i>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] p-[30px]">
            <h5 className="w-fit text-[14px] font-normal text-white rounded-[5px] bg-[#CC4848] py-[4px] px-[12px] m-auto">
              Today
            </h5>
            <div className="w-[45%] bg-white py-[4px] px-[12px] rounded-[5px]">
              <p className="text-[16px] font-normal text-[#011627]">
                OMG 😲 do you remember what you did last night at the work night
                out?
              </p>
              <div className="flex items-center justify-end gap-[5px]">
                <i class="bi bi-suit-heart-fill text-[#F71735]"></i>
                <p className="text-[12px] font-normal text-[#011627]">18:12</p>
                <i class="bi bi-check2 text-[#011627]"></i>
              </div>
            </div>
            <div className="w-fit bg-[#16457E] text-white py-[4px] px-[12px] rounded-[5px] ml-auto">
              <p className="text-[16px] font-normal">no haha</p>
              <div className="flex items-center justify-end gap-[5px]">
                <p className="text-[12px] font-normal">18:12</p>
                <i class="bi bi-check2"></i>
              </div>
            </div>
            <div className="w-fit bg-[#16457E] text-white py-[4px] px-[12px] rounded-[5px] ml-auto">
              <p className="text-[16px] font-normal">
                i don't remember anything 😄
              </p>
              <div className="flex items-center justify-end gap-[5px]">
                <p className="text-[12px] font-normal">18:12</p>
                <i class="bi bi-check2"></i>
              </div>
            </div>

            <div className="relative w-full">
              <input
                type="text"
                placeholder="Message"
                className="w-full bg-white border-[1px] border-[#D0D5DD] rounded-[12px] text-[#707991] placeholder:text-[#707991] text-[16px] py-[14px] px-[40px] focus:outline-none"
              />
              <i className="bi bi-emoji-smile text-[#757575] absolute left-[15px] top-[50%] translate-y-[-50%] text-[16px]"></i>
              <i className="bi bi-send text-[#757575] absolute right-[15px] top-[50%] translate-y-[-50%] text-[16px]"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
