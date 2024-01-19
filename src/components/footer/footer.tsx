import "./footer-styles.css";
import { IconFacebook, IconPinterest, IconInstagram } from "./icons";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-icon-container">
        <div className="footer-icon">
          <a href="https://www.facebook.com/" target="_blank">
            <IconFacebook />
          </a>
        </div>
        <div className="footer-icon">
          <a href="https://www.pinterest.com/" target="_blank">
            <IconPinterest />
          </a>
        </div>
        <div className="footer-icon">
          <a href="https://www.instagram.com/" target="_blank">
            <IconInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
