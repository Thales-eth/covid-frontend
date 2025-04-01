import { apiClient } from "@/config/axios.config";
import { ICountryData } from "@/types/country.types";

export const getCountriesByName = async (name: string): Promise<ICountryData> => {
  const response = await apiClient.get(`/nationalize/${name}`);
  return response.data;
};
