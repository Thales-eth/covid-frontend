import { format, parseISO } from "date-fns";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";

interface ILineChartProps {
  data: Record<string, number | string>[];
  xAxisKey: string;
  dataKeys: string[];
  width?: number | string;
  height?: number | string;
  margin?: {
    top: number;
    right: number;
    left: number;
    bottom: number;
  };
}

const DEFAULT_COLORS = [
  "var(--color-slateBlue)",
  "var(--color-darkTurquoise)",
  "var(--color-primaryGreen)",
  "var(--color-secondaryBlue)",
];

const formatXAxis = (tickItem: string) => {
  if (!tickItem) return "";
  try {
    return format(parseISO(tickItem), "MMM dd, yyyy");
  } catch {
    return tickItem;
  }
};

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-lightGrey rounded shadow-md">
        <p className="body-small">{format(parseISO(label as string), "MMMM dd, yyyy")}</p>
        <div className="mt-2">
          {payload.map((entry, index) => {
            const displayValue = entry.value !== undefined ? entry.value.toLocaleString() : "N/A";

            return (
              <p key={`item-${index}`} style={{ color: entry.color }} className="body-small">
                {`${entry.name || ""}: ${displayValue}`}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};

const CustomLineChart = ({
  data,
  xAxisKey,
  dataKeys,
  width = "100%",
  height = 400,
  margin = { top: 20, right: 30, left: 30, bottom: 60 },
}: ILineChartProps) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChart data={data} margin={margin}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        <XAxis
          dataKey={xAxisKey}
          tickFormatter={formatXAxis}
          angle={-45}
          textAnchor="end"
          height={50}
          tick={{ fontSize: 12 }}
        />
        <YAxis tickFormatter={(value) => value.toLocaleString()} domain={[0, "auto"]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ paddingTop: 20 }}
          formatter={(value) => <span className="body-small">{value}</span>}
        />

        {dataKeys.map((key: string, index: number) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            name={key.charAt(0).toUpperCase() + key.slice(1)}
            stroke={DEFAULT_COLORS[index % DEFAULT_COLORS.length]}
            strokeWidth={2}
            dot={{ r: 2 }}
            activeDot={{ r: 6, strokeWidth: 1 }}
            animationDuration={1500}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
export default CustomLineChart;
