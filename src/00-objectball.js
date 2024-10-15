// Test 1
function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

console.log(gameObject());


// Test 2 : building functions

// Accesses players in both teams
function allPlayers() {
  const game = gameObject();
  return { ...game.home.players, ...game.away.players };
}

// Function 1: numPointsScored
function numPointsScored(playerName) {
  const players = allPlayers();
  return players[playerName] ? players[playerName].points : null;
}

console.log(numPointsScored("Ben Gordon"));
console.log(numPointsScored("Alan Anderson"));

// Function 2: shoeSize
function shoeSize(playerName) {
  const players = allPlayers();
  return players[playerName] ? players[playerName].shoe : null;
}

console.log(shoeSize("Ben Gordon"));
console.log(shoeSize("Mason Plumlee"));

// Function 3: teamColors
function teamColors(teamName) {
  const game = gameObject();
  if (game.home.teamName === teamName) {
    return game.home.colors;
  } else if (game.away.teamName === teamName) {
    return game.away.colors;
  } else {
    return null;
  }
}

console.log(teamColors("Brooklyn Nets"));
console.log(teamColors("Charlotte Hornets"));

// Function 4: teamNames
function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

console.log(teamNames());

// Function 5: playerNumbers
function playerNumbers(teamName) {
  const game = gameObject();
  let teamPlayers;
  if (game.home.teamName === teamName) {
    teamPlayers = game.home.players;
  } else if (game.away.teamName === teamName) {
    teamPlayers = game.away.players;
  } else {
    return null;
  }

  return Object.values(teamPlayers).map((player) => player.number);
}

console.log(playerNumbers("Brooklyn Nets"));
console.log(playerNumbers("Charlotte Hornets"));

// Function 6: playerStats
function playerStats(playerName) {
  const players = allPlayers();
  return players[playerName] ? players[playerName] : null;
}

console.log(playerStats("Mason Plumlee"));

// bigsShoeRebounds Test
function bigShoeRebounds() {
  const game = gameObject();
  let largestShoeSize = 0;
  let rebounds = 0;

  for (let team of [game.home, game.away]) {
    for (let player in team.players) {
      const shoeSize = team.players[player].shoe;
      if (shoeSize > largestShoeSize) {
        largestShoeSize = shoeSize;
        rebounds = team.players[player].rebounds;
      }
    }
  }
  return rebounds;
}

console.log(bigShoeRebounds());
