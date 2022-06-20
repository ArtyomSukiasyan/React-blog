import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.scss";
import SignIn from "./Components/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import LogIn from "./Components/LogIn/Login";
import CreatePost from "./Components/CreatePost/CreatePost";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
