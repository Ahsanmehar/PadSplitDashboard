import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const data = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 20 },
  { name: "Mar", value: 30 },
  { name: "Apr", value: 40 },
  { name: "May", value: 35 },
  { name: "Jun", value: 50 },
];

function TimetoFlip() {
  return (
    <div className="w-full h-[90%] flex flex-col gap-[20px]">
      <h1 className="text-[28px] font-semibold">Time to Flip</h1>

      <div className="w-full flex flex-col items-center gap-[10px] rounded-[10px] p-[25px] bg-white">
        <h1 className="text-[20px] font-medium">Average Day to Flip</h1>
        <h1 className="text-[32px] font-semibold">1024 days</h1>
      </div>

      <div className="flex flex-col gap-[40px] w-full bg-white shadow-[0px 2px 48px 0px #00000005;] rounded-[5px] p-[30px] w-[200px]">
        <div className="flex justify-between items-center">
          <h3 className="text-[#282828] font-semibold text-[18px]">
            Average Days to Flip
          </h3>
          <h3 className="text-white font-normal text-[14px] py-[5px] px-[20px] bg-[#16457E] rounded-[5px]">
            Average Days to Flip
          </h3>
        </div>

        <ResponsiveContainer width="100%" height={500}>
          <LineChart data={data}>
            <XAxis dataKey="name" axisLine={false} />
            <YAxis dataKey={"value"} axisLine={false} />
            <Tooltip />
            {/* Mountain effect (Area Chart) */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="none"
              fill={"#fefbfb"}
            />

            {/* Line Chart */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#D84E4E"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
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
        </tbody>
      </table>
    </div>
  );
}

export default TimetoFlip;
