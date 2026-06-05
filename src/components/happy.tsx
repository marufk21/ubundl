import { useEffect, useState } from "react";

interface User {
  image: string;
  firstName: string;
  lastName: string;
  company: {
    name: string;
  };
}

const Happy = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("https://dummyjson.com/users");

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setUsers(data.users.slice(0, 6));
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Happy Smilers!</h2>
          <div className="testimonials__status">
            <div className="testimonials__spinner" />
            <p>Loading happy smilers…</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Happy Smilers!</h2>
          <div className="testimonials__status testimonials__status--error">
            <p>Oops! We couldn't load the testimonials right now.</p>
            <p className="testimonials__error-detail">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Happy Smilers!</h2>

        <div className="testimonials__grid">
          {users.map((user, i) => (
            <div className="testimonial-card" key={i}>
              <img
                className="testimonial-card__image"
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <div className="testimonial-card__info">
                <h3 className="testimonial-card__name">
                  {user.firstName} {user.lastName}
                </h3>
                <p className="testimonial-card__designation">
                  {user.company.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Happy;
