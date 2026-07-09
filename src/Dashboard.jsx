import { Link } from "react-router-dom";
import "./Dashboard.css";
import BackButton from "./assets/BackButton";

function Dashboard() {

  return (

    <div className="dashboard">

      <BackButton />


      {/* Welcome Section */}

      <h1>
        Welcome Back 👋
      </h1>


      <p className="subtitle">
        Manage your rides and stay updated with your campus travel.
      </p>




      {/* Statistics */}

      <div className="stats">


        <div className="card">

          <h2>12</h2>

          <p>
            Total Rides
          </p>

        </div>



        <div className="card">

          <h2>5</h2>

          <p>
            Upcoming Rides
          </p>

        </div>



        <div className="card">

          <h2>₹840</h2>

          <p>
            Money Saved
          </p>

        </div>


      </div>





      {/* Quick Actions */}

      <h2 className="section-title">
        Quick Actions
      </h2>



      <div className="actions">



        <Link 
          to="/my-rides"
          className="action-btn"
        >
          📖 My Rides
        </Link>



        <Link 
          to="/ride-history"
          className="action-btn"
        >
          📜 Ride History
        </Link>



        <Link 
          to="/notifications"
          className="action-btn"
        >
          🔔 Notifications
        </Link>



        <Link 
          to="/settings"
          className="action-btn"
        >
          ⚙️ Settings
        </Link>



        <Link 
          to="/profile"
          className="action-btn"
        >
          👤 Profile
        </Link>


      </div>






      {/* Recent Activity */}

      <h2 className="section-title">
        Recent Activity
      </h2>



      <div className="activity">


        <div className="activity-card">
          🚗 Ride booked to College
        </div>


        <div className="activity-card">
          ✅ Ride completed successfully
        </div>


        <div className="activity-card">
          ⭐ Driver rated 5 stars
        </div>


        <div className="activity-card">
          🔔 New ride notification received
        </div>


      </div>


    </div>

  );

}


export default Dashboard;