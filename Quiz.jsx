import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {questions} from '../data.js'

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      navigate("/result", { state: { score, total: questions.length } });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>
        Question {current + 1} of {questions.length}
      </h2>
      <p>{questions[current].question}</p>
      <div>
        {questions[current].options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(option)}
            style={{
              display: "block",
              margin: "10px auto",
              padding: "10px 20px",
              fontSize: "16px",
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}