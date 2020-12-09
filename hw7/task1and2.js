// Tic-Tac-Toe Checker
function isSolved(board) {
  let arr = [
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
    ...board,
  ];
  let res = { x: 0, y: 0, zero: 0 };

  arr.forEach((el) => {
    res.x += +el.every((i) => i === 1);
    res.y += +el.every((i) => i === 2);
    res.zero += +el.some((i) => i === 0);
  });
  return res.x > res.y ? 1 : res.x < res.y ? 2 : res.zero > 0 ? -1 : 0;
}

// Mission: Hidden Message
function foundationMessage(str) {
    const acceptSymb = /[A-Za-z\'\']+/g;
    const separator = /[?!.]/;
    const arr = str.split(separator).map( el => el.match(acceptSymb));

    let i = 0;
    let res = '';

    while (i < arr.length - 1){
        res += arr[i].reduce((a, b, num, sent) => {
            let word = arr[num + i + 1][b.match(/\w/g).length - 1].toLowerCase();
            if (num === 0) word =  word.charAt(0).toUpperCase() + word.slice(1);

            let symb = num === sent.length - 1 ? '. ' : ' ';
            a += word + symb;
                return a;
  
          }, '' );
        i += arr[i].length + 1;
    }
    return res.trim();   
}