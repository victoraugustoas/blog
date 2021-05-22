import React, { useState } from "react";
import { CardPost } from "../components/CardPost";
import { Layout } from "../components/Layout";

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Layout>
      <div className="sm:masonry">
        <CardPost
          title="The first signs of alcoholic liver damage are not in the liver"
          description={
            "The combination of my father's death and my personal back ground a lit a fire in me to know more."
          }
          authorImage="https://images.unsplash.com/photo-1618397306947-68dd11e97812?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          authorName="Victor Augusto"
          authorOffice="Editor"
          imagePost="https://images.unsplash.com/photo-1621306558057-1d040ee57bb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          slug="/post/o-inicio-do-blog/"
        />
        <CardPost
          title="The first signs of alcoholic liver damage are not in the liver"
          authorImage="https://avatars.githubusercontent.com/u/38368198?v=4"
          authorName="Victor Augusto"
          authorOffice="Editor"
          slug="/post/o-inicio-do-blog/"
        />
      </div>
    </Layout>
  );
};

export default HomePage;
