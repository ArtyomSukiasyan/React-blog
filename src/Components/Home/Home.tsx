import "./Home.scss";

export default function Home() {
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  return (
    <div className="container">
      {posts.map((post: any) => {
        return (
          <div className="posts">
            <div className="title">
              <h2>{post.title}</h2>
            </div>
            <div className="content">{post.info}</div>
          </div>
        );
      })}
    </div>
  );
}
