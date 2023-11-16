import React, { useState } from "react";
import BookingForm from "./BookingForm.js";
import ConfirmedBooking from "./ConfirmedBooking.js";

function BookingPage() {
  const [step2, setStep2] = useState(false);
  const [formData, setFormData] = useState({
    place: null,
    date: "",
    dinners: "No Of Dinners",
    occassion: "select occassion",
    time: "select time",
  });

  const [dateTouched, setDateTouched] = useState(false);
  const [dinnerTouched, setDinnerTouched] = useState(false);
  const [occassionTouched, setOccassionTouched] = useState(false);
  const [timeTouched, setTimeTouched] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [place1Checked, setPlace1Checked] = useState(false);
  const [place2Checked, setPlace2Checked] = useState(false);
  const [privacy, setPrivacy] = useState(null);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const [placeTouched, setPlaceTouched] = useState(false);

  return (
    <>
      {step2 && (
        <ConfirmedBooking
          formData={formData}
          setStep2={setStep2}
          privacy={privacy}
          setPrivacy={setPrivacy}
          privacyChecked={privacyChecked}
          setPrivacyChecked={setPrivacyChecked}
          setDateTouched={setDateTouched}
          setDinnerTouched={setDinnerTouched}
          setOccassionTouched={setOccassionTouched}
          setTimeTouched={setTimeTouched}
          setPlaceTouched={setPlaceTouched}
        />
      )}
      {!step2 && (
        <BookingForm
          setStep2={setStep2}
          formData={formData}
          handleInputChange={handleInputChange}
          selectedPlace={selectedPlace}
          setSelectedPlace={setSelectedPlace}
          place1Checked={place1Checked}
          setPlace1Checked={setPlace1Checked}
          place2Checked={place2Checked}
          setPlace2Checked={setPlace2Checked}
          dateTouched={dateTouched}
          setDateTouched={setDateTouched}
          dinnerTouched={dinnerTouched}
          setDinnerTouched={setDinnerTouched}
          occassionTouched={occassionTouched}
          setOccassionTouched={setOccassionTouched}
          timeTouched={timeTouched}
          setTimeTouched={setTimeTouched}
          placeTouched={placeTouched}
          setPlaceTouched={setPlaceTouched}
        />
      )}
    </>
  );
}

export default BookingPage;
