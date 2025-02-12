import { useRef, useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";

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
          />
        </div>
        <div className="col-12 col-md text-center">
          <div className="party-name display-6 fs-2">{fName}</div>
          <div className="party-description display-5 fs-4">{fDescription}</div>
          <img
            src={fImage}
            className="party-image img-fluid rounded-circle w-50 mt-3"
          />
        </div>
      </div>
    </div>
  );
}

function WeddingParty() {
  const heroImage = "/images/hero-weddingparty.jpg";

  return (
    <>
      <HeroSection
        title="Meet the wedding party!"
        subTitle="blah blah blah"
        heroImage={heroImage}
      />
      <div className="container my-5 h-auto">
        <div className="d-flex flex-column align-items-center">
          <PartyMember
            mName="Tyler Hempel"
            mDescription="Best Man"
            mImage="images/tyler.jpg"
            fName="Zara Treweek"
            fDescription="Maid of Honour"
            fImage="images/zara.jpg"
          />
          <hr />
          <PartyMember
            mName="Jordan Berlyn"
            mDescription="Groomsman"
            mImage="images/jordan.jpg"
            fName="Casey Phillips"
            fDescription="Bridesmaid"
            fImage="images/casey.jpg"
          />
          <hr />
          <PartyMember
            mName="Kye Antone"
            mDescription="Groomsman"
            mImage="images/kye.jpg"
            fName="Lisa Clarke"
            fDescription="Bridesmaid"
            fImage="images/lisa.jpg"
          />
          <hr />

          <PartyMember
            mName="Struan Allan"
            mDescription="Groomsman"
            mImage="images/struan.jpg"
            fName="Sarah McDougal"
            fDescription="Bridesmaid"
            fImage="images/sarah.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default WeddingParty;
