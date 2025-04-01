import { apiClient } from "@/config/axios.config";
import { IGenderData } from "@/types/gender.types";

export const getGenderByName = async (name: string): Promise<IGenderData> => {
  const response = await apiClient.get<IGenderData>(`/genderize/${name}`);
  return response.data;
};
