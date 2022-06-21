import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { INavbarItem } from "../../../../models/NavbarItem";
import "./NavbarItem.scss";

export default function NavbarItem({ href, title }: INavbarItem): ReactElement {
  return (
    <NavLink className="menu-item" to={href}>
      {title}
    </NavLink>
  );
}
