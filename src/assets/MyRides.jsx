import { useContext } from "react";
import Navbar from "./Navbar";
import BackButton from "./BackButton";
import { RideContext } from "../RideContext";
import "./MyRides.css";


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





        {/* Booked Rides */}


        <h2>
          🚗 Booked Rides
        </h2>




        {
          bookedRides.length === 0 ?


          (

            <div className="empty-box">

              No booked rides yet 🚫

            </div>

          )


          :


          (

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
                  📅 {ride.date}
                </p>



                <p>
                  ⏰ {ride.time}
                </p>



                <p>
                  🚘 {ride.vehicle}
                </p>



                <p>
                  💰 ₹{ride.price}
                </p>




                <p>

                  Status:

                  <span
                    className={
                      ride.status.toLowerCase()
                    }
                  >

                    {" "}
                    {ride.status}

                  </span>

                </p>





                {
                  ride.status === "Upcoming" &&

                  (

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
                📅 {ride.date}
              </p>



              <p>
                ⏰ {ride.time}
              </p>



              <p>
                🚘 {ride.vehicle}
              </p>



              <p>
                💰 ₹{ride.price}
              </p>



              <p>
                Status: {ride.status}
              </p>



            </div>


          ))

        }



      </div>


    </>

  );

}


export default MyRides;