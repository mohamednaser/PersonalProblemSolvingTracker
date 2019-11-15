function pageCount(n, p) {
    
    return Math.min(
     Math.floor(p / 2),
     n % 2 ?
         Math.floor((n - p) / 2) :
         Math.ceil((n - p) / 2)
 );

}


console.log(pageCount(6,2)); // expected result 1
console.log(pageCount(5,4)); // expected result 0
