import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <span className="badge">
            🚗 Smart Campus Ride Sharing Platform
          </span>

          <h1>
            Travel Smarter.
            <br />
            Ride Together.
          </h1>

          <p>
            ZipRide is a smart campus ride-sharing platform that helps students
            travel safely, save money, and connect with verified classmates for
            daily commutes and trips.
          </p>

          {/* Center Buttons */}
         <div className="hero-buttons">

 <Link
  to="/find-rides"
  className="find-button"
  onClick={() => console.log("Find Ride clicked")}
>
  Find Ride
</Link>

  <Link to="/offer" className="offer-button">
    Offer Ride
  </Link>

</div>

          <div className="stats">

            <div>
              <h2>10K+</h2>
              <p>Students</p>
            </div>

            <div>
              <h2>5000+</h2>
              <p>Successful Rides</p>
            </div>

            <div>
              <h2>50+</h2>
              <p>Partner Colleges</p>
            </div>

          </div>

        </div>
      </section>


      {/* Features */}
      <section className="features">

        <h2>Why Choose ZipRide?</h2>

        <div className="cards">

          <div className="card">
            <h3>🔒 Safe & Secure</h3>
            <p>
              Travel only with verified students from your college community.
            </p>
          </div>


          <div className="card">
            <h3>💰 Save Money</h3>
            <p>
              Share travel expenses and reduce your daily commuting costs.
            </p>
          </div>


          <div className="card">
            <h3>⚡ Instant Booking</h3>
            <p>
              Find available rides in seconds with a simple booking process.
            </p>
          </div>

        </div>

      </section>


      {/* How It Works */}
      <section className="how-it-works">

        <h2>How ZipRide Works</h2>

        <div className="steps">

          <div className="step">
            <div className="step-number">1</div>
            <h3>Register</h3>
            <p>Create your student account using your college email.</p>
          </div>


          <div className="step">
            <div className="step-number">2</div>
            <h3>Find or Offer</h3>
            <p>
              Search for rides or publish your own ride within minutes.
            </p>
          </div>


          <div className="step">
            <div className="step-number">3</div>
            <h3>Travel Together</h3>
            <p>
              Meet your ride partner and enjoy a safe, affordable journey.
            </p>
          </div>

        </div>

      </section>


      {/* Testimonials */}
      <section className="testimonials">

        <h2>What Students Say</h2>

        <div className="testimonial-grid">

          <div className="testimonial">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>
              "ZipRide helped me reduce my travel expenses and made commuting
              much easier."
            </p>
            <h4>Rahul • CSE Student</h4>
          </div>


          <div className="testimonial">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>
              "The interface is simple, and I always find trusted students to
              travel with."
            </p>
            <h4>Priya • ECE Student</h4>
          </div>


          <div className="testimonial">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>
              "A great platform for students. Booking rides takes only a few
              seconds."
            </p>
            <h4>Arjun • IT Student</h4>
          </div>

        </div>

      </section>


      {/* About */}
      <section className="about">

        <h2>About ZipRide</h2>

        <p>
          ZipRide is designed to make campus transportation safer, smarter, and
          more affordable. Whether you're commuting to college, heading home,
          or traveling with friends, ZipRide connects students through a
          trusted ride-sharing network.
        </p>

      </section>


      {/* Footer */}
      <footer className="footer">

        <p>
          © 2026 ZipRide. All Rights Reserved.
        </p>

        <p>
          Smart Campus Mobility Platform
        </p>

      </footer>

    </>
  );
}

export default Home;