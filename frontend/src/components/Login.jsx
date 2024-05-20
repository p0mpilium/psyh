import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Switch, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    // Получение CSRF токена из cookie
    const getCsrfToken = () => {
      const name = 'csrftoken';
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };
    setCsrfToken(getCsrfToken());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = isRegister ? '/api/register' : '/api/login';
    const data = { username, password };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken,  // Добавление CSRF токена в заголовок
      },
      credentials: 'include',  // Включение cookie в запрос
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'User created' || data.status === 'Login successful') {
          navigate('/tests');  // Перенаправление на страницу тестов
        } else {
          console.error('Error:', data);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>{isRegister ? 'Register' : 'Login'}</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {isRegister ? 'Register' : 'Login'}
        </Button>
        <FormControlLabel
          control={
            <Switch checked={isRegister} onChange={() => setIsRegister(!isRegister)} />
          }
          label="Switch to Register"
        />
      </form>
    </Box>
  );
};

export default Login;
