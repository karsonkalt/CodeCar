export function randomNumber(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

interface Location {
  x: number;
  y: number;
}

export function moveLeft(previousLocation: Location): Location {
  return { ...previousLocation, x: Math.max(1, previousLocation.x - 1) };
}

export function moveUp(previousLocation: Location): Location {
  return { ...previousLocation, y: Math.max(1, previousLocation.y - 1) };
}

export function moveRight(
  previousLocation: Location,
  gridSize: number
): Location {
  return {
    ...previousLocation,
    x: Math.min(previousLocation.x + 1, gridSize),
  };
}

export function moveDown(
  previousLocation: Location,
  gridSize: number
): Location {
  return {
    ...previousLocation,
    y: Math.min(previousLocation.y + 1, gridSize),
  };
}
