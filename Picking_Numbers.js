function pickingNumbers(a) {

    var hashMap = new Map();

    a.forEach(element => {
        if (hashMap.get(element) == undefined) {
            hashMap.set(element, 1);

        } else {
            let nextVAlue = hashMap.get(element) + 1 ;
            // console.log('debug ' , nextVAlue , hashMap , hashMap.get(element));
            hashMap.set(element, nextVAlue);
        }
    });

    return hashMap;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1])); // result should be 3
console.log(pickingNumbers([1, 2, 2, 3, 1, 2])); // result should be 5
