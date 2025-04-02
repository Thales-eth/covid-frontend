import CovidInfo from "@/components/CovidInfo/CovidInfo.component";
import ErrorView from "@/components/ErrorView/ErrorView.component";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay.component";
import PageHeader from "@/components/PageHeader/PageHeader.component";
import PageLayout from "@/components/PageLayout/PageLayout.component";
import { useCovidInfo } from "@/hooks/useCovidInfo";

const CovidPage = () => {
  const { covidData, isLoading, error } = useCovidInfo();
  if (isLoading) return <LoadingOverlay />;
  if (error) return <ErrorView />;

  return (
    <PageLayout>
      <PageHeader
        title="Covid Trends"
        description="Get 2020-2021 covid data regarding deaths, cases, and testing:"
      />
      {!!covidData && <CovidInfo weeklyData={covidData} />}
    </PageLayout>
  );
};

export default CovidPage;
