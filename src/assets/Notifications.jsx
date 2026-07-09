import "./Notifications.css";
import Navbar from "./Navbar";
import BackButton from "./BackButton";

function Notifications() {
  const notifications = [
  {
    icon: "✅",
    title: "Ride Confirmed",
    message: "Your ride to College has been confirmed.",
    time: "10 mins ago",
  },
  {
    icon: "🚗",
    title: "Driver Assigned",
    message: "Rahul has accepted your ride request.",
    time: "30 mins ago",
  },
  {
    icon: "💳",
    title: "Payment Successful",
    message: "₹120 has been paid successfully.",
    time: "Yesterday",
  },
  {
    icon: "⭐",
    title: "Ride Completed",
    message: "Hope you enjoyed your ride! Please rate your driver.",
    time: "2 days ago",
  },
];

  return (
    <>
      <Navbar />
      <BackButton />

      <div className="notifications-container">
        <h1>🔔 Notifications</h1>

        <p className="subtitle">
          Stay updated with your latest ride activities.
        </p>

        <div className="notification-list">
          {notifications.map((item, index) => (
         <div className="notification-card" key={index}>
  <div className="notification-left">
    <div className="notification-icon">
      {item.icon}
    </div>

    <div>
      <h3>{item.title}</h3>
      <p>{item.message}</p>
    </div>
  </div>

  <span>{item.time}</span>
</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Notifications;