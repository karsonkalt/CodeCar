import { Box, Button } from '@mui/material';
import { useState } from 'react';
import Car from '../../components/Car';
import { Field } from '../../components/Field';
import Goal from '../../components/Goal';

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

export const Level5 = ({ onWin }: Props) => {
  const styles = {
    buttonContainer: {
      marginTop: 3,
      display: 'grid',
      gridTemplateColumns: `repeat(4, auto)`,
    },
    left: {
      gridColumn: 1,
    },
    up: {
      gridColumn: 2,
    },
    right: {
      gridColumn: 3,
    },
    down: {
      gridColumn: 4,
    },
  };
  const [car, setCar] = useState({
    x: 1,
    y: 1,
  });
  const won = car.x === goal.x && car.y === goal.y;
  if (won) onWin();

  const handleLeftButtonClick = () =>
    setCar((prev) => ({ ...prev, x: Math.max(1, prev.x - 1) }));
  const handleUpButtonClick = () =>
    setCar((prev) => ({ ...prev, y: Math.max(1, prev.y - 1) }));
  const handleRightButtonClick = () =>
    setCar((prev) => ({ ...prev, x: Math.min(prev.x + 1, GRID_SIZE) }));
  const handleDownButtonClick = () =>
    setCar((prev) => ({ ...prev, y: Math.min(prev.y + 1, GRID_SIZE) }));

  return (
    <span>
      <h1>Level 5</h1>
      <Field width={GRID_SIZE} height={GRID_SIZE} blockSize={BLOCK_SIZE}>
        <Car x={car.x} y={car.y} blockSize={BLOCK_SIZE} />
        <Goal x={goal.x} y={goal.y} blockSize={BLOCK_SIZE} />
      </Field>
      <Box sx={styles.buttonContainer}>
        <Button variant="contained"sx={styles.left} onClick={handleLeftButtonClick}>
          Left
        </Button>
        <Button variant="contained"sx={styles.up} onClick={handleUpButtonClick}>
          UP
        </Button>
        <Button variant="contained"sx={styles.right} onClick={handleRightButtonClick}>
          Right
        </Button>
        <Button variant="contained"sx={styles.down} onClick={handleDownButtonClick}>
          Down
        </Button>
      </Box>
    </span>
  );
};
