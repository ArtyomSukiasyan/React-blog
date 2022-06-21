import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.scss";
import SignIn from "./Components/SignIn/SignIn";
import { Navigate, Route, Routes } from "react-router-dom";
import LogIn from "./Components/LogIn/Login";
import CreatePost from "./Components/CreatePost/CreatePost";
import Home from "./Components/Home/Home";
import { ReactElement } from "react";
import ErrorPage from "./Components/404/404";

function App(): ReactElement {
  const currentUser = localStorage.getItem("currentUser") || "";

  return (
    <>
      <Header />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />}></Route>

          {currentUser ? (
            <Route path="/create-post" element={<CreatePost />}></Route>
          ) : (
            <Route
              path="/create-post"
              element={<Navigate to="/login" replace />}
            />
          )}
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
