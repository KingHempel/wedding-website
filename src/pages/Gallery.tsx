import HeroSection from "../components/HeroSection";

function Gallery() {
  const heroImage = "/images/hero-gallery.jpg";
  return (
    <>
      <HeroSection
        title="Photos will be added here after the event."
        subTitle="Photos will be added here after the event."
        heroImage={heroImage}
      />
      <div className="container my-5 h-auto"></div>
    </>
  );
}

export default Gallery;
