import AgeInfo from "@/components/AgeInfo/AgeInfo.component";
import CountryInfo from "@/components/CountryInfo/CountryInfo.component";
import ErrorView from "@/components/ErrorView/ErrorView.component";
import GenderInfo from "@/components/GenderInfo/GenderInfo.component";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay.component";
import NameForm from "@/components/NameForm/NameForm.component";
import PageHeader from "@/components/PageHeader/PageHeader.component";
import PageLayout from "@/components/PageLayout/PageLayout.component";
import { useNameForm } from "@/hooks/useNameForm";

const HomePage = () => {
  const { value, handleChange, handleSubmit, isLoading, error, genderData, countryData, ageData } =
    useNameForm();

  if (isLoading) return <LoadingOverlay title="Loading name info" />;
  if (error) return <ErrorView />;

  return (
    <PageLayout>
      <PageHeader
        title="Name Info"
        description="Search statistics about a person name. This includes: gender, age, country probabilities"
      />
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between md:items-center w-full">
        <NameForm value={value} onChange={handleChange} onSubmit={handleSubmit} />
        {genderData && <p className="body-large capitalize">Name: {genderData?.name}</p>}
      </div>
      {genderData && <GenderInfo genderData={genderData} />}
      {countryData && <CountryInfo countryData={countryData} />}
      {ageData && <AgeInfo ageData={ageData} gender={genderData?.gender} />}
    </PageLayout>
  );
};

export default HomePage;
