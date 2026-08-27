import * as React from "react";
import { cn } from "../lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded border border-technical dark:border-navy-light bg-transparent px-4 py-2 text-base shadow-sm transition-colors",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-technical-dark dark:placeholder:text-technical/50",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "font-sans font-light", // Geist Light
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
