function BulkEdit() {
  return (
    <div className="w-full flex flex-col gap-[20px] rounded-[6px] p-[20px] bg-white">
      <div className="flex items-center gap-[100px]">
        <div className="flex items-center gap-[10px]">
          <button className="w-fit bg-f2 py-[8px] px-[14px] rounded-[5px] text-[14px] font-medium text-white shadow-[0px 1px 2px 0px #1018280D]">
            Bulk Edit
          </button>
          <h4 className="text-[14px] text-[#484848] font-semibold">
            Properties
          </h4>
          <i className="bi bi-toggle-on text-[#6074B7] text-[25px]"></i>
          <h4 className="text-[14px] text-[#484848] font-semibold">Rooms</h4>
        </div>
        <div className="flex items-center gap-[10px]">
          <button className="w-fit bg-f2 py-[8px] px-[14px] rounded-[5px] text-[14px] font-medium text-white shadow-[0px 1px 2px 0px #1018280D]">
            Add Room
          </button>
          <button className="w-fit bg-f2 py-[8px] px-[14px] rounded-[5px] text-[14px] font-medium text-white shadow-[0px 1px 2px 0px #1018280D]">
            Add Property
          </button>
          <div className="relative w-[360px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent border-[1px] border-[#D0D5DD] rounded-[5px] placeholder:text-[#757575] text-[16px] py-[10px] px-[40px]"
            />
            <i className="bi bi-search text-[#757575] absolute left-[15px] top-[50%] translate-y-[-50%] text-[16px]"></i>
          </div>
        </div>
      </div>

      <table className="w-full bg-white">
        <thead>
          <tr className="text-[12px] text-[#475467]">
            <th className="font-medium py-[12px] px-[24px] flex items-center gap-[10px]">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-f3"
              />
              Name
            </th>
            <th className="font-medium py-[12px] px-[24px]">
              Status <i className="bi bi-arrow-down"></i>
            </th>
            <th className="font-medium py-[12px] px-[24px]">
              Properties<i className="bi bi-question-circle"></i>
            </th>
            <th className="font-medium py-[12px] px-[24px]">Date Published</th>
            <th className="font-medium py-[12px] px-[24px]">Price</th>
            <th className="font-medium py-[12px] px-[24px]">Listing ID</th>
            <th className="font-medium py-[12px] px-[24px]">Location</th>
          </tr>
        </thead>

        <tbody>
          <tr className="text-[14px] text-[#484848] odd:bg-[#F9FAFB]">
            <th className="text-[#101828] font-medium py-[16px] px-[24px] flex items-center gap-[10px]">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-f3"
              />
              <div className="w-[40px] h-[40px]">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Error-Image"
                  className="w-full h-full object-cover rounded-[2px]"
                />
              </div>
              Property
            </th>
            <th className="font-medium py-[16px] px-[24px] text-center">
              <div className="py-[1px] px-[6px] bg-[#ECFDF3] text-[#027A48] text-[12px] rounded-[6px] w-fit flex items-center justify-center mx-auto">
                <i className="bi bi-dot text-[25px] text-[#12B76A]"></i>Online
              </div>
            </th>
            <th className="font-medium py-[16px] px-[24px]">Casa da Alegria</th>
            <th className="font-medium py-[16px] px-[24px]">01-01-2024</th>
            <th className="font-medium py-[16px] px-[24px]">300$</th>
            <th className="font-medium py-[16px] px-[24px]">1596</th>
            <th className="font-medium py-[16px] px-[24px]">
              Rua dos Amores, 42
            </th>
            <th className="font-medium py-[16px] px-[24px]">
              <i className="bi bi-trash text-[18px] mr-[20px]"></i>
              <i className="bi bi-pencil-square text-[18px]"></i>
            </th>
          </tr>
          <tr className="text-[14px] text-[#484848] odd:bg-[#F9FAFB]">
            <th className="text-[#101828] font-medium py-[16px] px-[24px] flex items-center gap-[10px]">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-f3"
              />
              <div className="w-[40px] h-[40px]">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Error-Image"
                  className="w-full h-full object-cover rounded-[2px]"
                />
              </div>
              Property
            </th>
            <th className="font-medium py-[16px] px-[24px] text-center">
              <div className="py-[1px] px-[6px] bg-[#FEF3F2] text-[#B42318] text-[12px] rounded-[6px] w-fit flex items-center justify-center mx-auto">
                <i className="bi bi-dot text-[25px] text-[#B42318]"></i>offline
              </div>
            </th>
            <th className="font-medium py-[16px] px-[24px]">Casa da Alegria</th>
            <th className="font-medium py-[16px] px-[24px]">01-01-2024</th>
            <th className="font-medium py-[16px] px-[24px]">300$</th>
            <th className="font-medium py-[16px] px-[24px]">1596</th>
            <th className="font-medium py-[16px] px-[24px]">
              Rua dos Amores, 42
            </th>
            <th className="font-medium py-[16px] px-[24px]">
              <i className="bi bi-trash text-[18px] mr-[20px]"></i>
              <i className="bi bi-pencil-square text-[18px]"></i>
            </th>
          </tr>
          <tr className="text-[14px] text-[#484848] odd:bg-[#F9FAFB]">
            <th className="text-[#101828] font-medium py-[16px] px-[24px] flex items-center gap-[10px]">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-f3"
              />
              <div className="w-[40px] h-[40px]">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Error-Image"
                  className="w-full h-full object-cover rounded-[2px]"
                />
              </div>
              Property
            </th>
            <th className="font-medium py-[16px] px-[24px] text-center">
              <div className="py-[1px] px-[6px] bg-[#ECFDF3] text-[#027A48] text-[12px] rounded-[6px] w-fit flex items-center justify-center mx-auto">
                <i className="bi bi-dot text-[25px] text-[#12B76A]"></i>Online
              </div>
            </th>
            <th className="font-medium py-[16px] px-[24px]">Casa da Alegria</th>
            <th className="font-medium py-[16px] px-[24px]">01-01-2024</th>
            <th className="font-medium py-[16px] px-[24px]">300$</th>
            <th className="font-medium py-[16px] px-[24px]">1596</th>
            <th className="font-medium py-[16px] px-[24px]">
              Rua dos Amores, 42
            </th>
            <th className="font-medium py-[16px] px-[24px]">
              <i className="bi bi-trash text-[18px] mr-[20px]"></i>
              <i className="bi bi-pencil-square text-[18px]"></i>
            </th>
          </tr>
          <tr className="text-[14px] text-[#484848] odd:bg-[#F9FAFB]">
            <th className="text-[#101828] font-medium py-[16px] px-[24px] flex items-center gap-[10px]">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-f3"
              />
              <div className="w-[40px] h-[40px]">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Error-Image"
                  className="w-full h-full object-cover rounded-[2px]"
                />
              </div>
              Property
            </th>
            <th className="font-medium py-[16px] px-[24px] text-center">
              <div className="py-[1px] px-[6px] bg-[#FEF3F2] text-[#B42318] text-[12px] rounded-[6px] w-fit flex items-center justify-center mx-auto">
                <i className="bi bi-dot text-[25px] text-[#B42318]"></i>offline
              </div>
            </th>
            <th className="font-medium py-[16px] px-[24px]">Casa da Alegria</th>
            <th className="font-medium py-[16px] px-[24px]">01-01-2024</th>
            <th className="font-medium py-[16px] px-[24px]">300$</th>
            <th className="font-medium py-[16px] px-[24px]">1596</th>
            <th className="font-medium py-[16px] px-[24px]">
              Rua dos Amores, 42
            </th>
            <th className="font-medium py-[16px] px-[24px]">
              <i className="bi bi-trash text-[18px] mr-[20px]"></i>
              <i className="bi bi-pencil-square text-[18px]"></i>
            </th>
          </tr>
          <tr className="text-[14px] text-[#484848] odd:bg-[#F9FAFB]">
            <th className="text-[#101828] font-medium py-[16px] px-[24px] flex items-center gap-[10px]">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-f3"
              />
              <div className="w-[40px] h-[40px]">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Error-Image"
                  className="w-full h-full object-cover rounded-[2px]"
                />
              </div>
              Property
            </th>
            <th className="font-medium py-[16px] px-[24px] text-center">
              <div className="py-[1px] px-[6px] bg-[#ECFDF3] text-[#027A48] text-[12px] rounded-[6px] w-fit flex items-center justify-center mx-auto">
                <i className="bi bi-dot text-[25px] text-[#12B76A]"></i>Online
              </div>
            </th>
            <th className="font-medium py-[16px] px-[24px]">Casa da Alegria</th>
            <th className="font-medium py-[16px] px-[24px]">01-01-2024</th>
            <th className="font-medium py-[16px] px-[24px]">300$</th>
            <th className="font-medium py-[16px] px-[24px]">1596</th>
            <th className="font-medium py-[16px] px-[24px]">
              Rua dos Amores, 42
            </th>
            <th className="font-medium py-[16px] px-[24px]">
              <i className="bi bi-trash text-[18px] mr-[20px]"></i>
              <i className="bi bi-pencil-square text-[18px]"></i>
            </th>
          </tr>
          <tr className="text-[14px] text-[#484848] odd:bg-[#F9FAFB]">
            <th className="text-[#101828] font-medium py-[16px] px-[24px] flex items-center gap-[10px]">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-f3"
              />
              <div className="w-[40px] h-[40px]">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Error-Image"
                  className="w-full h-full object-cover rounded-[2px]"
                />
              </div>
              Property
            </th>
            <th className="font-medium py-[16px] px-[24px] text-center">
              <div className="py-[1px] px-[6px] bg-[#FEF3F2] text-[#B42318] text-[12px] rounded-[6px] w-fit flex items-center justify-center mx-auto">
                <i className="bi bi-dot text-[25px] text-[#B42318]"></i>offline
              </div>
            </th>
            <th className="font-medium py-[16px] px-[24px]">Casa da Alegria</th>
            <th className="font-medium py-[16px] px-[24px]">01-01-2024</th>
            <th className="font-medium py-[16px] px-[24px]">300$</th>
            <th className="font-medium py-[16px] px-[24px]">1596</th>
            <th className="font-medium py-[16px] px-[24px]">
              Rua dos Amores, 42
            </th>
            <th className="font-medium py-[16px] px-[24px]">
              <i className="bi bi-trash text-[18px] mr-[20px]"></i>
              <i className="bi bi-pencil-square text-[18px]"></i>
            </th>
          </tr>
          <tr className="text-[14px] text-[#484848] odd:bg-[#F9FAFB]">
            <th className="text-[#101828] font-medium py-[16px] px-[24px] flex items-center gap-[10px]">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-f3"
              />
              <div className="w-[40px] h-[40px]">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Error-Image"
                  className="w-full h-full object-cover rounded-[2px]"
                />
              </div>
              Property
            </th>
            <th className="font-medium py-[16px] px-[24px] text-center">
              <div className="py-[1px] px-[6px] bg-[#ECFDF3] text-[#027A48] text-[12px] rounded-[6px] w-fit flex items-center justify-center mx-auto">
                <i className="bi bi-dot text-[25px] text-[#12B76A]"></i>Online
              </div>
            </th>
            <th className="font-medium py-[16px] px-[24px]">Casa da Alegria</th>
            <th className="font-medium py-[16px] px-[24px]">01-01-2024</th>
            <th className="font-medium py-[16px] px-[24px]">300$</th>
            <th className="font-medium py-[16px] px-[24px]">1596</th>
            <th className="font-medium py-[16px] px-[24px]">
              Rua dos Amores, 42
            </th>
            <th className="font-medium py-[16px] px-[24px]">
              <i className="bi bi-trash text-[18px] mr-[20px]"></i>
              <i className="bi bi-pencil-square text-[18px]"></i>
            </th>
          </tr>
        </tbody>
      </table>
      <div className="w-full bg-white flex justify-between items-center py-[12px] px-[24px] rounded-[5px] shadow-[0px 0px 4.7px 0px #0000004D]">
        <button className="py-[8px] px-[14px] border-[1px] border-[#D0D5DD] flex items-center gap-[8px] text-[14px] font-semibold text-[#344054] rounded-[8px]">
          <i className="bi bi-arrow-left"></i>
          Previous
        </button>
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
        <button className="py-[8px] px-[14px] border-[1px] border-[#D0D5DD] flex items-center gap-[8px] text-[14px] font-semibold text-[#344054] rounded-[8px]">
          Next
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default BulkEdit;
