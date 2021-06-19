import { GetStaticProps } from "next";
import React from "react";
import { CardPost } from "../components/CardPost";
import { Layout } from "../components/Layout";
import { PostDTO } from "../modules/Posts/dtos/PostDTO";
import { GetPostsService } from "../modules/Posts/services/GetPostsService";

interface Props {
  posts: PostDTO[];
}

export const getStaticProps: GetStaticProps = async () => {
  const getPostsService = new GetPostsService();
  const posts = await getPostsService.execute();
  return { props: { posts } };
};

const HomePage: React.FC<Props> = ({ posts }) => {
  return (
    <Layout>
      <div className="sm:masonry">
        {posts.map((post) => {
          return (
            <CardPost
              title={post.title}
              description={post.description}
              authorImage={post.authorImage}
              authorName={post.name}
              authorOffice={post.authorOffice}
              imagePost={post.imagePost}
              slug={`/post/${post.slug}`}
              key={post.slug}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default HomePage;
