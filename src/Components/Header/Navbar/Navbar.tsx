import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import NavbarItem from "./NavbarItem/NavbarItem";
import "./Navbar.scss";

export default function Navbar(): ReactElement {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <>
      <NavbarItem href="/" title="Home" />
      <NavbarItem href="/create-post" title="Create post" />
      {localStorage.getItem("currentUser") ? (
        <button className="log-out" onClick={Logout}>
          Log Out
        </button>
      ) : (
        <>
          <NavbarItem href="/sign-in" title="Sign in" />
          <NavbarItem href="/login" title="Log In" />
        </>
      )}
    </>
  );
}
