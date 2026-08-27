import * as React from "react";
import { cn } from "../lib/utils";

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
}

/**
 * Loader corporativo que utiliza la textura de líneas diagonales 
 * animadas para simular procesamiento de datos técnicos.
 */
export function Loader({ text = "Procesando...", className, ...props }: LoaderProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-4", className)} {...props}>
      <div className="w-full max-w-[200px] h-2 rounded-full overflow-hidden bg-technical dark:bg-navy-light relative">
        <div 
          className="absolute inset-0 h-full w-full bg-diagonal animate-shimmer"
          style={{
            // Usamos background size grande para que la animación deslice la textura
            backgroundSize: "200% 100%"
          }}
        />
      </div>
      {text && (
        <span className="text-sm font-sans font-light text-navy dark:text-technical">
          {text}
        </span>
      )}
    </div>
  );
}
