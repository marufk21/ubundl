import navIcon from "../assets/img/nav-icon.png";
import phoneIcon from "../assets/img/phone.png";

const Navbar = () => (
  <header className="navbar">
    <div className="navbar__main">
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo" aria-label="Whistle Aligners">
          <img src={navIcon} alt="Whistle" className="navbar__logo-img" />
        </a>
        <div className="navbar__phone-wrap">
          <a
            href="tel:01169328350"
            className="navbar__phone-icon"
            aria-label="Call us"
          >
            <img src={phoneIcon} alt="Phone" className="navbar__phone-img" />
          </a>
        </div>
      </div>
    </div>
    <div className="navbar__announcement">
      <div className="container">
        <p>
          Starting at{" "}
          <span style={{ textDecoration: "line-through", opacity: 0.7 }}>
            Rs 69,999
          </span>{" "}
          Rs 47,999. Hurry! Offer ends soon.
        </p>
      </div>
    </div>
  </header>
);

export default Navbar;
