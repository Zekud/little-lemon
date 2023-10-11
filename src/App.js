import "./App.css";
import Chicago from "./Chicago";
import Nav from "./Nav";
import BookingPage from "./BookingPage";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Specials from "./Specials";
import ConfirmedBooking from "./ConfirmedBooking";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/chicago" element={<Chicago />} />
        <Route path="/booking-page" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
