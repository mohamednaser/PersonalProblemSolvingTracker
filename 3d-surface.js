function surfaceArea(A) {
  var tvolume = 0;
  for (var i = 0; i < A.Length; i++) {
    for (var j = 0; j < A[0].Length; j++) {
      tvolume += A[i][j] * 4 + 2;
      if (j >= 1) tvolume -= Math.min(A[i][j - 1], A[i][j]) * 2;
      if (i >= 1) tvolume -= Math.min(A[i - 1][j], A[i][j]) * 2;
    }
  }
  return tvolume;
}

console.log(surfaceArea([1]));
