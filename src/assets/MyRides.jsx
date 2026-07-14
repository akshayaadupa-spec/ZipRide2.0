import { useContext } from "react";
import Navbar from "./Navbar";

import { RideContext } from "./RideContext";
import "./MyRides.css";

import BackButton from "./BackButton";

function MyRides() {


  const { bookedRides, cancelRide } = useContext(RideContext);



  const offeredRides = [

    {
      from: "College",
      to: "Secunderabad",
      seats: 3,
      date: "15 Jul 2026",
      time: "08:30 AM",
      vehicle: "Car",
      price: 100,
      status: "Active",
    },

  ];



  return (

    <>

      <Navbar />
<BackButton />

      <div className="myrides-container">


        <h1>
          📖 My Rides
        </h1>



        {/* Summary */}

        <div className="ride-summary">


          <div className="summary-card">

            <h3>
              {bookedRides.length}
            </h3>

            <p>
              Booked Rides
            </p>

          </div>



          <div className="summary-card">

            <h3>
              {offeredRides.length}
            </h3>

            <p>
              Offered Rides
            </p>

          </div>



          <div className="summary-card">

            <h3>
              ₹840
            </h3>

            <p>
              Total Savings
            </p>

          </div>


        </div>





        {/* Booked Rides */}


        <h2>
          🚗 Booked Rides
        </h2>



        {
          bookedRides.length === 0 ? (

            <div className="empty-box">
              No booked rides yet 🚫
            </div>


          ) : (


            bookedRides.map((ride,index)=>(


              <div 
                className="ride-card"
                key={index}
              >


                <h3>
                  {ride.from} → {ride.to}
                </h3>



                <p>
                  👤 Driver: {ride.driver}
                </p>


                <p>
                  📅 Date: {ride.date}
                </p>


                <p>
                  ⏰ Time: {ride.time}
                </p>


                <p>
                  🚘 Vehicle: {ride.vehicle}
                </p>


                <p>
                  💺 Seats: {ride.seats}
                </p>


                <p>
                  💰 Price: ₹{ride.price}
                </p>


                <p>
                  ⭐ Rating: 4.9
                </p>



                <p>
                  Status:

                  <span
                    className={
                      ride.status === "Cancelled"
                      ? "cancelled"
                      : ride.status === "Completed"
                      ? "completed"
                      : "upcoming"
                    }
                  >
                    {" "}
                    {ride.status}
                  </span>

                </p>




                {
                  ride.status === "Upcoming" && (

                    <button
                      className="cancel-btn"
                      onClick={() => cancelRide(index)}
                    >
                      Cancel Ride
                    </button>

                  )
                }



              </div>


            ))

          )

        }







        {/* Offered Rides */}



        <h2 className="offer-title">
          🚗 Offered Rides
        </h2>




        {
          offeredRides.map((ride,index)=>(


            <div
              className="ride-card"
              key={index}
            >


              <h3>
                {ride.from} → {ride.to}
              </h3>



              <p>
                💺 Seats Available: {ride.seats}
              </p>


              <p>
                📅 Date: {ride.date}
              </p>


              <p>
                ⏰ Time: {ride.time}
              </p>


              <p>
                🚘 Vehicle: {ride.vehicle}
              </p>


              <p>
                💰 Price: ₹{ride.price}
              </p>



              <p>
                Status:

                <span className="upcoming">
                  {" "}
                  {ride.status}
                </span>

              </p>




              <div className="ride-actions">


                <button className="edit-btn">
                  Edit
                </button>


                <button className="delete-btn">
                  Delete
                </button>


              </div>



            </div>


          ))

        }



      </div>


    </>

  );

}


export default MyRides;