import { ReactElement, useState } from "react";
import Button from "../Button/Button";
import { IPost } from "../../models/Post";
import IDgenerator from "../../helpers/IDgenerator";
import "./CreatePost.scss";

export default function CreatePost(): ReactElement {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [postId, setPostId] = useState(1);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleChangeInfo = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInfo(e.target.value);
  };

  const handleSubmit = (): void => {
    const userId = JSON.parse(localStorage.getItem("currentUser") || "[]")[0]
      .id;

    const prevLocalStorage = JSON.parse(localStorage.getItem("posts") || "[]");
    const id = IDgenerator(prevLocalStorage);

    const posts: IPost[] = [
      ...prevLocalStorage,
      {
        id: id,
        title: title,
        info: info,
        userId: userId,
        postId: postId,
      },
    ];

    localStorage.setItem("posts", JSON.stringify(posts));
    
    setTitle("");
    setInfo("");
    setPostId((prev) => prev + 1);
  };

  const emptyInputValues = title === "" || info === "";

  return (
    <div className="wrapper">
      <h2>Create post</h2>
      <div className="create-post-container">
        <form>
          <input
            className="text-field"
            type="text"
            value={title}
            placeholder="Title"
            onChange={handleChangeTitle}
          />
          <textarea
            className="text-field"
            placeholder="Info"
            value={info}
            onChange={handleChangeInfo}
          />

          <Button
            className="create-post"
            onClick={handleSubmit}
            title="Create Post"
            disabled={emptyInputValues}
          />
        </form>
      </div>
    </div>
  );
}
