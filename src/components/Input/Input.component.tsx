import { cn } from "@/utils/cn"
import { InputHTMLAttributes } from "react"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  value: string
  placeholder: string
  className?: string
}

const Input = ({
  type,
  name,
  value,
  placeholder,
  className,
  ...props
}: IInputProps) => {
  return (
    <input
      className={cn(
        "flex items-center w-full rounded-lg border border-primaryBlack/50 bg-transparent px-3 py-2 text-primaryBlack shadow-sm outline-none body-regular placeholder:text-primaryBlack/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primaryBlack/50",
        className
      )}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      {...props}
    />
  )
}

export default Input
