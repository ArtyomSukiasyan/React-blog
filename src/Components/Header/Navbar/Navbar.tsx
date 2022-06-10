import { BrowserRouter } from "react-router-dom";
import NavbarItem from "./NavbarItem/NavbarItem";

export default function Navbar() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}