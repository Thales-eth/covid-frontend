import { IAgeData } from "@/types/age.types";
import { TGender } from "@/types/gender.types";
import { getAgeEmoji } from "@/utils/getAgeEmoji";
import CardWrapper from "../CardWrapper/CardWrapper.component";

interface IAgeInfoProps {
  ageData: IAgeData;
  gender?: TGender | null;
}

const AgeInfo = ({ ageData, gender }: IAgeInfoProps) => {
  return (
    <CardWrapper>
      <h3 className="body-large">Estimated Age:</h3>
      <p className="body-large">
        {getAgeEmoji(ageData.age, gender)} {ageData.age}
      </p>
    </CardWrapper>
  );
};

export default AgeInfo;
