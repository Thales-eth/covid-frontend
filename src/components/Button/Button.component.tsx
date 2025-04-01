import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";
import Spinner from "../Spinner/Spinner.component";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({
  children,
  icon,
  className,
  disabled = false,
  loading = false,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 rounded-lg bg-primaryBlack px-4 py-2 text-white body-regular cursor-pointer",
        className,
        disabled && "opacity-50",
        loading && "opacity-50 cursor-not-allowed"
      )}
      {...props}
    >
      {loading ? (
        <Spinner size={10} />
      ) : (
        <>
          {icon && icon}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
