import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { ReactElement } from "react";
import FooterIcon from "../FooterIcon/FooterIcon";
import "./FooterIcons.scss";

export default function FooterIcons(): ReactElement {
  return (
    <div className="footer-icons">
      <FooterIcon href="https://www.youtube.com/" icon={faYoutube} />
      <FooterIcon href="https://facebook.com/" icon={faFacebook} />
      <FooterIcon href="https://www.twitter.com/" icon={faTwitter} />
      <FooterIcon href="https://www.instagram.com/" icon={faInstagram} />
    </div>
  );
}
