import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./assets/Home";
import Login from "./assets/Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import FindRide from "./FindRide";
import Profile from "./assets/Profile";
import OfferRide from "./assets/OfferRide";
import MyRides from "./assets/MyRides";
import RideHistory from "./assets/RideHistory";
import Notifications from "./assets/Notifications";
import Settings from "./assets/Settings";
import BookingSuccess from "./assets/BookingSuccess";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/find" element={<FindRide />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/offer" element={<OfferRide />} />
        <Route path="/my-rides" element={<MyRides />} />
<Route path="/ride-history" element={<RideHistory />} />
<Route path="/notifications" element={<Notifications />} />
<Route path="/settings" element={<Settings />} />
<Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;