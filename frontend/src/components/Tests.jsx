// src/components/Tests.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Tests = () => {
  const { testId } = useParams();

  return (
    <div>
      <h2>Test: {testId}</h2>
      <p>Here is the content of the test {testId}.</p>
    </div>
  );
};

export default Tests;
