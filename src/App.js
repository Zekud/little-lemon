import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Chicago from "./Chicago";
import Nav from "./Nav";
import BookingPage from "./BookingPage";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Specials from "./Specials";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/chicago" element={<Chicago />} />
        <Route path="/booking-page" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
