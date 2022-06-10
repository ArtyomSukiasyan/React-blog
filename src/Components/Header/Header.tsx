import Navbar from "./Navbar/Navbar";
import logo from "../../Assets/logo.png";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo" />
      <Navbar />
    </header>
  );
}
