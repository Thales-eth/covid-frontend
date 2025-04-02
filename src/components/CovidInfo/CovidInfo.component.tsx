import { TWeeklyAverageData } from "@/types/covid.types";
import { groupLineChartDataByKeys } from "@/utils/chartUtil";
import CustomLineChart from "../LineChart/LineChart.component";

interface ICovidInfoProps {
  weeklyData: TWeeklyAverageData;
}

const CovidChartBlock = ({
  blockKeys,
  weeklyData,
  explanation,
  title,
}: {
  blockKeys: string[];
  weeklyData: TWeeklyAverageData;
  explanation: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col gap-[30px] p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-primaryBlack">{title}</h3>
      <p className="text-primaryBlack body-medium">{explanation}</p>
      <CustomLineChart
        data={groupLineChartDataByKeys(weeklyData, blockKeys)}
        xAxisKey="week"
        dataKeys={blockKeys}
      />
    </div>
  );
};

const CHART_BLOCKS: {
  keys: string[];
  explanation: string;
  title: string;
}[] = [
  {
    keys: ["deaths"],
    title: "COVID-19 Weekly Deaths",
    explanation:
      "Weekly deaths across the US, grouped by the first day of each week. The data shows how mortality changed throughout the pandemic.",
  },
  {
    keys: ["cases", "deaths"],
    title: "Cases vs. Deaths Comparison",
    explanation:
      "This chart compares the weekly case counts against weekly deaths, showing the relationship between infections and mortality over time.",
  },
  {
    keys: ["testing", "cases"],
    title: "Testing vs. Cases Comparison",
    explanation:
      "This chart shows the relationship between COVID-19 testing volumes and detected cases, helping visualize test positivity trends.",
  },
];

const CovidInfo = ({ weeklyData }: ICovidInfoProps) => {
  return (
    <div className="flex flex-col gap-[30px]">
      {CHART_BLOCKS.map(({ keys, explanation, title }) => {
        return (
          <CovidChartBlock
            key={keys.join("-")}
            blockKeys={keys}
            weeklyData={weeklyData}
            explanation={explanation}
            title={title}
          />
        );
      })}
    </div>
  );
};

export default CovidInfo;
