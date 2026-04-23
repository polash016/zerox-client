import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-sm font-semibold tracking-[-0.01em] transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-white hover:opacity-85 hover:-translate-y-px shadow-[0_1px_4px_rgba(10,10,10,0.1)]",
        secondary:
          "bg-white text-ink border border-rule shadow-[0_1px_4px_rgba(10,10,10,0.05)] hover:border-sky-brand hover:shadow-[0_4px_16px_rgba(135,206,235,0.18)]",
        amber:
          "bg-amber-import-dark text-white hover:opacity-85 hover:-translate-y-px",
        ghost: "bg-transparent text-ink hover:bg-rule/60",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-5",
        lg: "h-[50px] px-[30px] text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
