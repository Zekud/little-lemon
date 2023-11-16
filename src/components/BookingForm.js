import React, { useState } from "react";
import img1 from "../icons_assets/restaurant.jpg";
import img2 from "../icons_assets/restaurant chef B.jpg";
import img3 from "../icons_assets/restauranfood.jpg";

function DateErrorMessage() {
  return <p className="confirm-message">You must choose a date!</p>;
}
function TimeErrorMessage() {
  return <p className="confirm-message">You must choose a time!</p>;
}
function OccasionErrorMessage() {
  return <p className="confirm-message">You must choose an occasion!</p>;
}
function DinnerErrorMessage() {
  return <p className="confirm-message">There must be at least one Dinner!</p>;
}

function BookingForm(props) {
  const {
    setStep2,
    formData,
    handleInputChange,
    selectedPlace,
    setSelectedPlace,
    place1Checked,
    setPlace1Checked,
    place2Checked,
    setPlace2Checked,
    dateTouched,
    setDateTouched,
    dinnerTouched,
    setDinnerTouched,
    occassionTouched,
    setOccassionTouched,
    timeTouched,
    setTimeTouched,
    placeTouched,
    setPlaceTouched,
  } = props;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid()) {
      setPlaceTouched(true);
      setDateTouched(true);
      setDinnerTouched(true);
      setOccassionTouched(true);
      setTimeTouched(true);
    } else {
      setStep2(true);
    }
  };

  function isValid() {
    return (
      formData.place != null &&
      formData.date != "" &&
      formData.dinners != "No Of Dinners" &&
      formData.occassion != "select occassion" &&
      formData.time != "select time"
    );
  }
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
              <span
                className={placeTouched && !selectedPlace ? "place-span" : null}
              >
                <input
                  type="checkbox"
                  id="place1"
                  className="radio-input"
                  name="place"
                  value="Indoor"
                  onChange={(e) => {
                    setPlace1Checked(!place1Checked);
                    setPlace2Checked(false);
                    setPlaceTouched(true);
                    setSelectedPlace(e.target.checked ? e.target.value : null);
                    handleInputChange(e);
                  }}
                  checked={selectedPlace === "Indoor" && place1Checked}
                />
              </span>
            </div>
            <div className="each-place">
              <label htmlFor="place2">Outdoor seating</label>
              <span
                className={placeTouched && !selectedPlace ? "place-span" : null}
              >
                <input
                  type="checkbox"
                  id="place2"
                  className="radio-input"
                  name="place"
                  value="Outdoor"
                  onChange={(e) => {
                    setPlace2Checked(!place2Checked);
                    setPlace1Checked(false);
                    setPlaceTouched(true);
                    setSelectedPlace(e.target.checked ? e.target.value : null);
                    handleInputChange(e);
                  }}
                  checked={selectedPlace === "Outdoor" && place2Checked}
                />
              </span>
            </div>
          </div>
          <div id="date-dinner">
            <div className="date-err">
              <div id="date-div">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  className={formData.date !== "" ? "input-selected" : null}
                  onChange={handleInputChange}
                  onBlur={() => {
                    setDateTouched(true);
                  }}
                  placeholder="Select Date"
                />
              </div>
              {dateTouched && formData.date == "" ? <DateErrorMessage /> : null}
            </div>
            <div className="dinner-err">
              <div id="dinner">
                <label htmlFor="dinners">Number of Dinners</label>
                <select
                  id="dinners"
                  name="dinners"
                  value={formData.dinners}
                  className={
                    formData.dinners !== "No Of Dinners"
                      ? "input-selected"
                      : null
                  }
                  onChange={handleInputChange}
                  onBlur={() => {
                    setDinnerTouched(true);
                  }}
                >
                  <option value="No Of Dinners" defaultValue={true}>
                    No Of Dinners
                  </option>
                  {noOfDinners.map((dinner, index) => {
                    return (
                      <option key={index} value={dinner}>
                        {dinner}
                      </option>
                    );
                  })}
                </select>
                <span id="icon">
                  <i
                    className={
                      formData.dinners !== "No Of Dinners"
                        ? "fas fa-chevron-up white"
                        : "fas fa-chevron-down green"
                    }
                  ></i>
                </span>
              </div>
              {dinnerTouched && formData.dinners == "No Of Dinners" ? (
                <DinnerErrorMessage />
              ) : null}
            </div>
          </div>
          <div id="occ-time">
            <div className="occ-err">
              <div id="occ">
                <label htmlFor="occassion">Occasion</label>
                <select
                  id="occassion"
                  name="occassion"
                  value={formData.occassion}
                  className={
                    formData.occassion !== "select occassion"
                      ? "input-selected"
                      : null
                  }
                  onChange={handleInputChange}
                  onBlur={() => {
                    setOccassionTouched(true);
                  }}
                >
                  <option value="select occassion" defaultValue={true}>
                    Select occassion
                  </option>
                  <option value="no special occassion">
                    No special Occasion
                  </option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Engagement">Engagement</option>
                </select>
                <span id="icon">
                  <i
                    className={
                      formData.occassion !== "select occassion"
                        ? "fas fa-chevron-up white"
                        : "fas fa-chevron-down green"
                    }
                  ></i>
                </span>
              </div>
              {occassionTouched && formData.occassion == "select occassion" ? (
                <OccasionErrorMessage />
              ) : null}
            </div>
            <div className="time-err">
              <div id="time-div">
                <label htmlFor="time">Time</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  className={
                    formData.time !== "select time" ? "input-selected" : null
                  }
                  onChange={handleInputChange}
                  onBlur={() => {
                    setTimeTouched(true);
                  }}
                >
                  <option value="select time" defaultValue={true}>
                    Select Time
                  </option>
                  {availableTimes.map((time, index) => {
                    return (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    );
                  })}
                </select>
                <span id="icon">
                  <i
                    className={
                      formData.time !== "select time"
                        ? "fas fa-chevron-up white"
                        : "fas fa-chevron-down green"
                    }
                  ></i>
                </span>
              </div>
              {timeTouched && formData.time == "select time" ? (
                <TimeErrorMessage />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div id="form-img-div">
        <img src={img1} alt="restaurant" />
        <img src={img2} alt="chief" />
        <img src={img3} alt="food" />
      </div>
      <div className="form-btn-div">
        <button
          id="form-btn"
          className={`confirm-btn ${!isValid() ? "show-err" : null}`}
          onClick={handleSubmit}
        >
          Reserve a Table
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
