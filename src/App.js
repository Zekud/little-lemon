import "./App.css";
import Nav from "./components/Nav";
import BookingPage from "./components/BookingPage";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Specials from "./components/Specials";
import ConfirmedBooking from "./components/ConfirmedBooking";
import ABOUT from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/about" element={<ABOUT />} />
        <Route path="/booking-page" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
