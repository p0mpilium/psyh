// src/components/Tests.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Tests = () => {
  const { testId } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Здесь можно сделать запрос к бэкенду для получения вопросов
    const fetchQuestions = async () => {
      const response = await fetch(`/api/tests/${testId}`);
      const data = await response.json();
      setQuestions(data.questions);
    };

    fetchQuestions();
  }, [testId]);

  const handleAnswerSelect = (questionId, answer) => {
    // Логика для обработки выбора ответа
    console.log(`Selected answer ${answer} for question ${questionId}`);
  };

  return (
    <div>
      <h2>Test: {testId}</h2>
      {questions.length > 0 ? (
        questions.map((question) => (
          <div key={question.id}>
            <h3>{question.text}</h3>
            {question.answers.map((answer) => (
              <button key={answer} onClick={() => handleAnswerSelect(question.id, answer)}>
                {answer}
              </button>
            ))}
          </div>
        ))
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default Tests;
