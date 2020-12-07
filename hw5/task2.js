// Task 2: Find a Chair
// meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4) ---> [0, 1, 3]
// meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5) ---> [0, 0, 1, 2, 2]
// meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0) ---> 'Game On'

function getChairs(otherRooms, requiredChairs) {
  if (requiredChairs === 0) return "Game On";

  return otherRooms.reduce((output, el) => {
    if (requiredChairs > 0) {
      const spare = el[1] - el[0].length > 0 ? el[1] - el[0].length : 0;

      const takenChairs = requiredChairs < spare ? requiredChairs : spare;

      requiredChairs -= takenChairs;
      output.push(takenChairs);
    }

    return output;
  }, []);
}
