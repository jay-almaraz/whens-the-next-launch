import Layout from "@components/Layout";
import { Box, Heading } from "@theme-ui/components";
import Link from "next/link";

const Emoji = ({ children }) => (
  <Box as="span" sx={{ color: "#a0a0a0" }}>
    {children}
  </Box>
);

export default function About() {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Heading as="h1">About</Heading>

        <p>
          When's the next launch? <Emoji>:shrug:</Emoji> Hopefully we provide
          the simplest answer.
        </p>

        <Heading as="h2">Libraries</Heading>
        <p>
          We use the wonderful{" "}
          <span>
            <a
              className="inverted"
              href="https://github.com/r-spacex/SpaceX-API"
              target="_blank"
              rel="noopener"
            >
              r&#8209;spacex/SpaceX&#8209;API
            </a>
          </span>{" "}
          open source REST API for SpaceX to retrieve data.
        </p>

        <Heading as="h2">Contributing</Heading>
        <p>
          We are open source! Check out the{" "}
          <a
            className="inverted"
            href="https://github.com/jay-almaraz/whens-the-next-launch"
            target="_blank"
            rel="noopener"
          >
            whens&#8209;the&#8209;next&#8209;launch
          </a>{" "}
          GitHub repository if you have any feedback, or wanna help out.
        </p>

        <Box
          sx={{
            marginTop: 3,
          }}
        >
          <Link href="/">
            <a>← BACK</a>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
}
