import React, { useRef, useState, useEffect, memo, useCallback } from "react";
import Marquee from "react-fast-marquee";
import {
  TestimonialData,
  testimonials as testimonialsData,
} from "../../data/testimonials";
import "./Testimonials.scss";

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = memo(
  ({ testimonial }) => {
    const handleImageError = useCallback(
      (e: React.SyntheticEvent<HTMLImageElement>) => {
        // Fallback to a default avatar if image doesn't exist
        e.currentTarget.src =
          "https://ui-avatars.com/api/?name=" +
          encodeURIComponent(testimonial.name) +
          "&background=random&size=60";
      },
      [testimonial.name],
    );

    return (
      <div className="testimonial-card">
        <div className="testimonial-content">
          <div className="quote-icon">"</div>
          <p className="testimonial-text">{testimonial.content}</p>
        </div>
        <div className="testimonial-footer">
          <div className="avatar">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              onError={handleImageError}
              loading="lazy"
            />
          </div>
          <div className="testimonial-author">
            <div className="author-name">{testimonial.name}</div>
            <div className="author-role">{testimonial.role}</div>
            <div className="author-company">{testimonial.company}</div>
          </div>
        </div>
      </div>
    );
  },
);

TestimonialCard.displayName = "TestimonialCard";

export const Testimonials: React.FC = memo(() => {
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [loading, setLoading] = useState(true);
  const marqueeRef = useRef<any>(null);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error("Error loading testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <h2>What People Say</h2>
            <p>Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <h2>What People Say</h2>
            <p>No testimonials available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2>Hear it from the people</h2>
        </div>
      </div>

      <div className="marquee-wrapper">
        <Marquee
          ref={marqueeRef}
          play={true}
          speed={40}
          direction={direction}
          gradient={true}
          gradientColor="var(--ifm-background-color)"
          gradientWidth={50}
          // pauseOnHover={true}
          className="testimonials-marquee"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";
