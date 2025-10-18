// function add() {
//     console.log("Kisu akta add hobe");
// }
// add()

// function solved() {
//     console.log("solved any problem");
// }
// solved()


// odd or even checker

// function oddEven(num) {
//   if (num > 50) {
//     console.log("True Hobe");
//   } else {
//     console.log("False Hobe");
//   }
// }
// oddEven(60);

// function result() {
//   for (let i = 1; i <= 50; i++) {
//     if (i % 7 == 0) {
//       console.log(i);
//     }
//   }
// }
// result();



// function juice() {
//     console.log("Lemon Juice");
// }
// juice();


// function doubleIt(number) {
//     const doubled = number * 2;
//     console.log(doubled);
// }
// doubleIt(15);
// doubleIt(88);
// doubleIt(873);



// function square(number) {
//     const borgo = number * number;
//     console.log("square of", number, "is", borgo);
// }
// square(4);
// square(12);


// function add(num1, num2) {
//     const sum = num1 + num2;
//     console.log(sum);
// }
// add(5, 71);


// function addAll(a, b, c, d, e) {
//     const total = a + b + c + d + e;
//     console.log(total);
// }
// addAll(3, 4, 6, 7, 1);



// function difference(num1, num2) {
//     const diff = num1 - num2;
//     console.log(num1, num2, "difference is", diff);
// }

// const fatherAge = 40;
// const myAge = 10;

// difference(fatherAge, myAge);




// function addNumbers(a, b) {
//     return a + b;
// }
// const result = addNumbers(5, 8, 9, 6);
// console.log(result);


// function addNumbers(a, b) {
//     console.log(arguments);
//     return a + b;
// }
// const result = addNumbers(5, 8, 9, 6);
// console.log(result);




// ====problem solving=====

// function totalNumber(num1, num2) {
//     const addNumber = num1 + num2
//     console.log(num1, num2, "Total age is", addNumber);
// }

// const fatherAge = 50;
// const myAge = 25;

// totalNumber(fatherAge, myAge);


// function totalNumber(num1, num2) {
//     return num1 + num2;
// }
// const total = totalNumber(50, 25);
// console.log("Total age is", total);



// function multiplyNumber(num1,num2) {
//     return num1 * num2;
// }
// const result = multiplyNumber(20, 15);
// console.log("Total number is ", result);




// function subjectMarks(Math, English, Bio) {
//     return Math + English + Bio;
// }

// const result = subjectMarks(30, 40, 60);
// console.log("Total marks is: ", result);



// function tenTimes(number) {
//     const result = number * 10;
//     return result;
// }
// const output = tenTimes(5);
// console.log(output);


// const potato = 35;
// const onion = 62;
// const shirt = 500;
// const pant = 1250;

// function add(price1 , price2) {
//     return price1 + price2;
// }

// const bill1 = add(potato, onion);
// const bill2 = add(shirt, pant);
// const final = add(bill1, bill2);

// console.log(final);



// function isEven(num) {
//     if(num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isEven(5));
// console.log(isEven(110));


// function number(num) {
//     if(num > 10) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(number(15));



// function evenSizedString(str) {
//     const size = str.length;

//     if(size % 2 === 0) {
//         console.log("Even Size");
//     } else {
//         console.log("Odd Size");
//     }
// }
// evenSizedString("Dhaka");



// function doubleOrTriple(num, doDouble) {
//     if(doDouble === true) {
//         const result = num * 2;
//         return result;
//     } else {
//         const result = num * 3;
//         return result;
//     }
// }
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));




// function numberOfElement(num) {
//     const len = num.length;
//     return len;
// }
// const len = numberOfElement([12, 45, 78, 45, 123432, 4, 5]);
// console.log(len);


// function checkEvenOdd(numbersArray) {
//     for(const number of numbersArray) {
//         if(number % 2 === 0) {
//             console.log(`${number} Is Even Number`);
//         } else {
//             console.log(`${number} Is Odd Number`);
//         }
//     }
// } 

// const myNumbers = [12, 21, 40, 55, 60];
// checkEvenOdd(myNumbers);



// function sumOfNumbers(numbers) {
//     // console.log(numbers);

//     for(const number of numbers) {
//         console.log(number);
//     }
// }
// const result = sumOfNumbers([12, 45, 6, 8, 14]);
// console.log(result);


// function sumOfNumbers(numbers) {
//     let sum = 0;
//     for(const number of numbers) {
//         sum = sum + number;
//         // console.log(sum);
//     }
//     return sum;
// }
// const num = [54, 62, 12, 6];
// const sum = sumOfNumbers(num);
// console.log("Sum of Numbers is", sum);


// function evenNumberSum(numbers) {
//     let sum = 0;
//     for(const number of numbers) {
//         if(number % 2 === 0) {
//             sum = sum + number;
//         }
//     }
//     return sum;
// }

// const num = [54, 13, 1, 6];
// const total = evenNumberSum(num);
// console.log("Sum of even numbers is ", total);


// function oddNumberSum(numbers) {
//     let sum = 0;

//     for(const number of numbers) {
//         if(number % 2 == 1) {
//             sum = sum + number;
//         }
//     }
//     return sum;
// }

// const num = [54, 13, 1, 6];
// const total = oddNumberSum(num);
// console.log("Sum Of Odd Numbers: ", total);


function findSmallerOfFirstTwo(arr) {
    if(arr.length < 2) {
        return "Need Two Numbers";
    }

    const num1 = arr[0];
    const num2 = arr[1];

    if(num1 < num2) {
        return num1;
    } else {
        return num2;
    }

}

const number1 = [15, 8, 25, 4];
const smallerNumber = findSmallerOfFirstTwo(number1);
console.log(smallerNumber);