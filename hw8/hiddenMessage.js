// Mission: Hidden Message
function foundationMessage(str) {
  const arr = convertToArr(str);
  let res = "";

  for (let i = 0; i < arr.length - 1; i += arr[i].length + 1) {
    res += arr[i].reduce((acc, b, num, sent) => {
      let sentNum = num + i + 1;
      let wordNum = b.match(/\w/g).length - 1;

      let word = arr[sentNum][wordNum].toLowerCase();
      if (num === 0) word = word.charAt(0).toUpperCase() + word.slice(1); //capitilize first word

      let endSymbol = num === sent.length - 1 ? ". " : " ";

      acc += word + endSymbol;
      return acc;
    }, "");
  }
  return res.trim();
}

function convertToArr(str) {
  const acceptSymb = /[A-Za-z\'\']+/g;
  const separator = /[?!.]/;
  return str.split(separator).map((el) => el.match(acceptSymb));
}