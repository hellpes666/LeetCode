function checkStraightLine(coordinates: number[][]): boolean {
  if (coordinates.length <= 2) return true;

  const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];

  const deltaX: number = x1 - x0;
  const deltaY: number = y1 - y0;

  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];

    if ((y - y0) * deltaX !== (x - x0) * deltaY) {
      return false;
    }
  }

  return true;
}
