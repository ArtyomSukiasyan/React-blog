import { ReactElement } from "react";
import "./FooterIcon.scss";

export default function FooterIcon({
  href,
  icon,
}: {
  href: string;
  icon: any;
}): ReactElement {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="footer-icon">
      {icon}
    </a>
  );
}
