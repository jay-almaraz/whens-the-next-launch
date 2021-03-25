import { Box, Heading } from "@theme-ui/components";
import Head from "next/head";
import Link from "next/link";
import { Date } from "../components/Date";
import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";

interface HomeProps {
  data: Array<{ id: string; title: string; date: string }>;
}

export default function Home(props: HomeProps) {
  const { data } = props;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Box
        as="section"
        sx={{
          fontSize: "1.2rem",
          lineHeight: 1.5,
        }}
      >
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </Box>
      <Box
        as="section"
        sx={{
          fontSize: "1.2rem",
          lineHeight: 1.5,
          paddingTop: 2,
        }}
      >
        {" "}
        <Heading as="h2">Blog</Heading>
        <Box as="ul" sx={{ listStyle: "none", padding: 0, margin: 0 }}>
          {data.map(({ id, date, title }) => (
            <Box as="li" key={id} sx={{ margin: "0 0 1.25rem" }}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <Box as="small" sx={{ color: "#666" }}>
                <Date dateString={date} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = getSortedPostsData();
  return {
    props: {
      data,
    },
  };
};
