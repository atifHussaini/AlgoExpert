function tournamentWinner(competitions, results) {
    const resultMap = new Map();
    let winner = '';
  
    for (let i = 0; i < competitions.length; i++) {
      if (results[i] === 1) {
        if (resultMap.has(competitions[i][0])) {
          resultMap.set(competitions[i][0], resultMap.get(competitions[i][0]) + 3);
        } else {
          resultMap.set(competitions[i][0], 3)
        }
      } else {
        if (resultMap.has(competitions[i][1])) {
          resultMap.set(competitions[i][1], resultMap.get(competitions[i][1]) + 3);
        } else {
          resultMap.set(competitions[i][1], 3)
        }
      }
    }
  
    let max = -Infinity;
    for (let teamTotal of resultMap) {
      if (teamTotal[1] > max) {
        max = teamTotal[1];
        winner = teamTotal[0];
      }
    }
  
    return winner;
  }

  console.log(tournamentWinner({
    "competitions": [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"]
    ],
    "results": [0, 0, 1]
  }));