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
  initialColorModeName: "dark",
  useColorSchemeMediaQuery: true,
  fonts: {
    body: "Roboto Mono, Menlo, monospace",
    heading: "Roboto Mono, Menlo, monospace",
    monospace: "Roboto Mono, Menlo, monospace",
  },
  colors: {
    text: "#fff",
    background: "#222",
    primary: "#0cf",
    secondary: "#90c",
    success: COLOR.success,
    warning: COLOR.warning,
    error: COLOR.error,
  },
  forms: {
    select: {
      fontFamily: "body",
      fontSize: 16,
      width: "auto",
      paddingRight: "32px",
      paddingTop: 3,
      paddingBottom: 3,
      borderColor: "text",
      borderWidth: 3,
      borderRadius: 0,
      color: "#fff",
      backgroundColor: "#000",
      boxShadow: "4px 4px 0 0 #fff",
    },
  },
  // buttons: {
  //   ...preset.buttons,
  //   console: {
  //     border: "1px solid #fefefe",
  //     borderRadius: 0,
  //     backgroundColor: "#000000",
  //     color: "white",
  //     fontSize: 9,
  //     padding: 1,
  //     margin: 0,
  //     fontFamily: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  //     monospace`,
  //   },
  //   facebook: {
  //     ...preset.buttons.primary,
  //     background: "#4267b2",
  //   },
  //   twitter: {
  //     ...preset.buttons.primary,
  //     background: "#1fa1f1",
  //   },
  //   success: {
  //     ...preset.buttons.primary,
  //     background: COLOR.success,
  //   },
  //   menuitem: {
  //     borderRadius: 0,
  //     background: "none",
  //     color: "#000000",
  //     margin: 0,
  //     fontSize: 15,
  //     padding: 3,
  //     textAlign: "left",
  //     "&:hover": {
  //       cursor: "pointer",
  //       background: "#ececec",
  //     },
  //   },
  // },
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

export default theme;
export { LAYOUT };
