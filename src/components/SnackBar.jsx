import React, { useState } from "react";

function Snackbar({ message, isOpen, color = "green" }) {
  const [visible, setVisible] = useState(isOpen);

  setTimeout(() => {
    setVisible(false);
  }, 6000);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: `${color}`,
        color: "#fff",
        padding: "10px 5px 10px 10px",
        borderRadius: "5px",
        visibility: visible ? "visible" : "hidden",
        opacity: visible ? "1" : "0",
        transition: "opacity 0.5s ease-in-out",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 9999,
      }}
    >
      <span>{message}</span>
      <svg
        onClick={handleClose}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        style={{ fill: "#fff", marginRight: "10px" }}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41l5.59 5.59 1.41-1.41L13.41 12z" />
      </svg>
    </div>
  );
}

export default Snackbar;
