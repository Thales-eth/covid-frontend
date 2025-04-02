export type TGender = "male" | "female";
export interface IGenderData {
  count: number;
  name: string;
  gender: TGender | null;
  probability: number;
}
