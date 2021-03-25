import { Box, Heading } from "@theme-ui/components";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Date } from "../../components/Date";
import Layout from "../../components/Layout";
import { getAllPostPaths, getPostData } from "../../lib/posts";

interface PostProps {
  data: { id: string; date: string; title: string; contentHtml: string };
}

const Post = (props: PostProps) => {
  const { data } = props;
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      Gday, {data.title} <Heading as="h1">{data.title}</Heading>
      <Box sx={{ color: "#666" }}>
        <Date dateString={data.date} />
      </Box>
      <div dangerouslySetInnerHTML={{ __html: data.contentHtml }}></div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllPostPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async (ctx) => {
  const id = ctx.params.id as string;

  const postData = await getPostData(id);

  return {
    props: {
      data: postData,
    },
  };
};

export default Post;
