function hurdleRace(k, height) {

    var heiestLevel = 0;

    height.forEach(element => {
        if (element > heiestLevel)
            heiestLevel = element;
    });

    return (heiestLevel > k)? heiestLevel - k : 0 ;
    
}

console.log('high level is ', hurdleRace(4, [1, 6, 3, 5, 2]));