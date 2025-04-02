import Spinner from "../Spinner/Spinner.component";

interface ILoadingOverlayProps {
  title?: string;
}

const LoadingOverlay = ({ title = "Loading..." }: ILoadingOverlayProps) => {
  return (
    <div className="fixed inset-0 flex flex-col gap-4 items-center justify-center bg-secondaryBlue/75">
      <p className="title-large text-gradient">{title}</p>
      <Spinner className="text-gradient" size={100} />
    </div>
  );
};

export default LoadingOverlay;
