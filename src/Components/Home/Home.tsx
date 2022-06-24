import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as RemoveIcon } from "../../Assets/remove.svg";
import { ReactComponent as EditIcon } from "../../Assets/edit.svg";
import { IPost } from "../../models/Post";
import "./Home.scss";
import { localStorageSetItem } from "../../helpers/localStorage";

export default function Home(): ReactElement {
  const [posts, setPosts] = useState<IPost[]>(
    JSON.parse(localStorage.getItem("posts") || "[]")
  );
  const navigate = useNavigate();

  const editPost = (
    postUserId: number,
    postId: number,
    postTitle: string,
    postInfo: string
  ) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
    const currentUserId = currentUser[0].id;

    if (postUserId !== currentUserId) {
      return;
    }

    navigate("/create-post", { state: { postId, postTitle, postInfo } });
  };

  const deletePost = (postUserId: number, postId: number) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
    const currentUserId = currentUser[0].id;

    if (postUserId !== currentUserId) {
      return;
    }

    const filteredPosts = posts.filter((el: any) => el.id !== postId);
    setPosts(filteredPosts);
    localStorageSetItem("posts", filteredPosts);
  };

  return (
    <div className="container">
      {posts.map((post: IPost) => {
        return (
          <div key={post.id} className="posts">
            <div className="title">
              <h2>{post.title}</h2>
              <div className="icons">
                <EditIcon
                  className="icon"
                  onClick={() =>
                    editPost(post.userId, post.id, post.title, post.info)
                  }
                />
                <RemoveIcon
                  onClick={() => deletePost(post.userId, post.id)}
                  className="icon"
                />
              </div>
            </div>
            <div className="content">{post.info}</div>
          </div>
        );
      })}
    </div>
  );
}
