import { ICovidDataItem, TWeeklyAverageData } from "@/types/covid.types";
import { format, parseISO, startOfWeek } from "date-fns";

export const groupCovidData = (data: ICovidDataItem[]) => {
  const groupedData: TWeeklyAverageData = new Map();
  for (const item of data) {
    const date = parseISO(item.date);
    const weekStart = format(startOfWeek(date), "yyyy-MM-dd");

    if (!groupedData.has(weekStart)) {
      groupedData.set(weekStart, {
        cases: 0,
        testing: 0,
        deaths: 0,
      });
    }

    const weekData = groupedData.get(weekStart);
    if (!weekData) {
      continue;
    }

    if (item.cases.total.value !== null)
      weekData.cases += item.cases.total.calculated.change_from_prior_day ?? 0;
    if (item.testing.total.value !== null)
      weekData.testing += item.testing.total.calculated.change_from_prior_day ?? 0;
    if (item.outcomes.death.total.value !== null)
      weekData.deaths += item.outcomes.death.total.calculated.change_from_prior_day ?? 0;
  }
  return groupedData;
};

export const processCovidData = (data: ICovidDataItem[]) => {
  const groupedData = groupCovidData(data);
  return groupedData;
};
