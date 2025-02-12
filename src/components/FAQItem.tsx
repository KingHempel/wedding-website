import React, { useRef, useState, useEffect } from "react";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`faq-item ${isVisible ? "fade-in" : ""}`}>
      <div className="faq-question display-6 text-center fs-3">{question}</div>
      <br />
      <div className="faq-answer display-5 fs-4 text-center">{answer}</div>
      <br />
      <hr />
    </div>
  );
}

export default FAQItem;
