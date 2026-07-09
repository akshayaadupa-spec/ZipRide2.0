import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import BackButton from "./BackButton";
import "./BookingSuccess.css";

function BookingSuccess() {
  return (
    <>
      <Navbar />

      <BackButton />

      <div className="success-container">

        <div className="success-card">

          <div className="success-icon">
            ✅
          </div>

          <h1>Booking Successful!</h1>

          <p>
            Your ride has been booked successfully.
          </p>

          <div className="booking-details">

            <p><strong>Status:</strong> Confirmed</p>

            <p><strong>Payment:</strong> Pay to Driver</p>

            <p><strong>Have a Safe Journey! 🚗</strong></p>

          </div>

          <div className="success-buttons">

            <Link
              to="/dashboard"
              className="success-btn"
            >
              Go to Dashboard
            </Link>

            <Link
              to="/find"
              className="success-btn secondary"
            >
              Book Another Ride
            </Link>

          </div>

        </div>

      </div>
    </>
  );
}

export default BookingSuccess;