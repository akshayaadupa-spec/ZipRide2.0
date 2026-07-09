import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import BackButton from "./BackButton";
import "./Settings.css";

function Settings() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState(
    JSON.parse(localStorage.getItem("notifications")) ?? true
  );

  const [emailUpdates, setEmailUpdates] = useState(
    JSON.parse(localStorage.getItem("emailUpdates")) ?? true
  );

  const [location, setLocation] = useState(
    JSON.parse(localStorage.getItem("location")) ?? false
  );

  // Save Notifications
  useEffect(() => {
    localStorage.setItem(
      "notifications",
      JSON.stringify(notifications)
    );
  }, [notifications]);

  // Save Email Updates
  useEffect(() => {
    localStorage.setItem(
      "emailUpdates",
      JSON.stringify(emailUpdates)
    );
  }, [emailUpdates]);

  // Save Location
  useEffect(() => {
    localStorage.setItem(
      "location",
      JSON.stringify(location)
    );
  }, [location]);

  const handleLocation = () => {
    if (!location) {
      navigator.geolocation.getCurrentPosition(
        () => {
          alert("Location Access Enabled");
          setLocation(true);
        },
        () => {
          alert("Location Permission Denied");
        }
      );
    } else {
      setLocation(false);
      alert("Location Access Disabled");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <BackButton />

      <div className="settings-container">

        <h1>⚙️ Settings</h1>
        <p>Manage your ZipRide preferences.</p>

        <div className="setting-card">
          <span>🔔 Notifications</span>

          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>

        <div className="setting-card">
          <span>📧 Email Updates</span>

          <input
            type="checkbox"
            checked={emailUpdates}
            onChange={() => setEmailUpdates(!emailUpdates)}
          />
        </div>

        <div className="setting-card">
          <span>📍 Location Access</span>

          <input
            type="checkbox"
            checked={location}
            onChange={handleLocation}
          />
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>
    </>
  );
}

export default Settings;