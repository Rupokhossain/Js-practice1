// problem - 01

/* function isLeapYear(year) {
    if(year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

const Lipi1 = isLeapYear(2043);
const Lipi2 = isLeapYear(2052);
console.log(Lipi1);
console.log(Lipi2); */


//problem - 02

/* function isLeapYear(year) {
    if(year % 400 === 0) {
        return true;
    }

    else if(year % 100 === 0) {
        return false;
    }
    else if(year % 4 === 0) {
        return true;
    } 
    else {
        return false;
    }
}
const leap1 = isLeapYear(2100);
const leap2 = isLeapYear(2400);
const leap3 = isLeapYear(1900);
const leap4 = isLeapYear(2052);
console.log(leap1, leap2, leap3, leap4); */


//problem - 03
/* function taxBracket(income) {
    if(income <= 50000) {
        return 10;
    } else if (income <= 100000) {
        return 20;
    } else if(income <= 200000) {
        return 30;
    } else {
        return 40;
    }
}
const result = taxBracket(150000);
console.log(result); */


//problem - 04

/* function deliveryCost(kg) {
    let cost;
    if(kg <= 10) {
        cost = 100;
    } else if(kg <= 20) {
        cost = 300;
    } else if (kg <= 50) {
        cost = 1000;
    } else {
        cost = kg * 100;
    }
    return cost;
}

const result = deliveryCost(100);
console.log(result); */


//problem - 05

// function Input(marks) {
//     let grade;

//     if(marks >= 80) {
//         grade = "A"
//     } else if(marks >= 70) {
//         grade = "B"
//     } else if(marks >= 60) {
//         grade = "C"
//     } else if(marks >= 50) {
//         grade = "D"
//     } else {
//         grade = "F"
//     }
//     return grade;
// }
// console.log(Input(85));
// console.log(Input(75));
// console.log(Input(65));
// console.log(Input(55));
// console.log(Input(45));


// problem - 06
function leapYear(years) {

    let count = 0;
    for(let year of years) {
        if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            count++;
        }
    }
    return count;

}
const result = leapYear([2000, 2005, 2009, 2011, 2015, 2019, 2021, 2024, 2028]);

console.log(result);