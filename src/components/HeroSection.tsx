import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Style.css";

interface HeroSectionProps {
  title: ReactNode;
  subTitle?: string;
  showRsvpButton?: boolean;
  heroImage?: string;
  useCursiveFont?: boolean;
}

function HeroSection({
  title,
  subTitle,
  showRsvpButton = false,
  heroImage,
  useCursiveFont = false,
}: HeroSectionProps) {
  return (
    <div
      className="px-4 py-5 text-center hero-image d-flex flex-column align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/wedding-website/${heroImage}')`,
      }}
    >
      <h1
        className={`display-3 ${useCursiveFont ? "great-vibes-regular" : ""}`}
      >
        {title}
      </h1>
      <br />
      {subTitle && <p className="text-light display-6">{subTitle}</p>}
      {showRsvpButton && (
        <Link
          to="/rsvp" // Use relative path here
          className="btn btn-outline-light rounded-0 border-3 btn-sm mt-3"
          style={{ width: "150px" }}
        >
          <b className="fs-5">RSVP</b>
        </Link>
      )}
    </div>
  );
}

export default HeroSection;
