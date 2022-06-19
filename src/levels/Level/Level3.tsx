import { Box, Button } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Car from '../../components/Car';
import { Field } from '../../components/Field';
import Goal from '../../components/Goal';
import {
  KeyboardArrowLeft,
  KeyboardArrowDown,
  KeyboardArrowUp,
  KeyboardArrowRight,
} from '@mui/icons-material';
import { Hazard } from '../../components/Hazard';

const GRID_SIZE = 10;
const BLOCK_SIZE = 20;
const HAZARD_SPEED = 2000

function randomNumber(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

const goal = {
  x: randomNumber(GRID_SIZE),
  y: randomNumber(GRID_SIZE),
};

interface Props {
  onWin: VoidFunction;
  onInjury: (arg: Function) => void;
}

export const Level3 = ({ onWin, onInjury }: Props) => {
  const styles = {
    buttonContainer: {
      marginTop: 3,
      display: 'grid',
      gridTemplateColumns: `repeat(3, auto)`,
      gridTemplateRows: `repeat(2, 20px)`,
    },
    left: {
      gridRow: 2,
      gridColumn: 1,
    },
    up: {
      gridRow: 1,
      gridColumn: 2,
    },
    right: {
      gridRow: 2,
      gridColumn: 3,
    },
    down: {
      gridRow: 2,
      gridColumn: 2,
    },
  };
  const carRef = useRef({ x: 1, y: 1 });
  const [car, setCar] = useState({
    x: 1,
    y: 1,
  });

  useEffect(() => {
    carRef.current = car;
  }, [car]);

  const hazardRef = useRef({ x: 1, y: 1 });
  const [hazard, setHazard] = useState({
    x: randomNumber(GRID_SIZE),
    y: randomNumber(GRID_SIZE),
  });

  useEffect(() => {
    hazardRef.current = hazard;
  }, [hazard]);

  function moveHazardTowardCar() {
    const { x: carX, y: carY } = carRef.current;
    const { x: hazardX, y: hazardY } = hazardRef.current;

    if (hazardX > carX) {
      setHazard((prev: any) => ({ ...prev, x: Math.max(1, prev.x - 1) })); // move left
    } else if (hazardX < carX) {
      setHazard((prev: any) => ({
        ...prev,
        x: Math.min(prev.x + 1, GRID_SIZE),
      })); // move right
    }

    if (hazardY > carY) {
      setHazard((prev: any) => ({ ...prev, y: Math.max(1, prev.y - 1) })); // move up
    } else if (hazardY < carY) {
      setHazard((prev) => ({ ...prev, y: Math.min(prev.y + 1, GRID_SIZE) }));
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('timeout');
      moveHazardTowardCar();
    }, HAZARD_SPEED);
    return () => clearInterval(interval);
  }, []);
  const won = car.x === goal.x && car.y === goal.y;
  if (won) onWin();

  const injured = car.x === hazard.x && car.y === hazard.y;
  if (injured) {
    console.log('injured');
    onInjury(moveHazard);
  }

  function moveHazard() {
    setHazard({
      x: randomNumber(GRID_SIZE),
      y: randomNumber(GRID_SIZE),
    })
  }

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
      <h1>Level 3</h1>
      <Field width={GRID_SIZE} height={GRID_SIZE} blockSize={BLOCK_SIZE}>
        <Car x={car.x} y={car.y} blockSize={BLOCK_SIZE} />
        <Goal x={goal.x} y={goal.y} blockSize={BLOCK_SIZE} />
        <Hazard x={hazard.x} y={hazard.y} blockSize={BLOCK_SIZE} />
      </Field>
      <Box sx={styles.buttonContainer}>
        <Button
          variant="contained"
          sx={styles.left}
          onClick={handleLeftButtonClick}
        >
          <KeyboardArrowLeft />
        </Button>
        <Button
          variant="contained"
          sx={styles.up}
          onClick={handleUpButtonClick}
        >
          <KeyboardArrowUp />
        </Button>
        <Button
          variant="contained"
          sx={styles.right}
          onClick={handleRightButtonClick}
        >
          <KeyboardArrowRight />
        </Button>
        <Button
          variant="contained"
          sx={styles.down}
          onClick={handleDownButtonClick}
        >
          <KeyboardArrowDown />
        </Button>
      </Box>
    </span>
  );
};
