//             (first cost , discount , minumim cost , totalIIhave)
function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  if (p > s) return 0;

  var numberOfGames = 0;
  while (p <= s && p >= m) {
    numberOfGames++;
    s = s - p;

    if (p - d >= m) p = p - d;
    else p = m;
  }

  return numberOfGames;
}

console.log(howManyGames(20, 3, 6, 80));
console.log(howManyGames(20, 3, 6, 85)); // expected result
