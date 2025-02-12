import HeroSection from "../components/HeroSection";

function TheDay() {
  const heroImage = "/images/hero-theday.jpg";
  return (
    <>
      <HeroSection
        title="What you can expect on the day..."
        subTitle="From the beautiful ceremony to party time!"
        heroImage={heroImage}
      />
      <div className="container my-5 h-auto">
        <div className="display-5 fs-4 text-center text-uppercase">
          Guests are expected to arrive no later than 4:45pm.
        </div>
        <br />
        <img src="images/timeline.jpg" className="w-100"></img>
      </div>
    </>
  );
}

export default TheDay;
