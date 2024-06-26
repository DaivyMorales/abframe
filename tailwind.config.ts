import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        gabarito: ["Gabarito", ...fontFamily.sans],
        inter: ["Inter", ...fontFamily.sans],
        lato: ["Lato", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
