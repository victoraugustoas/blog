import { createStyles, makeStyles } from "@material-ui/core";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { GetPostService } from "../../modules/Posts/services/GetPostService";
import { GetPostsService } from "../../modules/Posts/services/GetPostsService";

const useStyles = makeStyles(
  ({ typography: { pxToRem, ...typography }, ...theme }) => createStyles({})
);

export async function getStaticPaths() {
  const getPostsService = new GetPostsService();
  const posts = await getPostsService.execute();

  console.log(posts.cids);

  return {
    paths: posts.cids.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const getPostService = new GetPostService();
  const getPostsService = new GetPostsService();
  const posts = await getPostsService.execute();
  const doc = await getPostService.execute(
    posts.cids.find((post) => post.slug === params.slug).cid
  );

  const mdxSource = await serialize(doc);
  return { props: { source: mdxSource } };
}

const PostPage: React.FC<{ source: any; data: string }> = ({
  source,
  data,
}) => {
  const classes = useStyles();
  return (
    <div>
      <MDXRemote {...source} />
    </div>
  );
};

export default PostPage;
