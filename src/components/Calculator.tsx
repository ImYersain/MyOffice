import React, {FC, useState} from 'react';
import {Container, Grid, Paper, Typography, Button} from '@mui/material';

export const Calculator: FC = () => {
  const [display, setDisplay] = useState<string>('0');
  const [expression, setExpression] = useState<string>('');
  const calcValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '.', '/', 'C'];

  const handleButtonClick = (value: string) => {
    switch (value) {
      case 'C':
        setDisplay('0');
        setExpression('');
        break;
      case '=':
        try {
          const result = eval(expression);
          setDisplay(result.toString());
          setExpression('');
        } catch (error) {
          setDisplay('Error');
        }
        break;
      default:
        if (display === '0' && value !== '.') {
          setDisplay(value);
        } else {
          setDisplay(display + value);
        }
        setExpression(expression + value);
        break;
    }
  };

  return (
    <Container sx={{mt: 4}}>
      <Paper elevation={3} sx={{p: 2}}>
        <Typography variant="h4" align="center" gutterBottom>
          {display}
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          {calcValues.map((value, index) => (
            <Grid item key={index}>
              <Button variant="outlined" onClick={() => handleButtonClick(value)}>
                {value}
              </Button>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button variant="contained" onClick={() => handleButtonClick('=')} fullWidth>
              =
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
