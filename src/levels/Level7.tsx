import { Box, Button, Input, TextField } from '@mui/material';
import { useState } from 'react';
import Car from '../components/Car';
import { Field } from '../components/Field';
import Goal from '../components/Goal';

const GRID_SIZE = 15;
const BLOCK_SIZE = 20;

function randomNumber(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

const goal = {
  x: randomNumber(GRID_SIZE),
  y: randomNumber(GRID_SIZE),
};

interface Props {
  onWin: VoidFunction;
}

export const Level7 = ({ onWin }: Props) => {
  const styles = {
    buttonContainer: {
      marginTop: 3,
    },
    textField: {
      width: '300px',
    },
  };
  const [car, setCar] = useState({
    x: 1,
    y: 1,
  });
  const [textField, setTextField] = useState('');
  const won = car.x === goal.x && car.y === goal.y;
  if (won) onWin();

  const handleLeftButtonClick = () => {
    setCar((prev) => ({ ...prev, x: Math.max(1, prev.x - 1) }));
    setTextField((prev) => prev + 'GO LEFT.\n');
  };
  const handleUpButtonClick = () => {
    setCar((prev) => ({ ...prev, y: Math.max(1, prev.y - 1) }));
    setTextField((prev) => prev + 'GO UP.\n');
  };
  const handleRightButtonClick = () => {
    setCar((prev) => ({ ...prev, x: Math.min(prev.x + 1, GRID_SIZE) }));
    setTextField((prev) => prev + 'GO RIGHT.\n');
  };
  const handleDownButtonClick = () => {
    setCar((prev) => ({ ...prev, y: Math.min(prev.y + 1, GRID_SIZE) }));
    setTextField((prev) => prev + 'GO DOWN.\n');
  };

  return (
    <>
      <span>
        <h1>Level 7</h1>
        <Field width={GRID_SIZE} height={GRID_SIZE} blockSize={BLOCK_SIZE}>
          <Car x={car.x} y={car.y} blockSize={BLOCK_SIZE} />
          <Goal x={goal.x} y={goal.y} blockSize={BLOCK_SIZE} />
        </Field>
      </span>
      <Box display="flex" flexDirection="column" ml={3}>
        <TextField
          sx={styles.textField}
          value={textField}
          minRows={15}
          multiline
          disabled
        />
        <Box display="flex">
          <Button variant="contained" onClick={handleLeftButtonClick}>
            GO LEFT.
          </Button>
          <Button variant="contained" onClick={handleUpButtonClick}>
            GO UP.
          </Button>
          <Button variant="contained" onClick={handleRightButtonClick}>
            GO RIGHT.
          </Button>
          <Button variant="contained" onClick={handleDownButtonClick}>
            GO DOWN.
          </Button>
        </Box>
      </Box>
    </>
  );
};
