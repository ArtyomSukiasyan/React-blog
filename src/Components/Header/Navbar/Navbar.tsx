import { ReactElement } from "react";
import NavbarItem from "./NavbarItem/NavbarItem";

export default function Navbar(): ReactElement {
  return (
    <>
      <NavbarItem href="/" title="Home" />
      <NavbarItem href="/create-post" title="Create post" />
      {localStorage.getItem("currentUser") ? (
        <NavbarItem href="/logout" title="LogOut" />
      ) : (
        <>
          <NavbarItem href="/sign-in" title="Sign in" />
          <NavbarItem href="/login" title="LogIn" />
        </>
      )}
    </>
  );
}
