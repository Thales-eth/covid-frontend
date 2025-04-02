import PageLayout from "../PageLayout/PageLayout.component";
import RefreshButton from "../RefreshButton/RefreshButton.component";

const ErrorView = () => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-4 p-4 rounded-xl w-1/2 mx-auto">
        <h1 className="text-gradient title-large">Error</h1>
        <p className="body-large">Something went wrong...</p>
        <div className="flex flex-col gap-4">
          <p className="body-medium">Please try again later</p>
          <RefreshButton />
        </div>
      </div>
    </PageLayout>
  );
};

export default ErrorView;
