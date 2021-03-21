import { createTheme } from "@chainsafe/common-theme";
import { UI_CONSTANTS } from "./Constants";

export const lightTheme = createTheme({
  globalStyling: {
    ":root": {
      "--gray": "#33312B",
      "--grayLight": "#FAFAFA",
      "--white": "#ffffff",
      "--pink": "#EA279C",
    },
    body: {
      backgroundColor: "#F5F5F5",
      minHeight: "100vh",
      background: "linear-gradient(179.73deg, #FEFEB0 -1.98%, #FF2BB7 164.51%)",
    },
  },
  themeConfig: {
    constants: {
      ...UI_CONSTANTS,
    },
    palette: {
      additional: {
        gray: "var(--gray)",
        grayLight: "var(--grayLight)",
        white: "var(--white)",
        pink: "var(--pink)",
      },
    },
    overrides: {
      CheckboxInput: {
        root: {
          alignItems: "center",
        },
      },
      Button: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
          fontWeight: 500,
        },
        variants: {
          primary: {
            root: {
              backgroundColor: "var(--gray)",
              color: "var(--white)",
              border: `unset`,
              "& svg": {
                fill: "var(--white)",
              },
            },
            active: {
              backgroundColor: "var(--white)",
              color: "var(--gray)",
              "& svg": {
                fill: "var(--gray)",
              },
            },
            hover: {
              backgroundColor: "var(--white)",
              color: "var(--gray)",
              "& svg": {
                fill: "var(--gray)",
              },
            },
            focus: {
              backgroundColor: "var(--white)",
              color: "var(--gray)",
              "& svg": {
                fill: "var(--gray)",
              },
            },
          },

          outline: {
            root: {
              backgroundColor: "transparent",
              color: "#ffffff",
              border: `1px solid #ffffff`,
              "& svg": {
                fill: "#ffffff",
              },
            },
            active: {
              backgroundColor: "#ffffff",
              color: "#262626",
              borderColor: "#ffffff",
              "& svg": {
                fill: "#262626",
              },
            },
            hover: {
              backgroundColor: "#ffffff",
              color: "#262626",
              borderColor: "#ffffff",
              "& svg": {
                fill: "#262626",
              },
            },
            focus: {
              backgroundColor: "#ffffff",
              color: "#262626",
              borderColor: "#ffffff",
              "& svg": {
                fill: "#262626",
              },
            },
          },
        },
      },
    },
  },
});
