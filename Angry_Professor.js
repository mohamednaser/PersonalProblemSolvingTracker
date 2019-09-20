function angryProfessor(k, a) {

    var numberOfAttendances = 0 ;

    a.forEach(element => {
        if(element <= 0)
            numberOfAttendances++;
    });

    return (numberOfAttendances >= k)?'NO':'YES';
}

// console.log(angryProfessor(3 , [-1 , -3 , 4 , 2] ));
console.log(angryProfessor(2 , [0 , -1 , 2 , 1] ));
