import { useEffect, useState } from 'react';
import Car from '../../components/Car';
import { Field } from '../../components/Field';
import Goal from '../../components/Goal';

const GRID_SIZE = 10;
const BLOCK_SIZE = 30;

function randomNumber(max: number) {
  return Math.floor(Math.random() * max) + 1;
} //

const goal = {
  x: randomNumber(GRID_SIZE),
  y: randomNumber(GRID_SIZE),
};//

interface Props {
  onWin: VoidFunction;
}

export const Level1 = ({ onWin }: Props) => {
  const [car, setCar] = useState({
    x: 1,
    y: 1,
  });

  useEffect(() => {
    const setKey = (key: string) => {
      console.log(key);
      if (key === 'ArrowLeft')
        setCar((prev) => ({ ...prev, x: Math.max(1, prev.x - 1) }));
      if (key === 'ArrowUp')
        setCar((prev) => ({ ...prev, y: Math.max(1, prev.y - 1) }));
      if (key === 'ArrowRight')
        setCar((prev) => ({ ...prev, x: Math.min(prev.x + 1, GRID_SIZE) }));
      if (key === 'ArrowDown')
        setCar((prev) => ({ ...prev, y: Math.min(prev.y + 1, GRID_SIZE) }));
    };

    const handleKeyPress = (event: KeyboardEvent) => setKey(event.key);
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const won = car.x === goal.x && car.y === goal.y;
  if (won) onWin();

  return (
    <span>
      <h1>Level 1</h1>
      <Field width={GRID_SIZE} height={GRID_SIZE} blockSize={BLOCK_SIZE}>
        <Car x={car.x} y={car.y} />
        <Goal x={goal.x} y={goal.y} blockSize={BLOCK_SIZE} />
      </Field>
    </span>
  );
};
