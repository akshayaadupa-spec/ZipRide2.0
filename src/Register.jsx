import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    college: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Account Created Successfully 🚗");
    navigate("/login");
  }

  return (
    <div className="container">

      <h1>Create Your Account 🚗</h1>

      <p>Join the ZipRide student community</p>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={user.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="College Email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="college"
          placeholder="College Name"
          value={user.college}
          onChange={handleChange}
          required
        />

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={user.confirmPassword}
          onChange={handleChange}
          required
        />

        <label className="show-password">
          <input
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>

        <button type="submit">
          Create Account
        </button>

      </form>

      <p className="register-link">
        Already have an account?{" "}
        <span onClick={() => navigate("/login")}>
          Login
        </span>
      </p>

    </div>
  );
}

export default Register;