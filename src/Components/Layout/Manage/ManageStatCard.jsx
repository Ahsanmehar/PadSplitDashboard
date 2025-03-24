import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "S", value: 10 },
  { name: "M", value: 20 },
  { name: "T", value: 30 },
  { name: "W", value: 40 },
  { name: "T", value: 35 },
  { name: "F", value: 50 },
];

export default function ManageStatCard({ title, value, moutian, stroke }) {
  return (
    <div className="bg-white shadow-md rounded-[5px] w-[300px] p-[10px]">
      <h3 className="text-[#282828] font-semibold text-[14px]">{title}</h3>
      <h2 className="text-[#282828] font-semibold text-[22px]">{value}</h2>

      <ResponsiveContainer width="100%" height={120}>
        <ComposedChart data={data}>
          <XAxis
            height={10}
            dataKey="name"
            tick={{ fontSize: 10 }}
            axisLine={false}
          />
          <YAxis
            width={20}
            dataKey="value"
            tick={{ fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />

          {/* Mountain effect (Area Chart) */}
          <Area type="monotone" dataKey="value" stroke="none" fill={moutian} />

          {/* Line Chart */}
          <Line
            type="monotone"
            dataKey="value"
            stroke={stroke}
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
