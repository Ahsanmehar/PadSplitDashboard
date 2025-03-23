import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "S", value: 10 },
  { name: "M", value: 20 },
  { name: "T", value: 30 },
  { name: "W", value: 40 },
  { name: "T", value: 35 },
  { name: "F", value: 50 },
];

export default function StatCard({ title, value, change }) {
  return (
    <div className="bg-white shadow-[0px 2px 48px 0px #00000005;] rounded-[5px] p-[10px] w-[200px]">
      <div className="flex justify-between items-center">
        <h3 className="text-[#282828] font-semibold text-[14px]">{title}</h3>
        <span className="flex gap-[2px] text-[#282828] font-semibold text-[12px]">
          <i class="bi bi-arrow-up"></i>
          {change}%
        </span>
      </div>
      <h2 className="text-[#282828] font-semibold text-[22px]">{value}</h2>

      <ResponsiveContainer width="100%" height={120}>
        <LineChart data={data}>
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#1E90FF"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
