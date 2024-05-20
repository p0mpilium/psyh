import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const TestDetail = () => {
  const { id } = useParams();
  const [test, setTest] = useState(null);

  useEffect(() => {
    fetch(`/api/tests/${id}`)
      .then(response => response.json())
      .then(data => setTest(data));
  }, [id]);

  if (!test) return <div>Loading...</div>;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>{test.name}</Typography>
      <List>
        {test.questions.map(question => (
          <ListItem key={question.id}>
            <ListItemText primary={question.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TestDetail;
