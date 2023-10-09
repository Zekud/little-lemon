import React, { useState } from "react";
import BookingForm from "./BookingForm";

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);
  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    </>
  );
}

export default BookingPage;
