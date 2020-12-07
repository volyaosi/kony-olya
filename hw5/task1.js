// Task 1: Meeting (Sort Guess List)
// input = 'Fred:Corwill;Wilfred:Corwill;Fred:Corwill;Wilfred:Corwill';

function sortGuessList(str) {
    
  if (!str || typeof str != "string") {
    return "Please provide a guesslist and I will sort it";
  }

  const listUpperCase = str.split(";").map((el) => el.toUpperCase());

  const listSorted = listUpperCase
    .map((el) => el.split(":").reverse().join(", "))
    .sort();

  let output = "";
  for (el of listSorted) {
    output += `(${el})`;
  }

  return output;
}
