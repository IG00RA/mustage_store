import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "var(--container)",
        desktop: "var(--desktop)",
      },
      spacing: {
        85: "85px",
        150: "150px",
      },
      fontFamily: {
        inter: "var(--font_inter)",
        sfPro: "var(--font_sfPro)",
      },
      fontSize: {
        small: "var(--fs_small)",
        xsmall: "var(--fs_xsmall)",
        medium: "var(--fs_medium)",
        large: "var(--fs_large)",
        xlarge: "var(--fs_xlarge)",
        mxlarge: "var(--fs_mxlarge)",
        xxlarge: "var(--fs_xxlarge)",
        xxxlarge: "var(--fs_xxxlarge)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainText: "var(--main_text_color)",
        secondText: "var(--second_text_color)",
        accentText: "var(--accent_text_color)",
        overlay: "var(--modal_overlay)",
        btnsBack: "var(--btns_back)",
        iconsBack: "var(--icons_back)",
      },
      boxShadow: {
        main: "var(--box_shadow)",
      },
      backgroundImage: {
        "main-gradient": "var(--main_gradient)",
      },
    },
  },
  plugins: [],
};
export default config;
