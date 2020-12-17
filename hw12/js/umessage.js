//message to user showing how much time passed since his/her last visit
export function renderMessage(lastVisit, curTime) {
  let timeObj = countDif(lastVisit, curTime);
  for (let el in timeObj) {
    if (timeObj[el] > 0) {
      let ending = timeObj[el] === 1 ? "" : "s";
      return `Your last visit was: ${timeObj[el]} ${el}${ending} ago`;
    }
  }
  return "Hello! It is your first visit";
}

function countDif(lastVisit, curTime) {
  const dif = curTime - lastVisit,
    year = Math.floor(dif / (1000 * 60 * 60 * 24 * 30)),
    month = Math.floor(dif / (1000 * 60 * 60 * 24 * 30)),
    day = Math.floor(dif / (1000 * 60 * 60 * 24)),
    hour = Math.floor((dif / (1000 * 60 * 60)) % 24),
    minute = Math.floor((dif / (1000 * 60)) % 60),
    second = Math.floor((dif / 1000) % 60);

  return { year, month, day, hour, minute, second };
}
