import Layout from "@components/Layout";
import { Box, Heading } from "@theme-ui/components";

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

        <Box as="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
          aliquet eget sit amet tellus cras adipiscing. Ipsum dolor sit amet
          consectetur adipiscing elit pellentesque habitant. Tristique nulla
          aliquet enim tortor at. Pharetra convallis posuere morbi leo urna.
          Gravida dictum fusce ut placerat orci nulla pellentesque dignissim.
          Nec dui nunc mattis enim ut. Adipiscing diam donec adipiscing
          tristique risus nec feugiat in. Augue lacus viverra vitae congue eu
          consequat ac felis. Orci nulla pellentesque dignissim enim sit amet
          venenatis. Vestibulum morbi blandit cursus risus at ultrices mi
          tempus. Massa massa ultricies mi quis hendrerit. Egestas pretium
          aenean pharetra magna.
        </Box>
      </Box>
    </Layout>
  );
}
