// Task 2:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

function putInOrder(str) {
  return str
    .split(" ")
    .sort((a, b) => a.match(/\d/)[0] - b.match(/\d/)[0])
    .join();
}
