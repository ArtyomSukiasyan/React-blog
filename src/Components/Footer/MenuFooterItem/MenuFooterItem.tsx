import { Link } from "react-router-dom";
import { INavbarItem } from "../../../models/NavbarItem";
import "./MenuFooterItem.scss";

export default function MenuFooterItem({ href, title }: INavbarItem) {
  return (
    <Link className="footer-link" to={href}>
      {title}
    </Link>
  );
}
