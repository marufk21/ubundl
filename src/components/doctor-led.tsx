const DoctorLed = () => (
  <section className="doctor-led">
    <div className="container">
      <div className="doctor-led__content">
        <h2 className="doctor-led__title">
          We are Doctor-led, not <br />
          direct-to-customers
        </h2>
        <p className="doctor-led__description">
          We don't offer direct-to-customer invisible aligners. We treat you in
          a Dental <br /> clinic with an Orthodontist. Aligners are just the
          beginning; we ensure <br /> comprehensive treatment in over 450+
          clinics nationwide.
        </p>
        <button className="btn btn-primary doctor-led__callback">
          Get a Callback
        </button>
      </div>
      <div className="doctor-led__image">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
          alt="Orthodontist consulting patient"
        />
      </div>
    </div>
  </section>
);

export default DoctorLed;
