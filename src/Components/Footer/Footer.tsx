import MenuFooter from "./MenuFooter/MenuFooter";
import FooterIcons from "./FooterIcons/FooterIcons";
import Copyright from "./Copyright/Copyright";
import "./Footer.scss";
import { ReactElement } from "react";

export default function Footer(): ReactElement {
  return (
    <footer>
      <MenuFooter />
      <Copyright />
      <FooterIcons />
    </footer>
  );
}
