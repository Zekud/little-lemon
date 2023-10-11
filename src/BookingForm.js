import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ availableTimes, setAvailableTimes }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "17:00",
    guests: "",
    occasion: "",
  });
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
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
      />
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
      <label htmlFor="res-guests">Number of guests</label>
      <input
        type="number"
        id="res-guests"
        name="guests"
        value={formData.guests}
        onChange={handleInputChange}
      />
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
      <button type="submit">Submit reservation</button>
    </form>
  );
}

export default BookingForm;
