function encryption(s) {
  s = s.replace(/\s/g, "");
  var wordLength = s.length;

  var sqrtResult = Math.floor(Math.sqrt(wordLength));
  var nextSqrtResult = sqrtResult + 1;

  // apply special condition
  if (sqrtResult * nextSqrtResult < wordLength) {
    sqrtResult = nextSqrtResult;
  }

  if (sqrtResult * sqrtResult == wordLength) nextSqrtResult = sqrtResult;

  var grid = s.match(new RegExp(".{1," + nextSqrtResult + "}", "g"));

  var encryptedString = "";
//   console.log(
//     grid,
//     "sqrtResult",
//     sqrtResult,
//     "nextSqrtResult ",
//     nextSqrtResult,
//     "length",
//     wordLength
//   );

  for (let x = 0; x < nextSqrtResult; x++) {
    for (let y = 0; y < sqrtResult; y++) {
      typeof grid[y][x] !== "undefined"
        ? (encryptedString = encryptedString + grid[y][x])
        : "";
    }

    if (x != sqrtResult) encryptedString = encryptedString + " ";
  }

  return encryptedString;
}

// console.log(encryption("haveaniceday")); // expected result => hae and via ecy
// console.log(encryption("feedthedog")); // expected result => fto ehg ee dd
// console.log(encryption("chillout")); // expected result =>  clu hlt io

// epected output for this
// wmgjpnull cyjqlejgi lyhhdzbui wctlsqsbm fxeoxmsvv ovxjeirfm zadysxbhn nxkkbffpn bawobphfy
console.log(
  encryption(
    "wclwfoznbmyycxvaxagjhtexdkwjqhlojykopldsxesbbnezqmixfpujbssrbfhlgubvfhpfliimvmnny"
  )
);

// console.log(
//   encryption(
//     "wclwfoznbmyycxvaxagjhtexdkwjqhlojykopldsxesbbnezqmixfpujbssrbfhlgubvfhpfliimvmnny"
//   )
// );
// expected rsult
// wmgjpnull cyjqlejgi lyhhdzbui wctlsqsbm fxeoxmsvv ovxjeirfm zadysxbhn nxkkbffpn bawobphfy
