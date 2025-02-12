import React, { useRef, useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";

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

function Faqs() {
  const heroImage = "/images/hero-faqs.jpg";

  return (
    <>
      <HeroSection
        title="Frequently Asked Questions"
        subTitle="All the answers you need for the day."
        heroImage={heroImage}
      />
      <div className="container my-5 h-auto">
        <div className="d-flex flex-column align-items-center">
          <FAQItem
            question="When do I need to RSVP by?"
            answer="We ask to have all guests RSVP by [date]. If you don't RSVP by this date, we will assume you are unable to attend."
          />
          <FAQItem
            question="Can I bring my children?"
            answer="While we love your little ones, we've chosen to make our wedding an adults-only celebration. We hope you can join us for a fun and relaxing evening!"
          />
          <FAQItem
            question="Can I take photos or videos during the ceremony?"
            answer="We kindly ask that all phones and cameras be turned off during the ceremony. We have a photographer capturing the moments, and we'd love for you to be present with us in the moment. Thank you for understanding!"
          />
          <FAQItem
            question="Can I bring a plus one?"
            answer="If your invitation specifies a guest, we'd love to see them there! If not, we are keeping the guest list small and intimate, so only those named on the invitation are invited."
          />
          <FAQItem
            question="What should I do if I can't attend?"
            answer={
              <>
                We'll miss you, but we understand! Please let us know as soon as
                possible via the{" "}
                <a href="rsvp" className="faq-link">
                  RSVP form
                </a>{" "}
                so we can plan accordingly.
              </>
            }
          />
          <FAQItem
            question="What should I wear?"
            answer="The dress code is formal, and we'd love to see you dressed for the occasion! Feel free to add your own flair while keeping it wedding-appropriate."
          />
          <FAQItem
            question="Is there a gift registry?"
            answer="Your presence is gift enough! We do not have a gift registry, however, if you'd like to contribute, there will be a wishing well to drop something in at the venue."
          />
          <FAQItem
            question="Will there be transportation or parking available?"
            answer="Yes, parking is available at The Farm. Transportation will not be available on the day, however, the venue has easy access to Ubers/taxis if necessary."
          />
          <FAQItem
            question="What time should I arrive?"
            answer="Please plan to arrive 25-30 minutes before the ceremony starts, so we can begin on time without interruptions."
          />
          <FAQItem
            question="Can I take photos at the reception?"
            answer="Absolutely! Once the ceremony is over, feel free to snap away and share your photos with us!"
          />
          <FAQItem
            question="Will there be any special dietary options?"
            answer={
              <>
                We've done our best to accommodate a range of dietary needs, but
                if you have specific concerns, please let us know in the{" "}
                <a href="rsvp" className="faq-link">
                  RSVP form
                </a>
                .
              </>
            }
          />
          <div className="faq-answer display-5 fs-4 text-center">
            If you have any additional questions, feel free to let us know!
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;
