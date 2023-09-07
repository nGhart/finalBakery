import React, { useState } from 'react';

function Question({ question, answer, id }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <div className="questionHeader itemNprice" key={id}>
        <h4>{question}</h4>
        <button
          className="questionButton"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? '-' : '+'}
        </button>
      </div>
      {showAnswer && <p className="answer">{answer}</p>}
    </>
  );
}

export default Question;
