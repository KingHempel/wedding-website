import HeroSection from "../components/HeroSection";

function Home() {
  const heroImage = "/images/hero-home.jpg";
  return (
    <>
      <HeroSection
        title={
          <>
            Kayce Lee Castle
            <br />
            &
            <br />
            Riley Matthew Hempel
          </>
        }
        showRsvpButton={true}
        heroImage={heroImage}
        useCursiveFont={true}
      />
      <div className="container my-5 h-auto">
        <h3 className="text-center">Welcome to Our Wedding!</h3>
        <p className="text-center">
          We are thrilled to invite you to join us in celebrating our love
          story. Our wedding day will be a beautiful gathering of family and
          friends, filled with laughter, joy, and unforgettable moments. We
          can't wait to share this special day with you!
        </p>
        <p className="text-center">
          Please take some time to navigate through our website, where you can
          find all the details about our wedding festivities.
        </p>
        <p className="text-center">
          The date and the venue information can be seen on your invitation.
        </p>
      </div>
    </>
  );
}

export default Home;
