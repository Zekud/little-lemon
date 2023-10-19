import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DateErrorMessage() {
  return <p className="confirm-message">You must choose a date!</p>;
}
function GuestErrorMessage() {
  return <p className="confirm-message">There must be at least one guest!</p>;
}

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

    // Update the available times
    const updatedTimes = availableTimes.filter((time) => time != formData.time);
    setAvailableTimes(updatedTimes);

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
