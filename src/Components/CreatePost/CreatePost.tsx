import { ReactElement, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import { IPost } from "../../models/Post";
import IDgenerator from "../../helpers/IDgenerator";
import "./CreatePost.scss";
import { emptyString } from "../../constants/ValidationMessages";

export default function CreatePost(): ReactElement {
  const { state } = useLocation();
  const { postId, postTitle, postInfo }: any = state || {};

  const [title, setTitle] = useState<string>(postTitle || emptyString);
  const [info, setInfo] = useState<string>(postInfo || emptyString);

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
    const id = postId || IDgenerator(prevLocalStorage);

    let posts: IPost[];

    if (postId) {
      for (let i = 0; i < prevLocalStorage.length; i++) {
        if (postId === prevLocalStorage[i].id) {
          prevLocalStorage[i].title = title;
          prevLocalStorage[i].info = info;
          break;
        }
      }

      posts = prevLocalStorage;
    } else {
      posts = [
        ...prevLocalStorage,
        {
          id: id,
          title: title,
          info: info,
          userId: userId,
        },
      ];
    }

    localStorage.setItem("posts", JSON.stringify(posts));

    setTitle(emptyString);
    setInfo(emptyString);
  };

  const emptyInputValues = title === emptyString || info === emptyString;

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
