import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleTestClick = (test) => {
    const isAuthenticated = localStorage.getItem('token');
    if (!isAuthenticated) {
      navigate('/login', { state: { test } });
    } else {
      navigate(`/tests/${test}`);
    }
  };

  return (
    <div>
      <h2>Available Tests</h2>
      <ul>
        <li>
          <button onClick={() => handleTestClick('test1')}>Test 1</button>
        </li>
        <li>
          <button onClick={() => handleTestClick('test2')}>Test 2</button>
        </li>
      </ul>
    </div>
  );
};

export default Home;
