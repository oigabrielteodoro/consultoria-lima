import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss, keyframes, css, theme } =
  createStitches({
    theme: {
      fonts: {
        secondary: "Rubik",
        primary: "Nunito",
      },
      fontSizes: {
        h1: "56px",
        h2: "48px",
        h3: "40px",
        h4: "36px",
        h5: "24px",
        body1: "18px",
        body2: "16px",
        body3: "14px",
      },
      lineHeights: {
        h1: "100%",
        h2: "100%",
        h3: "100%",
        h4: "140%",
        h5: "140%",
        body1: "140%",
        body2: "140%",
        body3: "160%",
      },
      colors: {
        white: "#ffffff",
        black: "#000000",

        neutral100: "#fafafa",
        neutral200: "#e4e4e4",
        neutral300: "#e7e7e7",
        neutral400: "#798aa0",

        blue900: "#254059",
        blue500: "#24d2f5",
        blue300: "#7fe7fb",
        blue100: "#7fe7fb30",
      },
      space: {
        px: "1px",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
      zIndices: {
        alwaysOnBottom: -1,
        middle: 1,
        alwaysOnTop: 2,
        fixed: 3,
      },
    },
    media: {
      mobile: "(max-width: 635px)",
      tablet: "(max-width: 800px)",
      laptop: "(max-width: 1024px)",

      minLaptop: "(min-width: 1024px)",
    },
  });

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: "border-box",
  },

  p: {
    textAlign: "justify",
  },

  html: {
    scrollBehavior: "smooth",
  },

  body: {
    fontFamily: "$primary",
    fontSize: "$body2",
    overflowX: "hidden",
    scrollBehavior: "smooth",
  },

  button: {
    cursor: "pointer",
  },

  ul: {
    listStyle: "none",
  },

  a: {
    textDecoration: "none",
  },
});
