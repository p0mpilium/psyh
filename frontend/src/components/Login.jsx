import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Switch, FormControlLabel } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = isRegister ? '/api/register' : '/api/login';
    const data = { username, password };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log(isRegister ? 'Registration' : 'Login', 'successful:', data);
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
