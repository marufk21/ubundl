const Happy = () => (
  <section className="testimonials">
    <div className="container">
      <h2 className="section-title">Happy Smilers!</h2>
      
      <div className="testimonials__grid">
        {Array.from({ length: 5 }, (_, i) => (
          <div className="testimonial-card" key={i}>
            <img
              className="testimonial-card__image"
              src={`https://picsum.photos/seed/testimonial-${i}/400/300`}
              alt={`Happy customer ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Happy;
