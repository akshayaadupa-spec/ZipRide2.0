import { createContext, useState } from "react";

export const RideContext = createContext();


export function RideProvider({ children }) {


  const [rides, setRides] = useState([

    {
      driver: "Rahul",
      from: "Warangal",
      to: "Hyderabad",
      date: "12 Jul 2026",
      time: "09:00 AM",
      vehicle: "Car",
      seats: 3,
      price: 250,
    },


    {
      driver: "Priya",
      from: "Hanamkonda",
      to: "College",
      date: "12 Jul 2026",
      time: "08:30 AM",
      vehicle: "Scooty",
      seats: 1,
      price: 50,
    },


    {
      driver: "Arjun",
      from: "Kazipet",
      to: "College",
      date: "13 Jul 2026",
      time: "09:15 AM",
      vehicle: "Bike",
      seats: 2,
      price: 40,
    },


  ]);




  // Stores rides booked by user

  const [bookedRides, setBookedRides] = useState([]);





  // Add new offered ride

  const addRide = (ride) => {

    setRides((prev) => [
      ...prev,
      ride
    ]);

  };





  // Book ride

  const bookRide = (index) => {


    const selectedRide = rides[index];


    if(selectedRide.seats <= 0){
      return;
    }



    // Add to user's booked rides

    setBookedRides((prev)=>[

      ...prev,

      {
        ...selectedRide,
        seats: 1,
        status: "Upcoming"
      }

    ]);





    // Reduce available seats

    setRides((prev)=>

      prev.map((ride,i)=>

        i === index

        ?
        {
          ...ride,
          seats: ride.seats - 1
        }

        :
        ride

      )

    );


  };





  // Cancel booked ride

  const cancelRide = (index)=>{


    setBookedRides((prev)=>

      prev.map((ride,i)=>

        i === index

        ?
        {
          ...ride,
          status:"Cancelled"
        }

        :
        ride

      )

    );


  };





  return (

    <RideContext.Provider

      value={{

        rides,

        addRide,

        bookRide,

        bookedRides,

        cancelRide

      }}

    >

      {children}

    </RideContext.Provider>

  );

}