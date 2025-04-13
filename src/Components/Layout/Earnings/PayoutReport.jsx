function PayoutReport() {
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex justify-between items-center bg-white rounded-[5px] shadow-[0px 10px 60px 0px #E2ECF980] py-[20px] p-[35px]">
        <div className="flex items-center gap-[15px]">
          <div className="flex items-center justify-center w-[63px] h-[63px] bg-[#D1E6FF] rounded-[50%]">
            <i className="bi bi-person text-[#CC4848] text-[30px]"></i>
          </div>
          <div className="flex flex-col gap-[2px]">
            <h4 className="text-[12px] text-[#0B7199] font-semibold">
              Annual Income
            </h4>
            <h2 className="text-[24px] text-[#333333] font-medium">$86,000</h2>
            <h4 className="text-[12px] text-[#CC4848] font-medium">
              <i className="bi bi-arrow-up"></i>16%
              <span className="text-[#292D32] ml-[5px]">this month</span>
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-[15px]">
          <div className="flex items-center justify-center w-[63px] h-[63px] bg-[#D1E6FF] rounded-[50%]">
            <i className="bi bi-person-check text-[#CC4848] text-[30px]"></i>
          </div>
          <div className="flex flex-col gap-[2px]">
            <h4 className="text-[12px] text-[#0B7199] font-semibold">
              Monthly Income
            </h4>
            <h2 className="text-[24px] text-[#333333] font-medium">$27,000</h2>
            <h4 className="text-[12px] text-[#CC4848] font-medium">
              <i className="bi bi-arrow-down"></i>1%
              <span className="text-[#292D32] ml-[5px]">this month</span>
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-[15px]">
          <div className="flex items-center justify-center w-[63px] h-[63px] bg-[#D1E6FF] rounded-[50%]">
            <i className="bi bi-tv text-[#CC4848] text-[30px]"></i>
          </div>
          <div className="flex flex-col gap-[2px]">
            <h4 className="text-[12px] text-[#16457E] font-semibold">
              Current Month
            </h4>
            <h2 className="text-[24px] text-[#333333] font-medium">$22,000</h2>
            <h4 className="text-[12px] text-[#CC4848] font-medium">
              <i className="bi bi-arrow-down"></i>1%
              <span className="text-[#292D32] ml-[5px]">this month</span>
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-[15px]">
          <div className="flex items-center justify-center w-[63px] h-[63px] bg-[#D1E6FF] rounded-[50%]">
            <i className="bi bi-tv text-[#CC4848] text-[30px]"></i>
          </div>
          <div className="flex flex-col gap-[2px]">
            <h4 className="text-[12px] text-[#16457E] font-semibold">
              Payout Accounts
            </h4>
            <h2 className="text-[24px] text-[#333333] font-medium">
              60 <span className="text-[15px]">Active</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-[20px] py-[20px] px-[35px] rounded-[5px] bg-white">
        <div className="w-full flex items-center justify-between">
          <h4 className="text-[22px] font-semibold">
            Payout Report for Period
          </h4>

          <div className="flex items-center gap-[20px]">
            <div className="flex items-center gap-[12px] bg-[#EAF3FF] rounded-[5px] py-[8px] px-[15px]">
              <h4 className="text-[12px] font-medium">Range From</h4>
              <i className="bi bi-calendar2 text-[#D84E4E]"></i>
              <span className="text-[12px] font-medium">To</span>
              <i className="bi bi-calendar2 text-[#D84E4E]"></i>
            </div>

            <div className="relative w-[240px]">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#EAF3FF] border-[1px] border-[#B5B7C0] rounded-[5px] placeholder:text-[#757575] text-[12px] py-[8px] px-[40px]"
              />
              <i className="bi bi-search text-[#757575] absolute left-[15px] top-[50%] translate-y-[-50%] text-[16px]"></i>
            </div>
          </div>
        </div>

        <table className="w-full bg-white">
          <thead>
            <tr className="text-[14px] text-[#16457E] border-b-[1px] border-[#EEEEEE]">
              <th className="font-semibold py-[12px] px-[24px] flex items-center gap-[10px]">
                Month
              </th>
              <th className="font-semibold py-[15px] px-[24px]">Income</th>
              <th className="font-semibold py-[15px] px-[24px]">Earnings</th>
              <th className="font-semibold py-[15px] px-[24px]">
                Active Properties
              </th>
              <th className="font-semibold py-[15px] px-[24px]">CSV Export</th>
              <th className="font-semibold py-[15px] px-[24px]">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-[14px] text-[#292D32] border-b-[1px] border-[#EEEEEE]">
              <th className="text-[#101828] font-medium py-[25px] px-[24px] flex items-center gap-[10px]">
                Jan 2025
              </th>
              <th className="font-medium py-[25px] px-[24px]">$59,000</th>
              <th className="font-medium py-[25px] px-[24px]">$120,000</th>
              <th className="font-medium py-[25px] px-[24px]">14</th>
              <th className="font-medium py-[25px] px-[24px]">
                <i className="bi bi-download mr-[7px] text-[#CC4848]"></i>CSV
              </th>
              <th className="font-medium flex justify-center text-white">
                <div className="py-[4px] px-[10px] w-[70%] bg-[#16457E] rounded-[5px]">
                  <i className="bi bi-cloud-arrow-down mr-[7px]"></i>Report
                </div>
              </th>
            </tr>
            <tr className="text-[14px] text-[#292D32] border-b-[1px] border-[#EEEEEE]">
              <th className="text-[#101828] font-medium py-[25px] px-[24px] flex items-center gap-[10px]">
                Jan 2025
              </th>
              <th className="font-medium py-[25px] px-[24px]">$59,000</th>
              <th className="font-medium py-[25px] px-[24px]">$120,000</th>
              <th className="font-medium py-[25px] px-[24px]">14</th>
              <th className="font-medium py-[25px] px-[24px]">
                <i className="bi bi-download mr-[7px] text-[#CC4848]"></i>CSV
              </th>
              <th className="font-medium flex justify-center text-white">
                <div className="py-[4px] px-[10px] w-[70%] bg-[#16457E] rounded-[5px]">
                  <i className="bi bi-cloud-arrow-down mr-[7px]"></i>Report
                </div>
              </th>
            </tr>
            <tr className="text-[14px] text-[#292D32] border-b-[1px] border-[#EEEEEE]">
              <th className="text-[#101828] font-medium py-[25px] px-[24px] flex items-center gap-[10px]">
                Jan 2025
              </th>
              <th className="font-medium py-[25px] px-[24px]">$59,000</th>
              <th className="font-medium py-[25px] px-[24px]">$120,000</th>
              <th className="font-medium py-[25px] px-[24px]">14</th>
              <th className="font-medium py-[25px] px-[24px]">
                <i className="bi bi-download mr-[7px] text-[#CC4848]"></i>CSV
              </th>
              <th className="font-medium flex justify-center text-white">
                <div className="py-[4px] px-[10px] w-[70%] bg-[#16457E] rounded-[5px]">
                  <i className="bi bi-cloud-arrow-down mr-[7px]"></i>Report
                </div>
              </th>
            </tr>
            <tr className="text-[14px] text-[#292D32] border-b-[1px] border-[#EEEEEE]">
              <th className="text-[#101828] font-medium py-[25px] px-[24px] flex items-center gap-[10px]">
                Jan 2025
              </th>
              <th className="font-medium py-[25px] px-[24px]">$59,000</th>
              <th className="font-medium py-[25px] px-[24px]">$120,000</th>
              <th className="font-medium py-[25px] px-[24px]">14</th>
              <th className="font-medium py-[25px] px-[24px]">
                <i className="bi bi-download mr-[7px] text-[#CC4848]"></i>CSV
              </th>
              <th className="font-medium flex justify-center text-white">
                <div className="py-[4px] px-[10px] w-[70%] bg-[#16457E] rounded-[5px]">
                  <i className="bi bi-cloud-arrow-down mr-[7px]"></i>Report
                </div>
              </th>
            </tr>
            <tr className="text-[14px] text-[#292D32] border-b-[1px] border-[#EEEEEE]">
              <th className="text-[#101828] font-medium py-[25px] px-[24px] flex items-center gap-[10px]">
                Jan 2025
              </th>
              <th className="font-medium py-[25px] px-[24px]">$59,000</th>
              <th className="font-medium py-[25px] px-[24px]">$120,000</th>
              <th className="font-medium py-[25px] px-[24px]">14</th>
              <th className="font-medium py-[25px] px-[24px]">
                <i className="bi bi-download mr-[7px] text-[#CC4848]"></i>CSV
              </th>
              <th className="font-medium flex justify-center text-white">
                <div className="py-[4px] px-[10px] w-[70%] bg-[#16457E] rounded-[5px]">
                  <i className="bi bi-cloud-arrow-down mr-[7px]"></i>Report
                </div>
              </th>
            </tr>
            <tr className="text-[14px] text-[#292D32] border-b-[1px] border-[#EEEEEE]">
              <th className="text-[#101828] font-medium py-[25px] px-[24px] flex items-center gap-[10px]">
                Jan 2025
              </th>
              <th className="font-medium py-[25px] px-[24px]">$59,000</th>
              <th className="font-medium py-[25px] px-[24px]">$120,000</th>
              <th className="font-medium py-[25px] px-[24px]">14</th>
              <th className="font-medium py-[25px] px-[24px]">
                <i className="bi bi-download mr-[7px] text-[#CC4848]"></i>CSV
              </th>
              <th className="font-medium flex justify-center text-white">
                <div className="py-[4px] px-[10px] w-[70%] bg-[#16457E] rounded-[5px]">
                  <i className="bi bi-cloud-arrow-down mr-[7px]"></i>Report
                </div>
              </th>
            </tr>
            <tr className="text-[14px] text-[#292D32] border-b-[1px] border-[#EEEEEE]">
              <th className="text-[#101828] font-medium py-[25px] px-[24px] flex items-center gap-[10px]">
                Jan 2025
              </th>
              <th className="font-medium py-[25px] px-[24px]">$59,000</th>
              <th className="font-medium py-[25px] px-[24px]">$120,000</th>
              <th className="font-medium py-[25px] px-[24px]">14</th>
              <th className="font-medium py-[25px] px-[24px]">
                <i className="bi bi-download mr-[7px] text-[#CC4848]"></i>CSV
              </th>
              <th className="font-medium flex justify-center text-white">
                <div className="py-[4px] px-[10px] w-[70%] bg-[#16457E] rounded-[5px]">
                  <i className="bi bi-cloud-arrow-down mr-[7px]"></i>Report
                </div>
              </th>
            </tr>
          </tbody>
        </table>

          <div className="w-full bg-white flex justify-between items-center mt-[20px] py-[12px] px-[24px] rounded-[5px] shadow-[0px 0px 4.7px 0px #0000004D]">
            <h3 className="text-[14px] text-[#B5B7C0] font-normal">
              Showing data 1 to 8 of 256K entries
            </h3>

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
  );
}

export default PayoutReport;
