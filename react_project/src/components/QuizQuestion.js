import React from 'react';
import './QuizQuestion.css';

const QuizQuestion = ({ number, question, options, type, id, value, onChange }) => {
  return (
    <div className="quiz-question">
      <h2>Q{number}. {question}</h2>
      
      {type === 'radio' ? (
        options.map((option, index) => (
          <div key={index} className="radio-option">
            <input
              type="radio"
              id={`${id}-${index}`}
              name={id}
              value={option}
              checked={value === option}
              onChange={(e) => onChange(e.target.value)}
            />
            <label htmlFor={`${id}-${index}`}>{option}</label>
          </div>
        ))
      ) : type === 'select' ? (
        <select
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="select-option"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : null}
    </div>
  );
};

export default QuizQuestion;