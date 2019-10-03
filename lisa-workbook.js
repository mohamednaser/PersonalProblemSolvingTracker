function workbook(n, k, arr) {
  var numberOfSpecialProblems = 0;
  var currentPage = 1;

  arr.forEach(maxNumberOfProblemsInCahpter => {
    var curentChapterProblemsCounter = 0;
    for (let i = 1; i <= maxNumberOfProblemsInCahpter; i++) {
      curentChapterProblemsCounter++;

      if (i == currentPage) numberOfSpecialProblems++;

      if (
        curentChapterProblemsCounter == k ||
        i == maxNumberOfProblemsInCahpter
      ) {
        currentPage++;
        curentChapterProblemsCounter = 0;
      }
    }
  });

  return numberOfSpecialProblems;
}

console.log(workbook(5, 3, [4, 2, 6, 1, 10])); // expected result 4
//console.log(workbook(10, 5, [3, 8, 15, 11, 14, 1, 9, 2, 24, 31])); // expected result 8
