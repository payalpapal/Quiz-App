import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Quiz Finished 🎉</h1>
      <h2>
        Your Score: {score} / {total}
      </h2>
      <button
        onClick={() => navigate("/")}
        style={{ padding: "10px 20px", fontSize: "18px", marginTop: "20px" }}
      >
        Go Home
      </button>
    </div>
  );
}