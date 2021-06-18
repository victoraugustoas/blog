import React from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../components/Layout";
import { GetPostService } from "../../modules/Posts/services/GetPostService";
import { GetPostsService } from "../../modules/Posts/services/GetPostsService";

export async function getStaticPaths() {
  const getPostsService = new GetPostsService();
  const posts = await getPostsService.execute();

  return {
    paths: posts.map((doc) => {
      return { params: { slug: doc.slug } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const getPostService = new GetPostService();
  const getPostsService = new GetPostsService();
  const posts = await getPostsService.execute();
  console.log(posts.find((post) => post.slug === params.slug));

  const doc = await getPostService.execute(
    posts.find((post) => post.slug === params.slug).cid
  );

  return { props: { source: doc } };
}

const PostPage: React.FC<{ source: any }> = ({ source }) => {
  return (
    <Layout>
      <ReactMarkdown
        components={{
          h1: (props) => (
            <h1 className="font-serif text-7xl py-2">{props.children}</h1>
          ),
          h2: (props) => (
            <h2 className="font-serif text-6xl py-2">{props.children}</h2>
          ),
          h3: (props) => (
            <h3 className="font-serif text-5xl py-2">{props.children}</h3>
          ),
          h4: (props) => (
            <h4 className="font-serif text-4xl py-2">{props.children}</h4>
          ),
          h5: (props) => (
            <h5 className="font-serif text-3xl py-2">{props.children}</h5>
          ),
          h6: (props) => (
            <h6 className="font-serif text-2xl py-2">{props.children}</h6>
          ),
          p: (props) => <p className="font-sans base py-3">{props.children}</p>,
        }}
      >
        {source}
      </ReactMarkdown>
    </Layout>
  );
};

export default PostPage;
