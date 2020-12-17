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
c
// Mission: Hidden Message
function foundationMessage(str) {
    const acceptSymb = /[A-Za-z\'\']+/g;
    const separator = /[?!.]/;
    const arr = str.split(separator).map( el => el.match(acceptSymb));

    let i = 0;
    let res = '';

    while (i < arr.length - 1){
        res += arr[i].reduce((acc, b, num, sent) => {
            let word = arr[num + i + 1][b.match(/\w/g).length - 1].toLowerCase();
            if (num === 0) word = word.charAt(0).toUpperCase() + word.slice(1);

            let symb = num === sent.length - 1 ? '. ' : ' ';
            acc += word + symb;
            return acc;
          }, '' );

        i += arr[i].length + 1;
    }
    return res.trim();   
}

//chronos
function damagedOrSunk (board, attacks){
  const res = { sunk: 0, damaged: 0 , notTouched: 0, points: 0 };
  let nums = new Set(board.reduce((acc, arr) => [...acc, ...arr]));
  const boats = {};
 
  for (let num of nums) {
    if (num) boats[num] = { coords: [], hits:0 }
  }
  
  board.forEach((arr, i) => arr.forEach((el, j) => {
    if (el) boats[el].coords.push([j + 1, board.length - i]);
  }))
  
  attacks.forEach(attack => {
    for(let i in boats){
      let hit = boats[i].coords.some(el => el[0] === attack[0] && el[1] === attack[1])
      if (hit) boats[i].hits++
    }
  });
  
  for(let i in boats) {
    if (boats[i].hits === 0) {
      res.points--;
      res.notTouched++;
    } else if (boats[i].hits < boats[i].coords.length){
      res.points += 0.5;
      res.damaged++;
    } else {
      res.points++;
      res.sunk++;
    }
  }
  return res;
}

chronos(1001, 8, 24)