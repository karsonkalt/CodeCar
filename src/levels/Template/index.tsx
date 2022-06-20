import { useEffect, useRef, useState } from 'react';
import { Car } from '../../components/Car';
import { Field } from '../../components/Field';
import { Goal } from '../../components/Goal';
import { randomNumber } from '../../util';

interface TemplateProps {
  car: { x: number; y: number };
  gridSize: number;
  blockSize: number;
  onWin: VoidFunction;
  levelNumber: number;
}

export function Template({
  car,
  onWin,
  gridSize,
  blockSize,
  levelNumber,
}: TemplateProps) {
  const goal = useRef({
    x: randomNumber(gridSize),
    y: randomNumber(gridSize),
  });

  // Determine if won
  useEffect(() => {
    if (car.x === goal.current.x && car.y === goal.current.y) onWin();
  }, [car, onWin]);

  return (
    <div>
      <h1>Level {levelNumber}</h1>
      <Field width={gridSize} height={gridSize} blockSize={blockSize}>
        <Car x={car.x} y={car.y} />
        <Goal x={goal.current.x} y={goal.current.y} blockSize={blockSize} />
      </Field>
    </div>
  );
}
