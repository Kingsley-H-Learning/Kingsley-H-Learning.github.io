const gameMap = [
  ['undefined', 'undefined', 'undefined'],
  ['undefined', 'undefined', 'undefined'],
  ['undefined', 'undefined', 'undefined'],
];

function init() {
  gameMap.forEach((row, rindex) => {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    document.getElementById('gameMap').appendChild(newRow);
    row.forEach((cell, cindex) => {
      const newDiv = document.createElement('div');
      newDiv.classList.add('col');
      newDiv.style.cssText = 'height:80px';
      newDiv.setAttribute('id', `${rindex},${cindex}`);
      newDiv.innerHTML = cindex;
      newDiv.onclick = function (e) {
        divOnClick(e.target);
        // console.log(e.target);
        // e.target.innerHTML = 'whater';
      };
      newRow.appendChild(newDiv);
    });
  });
}

function divOnClick(target) {
  const arr1d = [].concat(...gameMap);
  const undefinedList = arr1d.filter((e) => e === 'undefined');
  let text = 'x';
  if (undefinedList.length % 2) {
    text = 'o';
  }

  const indexs = target.id.split(',');
  if (gameMap[indexs[0]][indexs[1]] === 'undefined') {
    gameMap[indexs[0]][indexs[1]] = text;
    target.innerHTML = text;
    checkGame();
  }
}

const winningRules = [
  //row
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  //column
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],

  //corss
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [0, 0],
  ],
];

// const game1 = [
//   ['x', 'o', 'x'],
//   ['x', 'o', 'x'],
//   ['o', 'o', 'o'],
// ];

function checkGame() {
  const resultInRows = winningRules.map((ruleInRow) => {
    resultsInposition = ruleInRow.map((rule) => {
      const [x, y] = rule;
      return gameMap[x][y];
    });
    const resultSet = new Set(resultsInposition);
    // if (resultSet.size == 1 && resultSet[0] == 'undefined') return new Set();
    return resultSet;
  });

  const winningRow = resultInRows.filter((set) => {
    // console.log(Array.from(set)[0]);
    return set.size == 1 && Array.from(set)[0] != 'undefined';
  });

  if (winningRow.length == 1) {
    alert(`Winner is ${Array.from(winningRow[0])[0]}`);
  }
}

init();
