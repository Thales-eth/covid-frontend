import { TGender } from "@/types/gender.types";

export const getAgeEmoji = (age: number, gender?: TGender | null) => {
  if (!gender) return "";

  const ageRanges = [
    { maxAge: 18, male: "👶", female: "👧" },
    { maxAge: 30, male: "👦", female: "👧" },
    { maxAge: 40, male: "👨", female: "👩" },
    { maxAge: 60, male: "👴", female: "👵" },
  ];

  return (
    ageRanges.find((range) => age <= range.maxAge)?.[gender] ?? (gender === "male" ? "👴" : "👵")
  );
};
