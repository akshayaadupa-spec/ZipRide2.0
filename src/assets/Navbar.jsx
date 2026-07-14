import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="logo">
        🚗 ZipRide
      </Link>

      {/* Navigation */}
      <div className="nav-links">

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/profile">
          Profile
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;