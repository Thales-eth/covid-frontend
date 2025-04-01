import Spinner from "../Spinner/Spinner.component";

interface ILoadingOverlayProps {
  title: string;
}

const LoadingOverlay = ({ title }: ILoadingOverlayProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/25 backdrop-blur-sm">
      <p className="body-medium">{title}</p>
      <Spinner size={10} />
    </div>
  );
};

export default LoadingOverlay;
