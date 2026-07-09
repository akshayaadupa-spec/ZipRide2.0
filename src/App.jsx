import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./assets/Home";
import Login from "./assets/Login";
import Register from "./assets/Register";
import FindRide from "./FindRide";
import OfferRide from "./assets/OfferRide";
import Profile from "./assets/Profile";
import Notifications from "./assets/Notifications";
import Dashboard from "./Dashboard";
import Settings from "./assets/Settings";
import RideHistory from "./assets/RideHistory";
import BookingSuccess from "./assets/BookingSuccess";
import MyRides from "./assets/MyRides";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find" element={<FindRide />} />
        <Route path="/offer" element={<OfferRide />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/ride-history" element={<RideHistory />} />
        <Route path="/my-rides" element={<MyRides />} />
        <Route
  path="/booking-success"
  element={<BookingSuccess />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;