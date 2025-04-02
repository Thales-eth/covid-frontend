import { IGenderData } from "@/types/gender.types";
import { getPercentage } from "@/utils/getPercentage";
import { CircleHelp, Mars, Venus } from "lucide-react";
import CardWrapper from "../CardWrapper/CardWrapper.component";

interface IGenderInfoProps {
  genderData: IGenderData;
}

const renderGenderInfo = (gender: string | null) => {
  const genderInfo = {
    male: (
      <>
        <Mars className="w-10 h-10" />
        <p className="body-medium">Male</p>
      </>
    ),
    female: (
      <>
        <Venus className="w-10 h-10" />
        <p className="body-medium">Female</p>
      </>
    ),
    unknown: (
      <>
        <CircleHelp className="w-10 h-10" />
        <p className="body-medium">Unknown</p>
      </>
    ),
  };
  return genderInfo[gender as keyof typeof genderInfo] || genderInfo.unknown;
};

const GenderInfo = ({ genderData }: IGenderInfoProps) => {
  return (
    <CardWrapper>
      <div className="flex flex-col items-center gap-2">{renderGenderInfo(genderData.gender)}</div>

      <div className="flex flex-col items-center">
        <p className="body-large">{getPercentage(genderData.probability)}%</p>
        <span className="body-small">Chance</span>
      </div>
    </CardWrapper>
  );
};

export default GenderInfo;
