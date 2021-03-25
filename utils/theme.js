import preset from "@rebass/preset";

const COLOR = {
  success: "#00a862",
  warning: "#fbbc05",
  error: "#e75b52",
};

const LAYOUT = {
  APPBAR_HEIGHT: 48,
  CONTENT_WIDTH: 960,
};

const theme = {
  ...preset,
  initialColorModeName: "light",
  useColorSchemeMediaQuery: true,
  buttons: {
    ...preset.buttons,
    console: {
      border: "1px solid #fefefe",
      borderRadius: 0,
      backgroundColor: "#000000",
      color: "white",
      fontSize: 9,
      padding: 1,
      margin: 0,
      fontFamily: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace`,
    },
    facebook: {
      ...preset.buttons.primary,
      background: "#4267b2",
    },
    twitter: {
      ...preset.buttons.primary,
      background: "#1fa1f1",
    },
    success: {
      ...preset.buttons.primary,
      background: COLOR.success,
    },
    menuitem: {
      borderRadius: 0,
      background: "none",
      color: "#000000",
      margin: 0,
      fontSize: 15,
      padding: 3,
      textAlign: "left",
      "&:hover": {
        cursor: "pointer",
        background: "#ececec",
      },
    },
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#956BF6",
    secondary: "#80FBAF",
    success: COLOR.success,
    warning: COLOR.warning,
    error: COLOR.error,
    modes: {
      dark: {
        text: "#fff",
        background: "#222",
        primary: "#0cf",
        secondary: "#90c",
      },
    },
  },
  breakpoints: [
    "600px", // xs
    "960px", // sm
    "1280px", // md
    "1920px", // lg
    "2560px", // xl
  ],
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
      h1: {
        variant: "text.heading",
        fontSize: [4, 5],
      },
      h2: {
        variant: "text.heading",
        fontSize: 4,
      },
      h3: {
        variant: "text.heading",
        fontSize: 3,
      },
      h4: {
        variant: "text.heading",
        fontSize: 2,
      },
      h5: {
        variant: "text.heading",
        fontSize: 1,
      },
      h6: {
        variant: "text.heading",
        fontSize: 0,
      },
      a: {
        color: "primary",
        textDecoration: "none",
        ":hover": {
          color: "secondary",
          textDecoration: "underline",
        },
      },
    },
  },
};

// const theme = {
//   initialColorModeName: "light",
//   useColorSchemeMediaQuery: true,
//   colors: {
//     text: "#000",
//     background: "#fff",
//     primary: "#07c",
//     secondary: "#609",
//     modes: {
//       dark: {
//         text: "#fff",
//         background: "#222",
//         primary: "#0cf",
//         secondary: "#90c",
//       },
//     },
//   },
//   fonts: {
//     body:
//       'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
//     heading: "inherit",
//   },
//   styles: {
//     root: {
//       fontFamily: "body",
//       color: "text",
//       bg: "background",
//     },
//     h1: {
//       fontSize: [4, 5, 6],
//       color: "primary",
//     },
//     a: {
//       color: "primary",
//       textDecoration: "none",
//       ":hover": {
//         color: "secondary",
//         textDecoration: "underline",
//       },
//     },
//   },
// };

// export const theme = {
//   breakpoints: ["40em", "52em", "64em"],
//   space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
//   fonts: {
//     body:
//       'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
//     heading: "inherit",
//     monospace: "Menlo, monospace",
//   },
//   fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
//   fontWeights: {
//     body: 400,
//     heading: 700,
//     bold: 700,
//   },
//   lineHeights: {
//     body: 1.5,
//     heading: 1.125,
//   },
//   colors: {
//     text: "#000",
//     background: "#fff",
//     primary: "#07c",
//     secondary: "#30c",
//     muted: "#f6f6f6",
//     modes: {
//       dark: {
//         text: "#fff",
//         background: "#222",
//         primary: "#0cf",
//         secondary: "#90c",
//       },
//     },
//   },
//   text: {
//     heading: {
//       fontFamily: "heading",
//       lineHeight: "heading",
//       fontWeight: "heading",
//     },
//   },
//   styles: {
//     root: {
//       fontFamily: "body",
//       lineHeight: "body",
//       fontWeight: "body",
//       h1: {
//         variant: "text.heading",
//         fontSize: 5,
//       },
//       h2: {
//         variant: "text.heading",
//         fontSize: 4,
//       },
//       h3: {
//         variant: "text.heading",
//         fontSize: 3,
//       },
//       h4: {
//         variant: "text.heading",
//         fontSize: 2,
//       },
//       h5: {
//         variant: "text.heading",
//         fontSize: 1,
//       },
//       h6: {
//         variant: "text.heading",
//         fontSize: 0,
//       },
//       pre: {
//         fontFamily: "monospace",
//         overflowX: "auto",
//         code: {
//           color: "inherit",
//         },
//       },
//       code: {
//         fontFamily: "monospace",
//         fontSize: "inherit",
//       },
//       table: {
//         width: "100%",
//         borderCollapse: "separate",
//         borderSpacing: 0,
//       },
//       th: {
//         textAlign: "left",
//         borderBottomStyle: "solid",
//       },
//       td: {
//         textAlign: "left",
//         borderBottomStyle: "solid",
//       },
//     },
//   },
// };

export default theme;
export { LAYOUT };
