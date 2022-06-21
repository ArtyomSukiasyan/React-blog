import Navbar from "./Navbar/Navbar";
import logo from "../../Assets/logo.png";
import "./Header.scss";
import { ReactElement } from "react";

export default function Header(): ReactElement {
  return (
    <header>
      <img className="logo" src={logo} alt="Logo" />
      <Navbar />
    </header>
  );
}
