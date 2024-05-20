import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

const TestList = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch('/api/tests')
      .then(response => response.json())
      .then(data => setTests(data));
  }, []);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Available Tests</Typography>
      <List>
        {tests.map(test => (
          <ListItem button component={Link} to={`/tests/${test.id}`} key={test.id}>
            <ListItemText primary={test.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TestList;
