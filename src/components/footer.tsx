import fbIcon from "../assets/icons/facebook_icon.svg";
import igIcon from "../assets/icons/instagram_icon.svg";
import xIcon from "../assets/icons/x_icon.svg";
import phoneIcon from "../assets/icons/phone-call.svg";
import mailIcon from "../assets/icons/mail-Icon.svg";

const quickLinks = [
  "Home",
  "Book a Free Scan",
  "How it Works",
  "Range of Aligners",
  "Aligners vs Braces",
  "FAQs",
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__grid">
      <div className="footer__section footer__section--links">
        <h3 className="footer__heading">Quick Links</h3>
        <ul className="footer__links">
          {quickLinks.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer__section footer__section--contact">
        <h3 className="footer__heading">Get in Touch Now!</h3>
        <div className="footer__contact">
          <a href="tel:011-6932-8350">
            <img src={phoneIcon} alt="Phone" className="footer__contact-icon" />
            <span>011-6932-8350</span>
          </a>
          <a href="mailto:support@whistle.in">
            <img src={mailIcon} alt="Email" className="footer__contact-icon" />
            <span>support@whistle.in</span>
          </a>
        </div>
      </div>

      <div className="footer__section footer__section--social">
        <h3 className="footer__heading">Follow us on</h3>
        <div className="footer__social-icons">
          <a href="#" className="footer__social-icon" aria-label="Instagram">
            <img src={igIcon} alt="Instagram" width="24" height="24" />
          </a>
          <a href="#" className="footer__social-icon" aria-label="Facebook">
            <img src={fbIcon} alt="Facebook" width="24" height="24" />
          </a>
          <a href="#" className="footer__social-icon" aria-label="X">
            <img src={xIcon} alt="X" width="24" height="24" />
          </a>
        </div>
      </div>
    </div>

    <div className="footer__bottom">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
    </div>
  </footer>
);

export default Footer;
