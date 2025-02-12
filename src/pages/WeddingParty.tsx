import HeroSection from "../components/HeroSection";
import PartyMember from "../components/PartyMember";

function WeddingParty() {
  const heroImage = "/images/hero-weddingparty.jpg";

  return (
    <>
      <HeroSection title="Meet the Wedding Party!" heroImage={heroImage} />
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
