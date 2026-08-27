import * as React from "react";
import { cn } from "../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles: font Geist Bold, flex center, transition
          "inline-flex items-center justify-center font-sans font-bold transition-all disabled:opacity-50 disabled:pointer-events-none rounded",
          // Variants
          {
            "bg-primary text-primary-foreground hover:bg-gold-dark active:scale-[0.98]":
              variant === "primary",
            "border border-navy dark:border-white bg-transparent text-navy dark:text-white hover:bg-technical dark:hover:bg-navy-light":
              variant === "secondary",
            "bg-transparent text-navy dark:text-white hover:bg-technical dark:hover:bg-navy-light":
              variant === "ghost",
          },
          // Sizes (Based on 8pt Grid)
          {
            "h-8 px-4 text-sm": size === "sm", // 32px
            "h-12 px-6 text-base": size === "md", // 48px
            "h-16 px-8 text-lg": size === "lg", // 64px
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
