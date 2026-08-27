import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utilidad estándar para fusionar clases de Tailwind CSS sin conflictos.
 * Imprescindible para crear componentes reutilizables.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
