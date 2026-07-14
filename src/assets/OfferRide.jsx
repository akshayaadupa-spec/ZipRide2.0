import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import BackButton from "./BackButton";
import { RideContext } from "./RideContext";
import "./OfferRide.css";

function OfferRide() {

  const { addRide } = useContext(RideContext);
  const navigate = useNavigate();

  const [ride, setRide] = useState({
    driver: "",
    from: "",
    to: "",
    date: "",
    time: "",
    vehicle: "Car",
    seats: 1,
    price: "",
  });


  const handleChange = (e) => {
    setRide({
      ...ride,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    addRide({
      ...ride,
      seats: Number(ride.seats),
      price: Number(ride.price),
    });

    alert("🎉 Ride Published Successfully!");

    setRide({
      driver: "",
      from: "",
      to: "",
      date: "",
      time: "",
      vehicle: "Car",
      seats: 1,
      price: "",
    });

    navigate("/find-rides");
  };


  return (
    <>
      <Navbar />

      <BackButton />


      <div className="offer-container">

        <h1>🚗 Offer a Ride</h1>

        <p>
          Help fellow students travel safely and affordably.
        </p>


        <form onSubmit={handleSubmit}>


          <input
            type="text"
            name="driver"
            placeholder="Driver Name"
            value={ride.driver}
            onChange={handleChange}
            required
          />


          <input
            type="text"
            name="from"
            placeholder="Pickup Location"
            value={ride.from}
            onChange={handleChange}
            required
          />


          <input
            type="text"
            name="to"
            placeholder="Destination"
            value={ride.to}
            onChange={handleChange}
            required
          />


          <input
            type="date"
            name="date"
            value={ride.date}
            onChange={handleChange}
            required
          />


          {/* Time with AM/PM */}

          <select
            name="time"
            value={ride.time}
            onChange={handleChange}
            required
          >

            <option value="">
              Select Time
            </option>

            <option>6:00 AM</option>
            <option>7:00 AM</option>
            <option>8:00 AM</option>
            <option>9:00 AM</option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>

            <option>12:00 PM</option>
            <option>1:00 PM</option>
            <option>2:00 PM</option>
            <option>3:00 PM</option>
            <option>4:00 PM</option>
            <option>5:00 PM</option>
            <option>6:00 PM</option>
            <option>7:00 PM</option>
            <option>8:00 PM</option>
            <option>9:00 PM</option>

          </select>



          <select
            name="vehicle"
            value={ride.vehicle}
            onChange={handleChange}
          >

            <option>Car</option>
            <option>Bike</option>
            <option>Scooty</option>

          </select>



          <input
            type="number"
            name="seats"
            placeholder="Available Seats"
            value={ride.seats}
            onChange={handleChange}
            min="1"
            max="6"
            required
          />



          <input
            type="number"
            name="price"
            placeholder="Price (₹)"
            value={ride.price}
            onChange={handleChange}
            required
          />



          <button type="submit">
            Publish Ride
          </button>


        </form>

      </div>

    </>
  );
}


export default OfferRide;