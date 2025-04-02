import { apiClient } from "@/config/axios.config";
import { IGenderData } from "@/types/gender.types";

export const getGenderByName = async (name: string): Promise<IGenderData> => {
  const { data } = await apiClient.get<IGenderData>(`/genderize/${name}`);
  return data;
};
