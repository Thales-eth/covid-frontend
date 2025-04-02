import { getCovidData } from "@/services/covid.service";
import { groupCovidData } from "@/utils/groupCovidData";
import { useQuery } from "@tanstack/react-query";

export const useCovidInfo = () => {
  const {
    data: covidData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["covid-historical-data"],
    queryFn: getCovidData,
    select: ({ data }) => {
      return groupCovidData(data);
    },
  });

  return {
    covidData,
    isLoading,
    error,
  };
};
