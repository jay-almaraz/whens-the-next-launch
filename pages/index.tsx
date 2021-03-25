import Layout from "@components/Layout";
import SpaceXLogo from "@components/SpaceXLogo";
import { getNextLaunch, Launch } from "@lib/launches";
import { Box, Label, Select } from "@theme-ui/components";
import Head from "next/head";

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

interface HomeProps {
  data: Launch;
}

const LabelSpan = ({ children }) => {
  return (
    <Box
      as="span"
      sx={{
        //
        fontSize: 13,
        margin: 0,
        padding: 0,
        marginTop: 2,
      }}
    >
      {children}
      <br />
    </Box>
  );
};

const EmphSpan = ({ children }) => {
  return (
    <Box
      as="span"
      sx={{
        //
        fontSize: 36,
        fontWeight: "bold",
        margin: 0,
        padding: 0,
        marginTop: 1,
        overflow: "visible",
      }}
    >
      {children}
      <br />
    </Box>
  );
};

const TimezoneSelect = () => {
  return (
    <Box as="form">
      <Label
        sx={{
          //
          fontSize: 12,
          fontWeight: "bold",
          margin: 0,
          padding: 0,
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        your local time
      </Label>
      <Select defaultValue="(Australia/Brisbane)">
        <option>(Australia/Brisbane)</option>
      </Select>
    </Box>
  );
};

export default function Home(props: HomeProps) {
  const { data } = props;

  const localDate = "Thursday, 1 April 2021";
  const localTime = "10:00 am";

  return (
    <Layout>
      <HtmlHead />

      <Box
        as="p"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: ["100%", 500], overflow: "hidden" }}>
          <SpaceXLogo />
        </Box>
        <LabelSpan>has scheduled the</LabelSpan>
        <EmphSpan>{data.name}</EmphSpan>
        <LabelSpan>mission for</LabelSpan>
        <EmphSpan>{localDate}</EmphSpan>
        <LabelSpan>at</LabelSpan>
        <EmphSpan>{localTime}</EmphSpan>
        <TimezoneSelect />
      </Box>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await getNextLaunch();
  return {
    props: {
      data,
    },
  };
};
