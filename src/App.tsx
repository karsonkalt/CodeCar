import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Select } from './levels/Select';
import { Hearts } from './components/Hearts';

export const App = () => {
  const [level, setLevel] = useState(2);
  const [currentHearts, setCurrentHearts] = useState(5);
  const [totalHearts, setTotalHearts] = useState(5);

  const increaseLevel = () => {
    setLevel(level + 1);
  };

  const decreaseHealth = (moveHazard: Function) => {
    setCurrentHearts(currentHearts - 1);
    moveHazard();
  };

  const handleStartOver = () => {
    setLevel(1);
    setCurrentHearts(5);
  };

  const styles = {
    root: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
    },
  };

  return (
    <Box component="div" sx={styles.root}>
      <Typography variant="h3">Code Car</Typography>
      <Hearts current={currentHearts} total={totalHearts} />
      {!currentHearts && (
        <h1>
          You Died
          <button onClick={handleStartOver}>Start over</button>
        </h1>
      )}
      {currentHearts && (
        <Select level={level} onWin={increaseLevel} onInjury={decreaseHealth} />
      )}
    </Box>
  );
};
