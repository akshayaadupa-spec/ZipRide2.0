import { useState } from "react";
import "./RideSearch.css";

const ridesData = [
  {
    id: 1,
    driver: "Rahul Sharma",
    car: "Swift Dzire",
    seats: 3,
    price: 450,
    rating: 4.8,
  },
  {
    id: 2,
    driver: "Priya Reddy",
    car: "Hyundai Creta",
    seats: 4,
    price: 650,
    rating: 4.9,
  },
  {
    id: 3,
    driver: "Arjun Kumar",
    car: "Maruti Ertiga",
    seats: 5,
    price: 550,
    rating: 4.7,
  },
];

function RideSearch() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="ride-search">
      <h1>Find Your Ride</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
        />

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button>Search Ride</button>
      </div>

      <h2>Available Rides</h2>

      <div className="ride-list">
        {ridesData.map((ride) => (
          <div className="ride-card" key={ride.id}>
            <h3>{ride.driver}</h3>

            <p>
              <strong>Car:</strong> {ride.car}
            </p>

            <p>
              <strong>Seats:</strong> {ride.seats}
            </p>

            <p>
              <strong>Price:</strong> ₹{ride.price}
            </p>

            <p>
              <strong>Rating:</strong> ⭐ {ride.rating}
            </p>

            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RideSearch;