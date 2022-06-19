import { Level1 } from '../Level/Level1';
import { Level2 } from '../Level/Level2';
import { Level3 } from '../Level/Level3';
import { Level4 } from '../Level/Level4';
import { Level5 } from '../Level/Level5';
import { Level6 } from '../Level/Level6';
import { Level7 } from '../Level/Level7';
import { Level8 } from '../Level/Level8';
import { Level9 } from '../Level/Level9';
import { Level10 } from '../Level/Level10';

interface SelectProps {
  level: number;
  onWin: VoidFunction;
  onInjury: (moveHazard: Function) => void;
}

export function Select({ level, onWin, onInjury }: SelectProps) {
  return (
    <>
      {(level === 1 && <Level1 onWin={onWin} />) ||
        (level === 2 && <Level2 onWin={onWin} onInjury={onInjury} />) ||
        (level === 3 && <Level3 onWin={onWin} onInjury={onInjury} />) ||
        (level === 4 && <Level4 onWin={onWin} />) ||
        (level === 5 && <Level5 onWin={onWin} />) ||
        (level === 6 && <Level6 onWin={onWin} />) ||
        (level === 7 && <Level7 onWin={onWin} />) ||
        (level === 8 && <Level8 onWin={onWin} />) ||
        (level === 9 && <Level9 onWin={onWin} />) ||
        (level === 10 && <Level10 onWin={onWin} />)}
    </>
  );
}
