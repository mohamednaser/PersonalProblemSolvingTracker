function cavityMap(grid) {
  var depthestPoint = 0;
  var NewGrid = new Array();

  // create temp array
  for (var row = 0; row < grid.length; row++) {
    NewGrid.push("");
  }

  // get the depthestPoint point
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      var element = grid[x][y];

      // escape edges
      if (grid[x][y + 1] < element) {
        if (
          x == 0 ||
          y == 0 ||
          y == grid[x].length - 1 ||
          x == grid[x].length - 1
        )
          continue;
      }

      if (element > depthestPoint) {
        // check neigbouers
        if (
          grid[x][y] > grid[x][y + 1] &&
          grid[x][y] > grid[x][y - 1] &&
          grid[x][y] > grid[x + 1][y] &&
          grid[x][y] > grid[x - 1][y]
        )
          depthestPoint = element;
      }
    }
  }

  // change the depthestPoint with X
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      var element = grid[x][y];

      if (depthestPoint == 0) NewGrid[x] = NewGrid[x] + element;
      else {
        if (element == depthestPoint) NewGrid[x] = NewGrid[x] + "X";
        else NewGrid[x] = NewGrid[x] + element;
      }
    }
  }
  return NewGrid;
}

console.log(
  cavityMap(
    "7252931762992564114799667333186696451635689741575495455771175463552324516966676389939676451657782958"
  )
);
