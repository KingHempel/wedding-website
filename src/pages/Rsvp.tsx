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

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx0G7-8ZW2pnDV8GcK2A2ypaZBl3-fQzC0AMfxbfdgTBA1cb_hRQUJ0ducTaVHvJRP-oQ/exec",
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
