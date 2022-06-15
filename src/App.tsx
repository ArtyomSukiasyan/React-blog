import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.scss";
import SignIn from "./Components/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={""}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
