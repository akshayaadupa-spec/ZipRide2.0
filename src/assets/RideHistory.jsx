import "./RideHistory.css";
import Navbar from "./Navbar";
import BackButton from "./BackButton";
function RideHistory() {
  const rides = [
    {
      id: 1,
      from: "Hostel",
      to: "College",
      date: "10 Jul 2026",
      fare: "₹50",
      status: "Completed",
    },
    {
      id: 2,
      from: "College",
      to: "Railway Station",
      date: "12 Jul 2026",
      fare: "₹120",
      status: "Upcoming",
    },
    {
      id: 3,
      from: "Library",
      to: "Hostel",
      date: "15 Jul 2026",
      fare: "₹40",
      status: "Completed",
    },
  ];
return (
  <>
    <Navbar />

    <BackButton />

    <div className="ride-history-container">

      <h1>📜 Ride History</h1>

      {/* Your existing code */}

    </div>
  </>
);
  return (
    <div className="history-container">
      <h1>📜 Ride History</h1>
      <p>Your recent and upcoming rides.</p>

      <div className="history-list">
        {rides.map((ride) => (
          <div className="ride-card" key={ride.id}>
            <h3>{ride.from} → {ride.to}</h3>

            <p><strong>Date:</strong> {ride.date}</p>
            <p><strong>Fare:</strong> {ride.fare}</p>

            <span
              className={
                ride.status === "Completed"
                  ? "status completed"
                  : "status upcoming"
              }
            >
              {ride.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RideHistory;