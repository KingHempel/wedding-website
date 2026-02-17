import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

function Gallery() {
  const heroImage = "/images/hero-gallery.jpg";
  return (
    <>
      <HeroSection
        title="Gallery"
        heroImage={heroImage}
        showGalleryButton={true}
      />
      <div className="container my-5 h-auto">
        <p className="text-center">
          Our wonderful photographer{" "}
          <Link
            to="https://www.instagram.com/be.photo_occasions/"
            className="faq-link"
          >
            Brittany Evelyn Photography
          </Link>{" "}
          has finished editing and uploading the photos from our wedding! You
          can view them using the link above, selecting "ENTER AS CLIENT" and
          entering the password "K&R".
        </p>
        <p className="text-center">
          We are so grateful to have had Brittany capture our special day, and
          we hope you enjoy reliving the memories through her beautiful
          photography!
        </p>
      </div>
    </>
  );
}

export default Gallery;
