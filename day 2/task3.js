// Football Task:
// The task: Given a list of cards (could be empty), return the number of remaining players on each team at the end of the game (as a tuple of 2 integers, team "A" first). If the game was terminated by the referee for insufficient number of players, you are to stop the game immediately, and ignore any further possible cards.

function menStillStanding(cards) {
  const mapTeams = {A: {}, B: {}};

  //Fill the Team object (team A and team B) with 11 players, 
  //where the Key is a player number and the value is player's "fairplay" index.
  //Max fairplay index is 2.
  for (let i = 1; i <= 11; i++) {
    mapTeams['A'][i] = 2;
    mapTeams['B'][i] = 2;
  }

  //"Fairplay" index reduces on 1 for each yellow card, and on 2 for Red card
  //If Player's "fairplay" index is equal to 0, player is deleted from field (removing player record from his Team object)
  for (let card of cards) {
    const [team, num, color] = [card[0], card.slice(1,-1), card.slice(-1)];
    
    if (color === "Y" && mapTeams[team][num]) {
      mapTeams[team][num]--;
      if (mapTeams[team][num] === 0) delete mapTeams[team][num];
    }

    if (color === "R" && mapTeams[team][num]) delete mapTeams[team][num];

    //There should be at least 7 players in each team in order to continue game, 
    //otherwise game is over == we can skip remaining card records and provide user with the output
    if (Object.keys(mapTeams[team]).length < 7) break;
  }

    return [Object.keys(mapTeams['A']).length, Object.keys(mapTeams['B']).length];
  }