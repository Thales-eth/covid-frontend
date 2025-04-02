import { apiClient } from "@/config/axios.config";
import { ICovidHistoricalData } from "@/types/covid.types";

export const getCovidData = async () => {
  const response = await apiClient.get<ICovidHistoricalData>("/covid/historical");
  return response.data;
};
