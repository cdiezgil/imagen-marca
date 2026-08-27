import * as React from "react";
import { cn } from "../lib/utils";

/**
 * Tabla analítica diseñada para mostrar alta densidad de datos.
 * Utiliza tipografía tabular para asegurar alineación de números.
 */
export function Table({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full overflow-auto">
      <table
        className={cn("w-full caption-bottom text-sm font-sans", className)}
        {...props}
      />
    </div>
  );
}

export function TableHeader({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn("[&_tr]:border-b border-technical dark:border-navy-light", className)} {...props} />;
}

export function TableBody({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />;
}

export function TableRow({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={cn(
        "border-b border-technical dark:border-navy-light transition-colors hover:bg-technical/50 dark:hover:bg-navy-light/50",
        className
      )}
      {...props}
    />
  );
}

export function TableHead({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        "h-12 px-4 text-left align-middle font-bold text-navy dark:text-technical [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  );
}

export function TableCell({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={cn(
        "p-4 align-middle font-light tabular-nums [&:has([role=checkbox])]:pr-0", // font-light (Geist 300) y tabular-nums para datos
        className
      )}
      {...props}
    />
  );
}
