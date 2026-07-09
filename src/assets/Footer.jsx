import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div>
          <h2>ZipRide 🚗</h2>
          <p>Smart Ride Sharing for Students</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Book Ride</p>
          <p>Find Rides</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>support@zipride.com</p>
          <p>+91 9876543210</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 ZipRide. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;