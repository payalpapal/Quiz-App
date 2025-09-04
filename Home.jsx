import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Quiz App 🎉</h1>
      <button
        onClick={() => navigate("/quiz")}
        style={{ padding: "10px 20px", fontSize: "18px", marginTop: "20px" }}
      >
        Start Quiz
      </button>
    </div>
  );
}