import Head from "next/head";
import NextImage, { ImageProps } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Box, Button, Heading, useColorMode } from "theme-ui";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

interface LayoutProps {
  children: ReactNode;
  home?: boolean;
}

const Image = (props: ImageProps) => {
  return <Box as={NextImage} {...props}></Box>;
};

const Layout = (props: LayoutProps) => {
  const { children, home } = props;
  const [colorMode, setColorMode] = useColorMode();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flex: "1 1 auto",
          width: "100%",
          justifyContent: "flex-end",
          padding: 2,
        }}
      >
        <Button
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        >
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Box>

      <Box
        sx={{
          maxWidth: "36rem",
          padding: "0 1rem",
          margin: "3rem auto 6rem",
        }}
      >
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Box
          as="header"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt={name}
                sx={{ borderRadius: 9999 }}
              />
              <Heading as="h1">Kill me</Heading>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    height={108}
                    width={108}
                    alt={name}
                    sx={{ borderRadius: 9999 }}
                  />
                </a>
              </Link>
              <Heading as="h2">
                <Link href="/">
                  <Box as="a" sx={{ color: "inherit" }}>
                    {name}
                  </Box>
                </Link>
              </Heading>
            </>
          )}
        </Box>
        <main>{children}</main>
        {!home && (
          <Box sx={{ margin: "3rem 0 0" }}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Layout;
