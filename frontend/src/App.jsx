import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import TestList from './components/TestList';
import TestDetail from './components/TestDetail';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Vite + React
            </Typography>
            <Button color="inherit" href="/login">Login</Button>
            <Button color="inherit" href="/tests">Tests</Button>
            <Button color="inherit" href="/">Home</Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/tests" element={<TestList />} />
            <Route path="/tests/:id" element={<TestDetail />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
