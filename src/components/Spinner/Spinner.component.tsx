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
        className={cn("animate-spin text-white", size && `h-${size} w-${size}`, className)}
      />
    </div>
  );
};

export default Spinner;
