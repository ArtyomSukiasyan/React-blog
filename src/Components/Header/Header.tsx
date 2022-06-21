import Navbar from "./Navbar/Navbar";
import logo from "../../Assets/logo.png";
import "./Header.scss";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

export default function Header(): ReactElement {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate("/");
  };

  return (
    <header>
      <img className="logo" src={logo} alt="Logo" onClick={handleClick} />
      <Navbar />
    </header>
  );
}
