import { useState } from "react";
import heroDesktop from "../assets/img/hero-desktop.png";
import heroMobile from "../assets/img/hero-mobile.png";

const QuizBanner = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="quiz-banner">
      <div className="container">
        <p className="quiz-banner__question">
          Do you have Teeth Gaps or Crooked Teeth?
        </p>
        <div className="quiz-banner__options">
          <label className="quiz-banner__option-label">
            <input
              type="radio"
              name="teeth-gaps"
              value="yes"
              checked={selected === "yes"}
              onChange={() => setSelected("yes")}
              className="quiz-banner__radio"
            />
            <span className="quiz-banner__radio-custom"></span>
            Yes
          </label>
          <label className="quiz-banner__option-label">
            <input
              type="radio"
              name="teeth-gaps"
              value="no"
              checked={selected === "no"}
              onChange={() => setSelected("no")}
              className="quiz-banner__radio"
            />
            <span className="quiz-banner__radio-custom"></span>
            No
          </label>
        </div>
      </div>
    </section>
  );
};

const BookingForm = () => {
  const [consent, setConsent] = useState(true);

  return (
    <section className="booking-section">
      <div className="container">
        <form
          className="booking-form-horizontal"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="booking-form__fields-row">
            <fieldset className="booking-form__field">
              <legend className="booking-form__floating-label">Full Name*</legend>
              <input
                className="booking-form__input"
                type="text"
                placeholder="Ajay Kumar"
                required
              />
            </fieldset>

            <fieldset className="booking-form__field">
              <legend className="booking-form__floating-label">
                Mobile number*
              </legend>
              <div className="booking-form__input-phone-wrapper">
                <span className="booking-form__phone-prefix">+91</span>
                <input
                  className="booking-form__input booking-form__input--phone"
                  type="tel"
                  placeholder="Mobile number*"
                  required
                />
              </div>
            </fieldset>

            <button type="submit" className="booking-form__submit-btn">
              Book a Free Scan
            </button>
          </div>

          <div className="booking-form__consent-row">
            <label className="booking-form__consent-label">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="booking-form__consent-checkbox"
              />
              <span className="booking-form__consent-checkbox-custom"></span>
              <span className="booking-form__consent-text">
                I hereby consent to receive calls / messages from Whistle and
                its partners and override DND settings.
              </span>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

const CloveBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="clove-section">
      <div className="container">
        <div className="clove-banner">
          <div className="clove-banner__main">
            <div className="clove-banner__text">
              <h2>
                Book a Free 3D Teeth Scan and Orthodontist Consult in a <br />
                Clove Dental Clinic near you.
              </h2>
            </div>
            <div className="clove-banner__logo-area">
              <div className="clove-logo">
                <span className="clove-logo__text">
                  clove<span className="clove-logo__smiley">:)</span>
                </span>
                <span className="clove-logo__subtext">DENTAL</span>
              </div>
              <button
                type="button"
                className="clove-banner__toggle"
                onClick={() => setIsOpen(!isOpen)}
              >
                Find Clinic
                <svg
                  className={`clove-banner__arrow ${isOpen ? "open" : ""}`}
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="clove-banner__finder">
              <div className="clinic-finder__fields">
                <select className="clinic-finder__select" defaultValue="">
                  <option value="" disabled>
                    Select State
                  </option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                </select>
                <select className="clinic-finder__select" defaultValue="">
                  <option value="" disabled>
                    Select City
                  </option>
                  <option value="delhi">Delhi</option>
                  <option value="noida">Noida</option>
                  <option value="gurgaon">Gurgaon</option>
                </select>
                <button className="btn btn-primary" type="button">
                  Find Clove
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const OfferBanner = () => (
  <section className="offer-banner">
    <div className="offer-banner__track">
      {Array.from({ length: 6 }, (_, i) => (
        <span key={i}>
          <span className="offer-banner__item">
            Our inaugural launch benefit
          </span>
          <span className="offer-banner__item">Free teeth scan worth Rs 500</span>
          <span className="offer-banner__item">
            Free orthodontic consultation worth Rs{" "}
            {i % 2 === 0 ? "1500" : "2000"}
          </span>
        </span>
      ))}
    </div>
  </section>
);

const Hero = () => (
  <>
    <section className="hero">
      <picture>
        <source srcSet={heroMobile} media="(max-width: 768px)" />
        <img
          src={heroDesktop}
          alt="Invisible Aligners for a dream smile - Whistle"
        />
      </picture>
    </section>
    <QuizBanner />
    <BookingForm />
    <CloveBanner />
    <OfferBanner />
  </>
);

export default Hero;
