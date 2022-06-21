import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import NavbarItem from "./NavbarItem/NavbarItem";
import Button from "../../Button/Button";

export default function Navbar(): ReactElement {
  const navigate = useNavigate();

  const Logout = (): void => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <>
      <NavbarItem href="/" title="Home" />
      <NavbarItem href="/create-post" title="Create post" />
      {localStorage.getItem("currentUser") ? (
        <Button className="log-out" onClick={Logout} title="Log out" />
      ) : (
        <>
          <NavbarItem href="/sign-in" title="Sign in" />
          <NavbarItem href="/login" title="Log In" />
        </>
      )}
    </>
  );
}
