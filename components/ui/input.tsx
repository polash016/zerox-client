import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "h-11 w-full rounded-[10px] border border-rule bg-white px-4 text-sm text-ink placeholder:text-ink-4",
        "shadow-[0_1px_4px_rgba(10,10,10,0.05)] outline-none transition",
        "focus:border-sky-brand focus:ring-2 focus:ring-sky-brand/30",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
