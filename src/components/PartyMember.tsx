import { useRef, useState, useEffect } from "react";

interface PartyMemberProps {
  mName: string;
  fName: string;
  mDescription: string;
  fDescription: string;
  mImage?: string;
  fImage?: string;
}

function PartyMember({
  mName,
  fName,
  mDescription,
  fDescription,
  mImage,
  fImage,
}: PartyMemberProps) {
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
    <div ref={ref} className={`party-item ${isVisible ? "fade-in" : ""}`}>
      <div className="row">
        <div className="col-12 col-md text-center mb-3">
          <div className="party-name display-6 fs-2">{mName}</div>
          <div className="party-description display-6 fs-4">{mDescription}</div>
          <img
            src={mImage}
            className="party-image img-fluid rounded-circle w-50 mt-3"
            alt={mName}
          />
        </div>
        <div className="col-12 col-md text-center">
          <div className="party-name display-6 fs-2">{fName}</div>
          <div className="party-description display-5 fs-4">{fDescription}</div>
          <img
            src={fImage}
            className="party-image img-fluid rounded-circle w-50 mt-3"
            alt={fName}
          />
        </div>
      </div>
    </div>
  );
}

export default PartyMember;
