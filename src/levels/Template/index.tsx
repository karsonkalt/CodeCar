import { useRef, useState } from 'react';
import {randomNumber} from '../../util';

interface TemplateProps {
  gridSize: number;
  onWin: VoidFunction;
}

export function Template({ gridSize, onWin }: TemplateProps) {
  const goal = useRef({
    x: randomNumber(gridSize),
    y: randomNumber(gridSize),
  });

  const [car, setCar] = useState({
    x: 1,
    y: 1,
  });

  return <div>index</div>;
}
