import React from "react";

const Hero = () => {
  return (
    <div style={styles.hero}>
      <h1 style={styles.title}>Travel Smart with ZipRide</h1>
      <p style={styles.subtitle}>
        Book rides instantly or offer empty seats and earn money.
      </p>

      <div style={styles.buttons}>
        <button style={styles.primary}>Find Ride</button>
        <button style={styles.secondary}>Offer Ride</button>
      </div>
    </div>
  );
};

const styles = {
  hero: {
    textAlign: "center",
    padding: "80px 20px",
    background: "linear-gradient(to right, #3b82f6, #6366f1)",
    color: "white",
  },
  title: {
    fontSize: "42px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    opacity: 0.9,
  },
  buttons: {
    marginTop: "20px",
  },
  primary: {
    padding: "10px 20px",
    marginRight: "10px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "white",
    color: "#3b82f6",
    cursor: "pointer",
  },
  secondary: {
    padding: "10px 20px",
    border: "1px solid white",
    borderRadius: "6px",
    backgroundColor: "transparent",
    color: "white",
    cursor: "pointer",
  },
};

export default Hero;