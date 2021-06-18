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
              title={post.name}
              description={post.description}
              // authorImage={}
              // authorName={}
              // authorOffice="Editor"
              imagePost={post.photo}
              slug={`/post/${post.slug}`}
              key={post.slug}
            />
          );
        })}

        {/* <CardPost
          title="The first signs of alcoholic liver damage are not in the liver"
          authorImage="https://avatars.githubusercontent.com/u/38368198?v=4"
          authorName="Victor Augusto"
          authorOffice="Editor"
          slug="/post/o-inicio-do-blog/"
        /> */}
      </div>
    </Layout>
  );
};

export default HomePage;
