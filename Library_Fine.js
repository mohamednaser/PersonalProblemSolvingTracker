function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 > y2) return 10000;
  if (m1 < m2) return 0;
  if (y1 < y2) return 0;


  // return in the same month
  if (m1 == m2) {
    if (d1 > d2) {
      return (d1 - d2) * 15;
    } else return 0;
  } else {
    return (m1 - m2) * 500;
  }

  return 0;
}

// console.log(libraryFine(actual return date , should return at ));

// console.log(libraryFine(9 , 6 , 2015 , 6 , 6 ,2015)); // expected result 45
// console.log(libraryFine(28, 2, 2015, 15, 4, 2015)); // expected result 0
console.log(libraryFine(15, 7, 2014, 1, 7, 2015)); // expected result 0
