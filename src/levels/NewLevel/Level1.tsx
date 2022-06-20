import { useEffect, useState } from 'react';
import {
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  randomNumber,
} from '../../util';
import { Template } from '../Template';

const GRID_SIZE = 10;
const BLOCK_SIZE = 30;

interface Level1Props {
  onWin: VoidFunction;
}

export function Level1({ onWin }: Level1Props) {
  const [car, setCar] = useState({
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
