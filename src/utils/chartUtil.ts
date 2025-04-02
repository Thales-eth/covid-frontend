import { TWeeklyAverageData } from "@/types/covid.types";

export const groupLineChartDataByKeys = (data: TWeeklyAverageData, keys: string[]) => {
  const res = Array.from(data.entries()).map(([date, item]) => {
    const filteredItem = Object.fromEntries(
      Object.entries(item).filter(([key]) => keys.includes(key))
    );
    return {
      week: date,
      ...filteredItem,
    };
  });

  return res.sort((a, b) => new Date(a.week).getTime() - new Date(b.week).getTime());
};
