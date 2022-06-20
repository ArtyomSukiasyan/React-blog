import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.scss";
import SignIn from "./Components/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import LogIn from "./Components/LogIn/Login";
import CreatePost from "./Components/CreatePost/CreatePost";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={""}></Route>
        <Route path="/create-post" element={<CreatePost />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
