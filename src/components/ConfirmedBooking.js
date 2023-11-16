import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../icons_assets/inside.jpg";
import img2 from "../icons_assets/pasta_s.jpeg";
import img3 from "../icons_assets/fish_s.jpeg";

function FirstNameError() {
  return <p className="confirm-message">First name is required</p>;
}
function LastNameError() {
  return <p className="confirm-message">Last name is required</p>;
}
function EmailError() {
  return <p className="confirm-message">Email is required</p>;
}
function PhoneError() {
  return <p className="confirm-message">Phone number is required</p>;
}
function PrivacyError() {
  return (
    <p className="confirm-message">You must agree with our privacy policy</p>
  );
}
function ConfirmedBooking(props) {
  const navigate = useNavigate();
  const [step3, setStep3] = useState(false);
  const {
    formData,
    setFormData,
    setStep2,
    privacy,
    setPrivacy,
    privacyChecked,
    setPrivacyChecked,
    setDateTouched,
    setDinnerTouched,
    setOccassionTouched,
    setTimeTouched,
    setPlaceTouched,
  } = props;
  const [confirmData, setConfirmData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequirement: "",
  });

  const [firstTouched, setFirstTouched] = useState(false);
  const [lastTouched, setLastTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [privacyTouched, setPrivacyTouched] = useState(false);
  function handleInputChange(e) {
    const { name, value } = e.target;
    setConfirmData({
      ...confirmData,
      [name]: value,
    });
  }

  function isValid() {
    return (
      confirmData.firstName != "" &&
      confirmData.lastName != "" &&
      confirmData.email != "" &&
      confirmData.phone != "" &&
      privacyChecked
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid()) {
      setFirstTouched(true);
      setLastTouched(true);
      setEmailTouched(true);
      setPhoneTouched(true);
      setPrivacyTouched(true);
    } else {
      setStep3(true);
    }
  }
  function clearForm() {
    setFormData({
      place: null,
      date: "",
      dinners: "No Of Dinners",
      occassion: "select occassion",
      time: "select time",
    });
    setDateTouched(false);
    setDinnerTouched(false);
    setOccassionTouched(false);
    setTimeTouched(false);
    setPlaceTouched(false);
  }
  function clearConfirmData() {
    setConfirmData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      specialRequirement: "",
    });
    setFirstTouched(false);
    setLastTouched(false);
    setEmailTouched(false);
    setPhoneTouched(false);
    setPrivacyTouched(false);
    setPrivacyChecked(false);
    setPrivacy(null);
    setStep3(false);
    setStep2(false);
  }
  return (
    <form>
      <div id="form-div">
        <div id="form-main-div">
          <div id="back-btn">
            <button type="button" onClick={() => setStep2(false)}>
              <i class="fa fa-caret-left back-icon" aria-hidden="true"></i>
              Back
            </button>
          </div>
          <div id="first-last">
            <div id="input-err">
              <div id="first-name-div" className="label-input">
                <label htmlFor="first-name" className="confirm-label">
                  <span>*</span>First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  value={confirmData.firstName}
                  onChange={handleInputChange}
                  onBlur={() => {
                    setFirstTouched(true);
                  }}
                />
              </div>
              {firstTouched && confirmData.firstName == "" ? (
                <FirstNameError />
              ) : null}
            </div>
            <div id="input-err">
              <div id="last-name-div" className="label-input">
                <label htmlFor="last-name" className="confirm-label">
                  <span>*</span>Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  value={confirmData.lastName}
                  onChange={handleInputChange}
                  onBlur={() => setLastTouched(true)}
                />
              </div>
              {lastTouched && confirmData.lastName == "" ? (
                <LastNameError />
              ) : null}
            </div>
          </div>
          <div id="first-last">
            <div id="input-err">
              <div id="email-div" className="label-input">
                <label htmlFor="email" className="confirm-label">
                  <span>*</span>Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={confirmData.email}
                  onChange={handleInputChange}
                  onBlur={() => {
                    setEmailTouched(true);
                  }}
                />
              </div>
              {emailTouched && confirmData.email == "" ? <EmailError /> : null}
            </div>
            <div id="input-err">
              <div id="phone-div" className="label-input">
                <label htmlFor="phone" className="confirm-label">
                  <span>*</span>Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={confirmData.phone}
                  onChange={handleInputChange}
                  onBlur={() => {
                    setPhoneTouched(true);
                  }}
                />
              </div>
              {phoneTouched && confirmData.phone == "" ? <PhoneError /> : null}
            </div>
          </div>
          <div id="details-comment">
            <div id="details">
              <h3>Reservation Details</h3>
              <p>
                <span>Place: </span>
                <span className="sec-span">{formData.place}</span>
              </p>
              <p>
                <span>Date: </span>
                <span className="sec-span">{formData.date}</span>
              </p>
              <p>
                <span>Dinners: </span>
                <span className="sec-span">{formData.dinners}</span>
              </p>
              <p>
                <span>Occassion: </span>
                <span className="sec-span">{formData.occassion}</span>
              </p>
              <p>
                <span>Time: </span>
                <span className="sec-span">{formData.time}</span>
              </p>
            </div>
            <div id="comment-div" className="label-input">
              <label htmlFor="comment" className="confirm-label">
                Special Requirement
              </label>
              <textarea
                name="specialRequirement"
                id="comment"
                placeholder="comment..."
                cols="30"
                rows="7"
                value={confirmData.specialRequirement}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
          <div id="agreement">
            <div id="check-label">
              <span
                className={
                  privacyTouched && !privacyChecked ? "privacy-span" : null
                }
              >
                <input
                  type="checkbox"
                  name="privacy"
                  value="agree"
                  id="agree"
                  checked={privacy === "agree" && privacyChecked}
                  onChange={(e) => {
                    setPrivacyChecked(!privacyChecked);
                    setPrivacy(e.target.value);
                  }}
                  onFocus={() => setPrivacyTouched(true)}
                />
              </span>

              <label htmlFor="privacy">
                you agree with our friendly <span>privacy policy</span>
              </label>
            </div>

            {privacyTouched && !privacyChecked ? <PrivacyError /> : null}
          </div>
        </div>
      </div>
      <div id="form-img-div">
        <img src={img1} alt="restaurant" />
        <img src={img2} alt="chief" />
        <img src={img3} alt="food" />
        <div className={step3 ? "show" : "hide"}>
          <p>Your reservation has been confirmed check your email</p>
          <p>Thank you for choosing us</p>
          <button
            id="back-to-home"
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
      {!step3 && (
        <div className="form-btn-div">
          <button
            id="form-btn"
            className={`confirm-btn ${!isValid() ? "show-err" : null}`}
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Confirm Reservation
          </button>
        </div>
      )}
    </form>
  );
}

export default ConfirmedBooking;
