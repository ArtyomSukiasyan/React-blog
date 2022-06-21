import { ReactElement, useState } from "react";
import IDgenerator from "../../helpers/IDgenerator";
import { IPost } from "../../models/Posts";

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
    const posts: IPost[] = [
      ...prevLocalStorage,
      {
        id: IDgenerator(prevLocalStorage),
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
    <div>
      <h2>Create post</h2>

      <form>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={handleChangeTitle}
        />
        <textarea placeholder="Info" value={info} onChange={handleChangeInfo} />

        <button onClick={handleSubmit} disabled={emptyInputValues}>
          Create Post
        </button>
      </form>
    </div>
  );
}
