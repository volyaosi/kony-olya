// Task 2: Find a Chair
// meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4) ---> [0, 1, 3]
// meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5) ---> [0, 0, 1, 2, 2]
// meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0) ---> 'Game On'

function getChairs(otherRooms, requiredChairs) {
  if (requiredChairs === 0) return "Game On";
  if (requiredChairs > 8) return "Incorrect input, you should request up to 8 chairs";

  let checkNum = requiredChairs;

  const chairs = otherRooms.reduce((output, el) => {
    if (requiredChairs > 0) {
      const spare = el[1] - el[0].length > 0 ? el[1] - el[0].length : 0;

      const takenChairs = requiredChairs < spare ? requiredChairs : spare;

      requiredChairs -= takenChairs;
      output.push(takenChairs);
    }

    return output;
  }, []);

  return chairs.reduce((total, chair) => total += chair) < checkNum ? 'Not enought' : chairs;
}
