import { Box } from "@theme-ui/components";
import Head from "next/head";
import Link from "next/link";

export const SITE_TITLE = "When's the next launch?";

const HtmlHead = () => (
  <Head>
    <title>{SITE_TITLE}</title>
    <meta
      name="description"
      content="Learn how to build a personal website using Next.js"
    />

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="icon" href="/favicon.ico" />

    <meta
      property="og:image"
      content={`https://og-image.vercel.app/${encodeURI(
        SITE_TITLE
      )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
    />
    <meta name="og:title" content={SITE_TITLE} />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
);

const M_LEFT_PADDING = 4;
const D_LEFT_PADDING = 5;

const MenuZone = () => (
  <Box
    sx={{
      display: "flex",
      flex: "1 1 auto",
      alignItems: "flex-start",
      alignContent: "flex-start",
      justifyContent: "space-between",
      width: ["100%", 500],
      // paddingRight: [0, 5],
      marginBottom: [3, 5],
    }}
  >
    <Link href="/">
      <Box
        as="a"
        sx={{
          fontSize: 12,
          backgroundColor: "#fff",
          color: "#000",
          paddingTop: 1,
          paddingBottom: 1,
          paddingRight: 4,
          marginLeft: [-M_LEFT_PADDING, "-76px"],
        }}
      >{`whensthenextlaunch.com`}</Box>
    </Link>

    {/* Desktop nav links */}
    <Box
      sx={{
        display: ["none", "block"],
        textAlign: "right",
        marginTop: 3,
        fontSize: 12,
        paddingRight: D_LEFT_PADDING,
      }}
    >
      <Link href={`/about`}>
        <Box as="a">{"about/legal <"}</Box>
      </Link>
    </Box>

    {/* Mobile menu */}
    <Box
      sx={{
        display: ["block", "none"],
        paddingTop: 3,
        paddingBottom: 3,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#0004C4",
          padding: 2,
          paddingLeft: 4,
          textAlign: "right",
          fontSize: 12,
          fontWeight: "bold",
        }}
      >
        {"MENU <"}
      </Box>
    </Box>
  </Box>
);

const BLACK_SHADOW_SHRINK = 24;
const BLACK_SHADOW_X = 96;
const BLACK_SHADOW_Y = 32;
const WHITE_SHADOW_WIDTH = 11;

const BLACK_SHADOW = `${BLACK_SHADOW_X + BLACK_SHADOW_SHRINK}px ${
  BLACK_SHADOW_Y + BLACK_SHADOW_SHRINK
}px 0 -${BLACK_SHADOW_SHRINK}px #000`;

const WHITE_SHADOW = `${
  BLACK_SHADOW_X + WHITE_SHADOW_WIDTH + BLACK_SHADOW_SHRINK
}px ${
  BLACK_SHADOW_Y + WHITE_SHADOW_WIDTH + BLACK_SHADOW_SHRINK
}px 0 -${BLACK_SHADOW_SHRINK}px #fff`;

const Layout = ({ children }) => {
  return (
    <>
      <HtmlHead />

      <Box
        sx={{
          display: "flex",
          flex: "1 1 auto",
          justifyContent: "center",
          maxWidth: 960,
        }}
      >
        <Box
          as="article"
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            width: ["100vw", 500],
            paddingLeft: [M_LEFT_PADDING, D_LEFT_PADDING],
            paddingBottom: 4,
            backgroundColor: "#000",
            boxShadow: `${BLACK_SHADOW}, ${WHITE_SHADOW}`,
          }}
        >
          <MenuZone />

          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
