import { RefreshCw } from "lucide-react";
import Button from "../Button/Button.component";

const RefreshButton = () => {
  return (
    <Button className="mt-4 px-6" onClick={() => location.reload()} icon={<RefreshCw />}>
      Try again
    </Button>
  );
};

export default RefreshButton;
