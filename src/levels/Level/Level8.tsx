import { Box, Button, Input, TextField } from '@mui/material';
import { useState } from 'react';
import Car from '../../components/Car';
import { Field } from '../../components/Field';
import Goal from '../../components/Goal';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

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

export const Level8 = ({ onWin }: Props) => {
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
    setTextField((prev) => prev + 'GO LEFT.\n');
  };
  const handleUpButtonClick = () => {
    setTextField((prev) => prev + 'GO UP.\n');
  };
  const handleRightButtonClick = () => {
    setTextField((prev) => prev + 'GO RIGHT.\n');
  };
  const handleDownButtonClick = () => {
    setTextField((prev) => prev + 'GO DOWN.\n');
  };

  const goLeft = () =>
    setCar((prev) => ({ ...prev, x: Math.max(1, prev.x - 1) }));

  const goUp = () =>
    setCar((prev) => ({ ...prev, y: Math.max(1, prev.y - 1) }));

  const goRight = () =>
    setCar((prev) => ({ ...prev, x: Math.min(prev.x + 1, GRID_SIZE) }));

  const goDown = () =>
    setCar((prev) => ({ ...prev, y: Math.min(prev.y + 1, GRID_SIZE) }));

  const handleClickPlay = async () => {
    const moves = textField.split(/\r?\n/);
    for (const move of moves) {
      await new Promise((r) => setTimeout(r, 500));
      if (move === 'GO LEFT.') goLeft();
      if (move === 'GO UP.') goUp();
      if (move === 'GO RIGHT.') goRight();
      if (move === 'GO DOWN.') goDown();
    }
    handleClearClick();
  };

  const handleClearClick = () => {
    setTextField('');
  };

  return (
    <>
      <span>
        <h1>Level 8</h1>
        <Field width={GRID_SIZE} height={GRID_SIZE} blockSize={BLOCK_SIZE}>
          <Car x={car.x} y={car.y} />
          <Goal x={goal.x} y={goal.y} blockSize={BLOCK_SIZE} />
        </Field>
        <Box sx={styles.buttonContainer}>
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
      </span>
      <Box display="flex" flexDirection="column">
        <TextField
          sx={styles.textField}
          value={textField}
          minRows={15}
          multiline
          disabled
        />
        <Box display="flex">
          <Button variant="contained" onClick={handleClickPlay}>
            <PlayCircleIcon />
          </Button>
          <Button variant="outlined" onClick={handleClearClick}>
            Clear
          </Button>
        </Box>
      </Box>
    </>
  );
};
