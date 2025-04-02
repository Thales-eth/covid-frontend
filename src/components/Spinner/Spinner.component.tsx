import { cn } from "@/utils/cn";
import { Loader2 } from "lucide-react";

interface ISpinnerProps {
  size?: number;
  className?: string;
}

const Spinner = ({ size = 10, className }: ISpinnerProps) => {
  return (
    <div className="flex items-center justify-center">
      <Loader2
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        className={cn("animate-spin text-white", className)}
      />
    </div>
  );
};

export default Spinner;
