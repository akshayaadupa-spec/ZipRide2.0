
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RideContext } from "./assets/RideContext";
import "./BookRide.css";

function BookRide() {
  const navigate = useNavigate();
  const { rides, setRides } = useContext(RideContext);

  const [ride, setRide] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    seats: "",
    price: "",
    vehicle: "Car",
  });

  const handleChange = (e) => {
    setRide({
      ...ride,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRide = {
      id: rides.length + 1,
      driver: "You",
      ...ride,
    };

    setRides([...rides, newRide]);

    alert("🎉 Ride Posted Successfully!");

    navigate("/find-rides");
  };

  return (
    <div className="bookride-container">
      <div className="bookride-card">
        <h1>🚗 Post a Ride</h1>
        <p>Share your ride with fellow students.</p>

        <form onSubmit={handleSubmit}>

          <div className="row">
            <input
              type="text"
              name="from"
              placeholder="📍 Pickup Location"
              value={ride.from}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="to"
              placeholder="🎯 Destination"
              value={ride.to}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <input
              type="date"
              name="date"
              value={ride.date}
              onChange={handleChange}
              required
            />

            <input
              type="time"
              name="time"
              value={ride.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <input
              type="number"
              name="seats"
              placeholder="👥 Seats"
              value={ride.seats}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="price"
              placeholder="₹ Price"
              value={ride.price}
              onChange={handleChange}
              required
            />
          </div>

          <select
            name="vehicle"
            value={ride.vehicle}
            onChange={handleChange}
          >
            <option>Car 🚗</option>
            <option>Bike 🏍</option>
          </select>

          <button type="submit" className="post-btn">
            🚗 Post Ride
          </button>

        </form>
      </div>
    </div>
  );
}

export default BookRide;