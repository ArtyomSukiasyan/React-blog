import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./FooterIcon.scss";
import { ReactElement } from "react";

export default function FooterIcon({
  href,
  icon,
}: {
  href: string;
  icon: IconProp;
}): ReactElement {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="footer-icon">
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  );
}
