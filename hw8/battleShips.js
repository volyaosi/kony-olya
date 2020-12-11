function damagedOrSunk (board, attacks){
  const res = { sunk: 0, damaged: 0 , notTouched: 0, points: 0 },
        boats = countBoats(board),
        boatsHp = countBoats(board);
  
  attacks.forEach(attack => {
    let i = board.length - attack[1];
    let j = attack[0] - 1;
    let hit = board[i][j];
    if(hit && boatsHp[hit]) boatsHp[hit] -= 1;
  });

  for (let i in boatsHp) {
    if (!boatsHp[i]) res.sunk++;
    if (boatsHp[i] === boats[i]) res.notTouched++;
    if (boatsHp[i] > 0 && boatsHp[i] < boats[i]) res.damaged++;   
  }
  res.points = res.sunk + res.damaged * 0.5 - res.notTouched;
  return res;
}

function countBoats (arr) {
  let obj = {};
  arr.forEach(row => row.forEach( el => {
    if (el) {
      obj[el] = obj[el] ? obj[el] + 1 : 1;
    }
  }));
  return obj;
}