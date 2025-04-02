import { ICountryData } from "@/types/country.types";
import { getCountryEmoji } from "@/utils/getCountryEmoji";
import { getPercentage } from "@/utils/getPercentage";
import CardWrapper from "../CardWrapper/CardWrapper.component";

interface ICountryInfoProps {
  countryData: ICountryData;
}

const CountryInfo = ({ countryData }: ICountryInfoProps) => {
  return (
    <CardWrapper>
      <h3 className="body-large">Estimated Countries:</h3>
      <div className="grid grid-cols-4 gap-2">
        {countryData.country.map((country) => (
          <div
            key={country.country_id}
            className="flex items-center gap-2 bg-lightGrey rounded-lg p-2 shadow-sm"
          >
            <span>{getCountryEmoji(country.country_id)}</span>
            <p>{getPercentage(country.probability)}%</p>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
};

export default CountryInfo;
