import React, { useState, useEffect } from 'react';
import QuizQuestion from './QuizQuestion';
import './Quiz.css';

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: 'RAM',
    q9: '',
    q10: ''
  });

  const correctAnswers = {
    q1: "Central Processing Unit",
    q2: "Random Access Memory",
    q3: "To provide power",
    q4: "Display",
    q5: "Operating System",
    q6: "Both HDD and SSD",
    q7: "The processor's speed in executing instructions",
    q8: "RAM",
    q9: "Rendering graphics",
    q10: "SMTP"
  };

  const questions = [
    {
      id: 'q1',
      question: 'What is the CPU also called as?',
      options: [
        'Central Processing Unit',
        'Control Panel Unit',
        'Central Performance Unit',
        'Computer Power Unit'
      ],
      type: 'radio'
    },
    {
      id: 'q2',
      question: 'What does RAM stand for?',
      options: [
        'Random Access Memory',
        'Read Access Memory',
        'Rapid Access Memory',
        'Random Auxiliary Memory'
      ],
      type: 'radio'
    },
    {
      id: 'q3',
      question: 'What is the primary function of a battery in a device?',
      options: [
        'To store data',
        'To provide power',
        'To process information',
        'To manage files'
      ],
      type: 'radio'
    },
    {
      id: 'q4',
      question: 'Which component of a device displays visual output?',
      options: [
        'Processor',
        'Battery',
        'Display',
        'Storage'
      ],
      type: 'radio'
    },
    {
      id: 'q5',
      question: 'What does OS stand for in computing?',
      options: [
        'Operating System',
        'Optimal System',
        'Organizational Software',
        'Operating Software'
      ],
      type: 'radio'
    },
    {
      id: 'q6',
      question: 'Which of the following is a type of storage?',
      options: [
        'HDD',
        'SSD',
        'Both HDD and SSD',
        'None of the above'
      ],
      type: 'radio'
    },
    {
      id: 'q7',
      question: 'What does the clock speed of a processor determine?',
      options: [
        'The processor\'s speed in executing instructions',
        'The amount of storage capacity',
        'The display resolution',
        'The battery life'
      ],
      type: 'radio'
    },
    {
      id: 'q8',
      question: 'Which type of memory is faster but volatile?',
      options: [
        'RAM',
        'ROM',
        'HDD',
        'SSD'
      ],
      type: 'select'
    },
    {
      id: 'q9',
      question: 'What is the function of a GPU?',
      options: [
        'Rendering graphics',
        'Storing data',
        'Managing power',
        'Cooling the device'
      ],
      type: 'radio'
    },
    {
      id: 'q10',
      question: 'Which protocol is used for sending emails?',
      options: [
        'SMTP',
        'HTTP',
        'FTP',
        'IMAP'
      ],
      type: 'radio'
    }
  ];

  // Timer effect
  useEffect(() => {
    if (timeLeft <= 0 || submitted) {
      return;
    }

    const timerInterval = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeLeft, submitted]);

  // Auto-submit when time runs out
  useEffect(() => {
    if (timeLeft <= 0 && !submitted) {
      handleSubmit();
    }
  }, [timeLeft]);

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: value
    }));
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    
    let newScore = 0;
    for (let key in correctAnswers) {
      if (answers[key] === correctAnswers[key]) {
        newScore++;
      }
    }
    
    setScore(newScore);
    setSubmitted(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h1>Quiz</h1>
        <h2 id="timer" className="timer">Time Remaining: {formatTime(timeLeft)}</h2>
        
        {!submitted ? (
          <form id="quizForm" onSubmit={handleSubmit}>
            {questions.map((q, index) => (
              <QuizQuestion
                key={q.id}
                number={index + 1}
                question={q.question}
                options={q.options}
                type={q.type}
                id={q.id}
                value={answers[q.id]}
                onChange={(value) => handleAnswerChange(q.id, value)}
              />
            ))}
            
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        ) : (
          <h2 id="result" className="result">You scored {score} out of {Object.keys(correctAnswers).length}</h2>
        )}
      </div>
    </div>
  );
};

export default Quiz;