import dcycleLogo from "@/assets/images/dcycle.png";
import RefreshButton from "../RefreshButton/RefreshButton.component";

const ErrorBoundary = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center flex-col gap-5">
      <img src={dcycleLogo} alt="dcycle logo" className="w-[200px]" />
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-primaryBlack title-large">Whoops! Something went wrong...</h1>
        <p className="body-large">An unexpected error occurred. Please try again.</p>
        <RefreshButton />
      </div>
    </div>
  );
};

export default ErrorBoundary;
