import React, { useState } from "react";

function BookingForm({ availableTimes, setAvailableTimes }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "17:00", // Default time
    guests: "",
    occasion: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    setAvailableTimes(updatedTimes);
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
