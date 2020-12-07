// Task 3: find two points with the smallest distance between them.
// let dots = [[2,2],[2,8],[5,5],[6,3],[6,7],[7,4],[7,9]];

function findMinDistance(dots) {
  const result = {
    minDist: null,
    coords: [],
  };

  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {

      const dist = Math.sqrt(
        Math.pow(dots[i][0] - dots[j][0], 2) +
        Math.pow(dots[i][1] - dots[j][1], 2)
      );

      if (!result.minDist || dist < result.minDist) {
        result.minDist = dist;
        result.coords[0] = dots[i];
        result.coords[1] = dots[j];
      }
    }
  }

  return result.coords;
}
