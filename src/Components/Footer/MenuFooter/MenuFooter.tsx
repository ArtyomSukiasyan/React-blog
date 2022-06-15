import MenuFooterItem from "../MenuFooterItem/MenuFooterItem";
import "./MenuFooter.scss";

export default function MenuFooter() {
  return (
    <div className="menufooter">
        <MenuFooterItem href="/about" title="About" />
        <MenuFooterItem href="/privacy" title="Privacy policy" />
        <MenuFooterItem href="/terms" title="Terms of use" />
    </div>
  );
}
