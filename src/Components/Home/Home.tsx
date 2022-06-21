import { ReactElement, useState } from "react";
import { ReactComponent as ReactLogo } from "../../Assets/remove.svg";
import { IPost } from "../../models/Post";
import "./Home.scss";

export default function Home(): ReactElement {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts") || "[]")
  );

  const deletePost = (postUserId: number, postId: number) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
    const currentUserId = currentUser[0].id;

    if (postUserId !== currentUserId) {
      return;
    }

    const filteredPosts = posts.filter((el: any) => el.id !== postId);
    setPosts(filteredPosts);
    localStorage.setItem("posts", JSON.stringify(filteredPosts));
  };

  return (
    <div className="container">
      {posts.map((post: IPost) => {
        return (
          <div key={post.id} className="posts">
            <div className="title">
              <h2>{post.title}</h2>
              <ReactLogo
                onClick={() => deletePost(post.userId, post.id)}
                className="delete-icon"
              />
            </div>
            <div className="content">{post.info}</div>
          </div>
        );
      })}
    </div>
  );
}
