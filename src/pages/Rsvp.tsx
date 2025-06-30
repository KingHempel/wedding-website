import { useState } from "react";
import HeroSection from "../components/HeroSection";

function Rsvp() {
  const heroImage = "/images/hero-rsvp.jpg";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [attendance, setAttendance] = useState("Please Select");
  const [dietaryRequirements, setDietaryRequirements] = useState("");
  const [favouriteKayce, setFavouriteKayce] = useState("");
  const [favouriteRiley, setFavouriteRiley] = useState("");
  const [courtesyBus, setCourtesyBus] = useState("Please Select");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("attendance", attendance);
    formData.append("dietaryRequirements", dietaryRequirements);
    formData.append("favouriteKayce", favouriteKayce);
    formData.append("favouriteRiley", favouriteRiley);
    formData.append("courtesyBus", courtesyBus);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxrPsjdvbKpNe50QHh9g8XmgJckXZI5hh2WpXy14gIMcBsPKxF8YmvM6AO8wrNrXxa6Ng/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.result === "Success") {
        console.log("Form submitted successfully");
        setSubmitted(true);
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeroSection title="RSVP" heroImage={heroImage} />
      <div className="container my-5 h-auto">
        {submitted ? (
          <div className="alert alert-success">
            Thank you for your response!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name <span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="attendance" className="form-label">
                Attendance <span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
                id="attendance"
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
                required
              >
                <option value="">Please Select</option>
                <option value="Not Attending">Not Attending</option>
                <option value="Ceremony Only">Ceremony Only</option>
                <option value="Ceremony and Reception">
                  Ceremony and Reception
                </option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="dietaryRequirements" className="form-label">
                Dietary Requirements (Leave blank if none)
              </label>
              <input
                type="text"
                className="form-control"
                id="dietaryRequirements"
                placeholder="e.g. Gluten Free"
                value={dietaryRequirements}
                onChange={(e) => setDietaryRequirements(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="favouriteKayce" className="form-label">
                Favourite thing about Kayce
              </label>
              <input
                type="text"
                className="form-control"
                id="favouriteKayce"
                placeholder="Optional"
                value={favouriteKayce}
                onChange={(e) => setFavouriteKayce(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="favouriteRiley" className="form-label">
                Favourite thing about Riley
              </label>
              <input
                type="text"
                className="form-control"
                id="favouriteRiley"
                placeholder="Optional"
                value={favouriteRiley}
                onChange={(e) => setFavouriteRiley(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <p className="mb-1 text-muted">
                At this point, we are exploring transport options for a courtesy
                bus to collect guests from a station in the Berwick or Pakenham
                region at a minimal cost. We would like to get an estimated
                number of guests interested before we organise a bus. Once we
                have a confirmed number of guests who are interested, we will
                reach out and provide further information regarding transport to
                and from the venue.
              </p>
              <label htmlFor="courtesyBus" className="form-label">
                Are you interested in a Courtesy Bus?{" "}
                <span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
                id="courtesyBus"
                value={courtesyBus}
                onChange={(e) => setCourtesyBus(e.target.value)}
                required
              >
                <option value="">Please Select</option>
                <option value="Yes">Yes I am interested</option>
                <option value="No">No, I will find my own way there</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-success"
              disabled={loading}
            >
              {loading ? (
                <span>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Submitting...
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default Rsvp;
