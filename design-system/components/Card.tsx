import * as React from "react";
import { cn } from "../lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "vip";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border overflow-hidden p-6", // p-6 = 24px (8pt grid)
          {
            "bg-white dark:bg-navy-light border-technical dark:border-navy-light": variant === "default",
            "bg-metal text-white border-none shadow-lg": variant === "vip", // Textura metal cepillado para elementos de alto valor
          },
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card };
