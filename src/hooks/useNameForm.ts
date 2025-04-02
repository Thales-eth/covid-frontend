import { getAgeByName } from "@/services/age.service";
import { getCountriesByName } from "@/services/country.service";
import { getGenderByName } from "@/services/gender.service";
import { IAgeData } from "@/types/age.types";
import { ICountryData } from "@/types/country.types";
import { IGenderData } from "@/types/gender.types";
import { normalizeName } from "@/utils/normalizeName";
import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

interface NameData {
  gender: IGenderData | null;
  countries: ICountryData | null;
  age: IAgeData | null;
}

export const useNameForm = () => {
  const [name, setName] = useState("");
  const [nameData, setNameData] = useState<NameData>({
    gender: null,
    countries: null,
    age: null,
  });

  const {
    mutate: fetchNameData,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: async (name: string) => {
      // NOTE: applied normalization to the name to avoid errors
      const parsedName = normalizeName(name);
      const [genderResponse, countriesResponse, ageResponse] = await Promise.all([
        getGenderByName(parsedName),
        getCountriesByName(parsedName),
        getAgeByName(parsedName),
      ]);

      return {
        gender: genderResponse,
        countries: countriesResponse,
        age: ageResponse,
      };
    },
    onSuccess: (data) => {
      setNameData(data);
      toast.success("Here's your name info");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;
    fetchNameData(name.trim());
    setName("");
  };

  return {
    value: name,
    handleChange,
    handleSubmit,
    isLoading,
    error,
    genderData: nameData.gender,
    countryData: nameData.countries,
    ageData: nameData.age,
  };
};
