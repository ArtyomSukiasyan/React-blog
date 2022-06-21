import { ReactElement } from "react";
import MenuFooter from "./MenuFooter/MenuFooter";
import FooterIcons from "./FooterIcons/FooterIcons";
import Copyright from "./Copyright/Copyright";
import "./Footer.scss";

export default function Footer(): ReactElement {
  return (
    <footer>
      <MenuFooter />
      <Copyright />
      <FooterIcons />
    </footer>
  );
}
