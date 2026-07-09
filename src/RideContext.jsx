import { createContext, useState } from "react";

export const RideContext = createContext();

export function RideProvider({ children }) {

  const [rides, setRides] = useState([]);

  const addRide = (ride) => {
    setRides((prev) => [...prev, ride]);
  };

  const bookRide = (index) => {
    setRides((prevRides) =>
      prevRides.map((ride, i) =>
        i === index
          ? {
              ...ride,
              seats: Number(ride.seats) - 1,
            }
          : ride
      )
    );
  };

  return (
    <RideContext.Provider
      value={{
        rides,
        addRide,
        bookRide,
      }}
    >
      {children}
    </RideContext.Provider>
  );
}