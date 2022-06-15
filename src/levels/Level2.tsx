import { useEffect, useState } from 'react';
import Car from '../components/Car';
import { Field } from '../components/Field';
import Goal from '../components/Goal';
import { Hazard } from '../components/Hazard';

const GRID_SIZE = 20;
const BLOCK_SIZE = 20;

function randomNumber(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

const goal = {
  x: randomNumber(GRID_SIZE),
  y: randomNumber(GRID_SIZE),
};

const hazard = {
  x: randomNumber(GRID_SIZE),
  y: randomNumber(GRID_SIZE),
}

interface Props {
  onWin: VoidFunction;
  onInjury: VoidFunction;
}

export const Level2 = ({ onWin, onInjury }: Props) => {
  const [car, setCar] = useState({
    x: 1,
    y: 1,
  });

  const [renderStopper, setRenderStopper] = useState(true);

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

  const injured = car.x === hazard.x && car.y === hazard.y;
  if (injured && renderStopper) {
    console.log("injured")
    setRenderStopper(false);
    onInjury()
  }

  return (
    <span>
      <h1>Level 2</h1>
      <Field width={GRID_SIZE} height={GRID_SIZE} blockSize={BLOCK_SIZE}>
        <Car x={car.x} y={car.y} blockSize={BLOCK_SIZE} />
        <Goal x={goal.x} y={goal.y} blockSize={BLOCK_SIZE} />
        <Hazard x={hazard.x} y={hazard.y} blockSize={BLOCK_SIZE}/>
      </Field>
    </span>
  );
};
