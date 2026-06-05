import { useCallback, useEffect, useRef, useState } from "react";

interface User {
  image: string;
  firstName: string;
  lastName: string;
  company: {
    name: string;
  };
}

const CARD_WIDTH = 300;
const CARD_GAP = 20;
const PAGE_WIDTH = CARD_WIDTH + CARD_GAP;

const Happy = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);

  const scrollRef = useRef<HTMLDivElement>(null);

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

  // Calculate how many cards fit in the container
  const updateCardsPerPage = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const visible = Math.floor(el.clientWidth / PAGE_WIDTH);
    setCardsPerPage(Math.max(1, visible));
  }, []);

  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, [updateCardsPerPage, users]);

  const totalPages = Math.max(1, users.length - cardsPerPage + 1);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setActiveDot(0);
      return;
    }

    const pageIndex = Math.round(el.scrollLeft / PAGE_WIDTH);
    setActiveDot(Math.min(pageIndex, totalPages - 1));
  }, [totalPages]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToDot = (dotIndex: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const cardIndex = dotIndex;
    const card = el.children[cardIndex] as HTMLElement | undefined;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  };

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

        <div className="testimonials__carousel">
          <div className="testimonials__grid" ref={scrollRef}>
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

          <div className="testimonials__dots" role="tablist" aria-label="Testimonial slides">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                role="tab"
                className={`testimonials__dot ${i === activeDot ? "testimonials__dot--active" : ""}`}
                aria-selected={i === activeDot}
                aria-label={`Slide ${i + 1} of ${totalPages}`}
                onClick={() => scrollToDot(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Happy;
