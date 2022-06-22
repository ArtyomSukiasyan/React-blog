import { ReactElement } from "react";
import FooterIcon from "../FooterIcon/FooterIcon";
import { ReactComponent as Youtube } from "../../../Assets/youtube.svg";
import { ReactComponent as Facebook } from "../../../Assets/facebook.svg";
import { ReactComponent as Instagram } from "../../../Assets/instagram.svg";
import { ReactComponent as Twitter } from "../../../Assets/twitter.svg";

import "./FooterIcons.scss";

export default function FooterIcons(): ReactElement {
  return (
    <div className="footer-icons">
      <FooterIcon href="https://youtube.com/" icon={<Youtube />} />
      <FooterIcon href="https://www.twitter.com/" icon={<Twitter />} />
      <FooterIcon href="https://facebook.com" icon={<Facebook />} />
      <FooterIcon href="https://www.instagram.com/" icon={<Instagram />} />
    </div>
  );
}
