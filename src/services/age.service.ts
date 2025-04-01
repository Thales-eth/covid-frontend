import { apiClient } from "@/config/axios.config";
import { IAgeData } from "@/types/age.types";

export const getAgeByName = async (name: string): Promise<IAgeData> => {
  const response = await apiClient.get<IAgeData>(`/agify/${name}`);
  return response.data;
};
