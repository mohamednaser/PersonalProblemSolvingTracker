


function getMoneySpent(keyboards, drives, b) {

    var cost = -1;

    if(Math.min(keyboards) + Math.min(drives) >= b)
        return cost;

    keyboards.forEach(keyboard => {
        drives.forEach(driver => {
            let testcost = keyboard + driver;
            if (testcost < b && testcost > cost)
                cost = testcost;
        }

        )
    });

    return cost;
}


console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
