import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../icons_assets/restaurant.jpg";
import img2 from "../icons_assets/restaurant chef B.jpg";
import img3 from "../icons_assets/restauranfood.jpg";

function DateErrorMessage() {
  return <p className="confirm-message">You must choose a date!</p>;
}
function GuestErrorMessage() {
  return <p className="confirm-message">There must be at least one guest!</p>;
}
/*
function BookingForm({ availableTimes, setAvailableTimes }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "17:00",
    guests: "",
    occasion: "",
  });
  const [dateTouched, setDateTouched] = useState(false);
  const [guestTouched, setGuestTouched] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (window.submitAPI) {
        const success = await window.submitAPI(formData);
        if (success) {
          navigate("/confirmation");
          console.log("Form submitted successfully");
        } else {
          console.log("Form submission failed");
        }
      } else {
        console.error(
          "submitAPI not found. The script may not have loaded correctly."
        );
      }
    } catch (error) {
      console.error("Error while submitting the form:", error);
    }
    clearForm();
  };
  function clearForm() {
    setFormData({
      date: "",
      time: "17:00",
      guests: "",
      occasion: "",
    });
    setDateTouched(false);
    setGuestTouched(false);
  }
  function isValid() {
    return formData.date != "" && formData.guests != "";
  }
  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <div id="form-date">
          <div id="date">
            <label htmlFor="res-date">
              Choose date<sup>*</sup>
            </label>
            <input
              type="date"
              id="res-date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              onBlur={() => {
                setDateTouched(true);
              }}
            />
          </div>

          {dateTouched && formData.date == "" ? <DateErrorMessage /> : null}
        </div>

        <div id="form-time">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
          >
            {availableTimes.map((timeOption) => (
              <option key={timeOption} value={timeOption}>
                {timeOption}
              </option>
            ))}
          </select>
        </div>
        <div id="form-guest">
          <div id="guest">
            <label htmlFor="res-guests">
              Number of guests <sup>*</sup>
            </label>
            <input
              type="number"
              id="res-guests"
              name="guests"
              value={formData.guests}
              placeholder="0"
              min={1}
              max={10}
              onChange={handleInputChange}
              onBlur={() => {
                setGuestTouched(true);
              }}
            />
          </div>
          {guestTouched && formData.guests == "" ? <GuestErrorMessage /> : null}
        </div>

        <div id="form-occassion">
          <label htmlFor="res-occasion">Occasion</label>
          <select
            type="text"
            id="res-occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleInputChange}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <button
          disabled={!isValid()}
          className={isValid() ? "enabled" : "disabled"}
          type="submit"
          id="form-submit"
        >
          Submit reservation
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
*/

function BookingForm() {
  const [formData, setFormData] = useState({
    place: "",
    date: "",
    dinners: "",
    occassion: "Select Occassion",
    time: "",
  });
  const availableTimes = [
    "5:00pm",
    "6:00pm",
    "7:00pm",
    "8:00pm",
    "9:00pm",
    "10:00pm",
  ];
  const noOfDinners = [
    "1 dinner",
    "2 dinners",
    "3 dinners",
    "4 dinners",
    "5 dinners",
    "6 dinners",
    "7 dinners",
    "8 dinners",
    "9 dinners",
    "10 dinners",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <form>
      <div id="form-div">
        <div id="form-main-div">
          <div id="reserve-div">
            <p>Reservations</p>
          </div>
          <div id="place-container">
            <div className="each-place">
              <label htmlFor="place1">Indoor seating</label>
              <input
                type="radio"
                id="place1"
                name="place"
                value={formData.place}
                onChange={handleInputChange}
              />
            </div>
            <div className="each-place">
              <label htmlFor="place2">Outdoor seating</label>
              <input
                type="radio"
                id="place2"
                name="place"
                value={formData.radio}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div id="date-dinner">
            <div id="date-div">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div id="dinner">
              <label htmlFor="dinners">Number of Dinners</label>
              <select
                id="dinners"
                name="dinners"
                value={formData.dinners}
                onChange={handleInputChange}
              >
                <option value="No Of Dinners">No Of Dinners</option>
                {noOfDinners.map((dinner, index) => {
                  return (
                    <option key={index} value={dinner}>
                      {dinner}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div id="occ-time">
            <div id="occ">
              <label htmlFor="occassion">Occasion</label>
              <select
                id="occassion"
                name="occassion"
                value={formData.occassion}
                onChange={handleInputChange}
              >
                <option value="select occassion">Select occassion</option>
                <option value="no special occassion">
                  No special Occasion
                </option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
              </select>
            </div>
            <div id="time-div">
              <label htmlFor="time">Time</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
              >
                <option value="select time">Select Time</option>
                {availableTimes.map((time, index) => {
                  return (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div id="form-img-div">
        <img src={img1} alt="restaurant" />
        <img src={img2} alt="chief" />
        <img src={img3} alt="food" />
      </div>
      <div id="form-btn">
        <button id="first-btn" className="form-btn">
          Reserve a Table
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
