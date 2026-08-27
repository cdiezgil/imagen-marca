import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        navy: {
          DEFAULT: "#0A1122",
          light: "#1A2235", // Variante ligeramente más clara para fondos de tarjetas en dark mode
        },
        gold: {
          DEFAULT: "#FFD700",
          dark: "#E6C200", // Para estados hover de botones
        },
        technical: {
          DEFAULT: "#E5E5E5",
          dark: "#CCCCCC",
        },
        semantic: {
          success: "#10B981", // Verde esmeralda para subidas de valor (Onzia)
          danger: "#EF4444", // Rojo coral para bajadas/lesiones
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Roboto Mono", "monospace"],
      },
      spacing: {
        // Aseguramos que Tailwind respete el Grid de 8pt (por defecto Tailwind ya usa base 4px = 0.25rem, por lo que p-2 = 8px, p-4 = 16px, p-6 = 24px, p-8 = 32px)
      },
      backgroundImage: {
        "texture-dots": "var(--texture-dots)",
        "texture-diagonal": "var(--texture-diagonal)",
        "texture-metal": "var(--texture-metal)",
      },
      borderRadius: {
        // Redondeo sutil institucional dictado por el manual (máximo 8px)
        DEFAULT: "0.25rem", // 4px
        md: "0.375rem", // 6px
        lg: "0.5rem", // 8px
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 3s infinite linear",
      },
    },
  },
  plugins: [],
};
export default config;
