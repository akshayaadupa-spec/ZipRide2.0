import React from "react";

const RideCard = ({ from, to, price, time }) => {
  return (
    <div style={styles.card}>
      <h3>{from} → {to}</h3>
      <p>🕒 {time}</p>
      <p>💰 ₹{price}</p>

      <button style={styles.button}>Book Now</button>
    </div>
  );
};

const styles = {
  card: {
    width: "250px",
    padding: "15px",
    margin: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "white",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    backgroundColor: "#22c55e",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default RideCard;