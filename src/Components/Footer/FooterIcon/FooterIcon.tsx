import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./FooterIcon.scss"

export default function FooterIcon({
  href,
  icon,
}: {
  href: string;
  icon: IconProp;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="footer-icon">
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  );
}
