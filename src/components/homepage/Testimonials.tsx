import React, { useRef, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { TestimonialData } from "../../data/testimonials";
import "./Testimonials.scss";

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={`star ${i < testimonial.rating ? "filled" : ""}`}
    >
      ★
    </span>
  ));

  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <div className="quote-icon">"</div>
        <p className="testimonial-text">{testimonial.content}</p>
        <div className="rating">{stars}</div>
      </div>
      <div className="testimonial-footer">
        <div className="avatar">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            onError={(e) => {
              // Fallback to a default avatar if image doesn't exist
              e.currentTarget.src = "https://ui-avatars.com/api/?name=" + 
                encodeURIComponent(testimonial.name) + 
                "&background=random&size=60";
            }}
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
};

export const Testimonials: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [loading, setLoading] = useState(true);
  const marqueeRef = useRef<any>(null);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await testimonialsManager.loadTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error('Error loading testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

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
          <h2>What People Say</h2>
          <p>Hear from the amazing people I've had the privilege to work with</p>
        </div>
        
        <div className="testimonials-marquee-container">
          <button 
            className="marquee-control left" 
            onClick={handlePause}
            aria-label="Pause testimonials"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          </button>

          <div className="marquee-wrapper">
            <Marquee
              ref={marqueeRef}
              play={isPlaying}
              speed={30}
              gradient={true}
              gradientColor="var(--ifm-background-color)"
              gradientWidth={50}
              pauseOnHover={true}
              className="testimonials-marquee"
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </Marquee>
          </div>

          <button 
            className="marquee-control right" 
            onClick={handlePlay}
            aria-label="Play testimonials"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
