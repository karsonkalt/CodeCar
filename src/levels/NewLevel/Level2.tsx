import { useEffect, useState } from 'react';
import {
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  randomNumber,
} from '../../util';
import { Template } from '../Template';

const GRID_SIZE = 15;
const BLOCK_SIZE = 25;
const HAZARD_SPEED = 2000;

interface Level1Props {
  onWin: VoidFunction;
  onInjury: (arg: Function) => void;
}

export function Level1({ onWin, onInjury }: Level1Props) {
  const [car, setCar] = useState({
    x: randomNumber(GRID_SIZE),
    y: randomNumber(GRID_SIZE),
  });

  const [hazard, setHazard] = useState({
    x: randomNumber(GRID_SIZE),
    y: randomNumber(GRID_SIZE),
  });

  // Handle user input
  useEffect(() => {
    const moveCar = (key: string) => {
      if (key === 'ArrowLeft') setCar((prev) => moveLeft(prev));
      if (key === 'ArrowUp') setCar((prev) => moveUp(prev));
      if (key === 'ArrowRight') setCar((prev) => moveRight(prev, GRID_SIZE));
      if (key === 'ArrowDown') setCar((prev) => moveDown(prev, GRID_SIZE));
    };

    const handleKeyPress = (event: KeyboardEvent) => moveCar(event.key);
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Handle hazard moving
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('timeout');
      function moveHazardTowardCar() {
        const { x: carX, y: carY } = car;
        const { x: hazardX, y: hazardY } = hazard;
    
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
      moveHazardTowardCar();
    }, HAZARD_SPEED);
    return () => clearInterval(interval);
  }, []);

  return (
    <Template
      gridSize={GRID_SIZE}
      blockSize={BLOCK_SIZE}
      onWin={onWin}
      levelNumber={1}
      car={car}
    />
  );
}
