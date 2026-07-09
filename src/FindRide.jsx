import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./assets/Navbar";
import BackButton from "./assets/BackButton";
import { RideContext } from "./RideContext";
import "./FindRide.css";


function FindRide() {

  const navigate = useNavigate();

  const { rides, bookRide } = useContext(RideContext);


  const [fromSearch, setFromSearch] = useState("");
  const [toSearch, setToSearch] = useState("");



  const filteredRides = rides.filter((ride) => {

    const fromMatch =
      fromSearch === "" ||
      ride.from
        .toLowerCase()
        .includes(fromSearch.toLowerCase());


    const toMatch =
      toSearch === "" ||
      ride.to
        .toLowerCase()
        .includes(toSearch.toLowerCase());


    return fromMatch && toMatch;

  });



  const getVehicleIcon = (vehicle) => {

    if(vehicle === "Bike")
      return "🏍️";

    if(vehicle === "Scooty")
      return "🛵";

    return "🚗";

  };



  return (

    <>

      <Navbar />

      <BackButton />


      <div className="find-container">


        <h1>
          🚗 Find Available Rides
        </h1>


        <p>
          Search and book rides shared by students.
        </p>



        <div className="search-box">


          <input
            type="text"
            placeholder="📍 From"
            value={fromSearch}
            onChange={(e)=>setFromSearch(e.target.value)}
          />


          <input
            type="text"
            placeholder="🏁 Destination"
            value={toSearch}
            onChange={(e)=>setToSearch(e.target.value)}
          />



          <button
            className="clear-btn"
            onClick={()=>{

              setFromSearch("");
              setToSearch("");

            }}
          >
            Clear
          </button>


        </div>





        {
          filteredRides.length === 0 ?


          (

            <div className="no-rides">

              <h2>
                No rides found 🚫
              </h2>

              <p>
                Try another location.
              </p>

            </div>


          )


          :


          (

            <div className="ride-list">


              {
                filteredRides.map((ride,index)=>(


                  <div
                    className="ride-card"
                    key={index}
                  >



                    <div className="ride-header">


                      <h2>
                        {ride.from}
                        <br/>
                        ↓
                        <br/>
                        {ride.to}
                      </h2>



                      <span className="price">
                        ₹{ride.price}
                      </span>


                    </div>





                    <p>
                      👤 Driver:
                      {" "}
                      {ride.driver || "Campus Driver"}
                    </p>



                    <p>
                      📅 {ride.date}
                    </p>



                    <p>
                      ⏰ {ride.time}
                    </p>



                    <p>
                      {getVehicleIcon(ride.vehicle)}
                      {" "}
                      {ride.vehicle}
                    </p>



                    <p
                      className={
                        ride.seats > 0
                        ?
                        "available"
                        :
                        "full"
                      }
                    >

                      💺 Seats Left:
                      {" "}
                      {ride.seats}

                    </p>





                    <button

                      disabled={ride.seats <= 0}

                      onClick={()=>{


                        bookRide(index);


                        navigate("/booking-success");


                      }}

                    >

                      {
                        ride.seats > 0
                        ?
                        "Book Ride"
                        :
                        "Ride Full"
                      }


                    </button>



                  </div>


                ))

              }


            </div>

          )

        }



      </div>


    </>

  );

}


export default FindRide;