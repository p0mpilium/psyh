import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Home = () => (
  <Box sx={{ textAlign: 'center', mt: 4 }}>
    <Typography variant="h4" gutterBottom>Welcome to the Test App</Typography>
    <Button variant="contained" color="primary" href="/login" sx={{ m: 1 }}>Логин</Button>
    <Button variant="contained" color="secondary" href="/tests" sx={{ m: 1 }}>Осмотреть тесты</Button>
  </Box>
);

export default Home;
